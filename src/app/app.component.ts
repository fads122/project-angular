import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-angular';
  christian = 'bayle'

  name: string = '';
  listofnames: string[]=['Chan', 'Vee', 'Jovs']
  addName(){
    console.log("add button is working!");
    this.listofnames.push(this.name)
    console.log(this.listofnames);
  }
  delete(){
    this.listofnames.splice(0, 1)
  }
}
