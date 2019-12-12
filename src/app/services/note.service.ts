import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note.model';


@Injectable()
export class NoteService {
  notes: Note[]= [
    {
        id: "Id1",
        title: "First note",
        description: "This is the description for the first note",
        idCategory:"1"
    },
    {
        id: "Id1",
        title: "Second note",
        description: "This is the description for the second note",
        idCategory:"3"
    }
];

  constructor() {}

  serviceCall(){
      console.log("Note service was called");
  }

  getNotes() {
      return this.notes;
}
 
getFiltredNotes( categoryId:string) {
    return this.notes.filter(note=>note.idCategory===categoryId);
}
}
