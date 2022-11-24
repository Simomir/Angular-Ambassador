import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Product } from "../../interfaces/product";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-backend-products',
  templateUrl: './backend-products.component.html',
  styleUrls: ['./backend-products.component.css']
})
export class BackendProductsComponent implements OnInit {
  products: Product[] = [];
  page: number = 1;
  showButton: boolean = true;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.queryParams['page'] > this.page) {
      this.page = 0;
      this.loadMore();
    }

    this.route.queryParams.subscribe({
      next: params => {
        this.page = params['page'] || 1;
        this.productService.backend({page: this.page}).subscribe({
          next: value => {
            this.products = [...this.products, ...value.data];
            this.showButton = Number(value.meta.last_page) !== Number(this.page);
          }
        });
      }
    });
  }

  loadMore(): void {
    this.page++;
    this.router.navigate([], {queryParams: {page: this.page}})
  }

}
