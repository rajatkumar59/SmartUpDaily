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

// export const google = async (req, res, next) => {
//     const {email, name , googlePhotoUrl} = req.body;
//     try {
//         const user = await User.findOne({email});
//         if(user){
//             const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
//             const {password: userPassword, ...userData} = user._doc;
//             res.status(200).json(userData).cookie('access_token', token, {
//                 httpOnly: true
//             }).json(userData);
//         }else{
//             const generatedPassword = Math.random().toString(36).slice(-8);
//             const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
//             if (!name) {
//                 // Handle missing name (e.g., return error or use a default username)
//                 return next(errorHandler(400, 'Name is required'));
//             }
//             const newUser = new User({
//                 username:name.toLowerCase().split(' ').join('')+Math.random().toString(9).slice(-4),
//                 email,
//                 password: hashedPassword,
//                 profilePicture: googlePhotoUrl
//             });
//             await newUser.save();
//             const token = Jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
//             const {password: userPassword, ...userData} = newUser._doc;
//             res.status(200).json(userData).cookie('access_token', token, {
//                 httpOnly: true
//             }).json(userData);
//         }
//     } catch (error) {
//         console.log(error);
//         next(error)
//     }
// }


export const google = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;
  
    try {
      if (!name) {
        return next(errorHandler(400, 'Name is required'));
      }
  
      const username = name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4);
      const hashedPassword = bcryptjs.hashSync(Math.random().toString(36).slice(-8), 10);
  
      let user;
      try {
        user = await User.findOne({ email }); // Check for existing user
      } catch (err) {
        return next(err); // Handle errors during user search
      }
  
      if (!user) { // New user creation
        user = new User({
          username,
          email,
          password: hashedPassword,
          profilePicture: googlePhotoUrl,
        });
        await user.save();
      }
  
      const token = Jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  
      const { password: userPassword, ...userData } = user._doc;
  
      // Send single response with user data, token, and cookie
      res
        .status(200)
        .json(userData) // Include user data in response
        .cookie('access_token', token, { httpOnly: true });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
  