import { Pipe, PipeTransform } from '@angular/core';
import { IconName } from '@fortawesome/angular-fontawesome';

/**
 * This pipe maps mediaNames (e.g. `Linkedin`, `Instagram`, etc.) as defined in our Contentful content model to the appropriate FontAwesome icon
 */
@Pipe({
  name: 'socialIconMapper',
})
export class SocialIconMapperPipe implements PipeTransform {

  transform(mediaName: string): IconName {
    switch (mediaName.toLowerCase()) {
      case 'linkedin':
        return  'square-linkedin';
      case 'twitter':
        return 'x-twitter';
      case 'facebook':
        return 'square-facebook';
      case 'instagram':
        return 'instagram';
      case 'youtube':
        return 'youtube';
      case 'bluesky':
        return 'bluesky';
      default:
        throw Error("Unsupported media name: " + mediaName);
    }
  }
}
