import {nanoid} from 'nanoid';
export type CartType ={
  id: string;
  items: CartItemM[];
}

export type CartItemM ={
  productId: number;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand:string;
  type:string;
}

export class Cart implements CartType{
  id = nanoid();
  items: CartItemM[] = [];
}
