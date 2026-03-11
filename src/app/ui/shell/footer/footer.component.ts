import { ChangeDetectionStrategy, Component, inject, OnInit, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Entry } from '../../../core/models/content/contentful/entry';
import { Footer } from '../../../core/models/content/footer';
import { ContentfulService } from '../../../core/services/contentful.service';
import { SocialIconMapperPipe } from '../../../core/pipes/social-icon-mapper-pipe';

@Component({
  selector: 'rz-footer',
  imports: [RouterLink, FontAwesomeModule, SocialIconMapperPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  private contentfulService = inject(ContentfulService);
  footer?: Signal<Entry<Footer> | undefined>;

  ngOnInit(): void {
    this.contentfulService.loadFooter();
    this.footer = this.contentfulService.footer;
  }
}
