import { FaqService } from './../../services/faq-service/faq.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { faq } from './../../models/faq.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question: faq;
  @Output() removeEvent = new EventEmitter<String>();
  constructor(public faqService: FaqService) { }

  ngOnInit() {
  }

  removeQuestion(question: string){
    this.faqService.removeData(question);
    this.removeEvent.emit('removeQuestion');
  }

}
