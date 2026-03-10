import { effect, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ContentfulService } from './contentful.service';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private contentfulService = inject(ContentfulService);
  private routerService = inject(RouterService);

  updateMetadata() {
    // Update SEO metadata
    effect(() => {
      const currentRoute = this.routerService.routerStartEvent();
      switch (currentRoute?.url) {
        case '/':
          const homepageHero = this.contentfulService.homepageHero();
          this.title.setTitle(homepageHero?.fields.metadata.fields.seoTitle || 'Default Title');
          this.meta.updateTag({ name: 'description', content: homepageHero?.fields.metadata.fields.metaDescription || 'Default description' });
          break;
        case '/test':
          this.title.setTitle('Test Page');
          break;
      }
    });
  }
}
