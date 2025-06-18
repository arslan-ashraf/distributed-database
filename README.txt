To run the database:

First, create three clusters with three servers in each cluster
in the raft folder

Cluster 1:
node raft_client_server.js 3001 3002 3003
node raft_client_server.js 3002 3001 3003
node raft_client_server.js 3003 3001 3002

Cluster 2:
node raft_client_server.js 3004 3005 3006
node raft_client_server.js 3005 3004 3006
node raft_client_server.js 3006 3004 3005

Cluster 3:
node raft_client_server.js 3007 3008 3009
node raft_client_server.js 3008 3009 3007
node raft_client_server.js 3009 3007 3008


Then run the database server in database-server folder

node database-server.js

Finally, the database is ready to server requests

curl localhost:4000 -X POST -H "Content-Type: application/json" -d '{ "request_type": "WRITE", "key": "key_1", "value": "value_1" }'