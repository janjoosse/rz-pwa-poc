import { Entry } from "./contentful/entry";
import { NewsList } from "./news-list";

export declare type HomepageSection = NewsList; // Add more section types here as needed

export interface HomepageSections {
    entryTitle: string;
    sections: Entry<HomepageSection>[];
}