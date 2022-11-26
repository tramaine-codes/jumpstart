import { Templatable } from '../templatable.js';

export class Ava implements Templatable {
  readonly filename = 'ava.config.js';
  readonly template = 'testing/ava.config.js';

  get data() {
    return {};
  }
}
