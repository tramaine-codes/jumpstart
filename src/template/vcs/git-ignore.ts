import type { Templatable } from '../templatable.js';

export class GitIgnore implements Templatable {
  readonly filename = '.gitignore';
  readonly template = 'vcs/gitignore';

  get data() {
    return {};
  }
}
