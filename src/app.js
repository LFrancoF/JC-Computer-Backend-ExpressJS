import express from 'express';
import morgan from 'morgan';
import { pool } from './db.js';
import router from './routes/auth.routes.js';

const app = express();
app.use(morgan('dev'));

pool.connect((err) => {
    if (err) {
        console.log('Error de conexion: ', err);
    }else{
        console.log('Conexion exitosa');
    }
});

app.use(express.json());
app.use('/api',router);

export default app;