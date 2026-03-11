import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Client,
  },
  {
    path: 'page/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const routesJson = (await fetch('routes.json').then(res => res.json()) as RouteParams);
      return routesJson.params.slug.map((slug: string) => ({ slug }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  }
];

interface RouteParams {
  params: {
    slug: string[];
  }
}
