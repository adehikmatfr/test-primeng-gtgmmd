import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/primeng';
import { TooltipModule } from 'primeng/tooltip';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { AppComponent } from './app.component';
import { ChildInputComponent } from './child-input.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule, 
    AutoCompleteModule, 
    TooltipModule, 
    MultiSelectModule,
    DropdownModule,
    RadioButtonModule,
    MenuModule,
    BreadcrumbModule
  ],
  declarations: [ AppComponent, ChildInputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
