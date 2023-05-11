import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import users from '../models/users.js';

export const signIn = async (req, res) => {
    console.log(7);
    const { email, password } = req.body;

    try {
        const existingUser = await users.findOne({ email });
        console.log(existingUser);
        if (!existingUser) return res.status(404).json({ message: "User doesnt exist" });
        const isCorrectPassword = await bcrypt.compare(password, existingUser.password);
        console.log(password,existingUser.password,isCorrectPassword);
        if (!isCorrectPassword) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });
        res.status(200).json({ result: existingUser, token });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went Wrong' });
        console.log(error);
    }
}
export const signUp = async (req, res) => {
    console.log(25);
    const { email, password, confirmPassword, firstName, lastName } = req.body;
    
    try {
        const existingUser = await users.findOne({ email });
        console.log(existingUser);
        if (existingUser) {
            console.log("hi1");

            res.status(400).json({ Message: "User already exists" });
        }
        else if (password !== confirmPassword) {
            console.log("hi2");

            res.status(400).json({ Message: "Passwords dont match" });
        }
        else {
            console.log("hi");
            const hashedPassword = await bcrypt.hash(password, 12);
            const result = await users.create({ email: email, password: hashedPassword, name: `${firstName} ${lastName}` });
            const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });
            console.log(result);
            res.status(200).json({result:result,token});
        }
    }
    catch (error) {

    }

}