import { Pack } from './Pack';
import { Student } from './Student';

export class User {
  public packsId: string[];
  public studentsId: string[];

  public packs: Pack[];
  public students: Student[];
}