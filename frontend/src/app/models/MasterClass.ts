import { Class } from './Class';
import { Student } from './Student';

export class MasterClass {
  public id: string;
  public name: string;
  public packageId: string;
  public date: Date;
  public description: string;
  
  public studentsId: string[];
  public classesId: string[]

}