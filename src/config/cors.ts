import type { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
  origin: (origin, callback) => {
    const whiteList = [process.env.FRONTEND_URL].filter(Boolean);

    // Permitir requests sin origin (server-to-server)
    if (!origin) {
      return callback(null, true);
    }

    if (whiteList.includes(origin)) {
      return callback(null, true);
    }

    console.error(`CORS Error: Origin ${origin} not allowed`);
    return callback(new Error(`Error de CORS: Origen ${origin} no permitido`));
  },
};

