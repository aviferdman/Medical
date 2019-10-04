import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Patient {
  ID: string;
  firstName: string;
  lastName: string;
  age: number;

  constructor(id: string, firstname: string, lastname: string, newAge: number) {
    this.ID = id;
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = newAge;
  }
}
export class QuestionAndAnswer {
  question: string;
  answer: string;

  constructor(question: string, answer: string) {
    this.question = question;
    this.answer = answer;
  }
}

export class Group {
  type: string;

  constructor(type: string) {
  this.type = type;
  }
}
export class Service1Service {
  patient: Patient;
  constructor() {
  }
}
