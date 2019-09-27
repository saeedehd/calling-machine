import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashabaord',
  templateUrl: './dashabaord.component.html',
  styleUrls: ['./dashabaord.component.scss']
})
export class DashabaordComponent implements OnInit {

  gaugeType = "full";
  gaugeValue = 600;
  gaugeLabel = "Number of Calls";
  gaugeAppendText = "Number";
  gaugeThick = 20;
  gaugeMin = 0;
  gaugeMax = 2500;

  

  constructor() {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuagePage');
  }

  ngOnInit() {
  }

}
