import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GetApiInfoService {

  constructor( public network: HttpClient ) {
  }

  apiCall(_date) {
    console.log(_date);
    return this.network.get('http://api.usno.navy.mil/moon/phase?date=' + _date + '&nump=1')
      .map(x => x = x.phasedata[0].phase);
  }
}
