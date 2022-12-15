import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { ProductComponentModule } from './components/product/product.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { EmployeesComponentModule } from './components/employees/employees.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductComponent }, { path: 'employees-master-details', component: EmployeesComponent }, { path: 'crypto-master-details', component: CryptoComponent }]), ProductComponentModule, ProductServiceModule, EmployeesComponentModule, EmployeesServiceModule, CryptoComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
