import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pack } from 'src/app/models/Pack';
import { PacksStorageService } from 'src/app/services/packs.storage.service';

@Component({
  selector: 'app-packs-slide',
  templateUrl: './packs.slide.component.html',
  styleUrls: ['./packs.slide.component.scss'],
})
export class PacksSlideComponent implements OnInit {

  @Output() packCount = new EventEmitter<number>();

  public packs: Pack[];

  constructor(private storage: PacksStorageService) {}

  ngOnInit(): void {
    this.updateSlide();
  }

  public updateSlide(): void {
    this.packs = this.storage.getAll();
    this.packCount.emit(this.packs.length);
  }
}