import {
  Microservice,
} from 'https://raw.githubusercontent.com/vultuk/microservice-deno/6330de113120d8f73b2f769ca99fbf78e7052597/http/microservice.ts';

Microservice({ port: 8080 })([])([
  {
    method: 'get',
    path: '/test',
    fn: async (req: any, res: any) => {
      res.json({ success: true }).end();
    },
  },
])();
