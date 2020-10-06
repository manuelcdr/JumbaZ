import { Class } from './Class';
import { Student } from './Student';

export class Pack {
  public id: string;
  public name: string;
  public description: string;
  public type: PackType;
  public price: Number;
  public quantity: Number;

  public allClasses: Boolean;  
  public classesId: string[];
}

enum PackType {
  PerDay,
  PerClass
}