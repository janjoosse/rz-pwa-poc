import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ContentfulService } from '@core/services/contentful.service';

@Component({
  selector: 'rz-content-page',
  imports: [],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentPageComponent {
  private activatedRoute = inject(ActivatedRoute);
  private contentfulService = inject(ContentfulService);
  slug = toSignal(this.activatedRoute.params.pipe(map(params => params['slug'])));
  contentPage = this.contentfulService.contentPage;

  constructor() {
    effect(() => {
      if (this.slug() !== this.contentPage()?.fields.slug) {
        this.contentfulService.loadContentPage(this.slug());
      }
    });
  }
}
