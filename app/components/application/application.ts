import { Component, OnInit } from '@angular/core';

import Product from '../../model/product';
import { ProductService } from '../../services/productservice';

@Component({
    selector: 'auction-application',
    templateUrl: 'app/components/application/application.html',
    styleUrls: ['app/components/application/application.css']
})

export class ApplicationComponent implements OnInit {

    title = 'welcome to onlice product auction';
    products: Product[];

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.getProducts();
     }

    getProducts(): void {
        this.productService.getProducts().then(products => this.products = products);
    }
}