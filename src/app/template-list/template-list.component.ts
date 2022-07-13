import {Component, OnInit} from '@angular/core';
import {TemplateService} from "../template-service/template.service";

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})

export class TemplateListComponent implements OnInit {
  list:any = {}

  constructor(private service: TemplateService) {}

  async ngOnInit(): Promise<void> {
    this.list = await this.service.index;
    console.log(this.list)
  }

  public async removeList(id: string) {
    await this.service.delete(id)
  }

}
