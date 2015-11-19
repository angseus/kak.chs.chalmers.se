<?php

$link = mysql_connect('localhost', 'user', 'password');
if (!$link) {
    die('Not connected : ' . mysql_error());
}

mysql_set_charset('utf8', $link);

$db = mysql_select_db('db', $link);
if (!$db) {
    die ('Can not use db : ' . mysql_error());
}

if(isset($_POST['functionname'])) {
	switch($_POST['functionname']) {
		case 'fetchAllPosts':
			$result = mysql_query("SELECT * FROM posts ORDER BY timestamp DESC");
			$arr = array();
			while ($row = mysql_fetch_assoc($result)) {
				array_push($arr, $row);
			}
			echo json_encode($arr, JSON_UNESCAPED_UNICODE);
			mysql_free_result($result);
		default:
			break;
	}
} else {

	$result = mysql_query("SELECT * FROM posts ORDER BY timestamp DESC LIMIT 3");
	$arr = array();
	while ($row = mysql_fetch_assoc($result)) {
		array_push($arr, $row);
	}
	echo json_encode($arr, JSON_UNESCAPED_UNICODE);
	mysql_free_result($result);
}
?>