import pool from "../config/db.js";

export const obtenercliente = async (req, res) => {
    const[rows] = await pool.query("select * from cliente");
    res.json(rows);
};

export const crearcliente = async (req, res) => {
    const {idcliente, nombre, apellido, identificacion, celular, email} = req.body;
    await pool.query("insert into cliente(idcliente, nombre, apellido, identificacion, celular, email) values (?, ?, ?, ?, ?, ?)",[
    idcliente,
    nombre,
    apellido,
    identificacion,
    celular,
    email,
    ]);
    res.json({message:"Usuario Creado"});
};

export const actualizarcliente = async (req, res) => {
    const {idcliente} = req.params;
    const {nombre, apellido, identificacion, celular, email} = req.body;
    await pool.query(
        "update cliente set nombre = ?, apellido = ?, identificacion = ?, celular = ?, email = ? where idcliente = ?",[ nombre, apellido, identificacion, celular, email, idcliente]
    );
    res.json({message: "usuario actualizado"});
};

export const eliminarcliente = async (req, res) => {
    const {idcliente} = req.params;
    await pool.query ("delete from cliente where idcliente = ?",[idcliente]);
    res.json({message: "usuario eliminado"});
};