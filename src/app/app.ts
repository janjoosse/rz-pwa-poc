import { ChangeDetectionStrategy, Component, DoCheck, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentfulService } from './core/services/contentful.service';
import { SeoService } from './core/services/seo.service';
import { FooterComponent } from './ui/shell/footer/footer.component';
import { HeaderComponent } from "./ui/shell/header/header.component";

@Component({
  selector: 'rz-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements DoCheck {
  private contentfulService = inject(ContentfulService);
  private seoService = inject(SeoService);

  header = this.contentfulService.header;

  constructor() {
    this.seoService.updateMetadata();
  }

  ngDoCheck(): void {
    console.log('AppComponent ngDoCheck');
  }
}
