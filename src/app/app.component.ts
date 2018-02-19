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
    this.sendPhase(this.today);
  }

  sendPhase(date) {
    this.getApiInfoService.apiCall( date ).subscribe( x => this.moonPhase = x );
    console.log('today, showphaseComp: ', date);
  }
  changeThePhase(date) {
    this.getApiInfoService.apiCall( date ).subscribe( x => this.moonPhase = x );
    console.log('Change the phase: ', date);
  }

  
  imageSwitch() {
    return 'assets/img/lunas-png/04-llena.png';
  }
}
