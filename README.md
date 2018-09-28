Example how to set up DB on localhost:
```
make run-database
psql -U postgres -h localhost
CREATE DATABASE forfeaterjs;
CREATE USER forfeater WITH PASSWORD 'secret';
GRANT ALL PRIVILEGES ON DATABASE forfeaterjs TO forfeater;
```

# forfeater flow:

# ALL:
#### get access token
> `POST /auth/login`
```
Content-Type: application/x-www-form-urlencoded

grant_type: password
client_id: forfeaterWeb
client_secret: forfeaterSecret
username: test@rst-it.com
password: secret
```
#### get user details by token (examplary route with authentitacion)
> `/auth/user`
```
Content-Type: application/x-www-form-urlencoded
Authorization = Bearer
```

API is available at `/doc/index.html`, unless
```
make api-doc
```