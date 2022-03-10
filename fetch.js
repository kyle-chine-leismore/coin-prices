const axios  = require('axios').default;
const config = require('./config.json');
const mysql  = require('promise-mysql');
const SQL = 'INSERT price VALUES(null, ?, CURRENT_TIMESTAMP, ?, ?, ?);';



module.exports = () => {

    axios.get(config.api)
    .then( resp => {
        console.log(resp.data);
        return resp;
    })
    .then(resp => {
        mysql.createConnection({
            user: config.mysql.user,
            password: config.mysql.password,
            host: config.mysql.host,
            database: config.mysql.database
        }).then(db=>{
            config.coinList.forEach(code => {
                db.query(SQL,[code, resp.data.prices[code].bid, resp.data.prices[code].ask, resp.data.prices[code].last]);
            })
        });
    })
    .catch(e=>{
        process.exitCode = 5;
    });

};
