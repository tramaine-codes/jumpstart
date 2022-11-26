/* eslint-disable no-console */
import { Package } from '../pkg/package.js';
import { Renderer } from '../renderer/renderer.js';
import { Templatable } from '../template/templatable.js';

interface SynthesizerProps {
  configFiles: Templatable[];
}

export class Synthesizer {
  constructor(
    private readonly renderer: Renderer,
    private readonly pkg: Package,
    private readonly props: SynthesizerProps
  ) {}

  synth() {
    const { configFiles } = this.props;

    configFiles.forEach(({ template, data }) => {
      const templatePath = this.templatePath(template);

      console.log(this.renderer.render(templatePath, data));
    });
  }

  private templatePath(template: string) {
    return `${this.pkg.rootDir()}/templates/${template}.liquid`;
  }
}
