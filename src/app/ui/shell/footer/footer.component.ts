import { ChangeDetectionStrategy, Component, inject, OnInit, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentfulService } from '../../../core/services/contentful.service';
import { SocialMediaNameIconMapperPipe } from '../../../core/pipes/social-icon-mapper-pipe';

@Component({
  selector: 'rz-footer',
  imports: [RouterLink, FontAwesomeModule, SocialMediaNameIconMapperPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private contentfulService = inject(ContentfulService);
  footer = this.contentfulService.footer;
}
