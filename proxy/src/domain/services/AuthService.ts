import {AxiosInstance} from 'axios';
import {ServiceConfig} from '../../types';

export class AuthService {
    private config: ServiceConfig;
    private axiosInstance: AxiosInstance;

    constructor(config: ServiceConfig, axiosInstance: AxiosInstance) {
        this.config = config;
        this.axiosInstance = axiosInstance;
    }

    async login(): Promise<string | undefined> {
        const {url, username, password, salesOfficeId} = this.config.rahkaran;

        const {data} = await this.axiosInstance.get(`${url}/DSD/API/system.svc/session`);
        const sessionId = data.id;

        const encryptedPassword = await this.encryptPassword(
            sessionId + "**" + password,
            data.rsa.M,
            data.rsa.E);

        const response = await this.axiosInstance.post(
            `${url}/DSD/API/system.svc/newLogin`,
            {
                username,
                password: encryptedPassword,
                salesOfficeId,
                sessionId,
            }
        );

        return response.headers['set-cookie'] ? response.headers['set-cookie'].join(';') : undefined;
    }

    private async encryptPassword(password: string, m: string, e: string): Promise<string> {
        const {url} = this.config.rsa;

        const {data} = await this.axiosInstance.get<string>(
            `${url}/encrypt?password=${password}&m=${m}&e=${e}`
        );

        return data;
    }
}
