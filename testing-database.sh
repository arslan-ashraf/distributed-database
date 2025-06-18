

# write/update request
# curl localhost:4000 -X POST -H "Content-Type: application/json" -d '{ "request_type": "WRITE", "key": "key_1", "value": "value_1" }'

# delete request
# curl localhost:4000 -X POST -H "Content-Type: application/json" -d '{ "request_type": "DELETE", "key": "key_1" }'

# get request
# curl localhost:4000 -X POST -H 'Content-Type: application/json' -d '{ "request_type": "READ", "key": "key_1" }'



curl localhost:4000 -X POST -H "Content-Type: application/json" -d '{ "request_type": "WRITE", "key": "key_1", "value": "value_1" }'
curl localhost:4000 -X POST -H "Content-Type: application/json" -d '{ "request_type": "WRITE", "key": "key_2", "value": "value_2" }'
curl localhost:4000 -X POST -H "Content-Type: application/json" -d '{ "request_type": "WRITE", "key": "key_3", "value": "value_3" }'
curl localhost:4000 -X POST -H 'Content-Type: application/json' -d '{ "request_type": "READ", "key": "key_3" }'
curl localhost:4000 -X POST -H "Content-Type: application/json" -d '{ "request_type": "WRITE", "key": "key_4", "value": "value_4" }'
curl localhost:4000 -X POST -H "Content-Type: application/json" -d '{ "request_type": "WRITE", "key": "key_3", "value": "new_value_3" }'
curl localhost:4000 -X POST -H 'Content-Type: application/json' -d '{ "request_type": "READ", "key": "key_3" }'
curl localhost:4000 -X POST -H "Content-Type: application/json" -d '{ "request_type": "WRITE", "key": "key_5", "value": "value_5" }'
curl localhost:4000 -X POST -H "Content-Type: application/json" -d '{ "request_type": "WRITE", "key": "key_6", "value": "value_6" }'
curl localhost:4000 -X POST -H "Content-Type: application/json" -d '{ "request_type": "WRITE", "key": "key_7", "value": "value_7" }'
curl localhost:4000 -X POST -H 'Content-Type: application/json' -d '{ "request_type": "READ", "key": "key_1" }'
curl localhost:4000 -X POST -H "Content-Type: application/json" -d '{ "request_type": "DELETE", "key": "key_3" }'
curl localhost:4000 -X POST -H "Content-Type: application/json" -d '{ "request_type": "WRITE", "key": "key_8", "value": "value_8" }'
curl localhost:4000 -X POST -H "Content-Type: application/json" -d '{ "request_type": "WRITE", "key": "key_9", "value": "value_9" }'
curl localhost:4000 -X POST -H "Content-Type: application/json" -d '{ "request_type": "WRITE", "key": "key_1", "value": "abc def ghij k" }'
curl localhost:4000 -X POST -H "Content-Type: application/json" -d '{ "request_type": "WRITE", "key": "key_10", "value": "value_10" }'
curl localhost:4000 -X POST -H 'Content-Type: application/json' -d '{ "request_type": "READ", "key": "key_1" }'
curl localhost:4000 -X POST -H 'Content-Type: application/json' -d '{ "request_type": "READ", "key": "key_10" }'