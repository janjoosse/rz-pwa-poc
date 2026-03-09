import { LinkType } from "./link-type";

export interface Link<T extends LinkType> {
    type: 'Link';
    linkType: T;
    id: string;
}