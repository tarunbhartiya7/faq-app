import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {
  ques1 = 'What is your favourite language?';
  ans1 = 'my favourite language is English';
  ques2 = 'What is your favourite color?';
  ans2 = 'my favourite color is red';
  showAnswer: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
