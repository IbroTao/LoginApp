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

let transporter = nodemailer.createTransport(nodeConfig);

let MailGenerator = new MailGen({
    theme: "default",
    product: {
        name: "Mailgen",
        link: "https://mailgen.js"
    }
});

export const registerMail = async (req, res) => {
    const {username, userEmail, text, subject} = req.body;
    
    // body of the email
    let email = {
        body: {
            
        }
    }
}