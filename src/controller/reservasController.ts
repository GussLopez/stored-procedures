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
}
