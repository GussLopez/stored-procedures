import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import { body, param, validationResult } from "express-validator";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export const validateUserId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  await param("id")
    .isInt()
    .withMessage("ID No válido")
    .custom((VALUE) => VALUE > 0)
    .withMessage("ID No válido")
    .run(req);

  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};

export const validateUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { userId } = req.params;
    if (Array.isArray(userId)) {
      res.status(400).json({ error: "ID No válido" });
      return;
    }

    const id = Number(userId);
    const user = await User.findByPk(id);
    if (!user) {
      const error = new Error("Usuario no encontrado");
      res.status(404).json({ error: error.message });
      return;
    }
    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Hubo un error" });
  }
};

export const validateUserInput = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  await body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .run(req);

  next();
};
