export interface EmberLocation {
  implementation: string;
  cancelRouterSetup?: boolean;
  getURL(): string;
  setURL(url: string): void;
  replaceURL?(url: string): void;
  onUpdateURL(callback: UpdateCallback): void;
  formatURL(url: string): string;
  detect?(): void;
  initState?(): void;
}

export type UpdateCallback = (url: string) => void;
