import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PackagesStorageService extends StorageService {

  constructor() {
    super('packages');
  }

}
