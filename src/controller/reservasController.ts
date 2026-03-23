import { Request, Response } from "express";
import { db } from "../config/db";

export class ReservasController {
  static crear = async (req: Request, res: Response) => {
    try {
      const { fecha, noches, status, hotelId, userId } = req.body;

      await db.query(
        `SELECT crear_reserva(:fecha, :noches, :status, :hotelId, :userId)`,
        {
          replacements: {
            fecha,
            noches,
            status,
            hotelId,
            userId,
          },
        },
      );

      res.status(201).json({ message: "Reserva creada correctamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al crear la reserva" });
    }
  };

  static obtenerReservas = async (req: Request, res: Response) => {
    try {
      const [data] = await db.query(`SELECT * FROM obtener_reservas()`);

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener las reservas" });
    }
  };

  static editarReserva = async (req: Request, res: Response) => {
    try {
      const { reservaId } = req.params;
      const { fecha, noches, status, hotelId, userId } = req.body;

      await db.query(
        `SELECT editar_reserva(:id, :fecha, :noches, :status, :hotelId, :userId)`,
        {
          replacements: {
            id: reservaId,
            fecha,
            noches,
            status,
            hotelId,
            userId,
          },
        },
      );

      res.status(201).json({ mensaje: "Reservación modificada" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al editar la reservación" });
    }
  };

  static eliminarReserva = async (req: Request, res: Response) => {
    const { reservaId } = req.params;
    console.log(req.params);
    try {
      await db.query(`SELECT eliminar_reserva(${reservaId})`);

      res.status(201).json({ mensaje: "Reserva eliminada" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al eliminar la reservación" });
    }
  };
}
