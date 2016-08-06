import { Injectable }     from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Headers, RequestOptions } from 'angular2/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()

export class DeviceDataService {
  constructor (private http: Http){}

  private deviceHistoryURL = 'http://sbox.presencepro.com/espapi/cloud/json/devices/SIM_TEST_10033_01/parametersByCount/50?API_KEY=WoOpDxqbp9ghYEvom3HCkuUWs11etTU0RViSt_PESb4HAX5GqHrcpmj1LI9hV0Yd';

  getDeviceHistory(): Observable<any>{
    return this.http.get(this.deviceHistoryURL)
                    .map(this.extractData);
  }

  extractData(res: Response) {
    let body = res.json();
    return body;
  }
}
