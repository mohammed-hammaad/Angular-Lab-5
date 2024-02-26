import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MyProduct } from '../models/my-product';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = [

    {
      id: 1,
      title: 'Toffy',
      price: 20,
      CategoryID: 'Category A',
      isPurchased: false,
      quantity: 2,
      image: '../../assets/1.jpeg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 2,
      title: 'Choclet pops',
      price: 85,
      CategoryID: 'Category B',
      isPurchased: false,
      quantity: 1,
      image: '../../../assets/2.jpeg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 3,
      title: 'Toffy',
      price: 30,
      CategoryID: 'Category C',
      isPurchased: false,
      quantity: 3,
      image: '../../../assets/3.jpeg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 4,
      title: 'Gummy candy',
      price: 25,
      CategoryID: 'Category D',
      isPurchased: false,
      quantity: 6,
      image: '../../../assets/4.jpg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 5,
      title: 'Hard Candy',
      price: 75,
      CategoryID: 'Category A',
      isPurchased: false,
      quantity: 5,
      image: '../../../assets/5.jpg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 6,
      title: 'Lollipops',
      price: 35,
      CategoryID: 'Category B',
      isPurchased: false,
      quantity: 0,
      image: '../../../assets/6.jpg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 7,
      title: 'Lollipops',
      price: 42,
      CategoryID: 'Category C',
      isPurchased: false,
      quantity: 1,
      image: '../../../assets/7.webp',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 8,
      title: 'Hard Candy ',
      price: 19,
      CategoryID: 'Category D',
      isPurchased: false,
      quantity: 2,
      image: '../../../assets/8.jpg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 9,
      title: 'Choclete',
      price: 17,
      CategoryID: 'Category D',
      isPurchased: false,
      quantity: 3,
      image: '../../../assets/9.jpg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 10,
      title: 'Choclete',
      price: 49,
      CategoryID: 'Category A',
      isPurchased: false,
      quantity: 4,
      image: '../../../assets/Gluten-Free-Candy-Bars.jpg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
  ];
  constructor(private _HttpClient: HttpClient) {}

  getAllProducts(): Iproduct[] {
    return this.products;
  }

  getproductDetails(id: number): Iproduct | undefined {
    return this.products.find((item) => item.id == id);
  }
  getproductByCategory(catid: string) {
    return this.products.filter((item) => item.CategoryID == catid);
  }

  // new//
  getCategories(): Observable<any> {
    return this._HttpClient.get(`http://localhost:3000/categories`);
  }

  addProduct(product: MyProduct): Observable<MyProduct> | undefined {
    return this._HttpClient.post<MyProduct>(
      `http://localhost:3000/products`,
      product
    );
  }
  getProducts(): Observable<MyProduct> | undefined {
    return this._HttpClient.get<MyProduct>(`http://localhost:3000/products`);
  }
  updateProduct(product: any): Observable<any> | undefined {
    return this._HttpClient.put<any>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }
  deleteProduct(id: number): Observable<MyProduct> {
    return this._HttpClient.delete<MyProduct>(
      `http://localhost:3000/products/${id}`
    );
  }
}


