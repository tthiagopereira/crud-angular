import { Injectable } from '@angular/core';
import {AxiosService} from "../../service/Axios.service";

@Injectable({
  providedIn: 'root'
})
export class TemplateService {


  constructor(public axios: AxiosService) {
  }

  get index() {
    return this.axios.index().then(res => {
      return res;
    })
  }

  save(user: any) {
    const save = this.axios.store({
      username: user.name,
      scopes: user.scopes,
      password: user.password
    })

    return save;
  }

  update(user: any) {

  }

  getAll() {

  }

  public delete(id: string) {
    return this.axios.delete(id)
  }
}
