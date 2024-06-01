import type { Templatable } from '../templatable.js';

export class PackageJson implements Templatable {
  readonly filename = 'package.json';
  readonly template = 'typescript/package.json';

  get data() {
    return { name: 'jumpstart' };
  }
}
