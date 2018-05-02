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
    this.navCtrl.push(Detail,{ note : note , user : this.user });
  }

  ngOnInit(){
    console.log('ngOnInit() Ran')
  }


  ionViewDidEnter(){
    console.log('Page 2 Entered Into View');
    this.noteProvider.getNotes(this.user.uid).subscribe((res) => {
        this.notes = res;
        console.log(this.notes);
      })
  }

     addPage(){
        this.navCtrl.push(Add,{ user : this.user });
     }
}
