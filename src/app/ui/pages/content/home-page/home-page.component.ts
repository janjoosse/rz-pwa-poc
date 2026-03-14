import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentfulService } from '../../../../core/services/contentful.service';
import { TitleImagesComponent } from "../../../shared/content/title-images/title-images.component";
import { ContentRichTextRendererPipe } from '../../../../core/pipes/content-rich-text-renderer-pipe';
import { HomePageSectionsComponent } from './home-page-sections/home-page-sections.component';

@Component({
  selector: 'rz-home-page',
  imports: [TitleImagesComponent, ContentRichTextRendererPipe, HomePageSectionsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent{
  private contentfulService = inject(ContentfulService);
  homepageHero = this.contentfulService.homepageHero;
}
