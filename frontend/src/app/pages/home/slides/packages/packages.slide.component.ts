import { Component, OnInit } from '@angular/core';
import { Package } from 'src/app/models/Package';
import { PackagesStorageService } from 'src/app/services/packages.storage.service';

@Component({
  selector: 'app-packages-slide',
  templateUrl: './packages.slide.component.html',
  styleUrls: ['./packages.slide.component.scss'],
})
export class PackagesSlideComponent implements OnInit {


  public packages: Package[];

  constructor(private storage: PackagesStorageService) {}

  ngOnInit(): void {
    this.updateSlide();
  }

  public updateSlide(): void {
    this.packages = this.storage.getAll();
  }
}