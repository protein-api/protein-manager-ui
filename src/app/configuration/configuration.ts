import {Injectable} from "@angular/core";
import {Headers, RequestOptions, RequestOptionsArgs} from "@angular/http";

import {EnvironmentService} from "../service/environment.service";


@Injectable()
export class Configuration extends RequestOptions {

    private webApiBaseUrl : string;

    constructor( private environmentService : EnvironmentService) {
        super();
        this.webApiBaseUrl = this.environmentService.getCurrentEnviroment().apiUrl;
        console.log('webApiBaseUrl = '+ this.webApiBaseUrl);
    }

    merge(options?:RequestOptionsArgs):RequestOptions {
        if(!options.url || (!options.url.startsWith("http") && options.url.indexOf("/api")>-1)) {
            options.url = (this.webApiBaseUrl ? this.webApiBaseUrl : 'http://localhost:18200/') + options.url;
        }
        let headers = options.headers || new Headers();
        // headers.append('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        if(options.method === 'put' ||
            options.method === 'post' ||
            options.method === 'patch'){
            headers.append('Content-Type','application/json');
        }
        options.headers= headers;
        return super.merge(options);
    }

}
