import { NgClass } from '@angular/common';
import { Component, DoCheck, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentfulService } from '../../../core/services/contentful.service';

@Component({
  selector: 'rz-header',
  imports: [NgClass, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements DoCheck {
  private contentfulService = inject(ContentfulService);
  
  header = this.contentfulService.header;
  isMenuOpen = false;
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  ngDoCheck(): void {
    console.log('HeaderComponent ngDoCheck');
  }
}
