import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http:HttpClient) { }

  getweatherdata(cityname:any){
    return this.http.get(`http://localhost:4000/${cityname}`)
  }
}
