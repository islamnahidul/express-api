import {NextFunction, Request, Response} from "express";
import {body, validationResult} from "express-validator";

const express = require('express');
const router = express.Router();
/*
Product routes
 */
router.get('/product', (req: Request, res: Response) => {
  res.json({msg: 'hello World'})
})
router.get('/product/:id', () => {
})
router.put('/poduct/:id', () => {
})
router.post("/product", body("name").isString(), (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400);
    res.json({errors: errors.array()});
  }
});
router.delete('/product/:id', () => {
})


/*
Update routes
 */
router.get('/update', () => {
})
router.get('/update/:id', () => {
})
router.put('update/:id', () => {
})
router.post('/update', () => {
})
router.delete('/update/:id', () => {
})

/*
Update point routes
 */
router.get('/updatepoint', () => {
})
router.get('/updatepoint/:id', () => {
})
router.put('updatepoint/:id', () => {
})
router.post('/updatepoint', () => {
})
router.delete('/updatepoint/:id', () => {
})

module.exports = router;


