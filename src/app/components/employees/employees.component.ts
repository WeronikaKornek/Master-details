import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeesModel } from '../../models/employees.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  styleUrls: ['./employees.component.scss'],
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent {
  readonly list$: Observable<EmployeesModel[]> = this._employeesService.getAll();

  constructor(private _employeesService: EmployeesService) {
  }
}
