import { Entry } from "./contentful/entry";
import { LinkList } from "./link-list";

export interface Footer {
    collection: Entry<LinkList>[];
}