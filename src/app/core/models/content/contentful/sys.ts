import { ContentTypeLink } from "./content-type-link";

export interface Sys {
    id: string;
    contentType: {
        sys: ContentTypeLink;
    }
}