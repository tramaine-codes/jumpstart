export interface Renderer {
  render(template: string, data?: Record<string, unknown>): string;
}
