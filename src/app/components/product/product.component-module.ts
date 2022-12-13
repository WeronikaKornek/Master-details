import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ProductComponent } from './product.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [ProductComponent],
  providers: [],
  exports: [ProductComponent]
})
export class ProductComponentModule {
}
