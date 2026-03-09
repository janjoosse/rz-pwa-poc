import { Entry } from "./contentful/entry";
import { Metadata } from "./metadata";
import { TitleHighlight } from "./title-highlight";

export interface HomepageHero {
    entryTitle: string;
    title: string;
    metadata: Entry<Metadata>;
    hero: Entry<TitleHighlight>;
}