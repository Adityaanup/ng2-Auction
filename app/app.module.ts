import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductService } from './services/productservice';

import { ApplicationComponent } from './components/application/application';

@NgModule({
    imports: [BrowserModule],
    exports: [],
    declarations: [ApplicationComponent],
    providers: [ProductService],
    bootstrap: [ApplicationComponent]
})

export class AppModule { }
