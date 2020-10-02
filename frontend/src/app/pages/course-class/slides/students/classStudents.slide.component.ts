import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { StudentsStorageService } from 'src/app/services/students.storage.service';
import { first } from 'rxjs/operators';
import { CourseClass } from 'src/app/models/CourseClass';
import { ClassesStorageService } from 'src/app/services/classes.storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-students-slide',
  templateUrl: './classStudents.slide.component.html',
  styleUrls: ['./classStudents.slide.component.scss'],
})
export class ClassStudentsSlideComponent implements OnInit {

  @Input()
  courseClass: CourseClass;

  matriculedStudents: Student[];


  //search-----------------------
  studentsForSearch: Student[];
  filteredStudents: Student[];
  searchTerm: string;
  searchType: string = "all";
  //------------------------------

  constructor(private studentsStorage: StudentsStorageService, private classStorage: ClassesStorageService, private toast: ToastService) {
  }

  ngOnInit() {

    this.studentsForSearch = this.studentsStorage.getAll();
    this.filteredStudents = this.studentsForSearch;
    this.matriculedStudents = this.studentsStorage.getByArrayId(this.courseClass.studentsId);

    if (!this.courseClass.studentsId) this.courseClass.studentsId = [];

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

  isStudentClass(id: string) {
    if (!this.courseClass.studentsId) return false;
    return this.courseClass.studentsId.includes(id);
  }

  registerStudent(studentId: string) {
    this.courseClass.studentsId.push(studentId);
    this.classStorage.updateRegisteredStudents(this.courseClass.id, this.courseClass.studentsId);
    this.toast.presentToast('Student registered!')
  }

  unRegisterStudent(studentId: string) {
    let index = this.courseClass.studentsId.findIndex(x => x === studentId);
    this.courseClass.studentsId.splice(index, 1);
    this.classStorage.updateRegisteredStudents(this.courseClass.id, this.courseClass.studentsId);
    this.toast.presentToast('Student unregistered!')
  }

}
