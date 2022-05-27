export interface LoginUser {
  email: string;
  password: string;
}

interface Id {
  id: number;
}

export interface Product extends Id {
  name: string;
  description: string;
  img: string;
  cost: number;
}

export interface CartItem extends Id {
  count: number;
  orderNumber: number;
  orderDate: Date;
}

export interface ProductCart extends CartItem, Product {}

export interface CheckoutInfo {
  email: string;
  fullName: string;
  address: string;
  phone: string;
  credit: string;
  cvv: number;
}
