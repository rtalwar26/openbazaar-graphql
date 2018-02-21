"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
