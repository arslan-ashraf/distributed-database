const { assemble_write } = require("../raft/raft-log-replication/handle_writes")
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
	if (expected != actual) {
		console.log("x".repeat(50))
		console.error(`TEST FAILED`)
		console.log(`Expected:`, expected)
		console.log(`Got     :`, actual)
		console.log("x".repeat(50))
	} else {
		console.log(`TEST PASSED`)
	}
}


function test_parse_line_of_log(){

	let data_1 = { "log_index": 5098, "term": 3, "key": "some_key", 
					"value": "some_value", "request_type": "WRITE" }

	let line_1 = assemble_write(data_1, RAFT_LOG_CONSTANTS)

	let expected_data_point_1 = parse_line_of_log(line_1, RAFT_LOG_CONSTANTS)
	let actual_data_point_1 = [ '5098', '3', 'some_key', 'some_value', 'PRESENT' ]

	let data_2 = { "log_index": 1405, "term": 4, "key": "key_abcd", 
					"value": "", "request_type": "DELETE" }

	let line_2 = assemble_write(data_2, RAFT_LOG_CONSTANTS)

	let expected_data_point_2 = parse_line_of_log(line_2, RAFT_LOG_CONSTANTS)
	let actual_data_point_2 = [ '1405', '4', 'key_abcd', '', 'DELETED' ]

	assert_equal(expected_data_point_1, actual_data_point_1)
	assert_equal(expected_data_point_2, actual_data_point_2)
}


function test_assemble_line_to_write(){
	let data_1 = { "log_index": 5098, "term": 3, "key": "some_key", 
					"value": "some_value", "request_type": "WRITE" }

	let line_1 = assemble_write(data_1, RAFT_LOG_CONSTANTS)

	let data_point_1 = parse_line_of_log(line_1, RAFT_LOG_CONSTANTS)

	let expected_line_to_write_1 = assemble_line_to_write(data_point_1, HASH_TABLE_CONSTANTS)
	let actual_line_to_write_1 = `
5098      PRESENT   some_key            some_value                                       null      `

	let data_2 = { "log_index": 1405, "term": 4, "key": "key_abcd", 
					"value": "", "request_type": "DELETE" }

	let line_2 = assemble_write(data_2, RAFT_LOG_CONSTANTS)

	let data_point_2 = parse_line_of_log(line_2, RAFT_LOG_CONSTANTS)

	let expected_line_to_write_2 = assemble_line_to_write(data_point_2, HASH_TABLE_CONSTANTS)
	let actual_line_to_write_2 = `
1405      DELETED   key_abcd                                                             null      `
	
	assert_equal(expected_line_to_write_1, actual_line_to_write_1)
	assert_equal(expected_line_to_write_2, actual_line_to_write_2)
}


test_parse_line_of_log()

test_assemble_line_to_write()