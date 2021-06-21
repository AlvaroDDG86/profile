import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  typedString: string[]
  @ViewChild("typed") typed: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.typedString = ['npm install<br/>^1000 `installing FrontEnd skills... `<i class="fas fa-laptop-code has-text-info"></i> <br/>^2000 `fetching from brain... `<i class="fas fa-brain has-text-info"></i> <br/>^2000 `loading Javascript skills... `<i class="fab fa-node-js has-text-info"></i> <br/>^2000 `loading CSS,HTML skills... `<i class="fas fa-code has-text-info"></i> <br/>^2000 `loading experience... `<i class="fas fa-briefcase has-text-info"></i> <br/><br/>^4000 <i class="fas fa-check has-text-success"></i> `Compiled successfully.`<br/>^500 `...`'];
  }

  onComplete() {
    window.document.querySelectorAll('.btn').forEach(element => element.classList.add('animate__animated'));
  }
}
