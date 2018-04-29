import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import firebase from 'firebase';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

  // Initialize Firebase
export const config = {
    apiKey: "AIzaSyC-a8yQh_5ynJRlwTF9mB8vPw7CpLLViag",
    authDomain: "note-app-a172f.firebaseapp.com",
    databaseURL: "https://note-app-a172f.firebaseio.com",
    projectId: "note-app-a172f",
    storageBucket: "",
    messagingSenderId: "490803122662"
  };
  firebase.initializeApp(config);



@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}