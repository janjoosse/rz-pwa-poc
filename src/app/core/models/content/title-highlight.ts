import { Document } from '@contentful/rich-text-types';
import { Entry } from "./contentful/entry";
import { MediaWrapper } from "./media-wrapper";
import { NavigationLink } from "./navigation-link";

export interface TitleHighlight {
    entryTitle: string;
    title: string;
    introduction: string;
    titleHighlight: string;
    description: Document;
    brandLabel: Entry<MediaWrapper>;
    primaryImage: Entry<MediaWrapper>;
    secondaryImage: Entry<MediaWrapper>;
    ctaTitle: string;
    ctaLink: Entry<NavigationLink>;
}