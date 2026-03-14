import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSectionsComponent } from './home-page-sections.component';

describe('HomePageSectionsComponent', () => {
  let component: HomePageSectionsComponent;
  let fixture: ComponentFixture<HomePageSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageSectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageSectionsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
