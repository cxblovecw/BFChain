import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-introduction-item',
  templateUrl: './introduction-item.component.html',
  styleUrls: ['./introduction-item.component.scss'], 
})
export class IntroductionItemComponent implements OnInit {
  @Input() public src:string;
  @Input() public title:string;
  @Input() public content:string;
  constructor() {
  }

  ngOnInit() {
  }

}
