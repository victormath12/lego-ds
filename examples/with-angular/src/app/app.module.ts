import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule }   from '@angular/forms'; // Template Driven
import { ReactiveFormsModule } from '@angular/forms'; // Reactive Form

// Wrapped Soma Component
import { SomaInputComponent } from './components/soma-input/soma-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SomaInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
