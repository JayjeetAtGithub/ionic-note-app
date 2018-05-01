import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { NoteProvider } from '../../providers/note/note';
import firebase from 'firebase';

@Component({
  selector: 'detail',
  templateUrl: 'detail.html'
})

export class Detail {
  id;
  body;
  constructor(public navCtrl: NavController ,public params : NavParams , private noteProvider : NoteProvider) {
       this.body = params.data.note.body;
       this.id = params.data.note.id;
  }
  saveNote(body){
    console.log(body);
  }
}
