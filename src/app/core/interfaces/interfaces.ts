export interface LoginUser {
  email: string
  password: string
}

export interface Product {
  id: number,
  name: string,
  description: string,
  img: string
  cost: number,
}

export interface CartItem {
  id: number,
  count: number,
  orderNumber: number,
  orderDate: Date,
}

export interface ProductCart extends CartItem, Product {}

export interface CheckoutInfo {
  email: string,
  fullName: string,
  address: string,
  phone: string,
  credit: string,
  cvv: number
}
