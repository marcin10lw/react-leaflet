require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
import config from "config";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(
  cors({
    origin: config.get<string>("origin"),
    methods: "GET",
  })
);

app.all("*", (req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not found`) as any;
  error.statusCode = 404;
  next(error);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  err.status = err.status || "error";
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

const port = config.get<number>("port");

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
