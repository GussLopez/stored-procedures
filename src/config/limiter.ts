import { rateLimit } from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 20,
    message: {"error": "Alcanzaste el limite de peticiones"}
})