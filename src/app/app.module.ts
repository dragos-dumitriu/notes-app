import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';
import { NoteComponent } from './note/note.component';
import { ToolsComponent } from './tools/tools.component';
import {MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatCardModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NoteService } from './services/note.service';

const appRoutes:Routes=[
  { path: "", component: HomeComponent, pathMatch:'full' },
  { path: "add-note", component: AddNoteComponent},
{ path: '**', redirectTo: ''}
]


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    ToolsComponent,
    FilterComponent,
    AddNoteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
