const { parse_line_of_log, assemble_line_to_write } = require("../on-disk-hash-table/hash_table_write")


const RAFT_LOG_CONSTANTS = {
	"LOG_INDEX_SIZE": 15,
	"TERM_SIZE": 5,
	"KEY_SIZE": 20,
	"VALUE_SIZE": 49,
	"LIVE_STATUS_SIZE": 10
}


const HASH_TABLE_CONSTANTS = {
	"HASH_TABLE_MAX_ENTRIES": 5,
	"NUM_BYTES_PER_ADDRESS": 10,
	"HASH_TABLE_HEADER_SIZE": 267,
	"DATA_POINT_SIZE": 100,
	"VERSION_NUMBER_SIZE": 10,
	"LIVE_STATUS_SIZE": 10,
	"KEY_SIZE": 20,
	"VALUE_SIZE": 49,
	"NEXT_NODE_POINTER_SIZE": 10
}


function assert_equal(expected, actual) {
	if (expected !== actual) {
		console.error(`TEST FAILED - Expected: ${expected}, Got: ${actual}`)
	} else {
		console.log(`TEST PASSED`)
	}
}


let data_point = parse_line_of_log(lines_to_write[i], RAFT_LOG_CONSTANTS)

let line_to_write = assemble_line_to_write(data_point, HASH_TABLE_CONSTANTS)


