import express from "express";
import cors from "cors";
import morgan from "morgan";


const app = express();

/**middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // when disabled hackers do not know the stack used

