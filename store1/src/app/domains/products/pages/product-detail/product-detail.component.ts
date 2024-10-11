import { ProductService } from '@shared/services/product.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  private productService = inject(ProductService);
}
