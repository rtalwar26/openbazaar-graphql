import { NetworkInterface , ModelProtocol} from './Protocols';

class Restify implements ModelProtocol{
    base_url:string
    networkClient:NetworkInterface
    constructor(base_url:string,networkClient:NetworkInterface){
        this.base_url = base_url
        this.networkClient = networkClient
    }

    get(id?:string,options?:Object):Promise<any>{
        let resourceString = id ? ("/" + id) : ""
        let path = this.base_url + resourceString
        return this.networkClient.get(path,options)

    }
    query(params?:Object,options?:Object):Promise<any>{
        
        return this.networkClient.get(this.base_url,params)

    }
    add(params:Object):Promise<any>{
        return this.networkClient.post(this.base_url,params)
    }
    put(id:string,params:Object):Promise<any>{
        let resourceString = id ? ("/" + id) : ""
        let path = this.base_url + resourceString
        return this.networkClient.put(path,params)
    }

    remove(id:string,options?:Object):Promise<any>{
        let path = this.base_url + "/" + id

        return this.networkClient.delete(path,options)
    }
}

export default Restify