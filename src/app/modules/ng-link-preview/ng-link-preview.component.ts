import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'ng-link-preview',
  templateUrl: './ng-link-preview.component.html',
  styleUrls: ['./ng-link-preview.component.scss'],
})
export class NgLinkPreviewComponent implements OnChanges {
  @Input() linkURL = '';
  @Output() metaExtracted = new EventEmitter<{
    title: string | undefined;
    description: string | undefined;
    image: string | undefined;
  }>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.linkURL?.currentValue) {
      fetch(`https://cors-anywhere.herokuapp.com/${this.linkURL}`)
        .then((data) => data.text())
        .then((data) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, 'text/html');

          // Extract metadata
          const meta = Array.from(doc.querySelectorAll('meta'))?.map((m) => ({
            name: m.name,
            content: m.content,
          }));
          
          const image = meta?.find((m) => m.name === 'twitter:image')?.content;
          const title = meta?.find((m) => m.name === 'twitter:text:title')
            ?.content;
          const description = meta?.find((m) => m.name === 'description')
            ?.content;

          this.metaExtracted.emit({ title, description, image });
        });
    }
  }
}
