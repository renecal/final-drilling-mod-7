const createBootcamp = (req, res) => {
    res.send("creando bootcamp");
}

const addUser = (req, res) => {
    res.send("agregar usuario al bootcamp");
}

const findById = (req, res) => {
    res.send("mostrar bootcamp por id");
}

const findAll = (req, res) => {
    res.send("mostrar bootcamps");
}


const controladores = {
    createBootcamp,
    addUser,
    findById,
    findAll
}

export default controladores;