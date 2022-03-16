# coin-prices
Get coin prices from CoinSpot. THIS IS A TEMP REPOSITORY. WILL BE DELETED IN FUTURE.

```sql
CREATE TABLE `price` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `coin` varchar(8) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `bid` double NOT NULL,
  `ask` double NOT NULL,
  `last` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_timestamp` (`timestamp`),
  KEY `index_coin` (`coin`)
) ENGINE=InnoDB AUTO_INCREMENT=225 DEFAULT CHARSET=utf8mb3;
```
