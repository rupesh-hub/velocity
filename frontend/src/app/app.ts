import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MessagesComponent} from './messages/messages-component';

@Component({
  selector: 'vc-root',
  standalone: true,
  imports: [RouterOutlet, MessagesComponent],
  template: `
    <vc-messages-component/>
    <router-outlet/>
  `
})
export class App {

}
