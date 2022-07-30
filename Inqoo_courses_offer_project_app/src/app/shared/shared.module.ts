import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormComponent } from './form/form.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    NavBarComponent,
    CardComponent,
    ButtonComponent,
    CheckboxComponent,
    FormComponent,
  ],

  exports: [
    NavBarComponent,
    CardComponent
  ],

  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }