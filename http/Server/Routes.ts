import AsyncMethod from '../Shared/AsyncMethod.ts';
import {Route} from '../Types/Route.ts';
import {SetupResults} from '../Types/SetupResults.ts';

export const Routes = (routes: Route[]) => (
  setup: SetupResults
): SetupResults => {
  const { settings, app } = setup;

  routes.forEach((route: Route) =>
    app[route.method](route.path, AsyncMethod(route.fn))
  );

  return { settings, app };
};
