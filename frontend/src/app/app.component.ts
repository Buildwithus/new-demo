import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WeatherserviceService } from './services/weatherservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private service:WeatherserviceService){}
  title = 'frontend';
  inputdata=new FormGroup({
    cityname: new FormControl('lucknow')
  })
  cityName:any
  ngOnInit(): void {
    this.onsubmit();
  }
  onsubmit(){
    this.cityName=this.inputdata.controls.cityname.value;
    this.getdata(this.cityName)
  }
  alldata:any;
  getdata(cityname:any){
    this.service.getweatherdata(cityname).subscribe((data)=>{
      this.alldata=data;
      console.log(this.alldata.cod)
    })
  }
}
