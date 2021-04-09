import {Cors, Microservice} from './Deps.ts';
import {Routes} from './Routes.ts';

Microservice({ port: 8080 })([Cors()])(Routes)();
