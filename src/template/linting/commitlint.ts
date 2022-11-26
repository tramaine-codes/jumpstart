import { Templatable } from '../templatable.js';

export class Commitlint implements Templatable {
  readonly filename = 'commitlint.config.cjs';
  readonly template = 'linting/commitlint.config.cjs';

  get data() {
    return {};
  }
}
