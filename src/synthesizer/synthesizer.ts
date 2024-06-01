/* eslint-disable no-console */
import type { Package } from '../pkg/package.js';
import type { Renderer } from '../renderer/renderer.js';
import type { Templatable } from '../template/templatable.js';

interface SynthesizerProps {
  configFiles: Templatable[];
}

export class Synthesizer {
  constructor(
    private readonly renderer: Renderer,
    private readonly pkg: Package,
    private readonly props: SynthesizerProps
  ) {}

  synth = () => {
    const { configFiles } = this.props;

    for (const { data, template } of configFiles) {
      console.log(this.renderer.render(this.templatePath(template), data));
    }
  };

  private templatePath = (template: string) =>
    `${this.pkg.rootDir()}/templates/${template}.liquid`;
}
