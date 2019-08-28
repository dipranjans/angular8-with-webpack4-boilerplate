import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { SubcomponentComponent } from './components/subcomponent.component';

@NgModule({
    declarations: [
      AppComponent,
      SubcomponentComponent
    ],
    imports: [
      BrowserModule,
    ],
    providers: [
    ],
    bootstrap: [
      AppComponent
    ]
  })

  export class AppModule { }