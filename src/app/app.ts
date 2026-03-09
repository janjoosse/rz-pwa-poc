import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentfulService } from './core/services/contentful.service';
import { FooterComponent } from './ui/shell/footer/footer.component';
import { HeaderComponent } from "./ui/shell/header/header.component";

@Component({
  selector: 'rz-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rz-pwa-poc');
  private contentfulService = inject(ContentfulService);

  header = this.contentfulService.header;
}
