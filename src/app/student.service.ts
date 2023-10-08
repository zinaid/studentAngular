// student.service.ts

import { Injectable } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [];
  private nextId: number = 1;

  constructor() {}

  // Add a new student
  addStudent(student: Student): void {
    student.id = this.nextId++;
    this.students.push(student);
  }

  // Edit an existing student
  editStudent(student: Student): void {
    const index = this.students.findIndex((s) => s.id === student.id);
    if (index !== -1) {
      this.students[index] = student;
    }
  }

  // Get the list of all students
  getStudents(): Student[] {
    return this.students;
  }

  // Get a student by ID
  getStudentById(id: number): Student | undefined {
    return this.students.find((s) => s.id === id);
  }

  // Delete a student by ID
  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }
}
