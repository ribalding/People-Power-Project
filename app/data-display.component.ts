import {Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import {LoginService} from './login.service';
import {TempHistoryDisplayComponent} from './temp-history-display.component';
import {TempTimeDisplayComponent} from './temp-time-display.component';

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
    <div class="batteryMeter">{{batteryLevel}}%</div>
  </div>
  <div class="tempertureSensorBar">
    <h3 class="tempertureSensor">Temperture Sensor</h3>
    <h4 class="currentTemp">Current Temperture is {{currentTemp}} C</h4>
  </div>
    <div class="historyChart">
      <h3 class="historyChartHeader">History Chart</h3>
      <div class="row">
        <div class="col-sm-offset-2 col-sm-5">
          <h4 class="chartHeaders">Date/Time</h4>
          <temp-time-display *ngFor="#currentTime of tempTimes" [time]='currentTime'></temp-time-display>
        </div>
        <div class="col-sm-4">
          <h4 class="chartHeaders">Temperture</h4>
          <temp-history-display *ngFor="#currentTemp of temps" [temp]='currentTemp'></temp-history-display>
        </div>
      </div>
    </div>
    <div class="battery">
      <h4 class="batteryMeter">Load More History</h4>
    </div>

  `,
  directives: [TempHistoryDisplayComponent, TempTimeDisplayComponent]

})

export class DataDisplayComponent implements OnInit{
  key: string = 'WoOpDxqbp9ghYEvom3HCkuUWs11etTU0RViSt_PESb4HAX5GqHrcpmj1LI9hV0Yd';
  temps = [];
  tempTimes = [];
  batteryLevel: string;
  currentTemp: string;
  constructor(private loginService: LoginService){}

  ngOnInit(){

     this.loginService.getDeviceHistory(this.key).subscribe(
       (y) => {
         this.batteryLevel = y.readings[0].params[0].value;
         this.currentTemp = y.readings[0].params[1].value;
         for (var i = 1; i < 30; i ++){
           this.temps.push(y.readings[i].params[0].value);
           this.tempTimes.push(y.readings[i].timeStamp);
         }
       },
       function(err){},
      function(){}
     ) };


  }
