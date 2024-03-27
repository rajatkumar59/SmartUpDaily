import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import {errorHandler} from '../utils/error.js';
import Jwt from 'jsonwebtoken';     

  


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
        res.status(201).json('User created successfully');
    } catch (err) {
        console.error(err);
        next(err)
    }
}

export const login = async (req, res ,next) => {
    const {username , password} = req.body;
    if(!username || !password || username === "" || password === ""){
        next(errorHandler(400, 'All fields are required'));
    }
    try {
        const user = await User.findOne({ username });
        if(!user){
            return next(errorHandler(404, 'User not found'));
        }
        const isMatch = bcryptjs.compareSync(password, user.password);
        if(!isMatch){
           return next(errorHandler(401, 'Invalid credentials'));
        }
        const token = Jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});

        const {password: userPassword, ...userData} = user._doc;

        res
        .status(200)
        .cookie('access_token', token, {
            httpOnly: true,
            
        })
        .json(userData);
    }catch(err){
        console.error(err);
        next(err);
    }

}
