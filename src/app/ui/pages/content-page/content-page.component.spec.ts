import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPageComponent } from './content-page.component';

describe('ContentPageComponent', () => {
  let component: ContentPageComponent;
  let fixture: ComponentFixture<ContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
