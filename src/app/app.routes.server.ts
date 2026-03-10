import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'page/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const routesJson = await fetch('../../routes.json').then(res => res.json());
      return routesJson.routes.map((route: { slug: string }) => ({ slug: route.slug }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  }
];
