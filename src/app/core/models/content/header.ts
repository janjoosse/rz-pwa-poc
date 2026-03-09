import { Entry } from "./contentful/entry";
import { LinkList } from "./link-list";

export interface Header {
    entryTitle: string;
    alert: string;
    navigationTop: Entry<LinkList>;
    navigationMain: Entry<LinkList>;
}