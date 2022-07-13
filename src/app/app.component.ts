import { Component } from '@angular/core';
import {TemplateService} from "./template-service/template.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private service: TemplateService) {}

  save($event: any) {
    this.service.save($event)
  }
}
