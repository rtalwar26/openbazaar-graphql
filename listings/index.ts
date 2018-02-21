

import fs = require('fs');
import * as graphql from 'graphql';

const graphQlSchemaPath = require.resolve('./listings.graphql');

let fileContents = fs.readFileSync(graphQlSchemaPath, 'utf8');

export let ListingSchema = graphql.buildSchema(fileContents);


 export let ListingRoot = {

    listings: async (args?: any) => {
        return [{
            hash: "hash",
            title: "title",
            slug : "slug",
            description:"description",
            contractType:"PHYSICAL_GOOD",
            price:{
                amount:55,
                currencyCode: "INR"
            }
        }]
    }
   
}

