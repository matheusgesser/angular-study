import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome:string = ''

  constructor() {
    console.log('Construtor')
  }
  
  ngOnInit(): void {
    console.log('OnInit')
  }

  ngOnChanges(): void {
    console.log('OnChange')
  }

}
