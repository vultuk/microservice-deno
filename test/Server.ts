import {config} from 'https://deno.land/x/dotenv/mod.ts';

import {Cors, Microservice, Slack} from './Deps.ts';
import {Routes} from './Routes.ts';

const { SLACK_TOKEN } = config({ safe: true });

Microservice({ port: 8080 })([Cors(), Slack({ token: SLACK_TOKEN || '' })])(
  Routes
)();
