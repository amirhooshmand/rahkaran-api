import { Request, Response } from 'express';
import { ProxyService } from '../../domain/services/ProxyService';
import { AxiosHttpClient } from '../../infrastructure/http/AxiosHttpClient';
import { AuthService } from '../../domain/services/AuthService';
import config from '../../infrastructure/config/config';

export class ProxyController {
  private proxyService: ProxyService;

  constructor() {
    const httpClient = new AxiosHttpClient(config.rahkaran.url);
    const authService = new AuthService(config, httpClient.getInstance());
    this.proxyService = new ProxyService(httpClient, authService);
  }

  async handle(req: Request, res: Response): Promise<void> {
    const { method, headers, body } = req;
    const url = config.rahkaran.url + req.path;

    try {
      const response = await this.proxyService.proxyRequest({ url, method, headers, data: body });
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
  }
}
