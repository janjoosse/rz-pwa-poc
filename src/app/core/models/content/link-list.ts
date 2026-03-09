import { Entry } from "./contentful/entry";
import { NavigationLink } from "./navigation-link";

export interface LinkList {
    entryTitle: string;
    name: string;
    links: Entry<NavigationLink>[];
}