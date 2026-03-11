import { Entry } from "./contentful/entry";
import { Metadata } from "./metadata";

export interface ContentPage {
    entryTitle: string;
    title: string;
    slug: string;
    metadata: Entry<Metadata>;
}