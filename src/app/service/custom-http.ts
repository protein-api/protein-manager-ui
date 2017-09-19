import {Injectable} from '@angular/core';
import {Http, ConnectionBackend, Request, RequestOptions, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {ErrorNotifierService} from './error-notifier.service';
import {Observable} from 'rxjs/Rx';




@Injectable()
export class CustomHttp extends Http {

    httpOptions : RequestOptions;

    private SAVE_REQUEST_TIMEOUT = 120000;
    private REQUEST_TIMEOUT = 120000;
    private REQUEST_RETRY = 30000;

    constructor(backend: ConnectionBackend,
                defaultOptions: RequestOptions,
                private errorService:ErrorNotifierService) {
        super(backend, defaultOptions);
        this.httpOptions = defaultOptions;
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<any> {
        console.log('Before the request...');
        return super.request(url, options)
            .catch((err: any): any => {
                this.errorService.notifyError(err);
                return Observable.empty();
            })
            .retryWhen(error => error.delay(this.REQUEST_RETRY))
            .timeout(this.REQUEST_TIMEOUT)
            .finally(() => {
                console.log('After the request...');
            });
    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        console.log('Before the request...');
        return super.get(url, options)
            .catch((err: any): any => {
                if (err.status === 400 || err.status === 422) {
                    return Observable.throw(err);
                } else if (err.status === 401 || err.status === 403) {
                    return Observable.throw(err);
                }else {
                    this.errorService.notifyError(err);
                    return Observable.empty();
                }
            })
            .retryWhen(error => error.delay(this.REQUEST_TIMEOUT))
            .timeout(this.REQUEST_TIMEOUT)
            .finally(() => {
                console.log('After the request...');
            });
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        console.log('Before the request...');
        console.log('merging options');
        if(!options){
            options =  this.getRequestOptions({});
        }

        options.url = url;
        options.method = 'post';
        this.httpOptions.merge(options);

        return super.post(url, body, options)
            .catch((err: any): any => {
                if (err.status === 400 || err.status === 422) {
                    return Observable.throw(err);
                } else if (err.status === 401 || err.status === 403) {
                    return Observable.throw(err);
                } else  if(err.status === 500 && err.exception === "com.suterra.pufferapp.exceptions.SuterraBusinessException"){
                    return Observable.throw(err);
                }else{
                    this.errorService.notifyError(err);
                    return Observable.empty();
                }
            })
            .timeout(this.SAVE_REQUEST_TIMEOUT)
            .finally(() => {
                console.log('After the request...');
            });
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        console.log('Before the request...');
        console.log('merging options');

        if(!options){
            options =  this.getRequestOptions({});
        }

        options.url = url;
        options.method = 'put';
        this.httpOptions.merge(options);

        return super.put(url, body, options)
            .catch((err: any): any => {
                if (err.status === 400 || err.status === 422) {
                    return Observable.throw(err);
                } else if (err.status === 401 || err.status === 403) {
                    return Observable.throw(err);
                } else {
                    this.errorService.notifyError(err);
                    return Observable.empty();
                }
            })
            .timeout(this.SAVE_REQUEST_TIMEOUT)
            .finally(() => {
                console.log('After the request...');
            });
    }

    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        console.log('Before the request...');
        console.log('merging options');
        if(!options){
            options =  this.getRequestOptions({});
        }

        options.url = url;
        options.method = 'patch';
        this.httpOptions.merge(options);

        return super.patch(url, body, options)
            .catch((err: any): any => {
                if (err.status === 400 || err.status === 422) {
                    return Observable.throw(err);
                } else if (err.status === 401 || err.status === 403) {
                    return Observable.throw(err);
                } else {
                    this.errorService.notifyError(err);
                    return Observable.empty();
                }
            })
            .timeout(this.SAVE_REQUEST_TIMEOUT)
            .finally(() => {
                console.log('After the request...');
            });
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<any> {
        return super.delete(url, options)
            .catch((err: any): any => {
                if (err.status === 400 || err.status === 422) {
                    return Observable.throw(err);
                } else if (err.status === 401 || err.status === 403) {
                    return Observable.throw(err);
                } else if(err.status===204){
                    return Observable.empty();
                }else{
                    this.errorService.notifyError(err);
                    return Observable.empty();
                }
            })
            .retryWhen(error => error.delay(this.REQUEST_TIMEOUT))
            .timeout(this.SAVE_REQUEST_TIMEOUT)
            .finally(() => {
                console.log('After the request...');
            });
    }

    getRequestOptions(options?: RequestOptionsArgs) : RequestOptions {
        let reqOptions : RequestOptions = new RequestOptions(options);
        return reqOptions;
    }

}
