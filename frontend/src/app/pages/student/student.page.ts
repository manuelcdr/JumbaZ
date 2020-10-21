import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { Student } from 'src/app/models/Student';
import { StudentAccount } from 'src/app/models/StundetAccount';
import { StudentAccountStorageService } from 'src/app/services/studentAccount.storage.service';
import { StudentsStorageService } from 'src/app/services/students.storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { PageWithSlides } from 'src/app/utils/PageWithSlides';
import { PackagesSlideComponent } from './slides/packages/packages.slide.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage extends PageWithSlides implements OnInit {

  @ViewChild(PackagesSlideComponent)
  private packagesComponent: PackagesSlideComponent;

  _new: boolean;
  _model: Student;

  constructor(
    private route: ActivatedRoute,
    private storage: StudentsStorageService,
    private accountStorage: StudentAccountStorageService,
    private toast: ToastService) {
    super(["edit", "account", "packages"]);

    let id = this.route.snapshot.paramMap.get('id');

    if (id == 'new') {
      this._new = true;
      this._model = new Student(Guid.create().toString());
    } else {
      this._new = false;
      this._model = this.storage.getById(id);
    }

  }

  ngOnInit() { }

  save() {
    if (this._new == true) {
      this.storage.add(this._model);
      this.accountStorage.add(new StudentAccount(this._model.id, 0, []));
      this._new = false;
      this.toast.presentToast('Student Added!')
    } else {
      this.storage.update(this._model);
      this.toast.presentToast('Student Updated!')
    }
  }

  ionViewWillEnter(): void {
    this.packagesComponent.updateSlide();
  }
}
