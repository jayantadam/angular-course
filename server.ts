import * as express from "express";
import { Application } from "express";
import { getAllProducts, addProduct } from "./server/products.route";
import { ProductsCRUDRouter } from "./server/product-crud/products.route";
// import {saveCourse} from './server/save-products.route';
const cors = require("cors");

const bodyParser = require("body-parser");

const app: Application = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());

// app.route("/api/products").get(getAllProducts);
// app.route("/api/add-products").post(addProduct);

app.use("/api/products", ProductsCRUDRouter);

// app.route('/api/courses/:id').put(saveCourse);

const httpServer = app.listen(9000, () => {
  console.log(
    "HTTP REST API Server running at http://localhost:" +
      httpServer.address()?.port
  );
});
