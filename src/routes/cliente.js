import { Router } from "express";
import{
    obtenercliente,
    crearcliente,
    actualizarcliente,
    eliminarcliente,
} from "../controllers/clientecontroller.js";

const router = Router();

router.get("/", obtenercliente);
router.post("/", crearcliente);
router.put("/:idcliente", actualizarcliente);
router.delete("/:idcliente", eliminarcliente);

export default router;