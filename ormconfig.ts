require('dotenv').config();

export = {  "type": "postgres",
"host": "localhost",
"port": +process.env.PORT,
"username": process.env.DB_USER,
"password": process.env.PASSWORD,
"database": process.env.DATABASE,
"entities": ["entity/*.js"],
"migrationsTableName": "migrations",
"migrations": ["./migrations/*.ts"],
"cli": {
    "migrationsDir": "./migrations"}
};
