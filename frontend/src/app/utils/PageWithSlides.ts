import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

export class PageWithSlides {

  @ViewChild(IonSlides, { static: true })
  public slides: IonSlides;
  
  public slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  public segment: string;

  public slideOrder = ["class", "attendanceLists", "students"];

  constructor(slideOrder: string[], slideOpts: any = null) {
    if (slideOpts != null) this.slideOpts = slideOpts;
    this.slideOrder = slideOrder;
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
}