"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const graphql = require("graphql");
const OBModelFactory_1 = require("../models/OBModelFactory");
const graphQlSchemaPath = require.resolve('./listings.graphql');
let fileContents = fs.readFileSync(graphQlSchemaPath, 'utf8');
exports.ListingSchema = graphql.buildSchema(fileContents);
exports.ListingRoot = {
    listings: async (args) => OBModelFactory_1.default.listings(args.token).query()
};
