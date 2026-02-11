import express from "express";
import morgan from "morgan";
import { db } from "./config/db";
import colors from "colors";
import userRouter from "./routes/userRouter";
import cors from "cors";
import { corsConfig } from "./config/cors";

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.blue.bold("Conexión exitosa a la BD"));
  } catch (error) {
    console.log(colors.red.bold("Fallo la conexión a la BD"));
  }
}
connectDB();

const app = express();

app.use(cors(corsConfig));


app.use(express.json());
app.use(morgan("dev"));

app.use("/api/usuario", userRouter);

export default app;
