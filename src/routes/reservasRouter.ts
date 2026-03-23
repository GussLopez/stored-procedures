import express from "express";
import { ReservasController } from "../controller/reservasController";

const router = express.Router();

router.post("/", ReservasController.crear);

router.get('/', ReservasController.obtenerReservas)


export default router;
