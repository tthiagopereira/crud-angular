import {Injectable} from "@angular/core";
import axios from "axios";


@Injectable({
  providedIn: 'root'
})

export class AxiosService {

  url: string = "http://localhost:3003/user";
  token: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJjNjhhZDllNDNiNGI3ODZkNDE3MWQiLCJ1c2VybmFtZSI6InRoaWFnbyIsInNjb3BlcyI6WyJhZG1pbiJdLCJpYXQiOjE2NTc3MjEwOTEsImV4cCI6MTY1Nzc2NDI5MX0.f95QfYwXQpAD9HjZDyYnNzOjfioTFl4ZUEHUPT6Pzkw';

  headers = {
    accept: 'application/json',
    Authorization: 'bearer ' + this.token
  }

  constructor() {

  }

  async index() {
    return axios.get(this.url, {headers: this.headers}).then(res => {
      return res.data;
    }).catch((error) => {console.log(error)});
  }


  async store({username, scopes, password}:{username: string, scopes: string, password: string}) {

    return axios.post(this.url,{
      username: username,
      password: password,
      scopes: [scopes]
    }, {headers: this.headers}).then(res => console.log(res));
  }

  async delete(id: string) {
    const url = this.url+'/'+id;
    console.log(url)
    return axios.delete(url, {headers: this.headers}).then(res => console.log(res))
  }

}
