import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  styleUrls: ['./employees.component.scss'],
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent {
  readonly list$: Observable<EmployeeModel[]> = this._employeesService.getAll();
  private _selectedEmployeeIdSubject: Subject<string> = new Subject<string>();
  public selectedEmployeeId$: Observable<string> = this._selectedEmployeeIdSubject.asObservable();
  readonly details$: Observable<EmployeeModel> = this.selectedEmployeeId$.pipe(
    switchMap(data => this._employeesService.getOne(data))
  );

  constructor(private _employeesService: EmployeesService) {
  }

  select(id: string) {
    this._selectedEmployeeIdSubject.next(id);
  }
}
