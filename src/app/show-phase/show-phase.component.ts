import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-show-phase',
  templateUrl: './show-phase.component.html',
  styleUrls: ['./show-phase.component.scss']
})
export class ShowPhaseComponent implements OnInit {
  today = moment().format('MM/DD/YYYY');
  moonPhase;

  constructor() {
  }

  ngOnInit() {
  }

  public changePhase(_moonPhase) {
    // console.log('change phase: ' + _moonPhase.phase);
    this.moonPhase = {
      'phase': _moonPhase.phase,
      'percent': _moonPhase.percent
    };
    console.log(this.moonPhase.phase);
  }
}
