import express from "express";
import cors from "cors";
import morgan from "morgan";
import {startServer} from './database/connection.js'


const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // when disabled hackers do not know the stack used

const port = process.env.PORT;

/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(200).json("HOME GET REQUEST")
})

/** start server only when we have valid connection*/
const runApp = (port) => {
    startServer().then(
        res=>{
            app.listen(port);
            console.log(`Server is running on PORT ${port}`);
        }
    ).catch(
        err=>{
            console.log(err)
        }
    )
}
runApp(port)