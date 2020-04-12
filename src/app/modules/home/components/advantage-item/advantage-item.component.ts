import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advantage-item',
  templateUrl: './advantage-item.component.html',
  styleUrls: ['./advantage-item.component.scss']
})
export class AdvantageItemComponent implements OnInit {
  @Input() title:string;
  @Input() src:string;
  @Input() content:string;
  
  constructor() { }

  ngOnInit() {
  }

}
