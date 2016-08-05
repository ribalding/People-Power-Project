import {Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import {LoginService} from './login.service';

@Component({
  selector: 'data-display',
  providers: [LoginService],
  template: `
  <div class="header">
    <h1 class="title">Test Temperture Scanner</h1>
    <h4 class="connected">Connected</h4>
  </div>
  <div class="battery">
    <h4 class="batteryTitle">Battery Level</h4>
    <div class="batteryMeter">100%</div>
  </div>
  <div class="tempertureSensorBar">
    <h3 class="tempertureSensor">Temperture Sensor</h3>
    <h4 class="currentTemp">Current Temperture is 13 C</h4>
  </div>
  `

})

export class DataDisplayComponent implements OnInit{
  key: string = 'WoOpDxqbp9ghYEvom3HCkuUWs11etTU0RViSt_PESb4HAX5GqHrcpmj1LI9hV0Yd';
  constructor(private loginService: LoginService){}

  ngOnInit(){
    //  this.loginService.getDeviceData(this.key).subscribe(
    //      (x) => {
    //         console.log(x.devices[4]);
    //       },
    //       function(err){},
    //       function(){}
    //    )
     this.loginService.getDeviceHistory(this.key).subscribe(
       (y) => {
         console.log(y);
       },
       function(err){},
      function(){}
     ) };


  }
