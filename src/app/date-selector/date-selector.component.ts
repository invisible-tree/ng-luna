import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { GetApiInfoService } from '../get-api-info.service';
import { FormControl } from '@angular/forms';

import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
import { transformMenu } from '@angular/material';
import { LunaImageComponent } from '../luna-image/luna-image.component';
import { ShowPhaseComponent } from '../show-phase/show-phase.component';
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class DateSelectorComponent implements OnInit {
  date = new FormControl(moment());
  today = moment().format('MM/DD/YYYY');
  recentPhase;
  percent;
  // moonPhase;
  // showPhase = new ShowPhaseComponent();
  // @Input() showPhase: ShowPhaseComponent;
  @Output() changePhaseEmit: EventEmitter<any> = new EventEmitter();

  constructor( private getApiInfoService: GetApiInfoService ) {
    // this.sendPhase(this.today);
  }

  ngOnInit() {  }


  addEvent(_value) {
    const dateToSend = this.transformDate(_value);
    // this.getApiInfoService.apiCall( dateToSend ); // .subscribe( x => this.showPhase.changePhase(x));

    this.changePhaseEmit.emit(dateToSend);
    // this.showPhase.changePhase(dateToSend);
  }

  transformDate(_date) {
    const year = _date._i.year;
    let month = _date._i.month + 1;
    let day = _date._i.date;

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    return month + '/' + day + '/' + year;
  }

}
