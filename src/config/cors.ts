import type { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
  origin: (origin, callback) => {
    const whiteList = [process.env.FRONTEND_URL].filter(Boolean);

    if (process.env.NODE_ENV === "development" || process.argv[2] === "--api") {
      whiteList.push(
        undefined,
        "http://localhost:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3001",
      );
    }

    if (!origin || whiteList.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`CORS Error: Origin ${origin} not allowed`);
      callback(new Error(`Error de CORS: Origen ${origin} no permitido`));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Cache-Control"],
};
