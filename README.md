Example how to set up DB on localhost:
```
make run-database
psql -U postgres -h localhost
CREATE DATABASE forfeaterjs;
CREATE USER forfeater WITH PASSWORD 'secret';
GRANT ALL PRIVILEGES ON DATABASE forfeaterjs TO forfeater;
```
