import { Component, input } from '@angular/core';
import { Entry } from '../../../../core/models/content/contentful/entry';
import { NewsList } from '../../../../core/models/content/news-list';

@Component({
  selector: 'rz-news-list',
  imports: [],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss',
})
export class NewsListComponent {
  newsList = input<Entry<NewsList>>();
}
