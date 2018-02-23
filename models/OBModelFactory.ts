import { NetworkInterface } from './../lib/networking/Protocols';
import Restify from "../lib/networking/Restify";
import NodeNetworkClient from '../lib/networking/NodeNetworkClient';

export default class OBModelFactory{

    static api_base_url():string{
        return 'http://localhost:4002';
    }

    static simpleNodeClient(token?:string): NetworkInterface {
        let net = new NodeNetworkClient()
        token && net.setHttpHeaders({'Cookie':`OpenBazaar_Auth_Cookie=${token}`});
        return net;
    }

    static listings(token?:string):Restify{
        let url = `${OBModelFactory.api_base_url()}/ob/listings`;
        let net = OBModelFactory.simpleNodeClient(token);
        return new Restify(url, net)
    }
}