import {Response, Route} from './Deps.ts';

export const Routes: Route[] = [
  {
    method: 'get',
    path: '/test',
    fn: async (req: any, res: Response): Promise<void> => {
      await res.json({ success: await req.slack.send('test-channel', 'Yo!') });
    },
  },
];
