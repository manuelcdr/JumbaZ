import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor(private _snackBar: MatSnackBar) { }

  public show(message: string) {
    this._snackBar.open(message, '', { duration: 5000 });
  }
}
