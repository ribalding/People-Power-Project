import {Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import {DeviceDataService} from './device-data.service';
import {TempHistoryDisplayComponent} from './temp-history-display.component';
import {TempTimeDisplayComponent} from './temp-time-display.component';

@Component({
  selector: 'data-display',
  providers: [DeviceDataService],
  template: `
  <div class="header">
    <h1 class="title">Test Temperture Scanner</h1>
    <h4 class="connected">Connected</h4>
  </div>
  <div class="battery">
    <h4 class="batteryTitle">Battery Level</h4>
    <div class="batteryMeter">{{batteryLevel}}%</div>
  </div>
  <div class="tempSensorBar">
    <h3 class="tempSensor">Temperture Sensor</h3>
    <h4 class="currentTemp">Current Temperture is {{currentTemp}} C</h4>
  </div>
    <div class="historyChart">
      <h3 class="historyChartHeader">History Chart</h3>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-5">
          <h4 class="chartHeaders">Date/Time</h4>
          <temp-time-display *ngFor="#currentTime of tempTimes" [time]='currentTime'></temp-time-display>
        </div>
        <div class="col-xs-4">
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
  temps = [];
  tempTimes = [];
  batteryLevel: string;
  currentTemp: string;
  constructor(private deviceDataService: DeviceDataService){}

  ngOnInit(){

     this.deviceDataService.getDeviceHistory().subscribe(
       (device) => {
         this.batteryLevel = device.readings[0].params[0].value;
         this.currentTemp = device.readings[0].params[1].value;
         for (var i = 1; i < 30; i ++){
           this.temps.push(device.readings[i].params[0].value);
           this.tempTimes.push(device.readings[i].timeStamp);
         }
       }
     ) };

  }
