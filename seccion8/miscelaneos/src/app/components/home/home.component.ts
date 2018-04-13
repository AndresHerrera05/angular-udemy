import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clases></app-clases>

    <p [appResaltado]="'orange'">
        Hola mundo
    </p>

    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewInit, AfterViewChecked, OnDestroy  {

  constructor() {
    console.log( "constructor" )
  }

  ngOnInit() {
    console.log( "OnInit" )
  }

  ngOnChanges( changes: SimpleChanges ): void {
    console.log( "ngOnChanges" )
  }

  ngDoCheck(): void {
    console.log( "ngDoCheck" )
  }

  ngAfterContentInit(): void {
    console.log( "ngAfterContentInit" )
  }

  ngAfterContentChecked(): void {
    console.log( "ngAfterContentChecked" )
  }

  ngAfterViewInit(): void {
    console.log( "ngAfterViewInit" )
  }

  ngAfterViewChecked(): void {
    console.log( "ngAfterViewChecked" )
  }

  ngOnDestroy(): void {
    console.log( "ngOnDestroy" )
  }


}
