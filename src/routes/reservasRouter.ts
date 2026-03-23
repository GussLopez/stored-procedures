import express from "express";
import { ReservasController } from "../controller/reservasController";

const router = express.Router();

router.post("/", ReservasController.crear);

router.get('/', ReservasController.obtenerReservas)

router.patch('/:reservaId', ReservasController.editarReserva);

router.delete('/:reservaId', ReservasController.eliminarReserva);

export default router;
