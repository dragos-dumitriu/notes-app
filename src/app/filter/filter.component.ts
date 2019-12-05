import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '../interfaces/category.model';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  categories:Category[] = [
  {name:'To Do', id:'1'},
  {name:'Done', id:'2'},
  {name:'Doing', id:'3'}
  ];

  @Output() emitCategory = new EventEmitter<string>();
  constructor() { }
  
  selectFilter(categoryId: string) {
    this.emitCategory.emit(categoryId);
  }




  ngOnInit() {
  }

}

