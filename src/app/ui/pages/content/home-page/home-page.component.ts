import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { ContentfulService } from '../../../../core/services/contentful.service';
import { TitleImagesComponent } from "../../../shared/content/title-images/title-images.component";
import { ContentRichTextRendererPipe } from '../../../../core/pipes/content-rich-text-renderer-pipe';

@Component({
  selector: 'rz-home-page',
  imports: [TitleImagesComponent, ContentRichTextRendererPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  private contentfulService = inject(ContentfulService);
  homepageHero = this.contentfulService.homepageHero;
}
