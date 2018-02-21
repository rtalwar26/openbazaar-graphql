
import fs = require('fs');
import * as graphql from 'graphql';

const graphQlSchemaPath = require.resolve('./listings.graphql');

let fileContents = fs.readFileSync(graphQlSchemaPath, 'utf8');

export let ListingSchema = graphql.buildSchema(fileContents);


