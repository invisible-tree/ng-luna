import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-phase',
  templateUrl: './show-phase.component.html',
  styleUrls: ['./show-phase.component.scss']
})
export class ShowPhaseComponent implements OnInit {

  @Input() moonPhase;

  constructor() { 
  }

  ngOnInit() {
    console.log(this.moonPhase);
  }

}
