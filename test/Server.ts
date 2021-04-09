import {Cors, Microservice, Slack} from './Deps.ts';
import {Routes} from './Routes.ts';

Microservice({ port: 8080 })([
  Cors(),
  Slack({ token: 'xoxb-437884471459-1956331384320-aIoiumq6dRxmQB4MTx1YJFoS' }),
])(Routes)();
