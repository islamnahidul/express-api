import { NextFunction, Request, Response } from "express";
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from "../modules/middleware";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "../handlers/product";
import prisma from "../db";

const express = require("express");
const router = express.Router();
/*
Product routes
 */
router.get("/product", getProducts);
router.get("/product/:id", getOneProduct);
router.put("/product/:id", body("name").isString(), updateProduct);
router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
);
router.delete("/product/:id", deleteProduct);

/*
Update routes
 */
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put(
  "update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional(),
  handleInputErrors,
  (req, res) => {
    res.send("Got it");
  }
);
router.post(
  "/update",
  body("title"),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]),
  body("version").optional(),
  handleInputErrors,
  (req, res) => {
    // const update = prisma.update.create({});
  }
);
router.delete("/update/:id", () => {});

/*
Update point routes
 */
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put(
  "updatepoint/:id",
  body("name"),
  body("description"),
  (req, res) => {}
);
router.post("/updatepoint", (req, res) => {});
router.delete("/updatepoint/:id", () => {});

module.exports = router;
