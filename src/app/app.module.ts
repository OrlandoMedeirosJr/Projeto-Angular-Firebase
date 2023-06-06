import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './auth.service';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, AngularFireModule.initializeApp({
    apiKey: "AIzaSyAjNqL5_W0A7F9VBlEBa4Yt6MJ0qv7i76M",
    authDomain: "projeto-angular-156a9.firebaseapp.com",
    databaseURL: "https://projeto-angular-156a9-default-rtdb.firebaseio.com",
    projectId: "projeto-angular-156a9",
    storageBucket: "projeto-angular-156a9.appspot.com",
    messagingSenderId: "483335995736",
    appId: "1:483335995736:web:3da8d1cf4cc8dd9909e52d",
    measurementId: "G-8FC1NGKK9W"
  }), 
  AngularFireAuthModule,
  AngularFireDatabaseModule,
],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
  providers: [AuthService]
})
export class AppModule { }