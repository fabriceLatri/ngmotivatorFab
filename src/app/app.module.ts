import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// firebase
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// custom components
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
 
// services
import { QuotesService } from './services/quotes.service';

const CONFIG: FirebaseAppConfig = {
  apiKey: "AIzaSyBwmj6UOIgAR8qhyfswOZuGh0tt8H4H4cY",
  authDomain: "motivator-8369d.firebaseapp.com",
  databaseURL: "https://motivator-8369d.firebaseio.com",
  projectId: "motivator-8369d",
  storageBucket: "motivator-8369d.appspot.com",
  messagingSenderId: "243982329725",
}; 

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule
  ],
  providers: [
    QuotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
