import { Templatable } from '../../templatable.js';

export class EslintIgnore implements Templatable {
  readonly filename = '.eslintignore';
  readonly template = 'linting/eslint/eslintignore';

  get data() {
    return {};
  }
}
