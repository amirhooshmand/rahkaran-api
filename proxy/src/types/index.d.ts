import {AxiosInstance} from "axios";

export interface ServiceConfig {
    rahkaran: {
        url: string;
        username: string;
        password: string;
        salesOfficeId: string;
    },
    rsa: {
        url: string;
    }
}


export interface HttpRequest {
    url: string;
    method: string;
    headers?: any;
    data?: any;
}

export interface HttpResponse {
    status: number;
    data: any;
}

export interface HttpClient {
    getInstance(): AxiosInstance;

    setCookie(cookie: string): void;

    request(request: HttpRequest): Promise<HttpResponse>;
}

export interface AuthService {
    login(): Promise<string | undefined>;
}