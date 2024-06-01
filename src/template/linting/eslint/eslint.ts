import type { Templatable } from '../../templatable.js';

export class Eslint implements Templatable {
  readonly filename = '.eslintrc.cjs';
  readonly template = 'linting/eslint/eslintrc.cjs';

  get data() {
    return {};
  }
}
