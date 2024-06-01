export interface Templatable {
  readonly filename: string;
  readonly template: string;
  readonly data: Record<string, unknown>;
}
