import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Class } from 'src/app/models/Class';
import { ClassesStorageService } from 'src/app/services/classes.storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { PageWithSlides } from 'src/app/utils/PageWithSlides';
import { AttendanceListSlideComponent } from './slides/attendanceLists/attendanceLists.slide.component';

@Component({
  selector: 'app-pack-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage extends PageWithSlides implements OnInit {

  @ViewChild(AttendanceListSlideComponent)
  private attendanceListSlide: AttendanceListSlideComponent;

  _new: boolean;
  _model: Class;

  constructor(private route: ActivatedRoute, private storage: ClassesStorageService, private toast: ToastService) {
    super(["class", "attendanceLists", "students"])
    let id = this.route.snapshot.paramMap.get('id');
    let packId = this.route.snapshot.paramMap.get('packId');

    if (id == 'new') {
      this.slideOpts.initialSlide = 0;

      this._new = true;
      this._model = new Class();
      this._model.id = Guid.create().toString();
      this._model.packId = packId;
    } else {
      this._new = false;
      this._model = this.storage.getById(id);
    }
  }

  ngOnInit(): void {
    this.updateSegment();
  }

  save() {
    if (this._new == true) {
      this.storage.add(this._model);
      this._new = false;
      this.toast.presentToast('Class Added!')
    } else {
      this.storage.update(this._model);
      this.toast.presentToast('Class Updated!')
    }
  }

  ionViewWillEnter(): void {
    this.attendanceListSlide.updateSlide();
  }

}
