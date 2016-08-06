import { Component } from 'angular2/core';

@Component({
  selector: 'temp-history-display',
  inputs: ['temp'],
  template: `
    <h4>{{temp}} Celsius</h4>
  `

})

export class TempHistoryDisplayComponent{
  public temp: string;
  constructor(){}
}
