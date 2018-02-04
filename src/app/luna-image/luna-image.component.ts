import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luna-image',
  templateUrl: './luna-image.component.html',
  styleUrls: ['./luna-image.component.scss']
})
export class LunaImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imageSwitch() {
    return 'assets/img/lunas-png/04-llena.png';
  }

}
