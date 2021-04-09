import {Request, Response, Route} from './deps.ts';

export const Routes: Route[] = [
  {
    method: 'get',
    path: '/test',
    fn: async (req: Request, res: Response): Promise<void> => {
      await res.json({ success: true });
    },
  },
];
