import {
  Microservice,
} from 'https://raw.githubusercontent.com/vultuk/microservice-deno/9ba20bcd35d69896f50ba5f82a5a6fb673f54fab/http/microservice.ts';

Microservice({ port: 8080 })([])([
  {
    method: 'get',
    path: '/test',
    fn: async (req, res) => {
      res.json({ success: true }).end();
    },
  },
])();
