import express from "express";
import dotenv from "dotenv";
import clienteRouters from "./routes/cliente.js";

dotenv.config();

const app = express();
app.use(express.json());

//Rutas
app.use("/cliente",clienteRouters);

app.listen(process.env.PORT,() =>{
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`)
});