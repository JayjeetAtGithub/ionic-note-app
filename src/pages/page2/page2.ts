import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { NoteProvider } from '../../providers/note/note';
import firebase from 'firebase';
import { Detail } from '../detail/detail';
import { Add } from '../add/add';


@Component({
  selector: 'page-two',
  templateUrl: 'page2.html'
})

export class Page2 {
  notes;
  user;
  constructor(public navCtrl: NavController ,public params : NavParams , private noteProvider : NoteProvider) {
        this.user = params.data.user;
  }

  logout(){
    firebase.auth().signOut().then(() => {
       this.navCtrl.pop();
    }).catch((error) => {
       console.log(error);
    });
  }

  open(note){
    this.navCtrl.push(Detail,{ note : note });
  }

  ngOnInit(){
    //console.log('on init');
    this.noteProvider.getNotes(1).subscribe((res) => {
        this.notes = res;
        console.log(this.notes);

    })
  }


  ionViewDidEnter(){
    //the code in ngOnInit has to be ported to here....
    console.log('Now its time');
  }

     addPage(){
        this.navCtrl.push(Add);
     }


}
