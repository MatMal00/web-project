export class ApiService {
  //   private baseUrl: string;

  constructor(_url: string) {
    // this.baseUrl = url;
  }

  //   private request(endpoint: string, options:) {}

  public get<T>(endpoint: string): T | undefined {
    const item = localStorage.getItem(endpoint);

    if (item === null) return undefined;

    const response: T = JSON.parse(item);
    return response;
  }

  public set(endpoint: string, value: any): void {
    localStorage.setItem(endpoint, JSON.stringify(value));
  }

  public update(endpoint: string, value: any): void {
    localStorage.setItem(endpoint, JSON.stringify(value));
  }

  public delete(endpoint: string): void {
    localStorage.removeItem(endpoint);
  }
}
