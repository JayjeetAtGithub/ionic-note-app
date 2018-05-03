import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { NoteProvider } from '../../providers/note/note';
import firebase from 'firebase';

@Component({
  selector: 'add',
  templateUrl: 'add.html'
})

export class Add {
  user;
  constructor(public navCtrl: NavController ,public params : NavParams , private noteProvider : NoteProvider) {
      this.user = params.data.user;
  }
  saveNote(val){
    console.log(val);
    this.noteProvider.addNote({ body : val.NoteBody , uid : this.user.uid }).subscribe((res)=>{
      console.log(res)
      this.navCtrl.pop()
    })

  }

}
