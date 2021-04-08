import {NextFunction, Request, Response} from '../deps.ts';
import {SetupResults} from '../Types/SetupResults.ts';

export const ErrorHandling = (setup: SetupResults): SetupResults => {
  const { settings, app } = setup;

  app.use((req: Request, res: Response) => {
    res
      .status(404)
      .json({
        success: false,
        message: 'Page Not Found',
      })
      .end();
  });

  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res
      .status(500)
      .json({
        success: false,
        message: error.message || 'Error Occured',
        stack: error.stack?.split('\n').map((r) => r.trim()) || [],
      })
      .end();
    next(error);
  });

  return { settings, app };
};
