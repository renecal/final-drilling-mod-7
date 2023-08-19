const createUser = (req, res) => {
    res.send("creando usuario");
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