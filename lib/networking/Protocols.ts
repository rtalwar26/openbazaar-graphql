

export interface ModelProtocol{
    get(id?:string,options?:Object):Promise<any>
    query(params?:Object,options?:Object):Promise<any>
    add(params:Object):Promise<any>
    put(id:string,params:Object):Promise<any>
    remove(id:string,options?:Object):Promise<any>
}


export interface NetworkInterface{
    get(url:string,params?:Object):Promise<any>
    post(url:string,params?:Object):Promise<any>
    put(url:string,params?:Object):Promise<any>
    delete(url:string,params?:Object):Promise<any>
}

export interface CacheStoreProtocol{
    put(path:string,data:any):Promise<any>
    get(path:string):Promise<any>
}