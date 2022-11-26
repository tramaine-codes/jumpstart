import fs from 'fs';
import { Liquid } from 'liquidjs';
import { Renderer } from './renderer.js';

export class LiquidRenderer implements Renderer {
  render(template: string, data: { [k: string]: unknown }) {
    const content = fs.readFileSync(template, 'utf-8');
    const engine = new Liquid();
    return engine.parseAndRenderSync(content, data);
  }
}
