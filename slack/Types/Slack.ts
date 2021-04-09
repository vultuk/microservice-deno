import {SlackMessage} from './SlackMessage.ts';

export type Slack = {
  send: (
    channel: string,
    message: string,
    features?: SlackMessage
  ) => Promise<any>;
};
