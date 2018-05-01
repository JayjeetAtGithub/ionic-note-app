import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { Page2 } from '../page2/page2';
import { Add } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

   ngOnInit(){
     console.log('Working');
   }

  login(){
    //code to log the user in...
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      //alert('done');
      this.navCtrl.push(Page2,{ user : user });
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }


}
