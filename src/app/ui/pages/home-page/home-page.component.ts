import { Component, inject } from '@angular/core';
import { ContentfulService } from '../../../core/services/contentful.service';

@Component({
  selector: 'rz-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  private contentfulService = inject(ContentfulService);
  homepageHero = this.contentfulService.homepageHero;
}
