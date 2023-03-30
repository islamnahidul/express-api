import prisma from "../db";
import {comparePasswords, createJWT, hashPassword} from "../modules/auth";

export const createNewUser = async (req, res) => {
  // hashing the password send the user to create his/her new profile
  const hash = await hashPassword(req.body.password);

  // create a new user in the database
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: hash,
    },
  });

  // create the token and send it the user.
  const token = createJWT(user);
  res.json({token});
};

export const signin = async (req, res) => {
  // get the user from the db using the username and then compare the hashed password with the hashed
  // password in the db.
  const user = await prisma.user.findUnique({
    where: {username: req.body.username},
  });

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.send("Invalid username or password");
    return;
  }

  const token = createJWT(user);
  res.json({token});
};