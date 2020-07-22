require('dotenv').config();

const pg = require("pg");

const isProduction = process.env.NODE_ENV === 'production';


//const connectionString = `postgres:${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
 //connectionString: isProduction ? process.env.DATABASE_URL : connectionString
 
const databaseConfig = { connectionString: "postgres:user:user@localhost:5432/nodelogin" };

const pool = new pg.Pool(databaseConfig);
   
module.exports = { pool};