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
            name: username,
            intro: text || "Welcome to Daily Tuition! We\'re exicted to have you on board.",
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    }

    let emailBody = MailGenerator.generate(email);

    let message = {
        from: process.env.ETHERAL_USERNAME,
        to: userEmail,
        subject: subject || "Signup Successful",
        html: emailBody
    }

    // send mail
    transporter.sendMail(message)
        .then(() => {
            return res.status(200).send({ msg: "You should receive an email from us. "})
        })
        .catch(error => res.status(500).send({error}))
}