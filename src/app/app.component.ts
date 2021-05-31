import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  linkURL = '';
  title: string | undefined;
  description: string | undefined;
  image: string | undefined;

  populateLinkMeta(linkMeta: {
    title: string | undefined;
    description: string | undefined;
    image: string | undefined;
  }): void {
    this.title = linkMeta?.title;
    this.description = linkMeta?.description;
    this.image = linkMeta?.image;
  }
}
