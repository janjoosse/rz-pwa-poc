import { Routes } from '@angular/router';
import { HomePageComponent } from './ui/pages/home-page/home-page.component';
import { ContentPageComponent } from './ui/pages/content-page/content-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full'
    },
    {
        path: 'page/:slug',
        component: ContentPageComponent,
        pathMatch: 'full'
    },
];
