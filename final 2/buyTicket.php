<?php
require_once('database.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = (int)$_POST["user_id"];
    $event_type = $_POST["event_type"];
    $event_id = (int)$_POST["event_id"];
    $price = $_POST["price"];

    $price = $price + ($price * 0.1);

    $query = "INSERT INTO `Ticket`(`user_id`, `event_type`, `event_id`, `date`, `price`) 
                                            VALUES ($user_id, '$event_type', $event_id, NOW(), $price)";

    $result = $conn->query($query);

    if ($result) {
        echo json_encode(['response' => 'Success']);
    } else {
        echo json_encode(['response' => 'Some error happend']);
    }
}

// Close the database connection
$conn->close();
?>
