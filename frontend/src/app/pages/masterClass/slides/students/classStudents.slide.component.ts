import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { StudentsStorageService } from 'src/app/services/students.storage.service';
import { first } from 'rxjs/operators';
import { MasterClass } from 'src/app/models/MasterClass';
import { MasterClassesStorageService } from 'src/app/services/masterClasses.storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-students-slide',
  templateUrl: './classStudents.slide.component.html',
  styleUrls: ['./classStudents.slide.component.scss'],
})
export class ClassStudentsSlideComponent implements OnInit {

  @Input()
  masterClass: MasterClass;

  matriculedStudents: Student[];


  //search-----------------------
  studentsForSearch: Student[];
  filteredStudents: Student[];
  searchTerm: string;
  searchType: string = "all";
  //------------------------------

  constructor(private studentsStorage: StudentsStorageService, private classStorage: MasterClassesStorageService, private toast: ToastService) {
  }

  ngOnInit() {

    this.studentsForSearch = this.studentsStorage.getAll();
    this.filteredStudents = this.studentsForSearch;
    // this.matriculedStudents = this.studentsStorage.getByArrayId(this.masterClass.studentsId);

    // if (!this.masterClass.studentsId) this.masterClass.studentsId = [];

  }

  ionViewDidLoad() {
    this.filterItems();
  }

  filterItems() {
    let forSearch = this.studentsForSearch;
    if (this.searchType == 'in') {
      forSearch = this.studentsForSearch.filter((item) => this.isStudentClass(item.id));
    }
    if (this.searchType == 'out') {
      forSearch = this.studentsForSearch.filter((item) => !this.isStudentClass(item.id));
    }

    if (!this.searchTerm) {
      this.filteredStudents = forSearch;
      return;
    }

    this.filteredStudents = forSearch.filter(
      (item) => item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  isStudentClass(id: string): boolean {
    // if (!this.masterClass.studentsId) return false;
    // return this.masterClass.studentsId.includes(id);
    return false;
  }

  // registerStudent(studentId: string) {
  //   this.masterClass.studentsId.push(studentId);
  //   this.classStorage.updateRegisteredStudents(this.masterClass.id, this.masterClass.studentsId);
  //   this.toast.presentToast('Student registered!')
  // }

  // unRegisterStudent(studentId: string) {
  //   let index = this.masterClass.studentsId.findIndex(x => x === studentId);
  //   this.masterClass.studentsId.splice(index, 1);
  //   this.classStorage.updateRegisteredStudents(this.masterClass.id, this.masterClass.studentsId);
  //   this.toast.presentToast('Student unregistered!')
  // }

}
