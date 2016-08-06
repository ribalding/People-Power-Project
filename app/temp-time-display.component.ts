import { Component } from 'angular2/core';

@Component({
  selector: 'temp-time-display',
  inputs: ['time'],
  template: `
    <h4>{{time}}</h4>
  `

})

export class TempTimeDisplayComponent{
  public time: string;
  constructor(){}
}
