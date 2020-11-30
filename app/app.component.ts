import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

declare const $: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

    ngOnInit(){}

    constructor(){
      this.texts=['aku']
    }

    texts: string[];
    results: string[];

    search(event) {
        this.mylookupservice.getResults(event.query).then(data => {
            this.results = data;
        });
    }
}
