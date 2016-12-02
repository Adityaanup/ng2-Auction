import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductService } from './services/productservice';

import { ApplicationComponent } from './components/application/application';
import CarouselComponent from './components/carousel/carousel';
import NavbarComponent from './components/navbar/navbar';
import SearchComponent from './components/search/search';
import ProductItemComponent from './components/product-item/product-item';
import StarsComponent from './components/stars/stars';
import FooterComponent from './components/footer/footer';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    exports: [],
    declarations: [
        ApplicationComponent,
        CarouselComponent,
        NavbarComponent,
        SearchComponent,
        ProductItemComponent,
        StarsComponent,
        FooterComponent
    ],
    providers: [ProductService],
    bootstrap: [ApplicationComponent]
})

export class AppModule { }
