import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentAccount } from 'src/app/models/StundetAccount';
import { StudentAccountStorageService } from 'src/app/services/studentAccount.storage.service';

@Component({
  selector: 'app-account-slide',
  templateUrl: './account.slide.component.html',
  styleUrls: ['./account.slide.component.scss'],
})
export class StudentAccountComponent implements OnInit {


  @Input()
  public student: Student;

  public studentAccount: StudentAccount;

  constructor(private accountStorage: StudentAccountStorageService) { }

  ngOnInit() {
    let account = this.accountStorage.getById(this.student.id);
    console.log('component', this.student.id, account);
    if (!account) {
      let newAccount = new StudentAccount(this.student.id, 0, []);
      this.accountStorage.add(new StudentAccount(this.student.id, 0, []));
      account = newAccount;
    }
    this.studentAccount = account;
  }

}
