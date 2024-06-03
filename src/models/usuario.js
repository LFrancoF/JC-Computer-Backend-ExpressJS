import {pool} from '../db.js';

export class Usuario{
    constructor(nombre='Persona Default', username='Usuario Default', password='000000'){
        this.nombre = nombre;
        this.username = username;
        this.password = password;
    }

    async getUsuarios(){
        try {
            const client = await pool.connect();
            const q = 'select * from usuario';
            const {rows} = await pool.query(q);
            client.release();
            return rows;
        } catch (error) {
            throw new Error(['No se pudo obtener los usuarios: ' + error.message]);
        }
    }

    async createUsuario(){
        try {
            const client = await pool.connect();
            const q = 'insert into usuario(nombre,username,password) values($1,$2,$3)';
            const values = [this.nombre, this.username, this.password];

            const {rowCount} = await pool.query(q, values);
            client.release();
            return rowCount;
        } catch (error) {
            throw new Error(['No se pudo crear el usuario: ' + error.message]);
        }
    }
}