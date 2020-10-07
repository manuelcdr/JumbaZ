import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { Package } from 'src/app/models/Package';
import { PackagesStorageService } from 'src/app/services/packages.storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { ClassesSlideComponent } from './slides/classesSlide/classes.slide.component';

@Component({
  selector: 'app-package',
  templateUrl: './package.page.html',
  styleUrls: ['./package.page.scss'],
})
export class PackagePage implements OnInit {

  @ViewChild(IonSlides, {static: true})
  private slides: IonSlides;

  @ViewChild(ClassesSlideComponent)
  private classesSlide: ClassesSlideComponent;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  segment: string;
  slideOrder = ["package", "classes"];

  _new: boolean;
  _model: Package;

  constructor(private route: ActivatedRoute, private storage: PackagesStorageService, private toast: ToastService) {
    let id = this.route.snapshot.paramMap.get('id');

    if (id == 'new') {
      this.slideOpts.initialSlide = 0;

      this._new = true;
      this._model = new Package();
      this._model.id = Guid.create().toString();
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
      this.toast.presentToast('Package Added!')
    } else {
      this.storage.update(this._model);
      this.toast.presentToast('Package Atualizado!')
    }
  }

  updateSlide() {
    let index = this.slideOrder.indexOf(this.segment);
    this.slides.slideTo(index);
  }

  updateSegment() {
    this.slides.getActiveIndex().then(index => {
      this.segment = this.slideOrder[index];
    });
  }

  ionViewWillEnter():void {
    this.classesSlide.updateSlide();
  }

}
