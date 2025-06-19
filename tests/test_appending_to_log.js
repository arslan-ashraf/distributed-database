const { assemble_write } = require("../raft/raft-log-replication/handle_writes")


const RAFT_LOG_CONSTANTS = {
	"LOG_INDEX_SIZE": 15,
	"TERM_SIZE": 5,
	"KEY_SIZE": 20,
	"VALUE_SIZE": 49,
	"LIVE_STATUS_SIZE": 10
}


function assert_equal(expected, actual) {
	if (expected !== actual) {
		console.error(`TEST FAILED - Expected: ${expected}, Got: ${actual}`)
	} else {
		console.log(`TEST PASSED`)
	}
}


function test_assemble_write(){
	let data_1 = { "log_index": 5098, "term": 3, "key": "some_key", 
					"value": "some_value", "request_type": "WRITE" }

	let expected_line_1 = assemble_write(data_1, RAFT_LOG_CONSTANTS)
	let actual_line_1 = `5098           3    some_key            some_value                                       PRESENT   
`

	let data_2 = { "log_index": 1405, "term": 4, "key": "key_abcd", 
					"value": "", "request_type": "DELETE" }

	let expected_line_2 = assemble_write(data_2, RAFT_LOG_CONSTANTS)
	let actual_line_2 = `1405           4    key_abcd                                                             DELETED   
`
	assert_equal(expected_line_1, actual_line_1)
	assert_equal(expected_line_2, actual_line_2)
	
}

test_assemble_write()