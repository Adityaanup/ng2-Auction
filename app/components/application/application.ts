import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'auction-application',
    template: '<h1>{{title}}</h1>'
})

export class ApplicationComponent implements OnInit {

    title = 'welcome buddy';
    constructor() { }

    ngOnInit() { }
}