import { Company } from "./company";
import { Entry } from "./contentful/entry";
import { LinkList } from "./link-list";

export interface Footer {
    collection: Entry<LinkList>[];
    company: Entry<Company>;
    copyrightText: string;
    legalLinkList: Entry<LinkList>;
}