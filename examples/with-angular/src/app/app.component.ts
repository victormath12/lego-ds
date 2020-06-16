import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab-angular';
  styledButton: any = { 
    width: '200px',
    height: '80px',
    backgroundColor: '#ff57ac'
  }

  handleClick(e) {
    console.log(e.detail);
  }
}
