import {NextFunction, Response} from 'https://deno.land/x/microservice/http/Types.ts';

import {Settings, SlackMessage} from './Types.ts';

export const Slack = (settings: Settings) => (
  req: any,
  res: Response,
  next: NextFunction
) => {
  req['slack'] = {
    send: (channel: string, message: string, features: SlackMessage = {}) =>
      fetch('https://slack.com/api/chat.postMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + settings.token,
        },
        body: JSON.stringify({
          channel,
          text: message,
          ...features,
        }),
      }).then((r) => r.json()),
  };

  next();
};
