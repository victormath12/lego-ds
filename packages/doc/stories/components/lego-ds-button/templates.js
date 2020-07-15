export const React = `
import React from 'react';
import { LegodsButton } from '@lego-ds/react';

function App() {
  const handleClick = (event) => {
    console.log(event)
  }

  return (
    <LegodsButton onButtonClick={event => handleClick(event.detail)}>Default</LegodsButton>
  );
}

export default App;
`;

export const Vue = `
<template>
  <legods-button @buttonClick="event => handleClick(event)">Default</legods-button>
</template>

<script>
export default {
  name: 'My Component',
  methods: {
    handleClick: function (event) {
      console.log(event.detail)
    }
  }
}
</script>
`;


export const AngularModule = `
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
`;

export const AngularComponent = `
<legods-button (buttonClick)="handleClick($event)">Default</legods-button>
`;
