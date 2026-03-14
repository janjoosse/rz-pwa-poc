import { DOCUMENT, effect, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PreloadFontsService {
  private document = inject(DOCUMENT);
  private platform = inject(PLATFORM_ID);
  private isServer = this.platform === 'server';
  
  addPreloadFontLinks() {
    if (this.isServer) {
      const subset = environment.fontSubsets[environment.channelName] || 'latin';
      this.document.head.querySelector('link[rel="preload"][as="font"][href*="oktah_neue_bold.LANG-PLACEHOLDER"]')?.setAttribute('href', `/fonts/oktah_neue_bold/oktah_neue_bold.${subset}.woff2`);
      this.document.head.querySelector('link[rel="preload"][as="font"][href*="oktah_neue_regular.LANG-PLACEHOLDER"]')?.setAttribute('href', `/fonts/oktah_neue_regular/oktah_neue_regular.${subset}.woff2`);
    }
  }
}
