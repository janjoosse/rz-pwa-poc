import { inject, Injectable, Injector, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { CONTENT_PAGE, FOOTER, HEADER, HOMEPAGEHERO } from '../models/content/content-types';
import { Entry } from '../models/content/contentful/entry';
import { Footer } from '../models/content/footer';
import { Header } from '../models/content/header';
import { HomepageHero } from '../models/content/homepage-hero';
import { ContentfulHttpClientService } from './contentful-http-client.service';
import { ContentPage } from '../models/content/content-page';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private cfClient = inject(ContentfulHttpClientService);
  private injector = inject(Injector);
  footer?: Signal<Entry<Footer> | undefined>;
  contentPage?: Signal<Entry<any> | undefined>; // TODO: type

  // HEADER
  header = toSignal(this.cfClient.getEntries<Header>({ contentType: HEADER, limit: 1, include: 2 }).pipe(
    map(headers => headers.length > 0 ? headers[0] : undefined),
  ));

  // HOMEPAGEHERO
  homepageHero = toSignal(this.cfClient.getEntries<HomepageHero>({ contentType: HOMEPAGEHERO, limit: 1, include: 2 }).pipe(
    tap((heroes) => console.log('Fetched homepage hero:', heroes)),
    map(heroes => heroes.length > 0 ? heroes[0] : undefined),
  ));
  // HOMEPAGESECTIONS
  // TODO

  // CONTENT PAGES
  loadContentPage(slug: string) {
    this.contentPage = toSignal(this.cfClient.getEntries<ContentPage>({ contentType: CONTENT_PAGE, limit: 1, include: 2, query: `fields.slug=${slug}` }).pipe(
      tap((pages) => console.log(`Fetched content page for slug "${slug}":`, pages)),
      map(pages => pages.length > 0 ? pages[0] : undefined),
    ),
    { injector: this.injector }
    );
  }

  // FOOTER
  loadFooter() {
    this.footer = toSignal(
      this.cfClient.getEntries<Footer>({ contentType: FOOTER, limit: 1, include: 2 }).pipe(
        tap((footers) => console.log('Fetched footer:', footers)),
        map(footers => footers.length > 0 ? footers[0] : undefined),
      ),
      { injector: this.injector }
    );
  }

  // TODO
}
