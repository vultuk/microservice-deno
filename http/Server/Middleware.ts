import {json} from '../Deps.ts';
import {SetupResults} from '../Types.ts';

export const Middleware = (middleware?: any[]) => (
  setup: SetupResults
): SetupResults => {
  const { settings, app } = setup;

  [json(), ...(middleware || [])].forEach((item) => app.use(item));

  return { settings, app };
};
