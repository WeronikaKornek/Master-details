import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CryptoComponent } from './crypto.component';
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatGridListModule, MatListModule, NgForOf, AsyncPipe, MatButtonModule, NgIf],
  declarations: [CryptoComponent],
  providers: [],
  exports: [CryptoComponent]
})
export class CryptoComponentModule {
}
