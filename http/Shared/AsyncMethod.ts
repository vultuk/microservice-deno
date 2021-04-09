import {NextFunction, Request, Response} from '../Types.ts';

export default (
  callback: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => (req: Request, res: Response, next: NextFunction): Promise<void> =>
  callback(req, res, next).catch(next);
