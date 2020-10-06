import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { StudentsStorageService } from 'src/app/services/students.storage.service';
import { first } from 'rxjs/operators';
import { Class } from 'src/app/models/Class';
import { ClassesStorageService } from 'src/app/services/classes.storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-students-slide',
  templateUrl: './classStudents.slide.component.html',
  styleUrls: ['./classStudents.slide.component.scss'],
})
export class ClassStudentsSlideComponent implements OnInit {

  @Input()
  $class: Class;

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
    this.matriculedStudents = this.studentsStorage.getByArrayId(this.$class.studentsId);

    if (!this.$class.studentsId) this.$class.studentsId = [];

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
    if (!this.$class.studentsId) return false;
    return this.$class.studentsId.includes(id);
  }

  registerStudent(studentId: string) {
    this.$class.studentsId.push(studentId);
    this.classStorage.updateRegisteredStudents(this.$class.id, this.$class.studentsId);
    this.toast.presentToast('Student registered!')
  }

  unRegisterStudent(studentId: string) {
    let index = this.$class.studentsId.findIndex(x => x === studentId);
    this.$class.studentsId.splice(index, 1);
    this.classStorage.updateRegisteredStudents(this.$class.id, this.$class.studentsId);
    this.toast.presentToast('Student unregistered!')
  }

}
