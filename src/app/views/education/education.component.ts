import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  showModal: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  selectItem() {
    this.showModal = true;
  }

}
