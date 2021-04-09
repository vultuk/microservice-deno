import {flow} from './Deps.ts';
import {ErrorHandling} from './Server/ErrorHandling.ts';
import {Middleware} from './Server/Middleware.ts';
import {Routes} from './Server/Routes.ts';
import {Serve} from './Server/Serve.ts';
import {Setup} from './Server/Setup.ts';
import {Route, Settings} from './Types.ts';

export { Cors } from './Deps.ts';

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
