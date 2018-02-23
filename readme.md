## Graphql

The project contains nodejs graphql adapter to talk to openbazaar api. 
This module can be used with express or similar servers, or can be directly used to serve graphql queries.

### Running Open Bazaar daemon

```
cd $GOPATH
go get -u github.com/OpenBazaar/openbazaar-go
cd $GOPATH/src/github.com OpenBazaar/openbazaar-go
go run openbazaard.go start -c <authcookie>
```

### Installation

```npm install openbazaar-graphql```

### Docs

TBD...