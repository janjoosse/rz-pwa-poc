import { Routes } from '@angular/router';
import { HomePageComponent } from './ui/pages/home-page/home-page.component';
import { TestPageComponent } from './ui/pages/test-page/test-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full'
    },
    {
        path: 'test',
        component: TestPageComponent,
        pathMatch: 'full'
    },
];
