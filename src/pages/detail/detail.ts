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
  user;
  constructor(public navCtrl: NavController ,public params : NavParams , private noteProvider : NoteProvider) {
       this.body = params.data.note.body;
       this.id = params.data.note.id;
       this.user = params.data.user;
  }
  update(val){
    this.noteProvider.updateNote(this.id,{ body : val.NoteBody , uid : this.user.uid  }).subscribe((res)=>{
      console.log(res)
      this.navCtrl.pop()
    })

  }
  delete(){
     this.noteProvider.deleteNote(this.id).subscribe((res)=>{
       console.log(res)
       this.navCtrl.pop()
     })
  }
}
