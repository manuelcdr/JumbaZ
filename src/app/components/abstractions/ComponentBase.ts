import { MatSnackBar } from '@angular/material';
import { HttpGenericService } from 'src/app/services/http-generic.service';

export class ComponentBase {


  constructor(
    private httpService: HttpGenericService,
    private _snackBar: MatSnackBar) { }

  public showMessage(message: string) {
    this._snackBar.open(message, '', { duration: 5000 });
  }
}
