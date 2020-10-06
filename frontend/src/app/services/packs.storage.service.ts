import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PacksStorageService extends StorageService {

  constructor() {
    super('packs');
  }

}
