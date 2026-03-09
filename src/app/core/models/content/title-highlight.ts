import { Entry } from "./contentful/entry";
import { MediaWrapper } from "./mediaWrapper";

export interface TitleHighlight {
    entryTitle: string;
    title: string;
    introduction: string;
    titleHighlight: string;
    brandLabel: Entry<MediaWrapper>;
    primaryImage: Entry<MediaWrapper>;
    secondaryImage: Entry<MediaWrapper>;
}