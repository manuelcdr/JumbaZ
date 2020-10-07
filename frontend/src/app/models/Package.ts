import { MasterClass } from './MasterClass';
import { Student } from './Student';

export class Package {
  public id: string;
  public name: string;
  public description: string;
  

  public allMasterClasses: Boolean;  
  public masterClassesId: string[];
}

