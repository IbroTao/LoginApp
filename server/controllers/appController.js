import Users from "../models/User.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export async function register(req, res) {
    try {
        const { username, password, profile, email } = req.body;

        // Check if username already exists
        const existingUsername = await Users.findOne({ username });
        if (existingUsername) {
            return res.status(400).send({ error: "Username already exists" });
        }

        // Check if email already exists
        const existingEmail = await Users.findOne({ email });
        if (existingEmail) {
            return res.status(400).send({ error: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new Users({
            username,
            password: hashedPassword,
            profile: profile || '',
            email
        });

        // Save the user to the database
        await user.save();

        return res.status(201).send({ msg: "User Registered Successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).send({error});
    }
}


export async function login(req, res) {

    const {username, password} = req.body;

    try{
        // check if username already exists
        const findUser = await Users.findOne({username});
        if(!findUser) return res.status(404).send({error: "Username not Found"});

        // compare the inputted password and user password
        const comparePassword = await bcrypt.compare(password, findUser.password);
        if(!comparePassword) return res.status(400).send({error: "Password does not match"});

        jwt.sign()
        
    }
    catch(error){
        return res.status(500).send({error})
    } 
}

export async function getUser(req, res) {
    res.json("getUser route")
};

export async function updateUser(req, res) {
    res.json("updateUser route")
}

export async function generateOTP(req, res) {
    res.json("generateOTP route")
}

export async function verifyOTP(req, res) {
    res.json("verifyOTP route")
};

export async function createResetSession(req, res) {
    res.json("createResetSession route")
};

export async function resetPassword(req, res) {
    res.json("resetPassword route")
}