import type { Templatable } from '../templatable.js';

export class C8 implements Templatable {
  readonly filename = '.c8rc.json';
  readonly template = 'testing/c8rc.json';

  get data() {
    return {};
  }
}
