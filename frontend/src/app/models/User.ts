import { Package } from './Package';
import { Student } from './Student';

export class User {
  constructor(
    public packagesId: string[] = [],
    public studentsId: string[] = [],

    public packages: Package[] = [],
    public students: Student[] = [],
  ) { }
}