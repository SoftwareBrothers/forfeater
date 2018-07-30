Example how to set up DB on localhost:
```
make run-database
psql -U postgres -h localhost
CREATE DATABASE forfeaterjs;
CREATE USER forfeater WITH PASSWORD 'secret';
GRANT ALL PRIVILEGES ON DATABASE forfeaterjs TO forfeater;
```

# forferater flow:

# admin:
#### get vendors:
> `GET /vendors`
#### get products for vendor:
> `GET /products?active=1&vendorId=2`

# user:
#### get available products for current order/retro:
> `GET /products?active=1&vendorId=:vendorId`
#### make a choice:
> `PUT /orders/:orderid/choices`
#### rate meal afterwards
> `PATCH /orders/:orderId/ratings`