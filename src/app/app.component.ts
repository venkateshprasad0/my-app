import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  childData:string="";
  locationData:string="";

  catchChildEvent($event:string){
    this.childData=$event;
  }

  catchLocationEvent($event:string){
    this.locationData=$event;
  }
}


