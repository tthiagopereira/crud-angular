import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() {}

  @Output() aoSave = new EventEmitter<any>();

  name: string;
  password: string;
  scopes: string;

  ngOnInit(): void {
  }

  submit() {
    const user = {name: this.name, password: this.password, scopes: this.scopes}
    this.aoSave.emit(user)
    this.clearInputs();
  }

  clearInputs() {
    this.name = '';
    this.password = '';
    this.scopes = '';
  }
}
