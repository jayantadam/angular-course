// src/items/item.interface.ts

export interface BaseItem {
  title: string;
  price: number;
  description: string;
  imageURL: string;
  quantity:number
}

export interface Product extends BaseItem {
  id: number;
}
