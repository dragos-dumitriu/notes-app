import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../interfaces/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnChanges {
  

  notes: Note[];
  @Input() categoryId:string;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.serviceCall();
    this.notes = this.noteService.getNotes();
  }

  ngOnChanges(): void {
    if(this.categoryId){
      this.notes = this.noteService.getFiltredNotes(this.categoryId)
    }
  }
}


