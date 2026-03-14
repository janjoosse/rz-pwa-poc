import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { all } from '@awesome.me/kit-c6eb8a2591/icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentfulService } from './core/services/contentful.service';
import { SeoService } from './core/services/seo.service';
import { FooterComponent } from './ui/shell/footer/footer.component';
import { HeaderComponent } from "./ui/shell/header/header.component";
import { PreloadFontsService } from './core/services/preload-fonts.service';

@Component({
  selector: 'rz-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private faIconLibrary = inject(FaIconLibrary);
  private contentfulService = inject(ContentfulService);
  private seoService = inject(SeoService);
  private preloadFontsService = inject(PreloadFontsService);
  header = this.contentfulService.header;

  constructor() {
    this.faIconLibrary.addIcons(...all);
    this.seoService.updateMetadata();
    this.preloadFontsService.addPreloadFontLinks();
  }
}
