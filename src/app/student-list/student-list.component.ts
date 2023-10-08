// student-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { Internship } from '../internship.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  newStudent: Student = new Student();
  isEditing: boolean = false;
  selectedStudent: Student | null = null;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  addOrUpdateStudent() {
    if (this.isEditing && this.selectedStudent) {
      this.selectedStudent.name = this.newStudent.name;
      this.selectedStudent.lastname = this.newStudent.lastname;
      this.selectedStudent.lastname = this.newStudent.lastname;
      this.selectedStudent.indeks = this.newStudent.indeks;
      this.selectedStudent.odsjek = this.newStudent.odsjek;
      this.selectedStudent.smjer = this.newStudent.smjer;
      this.selectedStudent.semestar = this.newStudent.semestar;
      this.selectedStudent.year = this.newStudent.year;
      this.selectedStudent.internship_type = this.newStudent.internship_type;
      this.selectedStudent.internship_status =
        this.newStudent.internship_status;
      this.selectedStudent.internship_companyName =
        this.newStudent.internship_companyName;
      this.selectedStudent.internship_topic = this.newStudent.internship_topic;
      this.selectedStudent.internship_comment =
        this.newStudent.internship_comment;
      this.studentService.editStudent(this.selectedStudent);
      this.isEditing = false;
    } else {
      this.studentService.addStudent(this.newStudent);
    }
    this.clearForm();
  }

  editStudent(student: Student) {
    this.isEditing = true;
    this.selectedStudent = student; // Use the selected student directly
    this.newStudent = { ...student }; // Pre-fill the form with the selected student's data
  }

  deleteStudent(studentId: number | undefined) {
    if (studentId !== undefined) {
      this.studentService.deleteStudent(studentId);
      this.clearForm();
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.clearForm();
  }

  clearForm() {
    this.newStudent = new Student();
    this.selectedStudent = null;
  }
}
