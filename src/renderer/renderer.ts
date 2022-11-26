export interface Renderer {
  render(template: string, data?: { [k: string]: unknown }): string;
}
