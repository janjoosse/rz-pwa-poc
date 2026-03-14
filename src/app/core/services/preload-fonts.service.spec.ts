import { TestBed } from '@angular/core/testing';

import { PreloadFontsService } from './preload-fonts.service';

describe('PreloadFontsService', () => {
  let service: PreloadFontsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreloadFontsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
