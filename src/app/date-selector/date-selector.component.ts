import { Component, OnInit } from '@angular/core';
import { GetApiInfoService } from '../get-api-info.service';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';


@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class DateSelectorComponent implements OnInit {

  today = new Date();
  cleanToday;

  recentPhase;

  constructor( private GetApiInfoService: GetApiInfoService ) {
    this.cleanToday = this.transformDate( this.today );
    this.GetApiInfoService.apiCall( this.cleanToday )
      .subscribe(x => this.recentPhase = x);
  }

  ngOnInit() {
  }

  addEvent(type: string, dateSelected: MatDatepickerInputEvent<Date>) {
    console.log(type + ' - - ' + dateSelected);
    const cleanDate = this.transformDate(dateSelected);
    this.GetApiInfoService.apiCall( cleanDate )
      .subscribe(x => this.recentPhase = x);
  }

  transformDate(_date) {
    const year = _date.getFullYear();
    let month = _date.getMonth() + 1;
    let day = _date.getDate();

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    return month + '/' + day + '/' + year;
    // return moment(_date, 'MM/DD/YYYY');
  }

}
