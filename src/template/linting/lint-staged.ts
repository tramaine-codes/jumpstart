import { Templatable } from '../templatable.js';

export class LintStaged implements Templatable {
  readonly filename = 'lint-staged.config.js';
  readonly template = 'linting/lint-staged.config.js';

  get data() {
    return {};
  }
}
