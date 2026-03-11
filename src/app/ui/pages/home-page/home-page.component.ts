import { ChangeDetectionStrategy, Component, DoCheck, inject } from '@angular/core';
import { ContentfulService } from '../../../core/services/contentful.service';

@Component({
  selector: 'rz-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements DoCheck {
  private contentfulService = inject(ContentfulService);
  homepageHero = this.contentfulService.homepageHero;

  ngDoCheck(): void {
    console.log('HomePageComponent ngDoCheck');
  }
}
