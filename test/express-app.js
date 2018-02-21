"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./../listings/index");
const GraphHTTP = require("express-graphql");
const express = require("express");
const bodyParser = require("body-parser");
let listingGQL = GraphHTTP({
    schema: index_1.ListingSchema,
    rootValue: index_1.ListingRoot,
    pretty: true,
    graphiql: true
});
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/graphql/listings', listingGQL);
let port = 8080;
let server = app.listen(port, () => {
    console.log('server started at port', port);
    if (process.send) {
        process.send('online');
    }
});
