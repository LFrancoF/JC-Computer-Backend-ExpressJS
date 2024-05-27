import pg from 'pg';
const {Pool} = pg;

export const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'dbprueba'
});