import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fontsize',
  templateUrl: './fontsize.component.html',
  styleUrls: ['./fontsize.component.css']
})
export class FontsizeComponent implements OnInit {
  fontSize = 14;

  onChange(value) {
    this.fontSize = value;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
