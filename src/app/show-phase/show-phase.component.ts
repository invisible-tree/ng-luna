import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { GetApiInfoService } from '../get-api-info.service';


@Component({
  selector: 'app-show-phase',
  templateUrl: './show-phase.component.html',
  styleUrls: ['./show-phase.component.scss']
})
export class ShowPhaseComponent implements OnInit {
  today = moment().format('MM/DD/YYYY');
  moonPhase;

  constructor(private getApiInfoService: GetApiInfoService) {
    this.sendPhase(this.today);
  }

  ngOnInit() {
    // this.getApiInfoService.changePhase.subscribe( x => this.moonPhase = {
    //   'phase': x.phase,
    //   'percent': x.percent
    // } );
    // console.log(this.moonPhase);
  }

  sendPhase(date) {
    this.getApiInfoService.apiCall( date ).subscribe( x => this.moonPhase = x );
    console.log('today, showphaseComp: ', date);
  }
  public changeThePhase(date) {
    console.log(date);
    // this.getApiInfoService.apiCall( date ).subscribe( x => this.moonPhase = x );
    // console.log('today, showphaseComp: ', date);
  }
  // public changePhase(_moonPhase) {
  //   // console.log('change phase: ' + _moonPhase.phase);
  //   this.moonPhase = {
  //     'phase': _moonPhase.phase,
  //     'percent': _moonPhase.percent
  //   };
  //   console.log(this.moonPhase.phase);
  // }
}
