import express from "express";
import cors from "cors";
import morgan from "morgan";

//importacion de controladores
import usersController from "./app/controllers/user.controller.js";
import bootcampsController from "./app/controllers/bootcamp.controller.js";


const app = express();


//middlewares generales de la app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("tiny"));


app.use("api/users", usersController);
app.use("api/bootcamps", bootcampsController);

export default app;

