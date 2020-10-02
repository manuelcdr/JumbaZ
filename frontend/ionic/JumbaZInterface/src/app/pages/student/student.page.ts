import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { Student } from 'src/app/models/Student';
import { StudentsStorageService } from 'src/app/services/students.storage.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  _new: boolean;
  _model: Student;

  constructor(private route: ActivatedRoute, private storage: StudentsStorageService, private toastController: ToastController) {
    let id = this.route.snapshot.paramMap.get('id');

    if (id == 'new') {
      this._new = true;
      this._model = new Student();
      this._model.id = Guid.create().toString();
    } else {
      this._new = false;
      this._model = this.storage.getById(id);
    }

  }

  ngOnInit() {}

  save() {
    if (this._new == true) {
      this.storage.add(this._model);
      this._new = false;
      this.presentToast('Student Added!')
    } else {
      this.storage.update(this._model);
      this.presentToast('Student Updated!')
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
