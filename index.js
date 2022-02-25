const fetch  = require('./fetch');
const config = require('./config.json');

setInterval(fetch, config.interval);
