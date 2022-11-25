import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Product } from "../../interfaces/product";
import { ActivatedRoute, Router } from "@angular/router";
import { LinkService } from "../../services/link.service";
import { Link } from "../../interfaces/link";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-backend-products',
  templateUrl: './backend-products.component.html',
  styleUrls: ['./backend-products.component.css']
})
export class BackendProductsComponent implements OnInit {
  products: Product[] = [];
  page: number = 1;
  showButton: boolean = true;
  selected: number[] = [];
  link: Link['code'] = '';
  error = false;

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

    this.route.queryParams.subscribe({
      next: params => {
        this.page = params['page'] || 1;
        const s = params['s'] || '';
        const sort = params['sort'] || '';
        this.productService.backend({page: this.page, s, sort}).subscribe({
          next: value => {
            this.products = Number(this.page) === 1 ? value.data : [...this.products, ...value.data];
            this.showButton = Number(value.meta.last_page) !== Number(this.page);
          }
        });
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

  sort(sort: string): void {
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
