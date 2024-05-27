export const login = (req,res) => {
    res.send('Login from server');
}

export const register = (req,res) => {
    const {username, password} = req.body;

    res.json({
        user: username+': registrado',
        pass: password+': password registrada'
    });
}