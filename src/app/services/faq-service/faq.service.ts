import { faq } from './../../models/faq.model';
import { Injectable } from '@angular/core';

@Injectable()
export class FaqService {
  questions: faq[];

  constructor() {
    // this.questions = [
    //   {
    //     question: 'What is your favourite color?',
    //     answer: 'my favourite color is red',
    //     hide: true
    //   },
    //   {
    //     question: 'What is your favourite fruit?',
    //     answer: 'my favourite fruit is apple',
    //     hide: true
    //   }
    // ];
  }

  getData() {
    if (!localStorage.getItem('questions'))
      this.questions = [];
    else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }

  addData(question: faq) {
    let temp = JSON.parse(JSON.stringify(question));
    let questions;
    if (!localStorage.getItem('questions')){
      questions = [];
    } else {
        questions = JSON.parse(localStorage.getItem('questions'));    
    }
    questions.unshift(temp);
    localStorage.setItem('questions', JSON.stringify(questions)); 
  }

  removeData(text: string) {
    let questions;
    let counter = 0;
    for (let question of this.questions) {
      if (question.question === text){
        questions = JSON.parse(JSON.stringify(this.questions)) ;
        questions.splice(counter, 1);
        localStorage.setItem('questions', JSON.stringify(questions)); 
      }
      counter++;
    }
  }

}
