import { CalculatePhaseService } from './calculate-phase.service';
import { GetApiInfoService } from './get-api-info.service';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // constructor(private CalculatePhaseService: CalculatePhaseService) {
  //   this.prueba = this.CalculatePhaseService.prueba(this.day, this.month, this.year);
  //   console.log(this.prueba);
  // }

  constructor(private GetApiInfoService: GetApiInfoService) {
    // this.GetApiInfoService.apiCall(this.today);
  }

}
