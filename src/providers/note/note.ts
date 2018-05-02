import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class NoteProvider {

  baseUrl:String;

  constructor(public http: HttpClient) {
    console.log('Note Provider Injected');
    this.http = http;
    this.baseUrl = 'http://127.0.0.1:8000';

  }
   getNotes(id)
   {
     return this.http.get(this.baseUrl + '/getnotes/' + id + '/')
   }
   addUser(obj)
   {
     return this.http.post(this.baseUrl + '/adduser/' , obj)
   }
   addNote(obj)
   {
     return this.http.post(this.baseUrl + '/addnote/' , obj)
   }
   updateNote(id,obj)
   {
     return this.http.put(this.baseUrl + '/updatenote/' + id + '/' , obj)
   }
   deleteNote(id)
   {
     return this.http.delete(this.baseUrl + '/deletenote/' + id + '/')
   }

}
