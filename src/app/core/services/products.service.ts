import { Injectable } from '@angular/core';
import { Product } from "../interfaces/interfaces";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private products: Product[] = [
    {
      id: 0,
      name: 'Acer Aspire 7 A715-42G-R0VS',
      description: 'Экран 15.6" IPS (1920x1080) Full HD, матовый / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 8 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / черный',
      img: 'https://content.rozetka.com.ua/goods/images/big/163386254.jpg',
      cost: 2799
    },
    {
      id: 1,
      name: 'ASUS Laptop X415FA-EB0131111111111111111',
      description: 'Экран 14" IPS (1920x1080) Full HD, матовый / Intel Core i3-10110U (2.1 - 4.1 ГГц) / RAM 8 ГБ / SSD 256 ГБ / Intel UHD Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / без ОС / 1.6 кг / серый',
      img: 'https://content.rozetka.com.ua/goods/images/big/252123791.jpg',
      cost: 1749
    },
    {
      id: 2,
      name: 'Lenovo IdeaPad 3 15IIL05',
      description: 'Экран 15.6" TN+film (1920x1080) Full HD, матовый / Intel Core i3-1005G1 (1.2 - 3.4 ГГц) / RAM 8 ГБ / HDD 1 ТБ / nVidia GeForce MX330, 2 ГБ / без ОД / Wi-Fi / Bluetooth / веб-камера / DOS / 1.85 кг / серый',
      img: 'https://content2.rozetka.com.ua/goods/images/big/178046133.jpg',
      cost: 2000
    }
  ]

  findById(id: number): Product | undefined {
    return this.products.find(elem => elem.id === id);
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
