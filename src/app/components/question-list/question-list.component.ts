import { FaqService } from './../../services/faq-service/faq.service';
import { faq } from './../../models/faq.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  questions: faq[] = [];

  constructor(public faqService: FaqService) { 
    
  }

  getQuestions(){
    this.questions = JSON.parse(JSON.stringify(this.faqService.getData()));    
  }

  ngOnInit() {
    this.getQuestions();
  }

  addQuestion(question: faq){
    this.faqService.addData(question);    
    this.getQuestions();
  }

}
