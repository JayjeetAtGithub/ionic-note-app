import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { Page2 } from '../page2/page2';
import { Add } from '../add/add';
import { NoteProvider } from '../../providers/note/note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  auth_user;
  constructor(public navCtrl: NavController , private noteProvider : NoteProvider) {

  }

   ngOnInit(){
     console.log('App started through entry point : Home.ts');
   }

  login(){
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(user);
      this.auth_user = { uid : user.uid , displayName : user.displayName , photoURL : user.photoURL , email : user.email }
      this.noteProvider.addUser(this.auth_user).subscribe((res) => {console.log(res)});
      this.navCtrl.push(Page2,{ user : user });
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }
}
