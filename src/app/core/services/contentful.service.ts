import { inject, Injectable, Injector, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { FOOTER, HEADER, HOMEPAGEHERO } from '../models/content/content-types';
import { Entry } from '../models/content/contentful/entry';
import { Footer } from '../models/content/footer';
import { Header } from '../models/content/header';
import { HomepageHero } from '../models/content/homepage-hero';
import { ContentfulHttpClientService } from './contentful-http-client.service';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private cfClient = inject(ContentfulHttpClientService);
  private injector = inject(Injector);
  footer?: Signal<Entry<Footer> | undefined>;

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
