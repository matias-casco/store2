import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div>
      <h1>Page not found</h1>
      <img src="https://www.adaniports.com/-/media/Project/Ports/Home/404-error.png?la=en&hash=5FC60B88B485C5E98E08D235EAE5C940">
      <p> Sorry but the page you were trying to view does not exist</p>
      <p>
        Go home by <a routerLink="">clicking here</a>
      </p>
    </div>`,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

}
