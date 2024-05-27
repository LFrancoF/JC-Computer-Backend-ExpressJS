import pg from 'pg';
const {Pool} = pg;

export const pool = new Pool({
  user: 'postgres',
  password: 'postgresgf',
  host: 'localhost',
  port: 5432, 
  database: 'dbprueba'
});