<?php
    require_once('database.php');

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $gift_user_id = $_POST["gift_user_id"];

        $query = "SELECT * FROM `Gift` WHERE `user_id_get` = $gift_user_id;";

        $result = $conn->query($query);

        if ($result->num_rows > 0) {
            $gifts = array();
    
            while ($row = $result->fetch_assoc()) {
                $gifts[] = array(
                    'id' => $row["id"],
                    'user_id_present' => $row["user_id_present"],
                    'user_id_get' => $row["user_id_get"],
                    'amount' => $row["amount"],
                );
            }
    
            $jsonResult = json_encode($gifts, JSON_PRETTY_PRINT);
            echo $jsonResult;
        } else {
            echo json_encode(['error' => 'No gifts found for the specified user.']);
        }

    }