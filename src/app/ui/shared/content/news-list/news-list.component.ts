import { Component, inject, input } from '@angular/core';
import { Entry } from '@core/models/content/contentful/entry';
import { NewsList } from '@core/models/content/news-list';
import { ContentfulService } from '@core/services/contentful.service';

@Component({
  selector: 'rz-news-list',
  imports: [],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss',
})
export class NewsListComponent {
  newsList = input<Entry<NewsList>>();
  contentfulService = inject(ContentfulService);
}
