export interface LoginUser {
  email: string
  password: string
}

export interface User {
  email: string
}

export interface Product {
  id: number,
  name: string,
  description: string,
  img: string
  cost: number,
}
