import { BaseItem, Product } from "./product.interface";
import { Products } from "./products.interface";

// let products: Products = {
//   1: {
//     id: 1,
//     title: "Burger",
//     price: 599,
//     description: "Tasty",
//     imageURL: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
//     quantity: 1,
//   },
//   2: {
//     id: 2,
//     title: "Pizza",
//     price: 299,
//     description: "Cheesy",
//     imageURL: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
//     quantity: 12,
//   },
//   3: {
//     id: 3,
//     title: "Tea",
//     price: 199,
//     description: "Informative",
//     imageURL: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
//     quantity: 3,
//   },
// };

let products: Products = {
  1: {
    id: 1,
    title: "Headphones",
    price: 599,
    description: "Headphones",
    imageURL: "https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg",
    quantity: 1,
  },
  2: {
    id: 2,
    title: "Mobile",
    price: 299,
    description: "iphone 13",
    imageURL: "https://t4.ftcdn.net/jpg/04/91/82/65/240_F_491826589_gfbu5s7x4yYDV5bdSGylXxLZJPc11QhR.jpg",
    quantity: 12,
  },
  3: {
    id: 3,
    title: "TV",
    price: 199,
    description: "Informative",
    imageURL: "https://t4.ftcdn.net/jpg/01/51/00/87/240_F_151008771_Kvl6PeN8PeXL7cfeqtKJloSX7UDgHDxS.jpg",
    quantity: 3,
  },
};
/**
 * Service Methods
 */

export const findAll = async (): Promise<Product[]> => Object.values(products);

export const find = async (id: number): Promise<Product> => products[id];

export const create = async (newItem: BaseItem): Promise<Product> => {
  const allProducts: any = Object.values(products);

  const id = allProducts.length + 1;
  products[id] = {
    id,
    ...newItem,
  };
  return products[id];
};

export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Product | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  products[id] = { id, ...itemUpdate };

  return products[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete products[id];
};
