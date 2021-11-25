import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        RouterModule
    ]
})
export class LayoutModule { }
