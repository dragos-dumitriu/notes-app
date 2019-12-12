import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '../interfaces/category.model';
import { NoteService } from '../services/note.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

 categories:Category[];

  @Output() emitCategory = new EventEmitter<string>();
  constructor(private noteService :NoteService) { }
  
  selectFilter(categoryId: string) {
    this.emitCategory.emit(categoryId);
  }

  ngOnInit() {
this.categories= this.noteService.getCategories();
  }

}

