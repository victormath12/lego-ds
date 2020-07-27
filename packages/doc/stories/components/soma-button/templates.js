export const React = `
import React from 'react';
import { SomaButton } from '@soma/react';

const App = () => (
  <SomaButton onClick={event => console.log(event)}>Default</SomaButton>
);

export default App;
`;

export const Vue = `
<template>
  <soma-button @soma-click="event => handleClick(event)">Default</soma-button>
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
<soma-button (soma-click)="handleClick($event)">Default</soma-button>
`;
