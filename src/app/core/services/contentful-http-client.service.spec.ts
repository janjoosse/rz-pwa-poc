import { TestBed } from '@angular/core/testing';

import { ContentfulHttpClientService } from './contentful-http-client.service';

describe('ContentfulHttpClientService', () => {
  let service: ContentfulHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentfulHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
