import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../interfaces/note.model';
import { Category } from '../interfaces/category.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnChanges {
  

  notes: Note[];
  categories:Category[];
  @Input() categoryId:string;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.serviceCall();
    this.noteService.getNotes().subscribe(response => this.notes = response);
  }

  ngOnChanges(): void {
    // if(this.categoryId){
    //   this.notes = this.noteService.getFiltredNotes(this.categoryId)
    // }
  }
}


