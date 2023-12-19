<?php
    require_once("database.php");

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $eventType = $_POST["eventType"];
        $eventID = $_POST["eventID"];
        $userID = $_POST["userID"];
        $comment = $_POST["comment"];

        if($comment == "") {
            echo json_encode(['response' => 'Empty comment']);
            exit; 
        }

        $query = "INSERT INTO `Comment`(`event_type`, `event_id`, `user_id`, `comment`, `date`) 
                                VALUES ('$eventType', $eventID, $userID, '$comment', NOW());";

        $result = $conn->query($query);

        if ($result) {
            echo json_encode(['response' => 'Comment added']);
        } else {
            echo json_encode(['response' => 'Some error happend']);
        }
    }