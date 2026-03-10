import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../../../core/services/contentful.service';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'rz-content-page',
  imports: [],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.scss',
})
export class ContentPageComponent {
  private activatedRoute = inject(ActivatedRoute);
  private contentfulService = inject(ContentfulService);
  slug = toSignal(this.activatedRoute.params.pipe(map(params => params['slug'])));

  constructor() {
    console.log('Slug:', this.slug);
  }
}
