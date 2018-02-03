import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GetApiInfoService {

  lat = 40.489354;
  lon = -3.682746;

  constructor( public network: HttpClient ) {
  }

  apiCall(_date) {
    console.log(_date);
    // return this.network.get('http://api.usno.navy.mil/moon/phase?date=' + _date + '&nump=1')
    //   .map(x => x = x.phasedata[0].phase);

    return this.network.get('http://api.usno.navy.mil/rstt/oneday?date=' + _date + '&coords=' + this.lat + ',' + this.lon + '&tz=1')
      .map ( x =>
        x = {
        'phase': x.curphase ? x.curphase : x.closestphase.phase,
        'percent': x.fracillum ? x.fracillum : this.calculatePercent(x.closestphase.phase)
        }
      );
  }

  calculatePercent(_phase) {
    console.log(_phase);
    let percent;
    switch (_phase) {
      case 'New Moon':
        percent = '0-2%';
      break;
      case 'Full Moon':
        percent = '97-100%';
      break;
      case 'First Quarter':
        percent = '50%';
      break;
      case 'Last Quarter':
        percent = '50%';
      break;
    }
    return percent;
  }
}
