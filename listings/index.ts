

import fs = require('fs');
import * as graphql from 'graphql';
import OBModelFactory from '../models/OBModelFactory';

const graphQlSchemaPath = require.resolve('./listings.graphql');

let fileContents = fs.readFileSync(graphQlSchemaPath, 'utf8');

export let ListingSchema = graphql.buildSchema(fileContents);


 export let ListingRoot = {

    listings: async (args?: any) => OBModelFactory.listings(args.token).query()
   
}

