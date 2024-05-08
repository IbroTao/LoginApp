import nodemailer from "nodemailer";
import MailGen from "mailgen"

import dotenv from "dotenv"
dotenv.config();

let nodeConfig = {
    host: "smtp.etheral.email",
    port: 587,
    secure: false,
    auth: {
        user: process.env.ETHERAL_USERNAME,
        pass: process.env.ETHERAL_PASSWORD
    }
};

let transporter = nodemailer.createTransport(nodeConfig)