import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderComponent } from '../order/order.component';
import { ProductsService } from '../../../services/products.service';
import { MyProduct } from '../../../models/my-product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-product',
  standalone: true,
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css',
  imports: [OrderComponent, FormsModule, CommonModule],
})
export class NewProductComponent implements OnInit {
  categories: any[] = [];
  productsApi: MyProduct[] = [];
  updateMode: boolean = false;
  constructor(
    private _Router: Router,
    private _ProductsService: ProductsService
  ) {

  }
  ngOnInit(): void {
    this.getAllCategories();
    this.getProducts();
  }
  getAllCategories() {
    this._ProductsService.getCategories().subscribe({
      next: (data: any[]) => {
        this.categories = data;
      },
    });
  }
  product: MyProduct = {} as MyProduct;
  addProduct() {
    this._ProductsService.addProduct(this.product)?.subscribe({
      next: (product) => {
        this.getProducts();
        this.clearForm();
        // this._Router.navigate(['/admin/order']);
      },
    });
  }
  getProducts() {
    this._ProductsService.getProducts()?.subscribe({
      next: (data: any) => {
        this.productsApi = data;
      },
    });
  }
  updateProductBtn(id: number) {
    let updatedProduct = this.productsApi.filter((itemId) => itemId.id === id);
    this.updateMode = true;
    this.product.id = updatedProduct[0].id;
    this.product.productName = updatedProduct[0].productName;
    this.product.Price = updatedProduct[0].Price;
    this.product.Quantity = updatedProduct[0].Quantity;
    this.product.Category = updatedProduct[0].Category;
  }

  updateProduct() {

    this._ProductsService.updateProduct(this.product)?.subscribe({
      next: () => {
        this.updateMode = false;
        this.getProducts();
        this.clearForm();
      },
    });
  }
  deleteProduct(id: number) {
    this._ProductsService.deleteProduct(id).subscribe({
      next: () => {
        this.getProducts();
      },
    });
  }
  clearForm() {
    this.product.Category = '';
    this.product.Price = 0;
    this.product.Quantity = 0;
    this.product.productName = '';
  }
}
