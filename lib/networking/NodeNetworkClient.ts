import * as rp from "request-promise";
import { NetworkInterface } from './Protocols';


export default class NodeNetworkClient implements NetworkInterface{

    private headers:any
    setHttpHeaders(headers:Object){
        this.headers = headers
    }

    async get(url:string,params?:Object):Promise<any>{
        return rp(url,{
            
            qs:params,
            headers: this.headers,
            json:true,
            strictSSL:true,
            method: 'GET'

        })
    }
    async post(url:string,params?:Object):Promise<any>{
        return rp(url, {
            json:true,
            headers: this.headers,
            body:params,
            strictSSL:true,
            rejectUnauthorized : false,
            method: 'POST'

        })
    }
    async put(url:string,params?:Object):Promise<any>{
        return rp(url,{
            json:true,
            body:params,
            headers: this.headers,
            strictSSL:true,
            rejectUnauthorized : false,
            method: 'PUT'

        })
    }
    async delete(url:string,params?:Object):Promise<any>{
        return rp(url,{
            json:true,
            qs:params,
            body:params,
            headers: this.headers,
            strictSSL:true,
            rejectUnauthorized : false,
            method: 'DELETE'

        })
    }
}