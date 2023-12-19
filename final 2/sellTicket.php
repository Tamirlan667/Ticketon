<?php
require_once('database.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_POST["user_id"];
    $event_type = $_POST["event_type"];
    $event_id = $_POST["event_id"];
    $price = $_POST["price"];

    // Your timestamp column name (adjust if needed)
    $timestampColumn = "date";

    // Assuming your date is stored in a column named 'date'
    $query = "SELECT $timestampColumn FROM Ticket WHERE user_id = $user_id AND event_type = '$event_type' AND event_id = $event_id AND price = $price";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $eventTimestamp = strtotime($row[$timestampColumn]);
        $currentTimestamp = time();

        // Time difference in hours
        $timeDifferenceHours = ($eventTimestamp - $currentTimestamp) / 3600;

        if ($timeDifferenceHours > 2) {
            // If more than 2 hours before the event, proceed with returning the ticket
            $deleteQuery = "DELETE FROM Ticket WHERE user_id = $user_id AND event_type = '$event_type' AND event_id = $event_id AND price = $price";
            $deleteResult = $conn->query($deleteQuery);

            if ($deleteResult) {
                echo json_encode(['response' => 'Ticket returned successfully']);
            } else {
                echo json_encode(['response' => 'Error returning ticket']);
            }
        } else {
            echo json_encode(['response' => 'Ticket cannot be returned within 2 hours of the event']);
        }
    } else {
        echo json_encode(['response' => 'Ticket not found']);
    }
}
?>
