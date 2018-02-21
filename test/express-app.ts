import { ListingSchema } from './../listings/schema';
import { ListingRoot } from './../listings/root';
import fs = require('fs');
import * as GraphHTTP from 'express-graphql';
import * as graphql from 'graphql';

import * as express from "express"
import * as bodyParser from "body-parser"




let listingGQL = GraphHTTP({
    schema: ListingSchema,
    rootValue: ListingRoot,
    pretty: true,
    graphiql: true
})







let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/graphql/listings',

    listingGQL);

let port = 8080;
let server = app.listen(port, () => {
    console.log('server started at port', port)
    if (process.send) {
        process.send('online');
    }
})



