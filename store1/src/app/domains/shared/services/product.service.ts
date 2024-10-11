import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private htpp = inject(HttpClient);

  constructor() { }


  getProduts(){
    return this.htpp.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }

  getOne(id: string){
    return this.htpp.get<Product[]>('https://api.escuelajs.co/api/v1/products/${id}');
  }
}
