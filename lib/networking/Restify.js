"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Restify {
    constructor(base_url, networkClient) {
        this.base_url = base_url;
        this.networkClient = networkClient;
    }
    get(id, options) {
        let resourceString = id ? ("/" + id) : "";
        let path = this.base_url + resourceString;
        return this.networkClient.get(path, options);
    }
    query(params, options) {
        return this.networkClient.get(this.base_url, params);
    }
    add(params) {
        return this.networkClient.post(this.base_url, params);
    }
    put(id, params) {
        let resourceString = id ? ("/" + id) : "";
        let path = this.base_url + resourceString;
        return this.networkClient.put(path, params);
    }
    remove(id, options) {
        let path = this.base_url + "/" + id;
        return this.networkClient.delete(path, options);
    }
}
exports.default = Restify;
