import { Liquid } from 'liquidjs';
import fs from 'node:fs';
import type { Renderer } from './renderer.js';

export class LiquidRenderer implements Renderer {
  render = (template: string, data: { [k: string]: unknown }) => {
    const content = fs.readFileSync(template, 'utf-8');
    const engine = new Liquid();
    return engine.parseAndRenderSync(content, data);
  };
}
