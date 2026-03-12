import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentfulService } from '../../../../core/services/contentful.service';
import { TitleImagesComponent } from "../../../shared/content/title-images/title-images.component";

@Component({
  selector: 'rz-home-page',
  imports: [TitleImagesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  private contentfulService = inject(ContentfulService);
  homepageHero = this.contentfulService.homepageHero;
}
