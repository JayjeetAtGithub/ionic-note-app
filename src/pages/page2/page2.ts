import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import firebase from 'firebase';

@Component({
  selector: 'page-two',
  templateUrl: 'page2.html'
})
export class Page2 {
  user;
  constructor(public navCtrl: NavController , params : NavParams) {
        this.user = params.data.user;
  }
  logout(){
    firebase.auth().signOut().then(() => {
       this.navCtrl.pop();
    }).catch((error) => {
       console.log(error);
    });
  }
}
