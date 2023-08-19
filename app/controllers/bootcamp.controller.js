import Bootcamp from "../models/bootcamp.model.js";
import User from "../models/user.model.js";

const createBootcamp = async (req, res) => {
    let { title, cue, description } = req.body;

    let bootcamp = await Bootcamp.create({
        title, 
        cue, 
        description
    });

    console.log("Creado el bootcamp: ", bootcamp.toJSON())
    res.status(201).json({ code:201, message: "Bootcamp creado con exito ", bootcamp});
}

const addUser = async (req, res) => {
    let { bootcampId, userId } = req.body;

    let bootcamp = await Bootcamp.findByPk(bootcampId);

    if(!bootcamp){
        return res.status(404).json({ code: 404, message: "bootcamp no existe." });
    }

    let usuario = await User.findByPk(userId);
    if(!usuario){
        return res.status(404).json({ code: 404, message: "usuario no existe." });
    }

    await bootcamp.addAlumnos(usuario);

    console.log("***************************");
    console.log("Agregado el usuario id = "+ userId + " al bootcamp con id="+bootcampId);
    console.log("***************************");

    return res.status(200).json({
        code: 200,
        message:
            "Se ha matriculado correctamente el usuario al bootcamp.",
    });

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