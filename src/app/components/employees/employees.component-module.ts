import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';
import {MatCardModule} from "@angular/material/card";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [
        MatCardModule,
        NgIf,
        AsyncPipe,
        NgForOf,
        MatListModule,
        MatGridListModule,
        MatButtonModule
    ],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent]
})
export class EmployeesComponentModule {
}
