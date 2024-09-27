import axios, { AxiosInstance } from 'axios';
import { HttpClient, HttpRequest, HttpResponse } from '../../types';

export class AxiosHttpClient implements HttpClient {
  private instance: AxiosInstance;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      withCredentials: true, // Enable sending cookies with requests
    });
  }

  setCookie(cookie: string) {
    this.instance.defaults.headers.common['Cookie'] = cookie;
  }

  async request(request: HttpRequest): Promise<HttpResponse> {
    const { url, method, headers, data } = request;
    const response = await this.instance.request({
      url,
      method,
      headers,
      data,
    });
    return {
      status: response.status,
      data: response.data,
    };
  }

  getInstance(): AxiosInstance {
    return this.instance;
  }
}
