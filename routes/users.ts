import {NextFunction, Request, Response} from "express";
import {createNewUser, signin} from "../handlers/user";

const express = require('express');
const router = express.Router();

/* GET users listing. */

router.post("/user", createNewUser);
router.post("/signin", signin);

module.exports = router;
