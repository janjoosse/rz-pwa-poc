import { ChangeDetectionStrategy, Component, inject, OnInit, Signal } from '@angular/core';
import { ContentfulService } from '../../../../core/services/contentful.service';
import { TitleImagesComponent } from "../../../shared/content/title-images/title-images.component";
import { ContentRichTextRendererPipe } from '../../../../core/pipes/content-rich-text-renderer-pipe';
import { NEWS_LIST } from '../../../../core/models/content/content-types';
import { NewsListComponent } from '../../../shared/content/news-list/news-list.component';
import { Entry } from '../../../../core/models/content/contentful/entry';
import { HomepageSections } from '../../../../core/models/content/homepage-sections';

@Component({
  selector: 'rz-home-page',
  imports: [TitleImagesComponent, NewsListComponent, ContentRichTextRendererPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  private contentfulService = inject(ContentfulService);
  homepageHero = this.contentfulService.homepageHero;
  NEWS_LIST_SECTION_ID = NEWS_LIST;
  homepageSections?: Signal<Entry<HomepageSections> | undefined>;

  ngOnInit(): void {
    this.contentfulService.loadHomepageSections();
    this.homepageSections = this.contentfulService.homepageSections;
  }
}
