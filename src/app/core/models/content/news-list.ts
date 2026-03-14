import { Entry } from "./contentful/entry";
import { NavigationLink } from "./navigation-link";
import { NewsCategory } from "./news-category";
import { NewsType } from "./news-type";

export interface NewsList {
    entryTitle: string;
    title: string;
    amount: number;
    buttonTitle: string;
    ctaLink: Entry<NavigationLink>;
    categorySelector: Entry<NewsCategory>[];
    newsType?: NewsType;
}