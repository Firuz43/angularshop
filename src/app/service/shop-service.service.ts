import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService {

  //There is some problem with httpclient
  constructor(private http: HttpClient) { }


  //fetching data from database
  fetchData() {
    return this.http.get("http://localhost:8484/api/findall")
  }
}
