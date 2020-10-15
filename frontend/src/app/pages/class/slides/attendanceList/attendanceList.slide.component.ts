import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentsStorageService } from 'src/app/services/students.storage.service';
import { MasterClass } from 'src/app/models/MasterClass';
import { MasterClassesStorageService } from 'src/app/services/masterClasses.storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { ClassesStorageService } from 'src/app/services/classes.storage.service';
import { PackagesStorageService } from 'src/app/services/packages.storage.service';
import { PurchasesStorageService } from 'src/app/services/purchases.storage.service';
import { Attendance, Class } from 'src/app/models/Class';

@Component({
  selector: 'app-attendance-students-slide',
  templateUrl: './attendanceList.slide.component.html',
  styleUrls: ['./attendanceList.slide.component.scss'],
})
export class AttendanceListSlideComponent implements OnInit {

  @Input()
  masterClass: MasterClass;

  @Input()
  _class: Class;

  matriculedStudents: Student[];
  matriculedStudentsIds: string[] = [];

  //search-----------------------
  studentsForSearch: Student[];
  filteredStudents: Student[];
  searchTerm: string;
  searchType: string = "all";
  //------------------------------

  constructor(
    private studentsStorage: StudentsStorageService,
    private masterClassStorage: MasterClassesStorageService,
    private packagesStorage: PackagesStorageService,
    private purchasesStorage: PurchasesStorageService,
    private classStorage: ClassesStorageService,
    private toast: ToastService) {
  }

  ngOnInit() {
    this.updateSlide();
  }

  updateSlide() {
    this.studentsForSearch = this.studentsStorage.getAll();
    this.filteredStudents = this.studentsForSearch;

    let classPackages = this.packagesStorage.getByMasterClass(this.masterClass.id);
    let packagesIds = classPackages.map(x => x.id);
    let packagesPurchases = this.purchasesStorage.getCurrentPurchasesByPackages(packagesIds);
    let studentsIds = packagesPurchases.map(x => x.studentId);

    this.matriculedStudentsIds = studentsIds;
    this.matriculedStudents = this.studentsStorage.getByArrayId(studentsIds);

    if (this._class.attendanceList?.length <= 0) {
      this._class.attendanceList = [];
      this.studentsForSearch.forEach(x => {
        this._class.attendanceList.push(new Attendance(x.id, false, !this.isStudentClass(x.id)));
      })
    }
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

  inAttendance(studentId: string) {
    if (this.isStudentClass(studentId)) return true;
    if (this.visitorIndex(studentId) >= 0) return true;
  }

  isStudentClass(id: string): boolean {
    return this.matriculedStudentsIds.includes(id);
  }

  visitorIndex(studentId: string): number {
    let index = -1;
    this._class.attendanceList.filter((x, i) => {
      let value = x.studentId == studentId && x.visitor;
      if (value) index = i;
      return value;
    });
    return index;
  }

  isChecked(studentId: string) {
    let value = false;
    if (this.inAttendance(studentId)) {
      value = this._class.attendanceList.find(x => x.studentId == studentId).isAttendant;
    }
    console.log('isChecked', studentId, value);
    return value;
  }

  hideStudent(student: Student) {
    return this.filteredStudents.findIndex(x => x.id == student.id) < 0;
  }

  // toggleStudent(student: Student) {

  //   let done = false;

  //   if (this.isStudentClass(student.id)) {
  //     let modifiedAttendance: Attendance;
  //     let index: number;
  //     this._class.attendanceList.every((x, i) => {
  //       if (x.studentId == student.id) {
  //         x.isAttendant = !x.isAttendant;
  //         modifiedAttendance = x;
  //         index = i;
  //         return false;
  //       }
  //       return true;
  //     })
  //     this._class.attendanceList[index] = modifiedAttendance;
  //     done = true;
  //   }

  //   let indexVisitor = this.visitorIndex(student.id);
  //   if (!done && indexVisitor >= 0) {
  //     this._class.attendanceList.splice(indexVisitor, 1);
  //     this.toast.presentToast(`${student.name} removido a lista de presença`);
  //     done = true;
  //   }

  //   if (!done) {
  //     let visitor = new Attendance(student.id, true, true);
  //     this._class.attendanceList.push(visitor);
  //     this.toast.presentToast(`${student.name} adicionado a lista de presença`);
  //     done = true;
  //   }

  //   this.save();
  // }

  save(seconds: number = 1) {
    setTimeout(() => {
      console.log(this._class.attendanceList);
      this.classStorage.updateAttendanceList(this._class.id, this._class.attendanceList);
    }, seconds * 1000);
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
