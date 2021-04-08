import {json} from '../deps.ts';
import {SetupResults} from '../Types/SetupResults.ts';

export const Middleware = (middleware?: any[]) => (
  setup: SetupResults
): SetupResults => {
  const { settings, app } = setup;

  [json(), ...(middleware || [])].forEach((item) => app.use(item));

  return { settings, app };
};
