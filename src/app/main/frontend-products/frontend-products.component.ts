import { Component, OnInit } from '@angular/core';
import { Product } from "../../interfaces/product";
import { Link } from "../../interfaces/link";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { LinkService } from "../../services/link.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-frontend-products',
  templateUrl: './frontend-products.component.html',
  styleUrls: ['./frontend-products.component.css']
})
export class FrontendProductsComponent implements OnInit {
  products: Product[] = [];
  page: number = 1;
  showButton: boolean = true;
  selected: number[] = [];
  link: Link['code'] = '';
  error = false;
  s = '';
  sort = '';

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private linkService: LinkService,
  ) { }

  ngOnInit(): void {
    if(this.route.snapshot.queryParams['page'] > this.page) {
      this.page = 0;
      this.loadMore();
    }

    this.productService.frontend().subscribe({
      next: value => {this.products = value;}
    });

    this.route.queryParams.subscribe({
      next: params => {
        this.page = params['page'] || 1;
        this.s = params['s'] || '';
        this.sort = params['sort'] || '';
      }
    });
  }

  loadMore(): void {
    this.page++;
    this.router.navigate([], {queryParams: {page: this.page}, queryParamsHandling: 'merge'})
  }

  search(s: string):void {
    this.router.navigate([], {queryParams: {s, page: 1}, queryParamsHandling: 'merge'});
  }

  sortChanged(sort: string): void {
    this.router.navigate([], {
      queryParams: {
        sort,
        page: 1
      },
      queryParamsHandling: 'merge'
    });
  }

  select(id: number):void {
    if(!this.isSelected(id)) {
      this.selected = [...this.selected, id];
    } else {
      this.selected = this.selected.filter(s => s !== id);
    }
  }

  isSelected(id: number): boolean {
    return this.selected.some(s => s === id);
  }

  generate(): void {
    this.linkService.generate({
      products: this.selected
    }).subscribe({
      next: value => {this.link = `${environment.checkout_url}/${value.code}`;},
      error: () => { this.error = true; }
    });
  }
}
