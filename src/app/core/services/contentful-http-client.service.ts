import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import resolveResponse from 'contentful-resolve-response';
import { map, Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment.development';
import { ContentType } from '../models/content/content-types';
import { ApiResult } from '../models/content/contentful/api-result';
import { Entry } from '../models/content/contentful/entry';

@Injectable({
  providedIn: 'root',
})
export class ContentfulHttpClientService {
  private tagFilter = 'metadata.tags.sys.id[in]=perf-inv';
  private http = inject(HttpClient);

  getEntries<T>(params: QueryParams): Observable<Entry<T>[]> {
    const query = `content_type=${params.contentType}&limit=${params.limit}&include=${params.include}&${params.query}`;
    return this.http.get<ApiResult<Entry<T>[]>>(`${env.contentfulBaseURL}/spaces/${env.contentfulSpaceId}/environments/${env.contentfulEnvironmentId}/entries?${this.tagFilter}&${query}`, {
      headers: {
        Authorization: `Bearer ${env.contentfulAccessToken}`,
        'Cache-Control': 'max-age=86400, public'
      }
    }).pipe(
      map(apiResult => resolveResponse(apiResult)),
    );
  }
}

export interface QueryParams {
  contentType: ContentType;
  limit?: number;
  include?: number;
  query?: string;
}

