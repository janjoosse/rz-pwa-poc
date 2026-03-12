import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleImagesComponent } from './title-images.component';

describe('TitleImagesComponent', () => {
  let component: TitleImagesComponent;
  let fixture: ComponentFixture<TitleImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleImagesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
