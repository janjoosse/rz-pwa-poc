import { Pipe, PipeTransform } from '@angular/core';
import { IconName } from '@fortawesome/angular-fontawesome';

/**
 * This pipe maps mediaNames (e.g. `Linkedin`, `Instagram`, etc.) as defined in our Contentful content model to the appropriate FontAwesome icon
 */
@Pipe({
  name: 'socialMediaNameIconMapper',
})
export class SocialMediaNameIconMapperPipe implements PipeTransform {

  transform(mediaName: string): IconName {
    switch (mediaName.toLowerCase()) {
      case 'bluesky':
        return 'bluesky';
      case 'facebook':
        return 'square-facebook';
      case 'instagram':
        return 'instagram';
      case 'linkedin':
        return  'square-linkedin';
      case 'tiktok':
        return 'tiktok';
      case 'twitter':
        return 'x-twitter';
      case 'youtube':
        return 'youtube';
      default:
        throw Error("Unsupported media name: " + mediaName);
    }
  }
}
