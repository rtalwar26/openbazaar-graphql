"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise");
class NodeNetworkClient {
    setHttpHeaders(headers) {
        this.headers = headers;
    }
    async get(url, params) {
        return rp(url, {
            qs: params,
            headers: this.headers,
            json: true,
            strictSSL: true,
            method: 'GET'
        });
    }
    async post(url, params) {
        return rp(url, {
            json: true,
            headers: this.headers,
            body: params,
            strictSSL: true,
            rejectUnauthorized: false,
            method: 'POST'
        });
    }
    async put(url, params) {
        return rp(url, {
            json: true,
            body: params,
            headers: this.headers,
            strictSSL: true,
            rejectUnauthorized: false,
            method: 'PUT'
        });
    }
    async delete(url, params) {
        return rp(url, {
            json: true,
            qs: params,
            body: params,
            headers: this.headers,
            strictSSL: true,
            rejectUnauthorized: false,
            method: 'DELETE'
        });
    }
}
exports.default = NodeNetworkClient;
