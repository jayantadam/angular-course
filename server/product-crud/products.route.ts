/**
 * Required External Modules and Interfaces
 */

import * as express from "express";

import * as ProductService from "./product.service";
import { BaseItem, Product } from "./product.interface";
import { Request, Response } from "express";

/**
 * Router Definition
 */

export const ProductsCRUDRouter = express.Router();

/**
 * Controller Definitions
 */

ProductsCRUDRouter.get("/", async (req: Request, res: Response) => {
  try {
    const products: Product[] = await ProductService.findAll();

    res.status(200).send(products);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// // GET items/:id

ProductsCRUDRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Product = await ProductService.find(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// // POST items

ProductsCRUDRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: BaseItem = req.body;

    const newItem = await ProductService.create(item);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT items/:id

ProductsCRUDRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const itemUpdate: Product = req.body;

    const existingItem: Product = await ProductService.find(id);

    if (existingItem) {
      const updatedItem = await ProductService.update(id, itemUpdate);
      return res.status(200).json(updatedItem);
    }

    const newItem = await ProductService.create(itemUpdate);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE items/:id

ProductsCRUDRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await ProductService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
