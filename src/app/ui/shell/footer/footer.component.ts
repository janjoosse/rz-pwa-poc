import { afterNextRender, Component, effect, inject, Signal } from '@angular/core';
import { Entry } from '../../../core/models/content/contentful/entry';
import { Footer } from '../../../core/models/content/footer';
import { ContentfulService } from '../../../core/services/contentful.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'rz-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private contentfulService = inject(ContentfulService);
  footer?: Signal<Entry<Footer> | undefined>;

  constructor() {
    afterNextRender(() => {
      this.contentfulService.loadFooter();
      this.footer = this.contentfulService.footer;
    });
  }
}
