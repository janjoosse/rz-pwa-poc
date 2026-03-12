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
    // Homepage
    effect(() => {
      const routerEvent = this.routerService.routerEndEvent();
      if (routerEvent?.url === '/') {
        const homepageHero = this.contentfulService.homepageHero();
        if (homepageHero) {
          this.title.setTitle(homepageHero.fields.metadata.fields.seoTitle);
          this.meta.updateTag({ name: 'description', content: homepageHero.fields.metadata.fields.metaDescription });
        }
      }
    });
    
    // Content pages
    effect(() => {
      const contentPage = this.contentfulService.contentPage();
      if (contentPage) {
        this.title.setTitle(contentPage.fields.metadata.fields.seoTitle);
        this.meta.updateTag({ name: 'description', content: contentPage.fields.metadata.fields.metaDescription });
      }
    });

        // TODO:
        // Product routes
        // Content routes
        // Set og:title
        // Set og:description
        // Set og:locale
        // Set og:locale:alternate
        // Set og:image
        // Set og:url
        // Set twitter:card
        // Set twitter:title
        // Set twitter:description
        // Set twitter:image
        // Set canonical URL
        // Set hreflang tags
  }
}
