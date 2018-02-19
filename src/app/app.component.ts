import { CalculatePhaseService } from './calculate-phase.service';
import { GetApiInfoService } from './get-api-info.service';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  today = moment().format('MM/DD/YYYY');
  moonPhase;

  constructor(private getApiInfoService: GetApiInfoService) {
    // this.getApiInfoService.apiCall( this.today )
    //   .subscribe( x => this.moonPhase = x,
    //   err => console.log('error', err),
    //   () => console.log('finished') );
    this.changeThePhase(this.today);
    console.log('today, showphaseComp: ', this.today, ' - Phase: ', this.moonPhase);
  }

  // sendPhase(date) {
  //   this.getApiInfoService.apiCall( date ).subscribe( x => this.moonPhase = x );
  //   console.log('today, showphaseComp: ', date, ' - Phase: ', this.moonPhase);
  // }
  changeThePhase(date) {
    this.getApiInfoService.apiCall( date )
      .subscribe( x => this.moonPhase = x,
      err => console.log('error', err),
      () => console.log('finished') );
    console.log('Change the phase: ', date, ' - Phase: ', this.moonPhase);
  }

  imageSwitch() {
    let image;
    const phaseName = this.moonPhase.phase.toLowerCase();
    switch (phaseName) {
      case 'new moon':
        image = '00-nueva';
      break;
      case 'waxing crescent':
        image = '01-creciente';
      break;
      case 'first quarter':
        image = '02-cuartocreciente';
      break;
      case 'waxing gibbous':
        image = '03-crecienteconvexa';
      break;
      case 'full moon':
        image = '04-llena';
      break;
      case 'waning gibbous':
        image = '05-menguanteconvexa';
      break;
      case 'last quarter':
        image = '06-cuartomenguante';
      break;
      case 'waning crescent':
        image = '07-menguante';
      break;
    }
    return 'assets/img/lunas-png/' + image + '.png';
  }
}
