# coin-prices

Get coin prices from CoinSpot. THIS IS A TEMP REPOSITORY. WILL BE DELETED IN FUTURE.

## Preparing Your MySQL Instance

1. Install a MySQL instance according to <https://dev.mysql.com/doc/refman/8.0/en/installing.html> on your local machine

2. Create a MySQL user, database and grant required permissions:

```sql
CREATE USER trader@localhost IDENTIFIED WITH mysql_native_password BY 'TRADER_PASSWORD';
CREATE DATABASE trader CHARACTER SET = utf8;
GRANT ALL ON trader.* TO trader@localhost;

CREATE TABLE `price` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `coin` varchar(8) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `bid`  double NOT NULL,
  `ask`  double NOT NULL,
  `last` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_timestamp` (`timestamp`),
  KEY `index_coin` (`coin`)
);
```

## Installing Node.js

Install Node.js according to <https://nodejs.org/en/download>

## Installing Coin-Price application

`git clone https://github.com/kyle-chine-leismore/coin-prices.git`

Modify the configuration file `config.json` according to your environment.

## Starting your application

`node index.js`

