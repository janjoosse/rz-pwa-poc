import { DestroyRef, inject, Injectable, Injector, signal, Signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { ContentPage } from '../models/content/content-page';
import { CONTENT_PAGE, FOOTER, HEADER, HOMEPAGEHERO, HOMEPAGESECTIONS } from '../models/content/content-types';
import { Entry } from '../models/content/contentful/entry';
import { Footer } from '../models/content/footer';
import { Header } from '../models/content/header';
import { HomepageHero } from '../models/content/homepage-hero';
import { ContentfulHttpClientService } from './contentful-http-client.service';
import { HomepageSection, HomepageSections } from '../models/content/homepage-sections';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private destroyRef = inject(DestroyRef);
  private cfClient = inject(ContentfulHttpClientService);
  private injector = inject(Injector);

  private contentPageSrc = signal<Entry<ContentPage> | undefined>(undefined);
  contentPage = this.contentPageSrc.asReadonly();
  
  // HEADER
  headerSrc?: Signal<Entry<Header> | undefined>;
  get header() {
    if (!this.headerSrc) {
      this.headerSrc = toSignal(
        this.cfClient.getEntries<Header>({ contentType: HEADER, limit: 1, include: 2 }).pipe(
          map(headers => headers.length > 0 ? headers[0] : undefined),
        ),
        { injector: this.injector }
      );
    }
    return this.headerSrc;
  }
  
  // HOMEPAGEHERO -- TODO rewrite
  homepageHeroSrc?: Signal<Entry<HomepageHero> | undefined>;
  get homepageHero() {
    if (!this.homepageHeroSrc) {
      this.homepageHeroSrc = toSignal(
        this.cfClient.getEntries<HomepageHero>({ contentType: HOMEPAGEHERO, limit: 1, include: 2 }).pipe(
          map(heroes => heroes.length > 0 ? heroes[0] : undefined),
        ),
        { injector: this.injector }
      );
    }
    return this.homepageHeroSrc;
  }

  // HOMEPAGESECTIONS -- TODO rewrite
  homepageSectionsSrc?: Signal<Entry<HomepageSections> | undefined>;
  get homepageSections() {
    if (!this.homepageSectionsSrc) {
      this.homepageSectionsSrc = toSignal(
        this.cfClient.getEntries<HomepageSections>({ contentType: HOMEPAGESECTIONS, limit: 1, include: 2 }).pipe(
          map(sections => sections.length > 0 ? sections[0] : undefined),
        ),
        { injector: this.injector }
      );
    }
    return this.homepageSectionsSrc;
  }
  
  // CONTENT PAGES -- TODO rewrite
  loadContentPage(slug: string) {
    this.cfClient.getEntries<ContentPage>({ contentType: CONTENT_PAGE, limit: 1, include: 2, query: `fields.slug=${slug}` }).pipe(
      tap(pages => {
        this.contentPageSrc.set(pages.length > 0 ? pages[0] : undefined);
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }
  
  // FOOTER
  footerSrc?: Signal<Entry<Footer> | undefined>;
  get footer() {
    if (!this.footerSrc) {
      this.footerSrc = toSignal(
        this.cfClient.getEntries<Footer>({ contentType: FOOTER, limit: 1, include: 2 }).pipe(
          map(footers => footers.length > 0 ? footers[0] : undefined),
        ),
        { injector: this.injector }
      );
    }
    return this.footerSrc;
  }
}
