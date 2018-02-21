"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const graphql = require("graphql");
const graphQlSchemaPath = require.resolve('./listings.graphql');
exports.default = graphql.buildSchema(fs.readFileSync(graphQlSchemaPath, 'utf8'));