import { ProductService } from '@shared/services/product.service';
import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@products/components/product/product.component';
import { CartService } from '@shared/services/cart.service';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  // @Input({required : true}) product1!: Product;
  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');
  private productService = inject(ProductService);
  private cartServices = inject(CartService);

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.id){
      this.productService.getOne(this.id)
      .subscribe({
        next: (product) => {
          this.product.set(product);
          if(product.images.length >0){
            this.cover.set(product.images[0]);
          }
        }
      })
    }

  }

  changeCover(newImage: string){
    this.cover.set(newImage);
  }
  addCart(){
    const product = this.product();
    if(product){
    this.cartServices.addToCart(product);
    }
  }
}
