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
#### add vendor
> `POST /vendors`
#### update vendor
> `PATCH /vendors/:vendorId`
#### add product
> `POST /products`
#### update product
> `PATCH /products/:productId`
#### delete product
> `DELETE /products/:productId`
#### add vendor:
> `POST /vendors`
#### update vendor:
> `PATCH /vendors/:vendorId`
#### delete vendor:
> `DELETE /vendors/:vendorId`
#### get products for vendor:
> `GET /products?active=1&vendorId=:vendorId`

# user:
#### get available products for current order/retro:
> `GET /products?active=1&vendorId=:vendorId`
#### make a choice:
> `PUT /orders/:orderid/choices`
#### rate meal afterwards
> `PATCH /orders/:orderId/ratings`