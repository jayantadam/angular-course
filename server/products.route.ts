import { Request, Response } from "express";
import { PRODUCTS } from "../src/db-data";

export function getAllProducts(req: Request, res: Response) {
  res.status(200).json({ payload: Object.values(PRODUCTS) });
}

export function getProductById(req: Request, res: Response) {
  const ProductId = req.params["id"];

  const Products: any = Object.values(PRODUCTS);

  const Product = Products.find((Product) => Product.id == ProductId);

  res.status(200).json(Product);
}

export function addProduct(req: Request, res: Response) {
  const Products: any = Object.values(PRODUCTS);
  req.body.id = Products.length + 1;
  Products.push(req.body);

  res.status(200).json(Products);
}
