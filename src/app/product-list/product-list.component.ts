import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() parentData: string = "";
  @Output() childEvent = new EventEmitter<string>();

  onChange(value: string){
    this.childEvent.emit(value);
  }
  constructor() { }

  ngOnInit():void{

  }

 

}
