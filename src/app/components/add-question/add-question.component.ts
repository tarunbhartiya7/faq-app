import { faq } from './../../models/faq.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  faq: faq = { question: '', answer: '' , hide: true};
  @Output() questionAdded = new EventEmitter<faq>();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f){
    // this.faq.hide = true;
    this.questionAdded.emit(this.faq);
  }

}
