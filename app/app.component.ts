import {Component } from 'angular2/core';
import './rxjs-operators';
import { HTTP_PROVIDERS } from 'angular2/http';
import {HTTP_BINDINGS, Http} from 'angular2/http';
import {DataDisplayComponent} from './data-display.component';

@Component({
  selector: 'my-app',
  providers: [ HTTP_PROVIDERS ],
  template:`
    <div class="container">
      <data-display></data-display>
    </div>
  `,
  directives: [DataDisplayComponent]

})

export class AppComponent{
  constructor(){}
}
