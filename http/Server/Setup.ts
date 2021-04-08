import {Application, opine} from '../deps.ts';
import {Settings} from '../Types/Settings.ts';
import {SetupResults} from '../Types/SetupResults.ts';

export const Setup = (settings: Settings) => (): SetupResults => {
  const app: Application = opine();

  return { settings, app };
};
