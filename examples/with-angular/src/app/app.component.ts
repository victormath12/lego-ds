import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; // Reactive Form

import SomaDS from '@lego-ds/design-tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab-angular';

  /*
  * REACTIVE FORM 
  */

  reactiveForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  });

  onSubmitReactiveForm() {
    alert('submited!');
    console.warn(this.reactiveForm.value);
  }


  /*
  * TEMPLATE DRIVEN FORM
  */

  templateDrivenModel = {
    name: '',
    age: ''
  };

  submitted = false;

  onSubmitTemplateDrivenForm() {
    alert('submited!');
    console.warn(JSON.stringify(this.templateDrivenModel));
    this.submitted = true;
  }


  /* 
  * SOMA DS 
  */

  styledButton: any = { 
    width: '200px',
    height: '80px',
    backgroundColor: '#ff57ac'
  }

  handleClick(e) {
    console.log(e.detail);
  }

  changeTheme(theme) {
    SomaDS.use(theme);
  }
}
