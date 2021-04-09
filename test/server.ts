import {Cors, Microservice} from './deps.ts';
import {Routes} from './routes.ts';

Microservice({ port: 8080 })([Cors()])(Routes)();
