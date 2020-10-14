import { Class } from './Class';
import { Student } from './Student';

export class MasterClass {
  constructor(
    public id: string,
    public name: string = null,
    public description: string = null,
    public singleValue: number = 0,
    public classesId: string[] = []
  ) { }

}