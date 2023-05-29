import {Request, Response} from 'express';
import {findProductById} from '../src/db-data';


export function saveproduct(req: Request, res: Response) {

    const id = parseInt(req.params["id"]),
          changes = req.body;

    console.log("Saving product", id, JSON.stringify(changes));

    const product = findProductById(id);

    product.description = changes.description;

    res.status(200).json(product);

}
