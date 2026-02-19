import { Request, Response } from "express";
import User from "../models/User";
export class UserController {
  static create = async (req: Request, res: Response) => {
    try {
      const { nombre } = req.body;

      const nuevoUsuario = await User.create({ nombre });
      res.status(201).json({
        message: "Usuario creado",
        usuario: nuevoUsuario,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al crear el usuario" });
    }
  };

  static getAllNames = async (req: Request, res: Response) => {
    try {
      const names = await User.findAll({
        order: [["createdAt", "DESC"]],
        attributes: ["id", "nombre"]
      });
      res.status(200).json(names);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener los nobres" });
    }
  };

  static updateById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { nombre } = req.body;
      const user = await User.findByPk(Number(id));

      if (!user) {
        res.status(404).json({ error: "Usuario no encontrado" });
        return;
      }

      user.nombre = nombre;
      await user.save();

      res
        .status(200)
        .json({ message: "Usuario actualizado correctamente", user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al actulizar al usuario" });
    }
  };

  static deleteById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const deleted = await User.destroy({
        where: { id },
      });

      if (deleted === 0) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }

      res.status(200).json({ message: "Usuario eliminado" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al eliminar el usuario" });
    }
  };
}
