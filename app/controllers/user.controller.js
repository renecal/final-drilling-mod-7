import User  from "../models/user.model.js";

const createUser = async (req, res) => {
    let { firstName, lastName, email } = req.body;
    let usuario = await User.create({
        firstName, 
        lastName, 
        email
    });
    console.log("Se ha creado el usuario: ", usuario. toJSON())
    res.status(201).json({ code: 201, message: "Usuario creado con exito.", usuario })
}

const findUserById = (req, res) => {
    res.send("listar un usuario");
}

const findAll = (req, res) => {
    res.send("LISTAR usuarios");
}

const updateUserById = (req, res) => {
    res.send("actualizar usuario");
}

const deleteUserById = (req, res) => {
    res.send("elminar usuario");
}


const controladores = {
    createUser,
    findUserById,
    findAll,
    updateUserById,
    deleteUserById
}

export default controladores;