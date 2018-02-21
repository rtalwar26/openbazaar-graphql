

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

