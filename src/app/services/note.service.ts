import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../interfaces/category.model';
import * as uuid from 'uuid';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class NoteService {

    readonly baseUrl= "https://dev-notesapi.mepdevelopment.com/api";
    readonly ownerId="00000000-0000-0000-0000-000000000045";

    readonly httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
  notes: Note[]= [];/*
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
];*/

  constructor(private httpClient :HttpClient) {}

  serviceCall(){
      console.log("Note service was called");
  }

  

  getNotes():Observable<Note[]> {
     return this.httpClient.get<Note[]>(this.baseUrl+`/notes/owner/${this.ownerId}`, this.httpOptions);
}
 
getFiltredNotes( categoryId:string) {
    return this.notes.filter(note=>note.category===categoryId);
}

getCategories():Array<Category>{
    return   [
        {name:'To Do', id:'1'},
        {name:'Done', id:'2'},
        {name:'Doing', id:'3'}
        ];
}

addNote(noteTitle:string, noteDescription:string, noteCategoryId:string){

    let note= {  
                ownerId: this.ownerId,
                text:noteDescription,
                title: noteTitle,
                category:noteCategoryId
                }

  
  this.httpClient.post<Note>(this.baseUrl+"/notes", note, this.httpOptions).subscribe(result=> console.log(result));
}
}
