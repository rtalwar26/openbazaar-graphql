## Sample Queries

### Listings 

**GraphQl**

```
query{
  listings(token:"<authcookie>"){
    hash
    description
  }
}
```

**Response**

```json
{
  "data": {
    "listings": []
  }
}
```
-----