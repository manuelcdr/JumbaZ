import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { MasterClass } from 'src/app/models/MasterClass';
import { MasterClassesStorageService } from 'src/app/services/masterClasses.storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { PageWithSlides } from 'src/app/utils/PageWithSlides';
import { AttendanceListSlideComponent } from './slides/attendanceLists/attendanceLists.slide.component';

@Component({
  selector: 'app-package-class',
  templateUrl: './masterClass.page.html',
  styleUrls: ['./masterClass.page.scss'],
})
export class MasterClassPage extends PageWithSlides implements OnInit {

  @ViewChild(AttendanceListSlideComponent)
  private attendanceListSlide: AttendanceListSlideComponent;

  _new: boolean;
  _model: MasterClass;

  constructor(private route: ActivatedRoute, private storage: MasterClassesStorageService, private toast: ToastService) {
    super(["class", "attendanceLists", "students"])
    let id = this.route.snapshot.paramMap.get('id');
    // let packageId = this.route.snapshot.paramMap.get('packageId');

    if (id == 'new') {
      this.slideOpts.initialSlide = 0;

      this._new = true;
      this._model = new MasterClass(Guid.create().toString());
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
