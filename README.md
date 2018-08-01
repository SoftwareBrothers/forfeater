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
> `POST /vendors/:vendorId/products`
#### update product
> `PATCH /vendors/:vendorId/products/:productId`
#### delete product
> `DELETE /vendors/:vendorId/products/:productId`
#### add vendor:
> `POST /vendors`
#### update vendor:
> `PATCH /vendors/:vendorId`
#### delete vendor:
> `DELETE /vendors/:vendorId`
#### get products for vendor:
> `GET /vendors/:vendorId/products?active=1`

# user:
#### get active order(s?):
> `GET /orders?active=1`
#### get available products for current order/retro/vendor:
> `GET /vendors/:vendorId/products?active=1`
#### get product details:
> `GET /vendors/:vendorId/products/:productId`
#### make a choice:
> `PUT /orders/:orderid/choices`
#### rate meal afterwards
> `PATCH /orders/:orderId/ratings`