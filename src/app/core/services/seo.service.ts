import { effect, inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContentfulService } from './contentful.service';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private title = inject(Title);
  private contentfulService = inject(ContentfulService);

  updateMetadata() {
    effect(() => {
      this.title.setTitle(this.contentfulService.homepageHero()?.fields.metadata.fields.seoTitle || 'Default Title'); // TODO: Fallback to a translated default title
    });
  }
}
