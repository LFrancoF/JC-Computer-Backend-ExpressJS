import {Usuario} from '../models/usuario.js';

export const login = (req,res) => {
    res.send('Login from server');
}

export const register = async (req,res) => {

    try {
        const {nombre, username, password} = req.body;

        const usuario = new Usuario(nombre, username, password);
        await usuario.createUsuario();

        return res.json({
                nombre: username,
                username: password,
                password: password
            });
    } catch (error) {
        res.status(500).json(['FATAL ERROR: '+error.message]);
    }
    
}

export const getUsuarios = async (req, res) => {
    try {
        const usuarios = new Usuario();
        const allUsuarios = await usuarios.getUsuarios();
        res.json(allUsuarios);
    } catch (error) {
        res.status(500).json(['FATAL ERROR: '+error.message]);
    }
}