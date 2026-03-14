import { Component, inject } from '@angular/core';
import { ContentfulService } from '../../../../../core/services/contentful.service';
import { NewsListComponent } from '../../../../shared/content/news-list/news-list.component';
import { NEWS_LIST } from '../../../../../core/models/content/content-types';

@Component({
  selector: 'rz-home-page-sections',
  imports: [NewsListComponent],
  templateUrl: './home-page-sections.component.html',
  styleUrl: './home-page-sections.component.scss',
})
export class HomePageSectionsComponent {
  contentfulService = inject(ContentfulService);
  homepageSections = this.contentfulService.homepageSections;
  NEWS_LIST_ID = NEWS_LIST;
}
