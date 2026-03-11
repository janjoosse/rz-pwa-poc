import { Asset } from "./asset";

export interface MediaWrapper {
    entryTitle: string;
    title: string;
    altText: string;
    description?: string;
    asset: Asset[];
}