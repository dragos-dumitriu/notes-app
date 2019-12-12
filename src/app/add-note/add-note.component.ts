import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Category } from '../interfaces/category.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  titleNote: string;
  descriptionNote:string;
  selectedCategoryId:string;
  categories:Category[];

  constructor(private noteService:NoteService) { }

  ngOnInit() {
     this.categories = this.noteService.getCategories();
  }


  addNote(){
    this.noteService.addNote(this.titleNote,this.descriptionNote,this.selectedCategoryId );
  }
}
