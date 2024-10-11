import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);  // Corrección de typo (http en lugar de htpp)

  constructor() { }

  getProduts() {
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }

  getOne(id: string) {
    // Usa template literals para interpolar el id en la URL
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }
}
