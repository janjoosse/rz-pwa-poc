import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  private router = inject(Router);

  routerEndEvent = toSignal(this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
  ));
}
