import express from 'express';
import morgan from 'morgan';
import { pool } from './db.js';

const app = express();
app.use(morgan('dev'));

pool.connect((err) => {
    if (err) {
        console.log('Error de conexion: ', err);
    }else{
        console.log('Conexion exitosa');
    }
});


export default app;