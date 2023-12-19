<?php
    require_once('database.php');

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $gift_user_id_present = $_POST["gift_user_id_present"];
        $gift_user_id_get = $_POST["gift_user_id_get"];
        $gift_amount = $_POST["gift_amount"];

        $query = "INSERT INTO `Gift`(`user_id_present`, `user_id_get`, `amount`) 
                            VALUES ($gift_user_id_present, $gift_user_id_get, $gift_amount)";

        $result = $conn->query($query);

        if ($result) {
            echo json_encode(['response' => 'Success']);
        } else {
            echo json_encode(['response' => 'Some error happend']);
        }
    }