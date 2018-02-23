"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Restify_1 = require("../lib/networking/Restify");
const NodeNetworkClient_1 = require("../lib/networking/NodeNetworkClient");
class OBModelFactory {
    static api_base_url() {
        return 'http://localhost:4002';
    }
    static simpleNodeClient(token) {
        let net = new NodeNetworkClient_1.default();
        token && net.setHttpHeaders({ 'Cookie': `OpenBazaar_Auth_Cookie=${token}` });
        return net;
    }
    static listings(token) {
        let url = `${OBModelFactory.api_base_url()}/ob/listings`;
        let net = OBModelFactory.simpleNodeClient(token);
        return new Restify_1.default(url, net);
    }
}
exports.default = OBModelFactory;
