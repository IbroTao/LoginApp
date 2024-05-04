import express from "express";
import cors from "cors";
import morgan from "morgan";


const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // when disabled hackers do not know the stack used

const port = 8080;

/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(200).json("HOME GET REQUEST")
})

/** start server only when we have valid connection*/
app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`);
})
