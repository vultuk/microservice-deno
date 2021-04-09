import {flow} from './deps.ts';
import {ErrorHandling} from './Server/ErrorHandling.ts';
import {Middleware} from './Server/Middleware.ts';
import {Routes} from './Server/Routes.ts';
import {Serve} from './Server/Serve.ts';
import {Setup} from './Server/Setup.ts';
import {Route} from './Types/Route.ts';
import {Settings} from './Types/Settings.ts';

export { Cors } from './deps.ts';
export type { Request, Response } from './deps.ts';
export type { Route } from './Types/Route.ts';

export const Microservice = (settings?: Settings) => (
  middleware?: unknown[]
) => (routes: Route[]) =>
  flow(
    Setup(settings || {}),
    Middleware(middleware),
    Routes(routes),
    ErrorHandling,
    Serve
  );
