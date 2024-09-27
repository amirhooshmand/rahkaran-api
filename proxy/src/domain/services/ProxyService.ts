import { HttpClient, AuthService, HttpRequest, HttpResponse } from '../../types';
import logger from '../../logger'

export class ProxyService {
  private httpClient: HttpClient;
  private authService: AuthService;

  constructor(httpClient: HttpClient, authService: AuthService) {
    this.httpClient = httpClient;
    this.authService = authService;
  }

  async proxyRequest(request: HttpRequest): Promise<HttpResponse> {
    const { url, method, headers, data } = request;
    try {
      return await this.httpClient.request({ url, method, headers, data });
    } catch (error: any) {
      logger.error(`Error proxying request: ${error}`)
      if (error.response && error.response.status === 403) {
        logger.info('Session expired or unauthorized, re-login')

        this.httpClient.setCookie('');
        const newSessionCookie = await this.authService.login();
        this.httpClient.setCookie(newSessionCookie ?? '');
        return await this.httpClient.request({ url, method, headers, data });
      }
      throw error;
    }
  }
}
