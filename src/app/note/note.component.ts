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
  getAllSubscription$: any;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.serviceCall();
    this.getAllSubscription$ =this.noteService.getNotes();
    this.getAllSubscription$.subscribe(response => this.notes = response);
  }

  ngOnDestory() {
    this.getAllSubscription$.unsubscribe();
  }

  ngOnChanges(): void {
    // if(this.categoryId){
    //   this.notes = this.noteService.getFiltredNotes(this.categoryId)
    // }
  }
}


