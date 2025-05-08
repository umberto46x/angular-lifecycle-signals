import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from "./shared/user-profile.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <app-user-profile></app-user-profile>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-lifecycle-signals';
}
