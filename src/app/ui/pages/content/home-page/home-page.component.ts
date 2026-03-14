import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { ContentfulService } from '../../../../core/services/contentful.service';
import { TitleImagesComponent } from "../../../shared/content/title-images/title-images.component";
import { ContentRichTextRendererPipe } from '../../../../core/pipes/content-rich-text-renderer-pipe';
import { NEWS_LIST } from '../../../../core/models/content/content-types';
import { NewsListComponent } from '../../../shared/content/news-list/news-list.component';

@Component({
  selector: 'rz-home-page',
  imports: [TitleImagesComponent, NewsListComponent, ContentRichTextRendererPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  private contentfulService = inject(ContentfulService);
  homepageHero = this.contentfulService.homepageHero;
  homepageSections = this.contentfulService.homepageSections;

  NEWS_LIST_SECTION_ID = NEWS_LIST;
}
