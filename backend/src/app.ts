require("dotenv").config();
import express from "express";
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

const port = config.get<number>("port");

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
