import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import {errorHandler} from '../utils/error.js';


export const signup = async (req, res , next) => {
    console.log(req.body);
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        next(errorHandler(400, 'All fields are required'));
    }

    try {
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).send('User created successfully');
    } catch (err) {
        console.error(err);
        next(err)
    }
}

export const login = async (req, res) => {
    res.send('login');
}

