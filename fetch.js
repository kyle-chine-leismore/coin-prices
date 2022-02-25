const fs     = require('fs');
const axios  = require('axios').default;
const config = require('./config.json');

module.exports = () => {

    axios.get(config.api)
    .then( resp => {
        console.log(resp.data);
        config.coinList.forEach(code => {
            let fileName = __dirname + '/price_' + code + '.csv';
            let now = new Date();
            let text = (
                String(now) + ',' +
                String(resp.data.prices[code].bid) + ',' +
                String(resp.data.prices[code].ask) + ',' +
                String(resp.data.prices[code].last) + '\n'
            );
            fs.appendFileSync(fileName, text);
        })
    })
    .catch(e=>{
        process.exitCode = 5;
    });

};
