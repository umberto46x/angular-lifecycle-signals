import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./shared/user-profile.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <button (click)="changeID()">Change ID  {{id()}}</button>
    <app-user-profile [id]="id()"></app-user-profile>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {




  title = 'angular-lifecycle-signals';
  id = signal<number | undefined> (1); // assegnazione di un signal


  changeID() {
      
        if(this.id() == 10 ){
          this.id.set(1); // set signal
        }else{
          this.id.update( prev =>  prev! + 1); // update signal
        }
    }
}
