
import fs = require('fs');
import * as graphql from 'graphql';

const graphQlSchemaPath = require.resolve('./listings.graphql');

export default graphql.buildSchema(fs.readFileSync(graphQlSchemaPath, 'utf8'));
