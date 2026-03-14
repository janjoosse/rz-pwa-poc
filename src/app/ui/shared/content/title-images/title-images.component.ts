import { Component, input } from '@angular/core';
import { MediaWrapper } from '@core/models/content/media-wrapper';
import { Entry } from '@core/models/content/contentful/entry';

@Component({
  selector: 'rz-title-images',
  imports: [],
  templateUrl: './title-images.component.html',
  styleUrl: './title-images.component.scss',
})
export class TitleImagesComponent {
  primaryImage = input<Entry<MediaWrapper>>();
  secondaryImage = input<Entry<MediaWrapper>>();
}
