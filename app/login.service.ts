import { Injectable }     from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Headers, RequestOptions } from 'angular2/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()

export class LoginService {
  constructor (private http: Http){}


  private devicesURL = 'http://sbox.presencepro.com/espapi/cloud/json/devices?deviceId=SIM_TEST_10033_01&API_KEY=';
  private deviceHistoryURL = 'http://sbox.presencepro.com/espapi/cloud/json/devices/SIM_TEST_10033_01/parametersByCount/50?API_KEY=';


  getDeviceData(key: string): Observable<any>{
    return this.http.get(this.devicesURL + key)
                    .map(this.extractData);
  }

  getDeviceHistory(key: string): Observable<any>{
    return this.http.get(this.deviceHistoryURL + key)
                    .map(this.extractData);
  }

  extractData(res: Response) {
    let body = res.json();
    return body;
  }
}
