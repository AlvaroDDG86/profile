import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output()
  onClose = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.onClose.emit(null);
  }
}
