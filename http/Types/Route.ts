import {NextFunction, Request, Response} from '../Types.ts';

export type Route = {
  method: 'get' | 'put' | 'post' | 'patch' | 'delete' | 'options';
  path: string;
  fn:
    | ((req: Request, res: Response) => Promise<void>)
    | ((req: Request, res: Response, next: NextFunction) => Promise<void>);
};
