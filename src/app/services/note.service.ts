import { Injectable } from '@angular/core';
import { Note } from '../note/note.component';

@Injectable()
export class NoteService {
  notes: Note[]= [
    {
        id: "Id1",
        title: "First note",
        description: "This is the description for the first note"
    },
    {
        id: "Id1",
        title: "Second note",
        description: "This is the description for the second note"
    }
];

  constructor() {}

  serviceCall(){
      console.log("Note service was called");
  }

  getNotes() {
      return this.notes;
}

}
