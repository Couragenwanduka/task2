import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;
import errorHandling from "./src/error/asyncError";
import taskRouter from "./src/router/task.route";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use('/', taskRouter)

app.use(errorHandling as (err: any, req: Request, res: Response, next: NextFunction) => void);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
