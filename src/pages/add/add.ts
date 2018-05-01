import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { NoteProvider } from '../../providers/note/note';
import firebase from 'firebase';

@Component({
  selector: 'add',
  templateUrl: 'add.html'
})

export class Add {

  constructor(public navCtrl: NavController ,public params : NavParams , private noteProvider : NoteProvider) {

  }
  addNote(val){
    console.log('Added Note To DB');
  }

}
