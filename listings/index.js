"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const graphql = require("graphql");
const graphQlSchemaPath = require.resolve('./listings.graphql');
let fileContents = fs.readFileSync(graphQlSchemaPath, 'utf8');
exports.ListingSchema = graphql.buildSchema(fileContents);
exports.ListingRoot = {
    listings: async (args) => {
        return [{
                hash: "hash",
                title: "title",
                slug: "slug",
                description: "description",
                contractType: "PHYSICAL_GOOD",
                price: {
                    amount: 55,
                    currencyCode: "INR"
                }
            }];
    }
};
