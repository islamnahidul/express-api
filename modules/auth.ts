import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import {NextFunction, Request, Response} from "express";
import * as bcrypt from "bcrypt";


dotenv.config();
export const createJWT = (user) => {
  return jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET)
}

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.send("Not authorized/ no bearer");
    return;
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    console.log("here");
    res.status(401);
    res.send("Not authorized/ no token");
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    console.log(payload);
    next();
    return;
  } catch (e) {
    console.error(e);
    res.status(401);
    res.send("Not authorized/ wrong token");
    return;
  }
};

export const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};