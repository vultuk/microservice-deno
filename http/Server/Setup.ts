import {opine} from '../Deps.ts';
import {Application, Settings, SetupResults} from '../Types.ts';

export const Setup = (settings: Settings) => (): SetupResults => {
  const app: Application = opine();

  return { settings, app };
};
