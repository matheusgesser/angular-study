import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  quantidade:number = 0

  constructor() { }
  
  ngOnDestroy(): void {
    console.log('Goodbye friend');
  }

  adicionar(){
    this.quantidade += 1
  }
  decrementar(){
    this.quantidade -= 1
  }

  ngOnInit(): void {
    console.log('onInit')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
}
