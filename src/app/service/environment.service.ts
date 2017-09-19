import {Inject, Injectable} from "@angular/core";
import {DOCUMENT} from "@angular/platform-browser";

import {environmentLocal} from "../configuration/environment.local";


@Injectable()
export class EnvironmentService {

    private currentEnvironment : any;
    private enviroments : Object = {};

    constructor(@Inject(DOCUMENT) private document: any){
        this.buildEnviroments();
        this.selectCurrentEnvironmentFromFrontUrl();
    }

    // Devuelve los parametros del enviroment actual
    getCurrentEnviroment() {
        return this.currentEnvironment;
    }

    buildEnviroments() {
        // this.addEnvironment(environmentAws);
        this.addEnvironment(environmentLocal);
        // this.addEnvironment(environmentDev);
        // this.addEnvironment(environmentQa);
        // this.addEnvironment(environmentProd);
    }

    addEnvironment(environment : any){
        this.enviroments[environment.frontUrl] = environment;
    }

    selectCurrentEnvironmentFromFrontUrl(){
        let url = this.getFrontUrl();
        this.currentEnvironment = this.enviroments[url];
        if(!this.currentEnvironment){
            throw "No enviroment found";
        }
    }

    getFrontUrl() : string {
        let url = this.document.location.href;
        let index = url.indexOf("//");
        if(index !== -1){
            url = url.substr(index + 2);
        }
        index = url.indexOf("/");
        if(index !== -1){
            url = url.substr(0, index);
        }
        return url;
    }
}/**
 * Created by murmu on 17/06/17.
 */
