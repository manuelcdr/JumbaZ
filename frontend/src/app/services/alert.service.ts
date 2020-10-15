import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }


  public async present(
    message: string,
    buttons: any[] = [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok');
        }
      }]) {
    const alert = await this.alertController.create({
      header: message,
      buttons: buttons
    });

    await alert.present();
  }
}

export class AlertButton {
  constructor(
    public text: string,
    public role: string = undefined,
    public cssClass: string = undefined,
    public handler: Function = undefined
  ){}

  public static createCancelButton(cssClass: string = 'secondary', handler: Function = undefined) {
    return new AlertButton('Cancelel', 'cancel', cssClass, handler);
  }

  public static createOkButton(cssClass: string = undefined, handler: Function = undefined) {
    return new AlertButton('Okay', null, cssClass, handler);
  }
}