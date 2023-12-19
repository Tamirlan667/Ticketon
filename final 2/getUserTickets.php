<?php
require_once('database.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = (int)$_POST["user_id"];

    $query = "SELECT u.id AS user_id, u.username, u.mail AS email, t.id AS ticket_id, t.event_type, t.event_id, t.date AS ticket_date, t.price 
            FROM USER u LEFT JOIN Ticket t ON u.id = t.user_id 
            WHERE u.id = $user_id;";

    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        $userData = array();

        while ($row = $result->fetch_assoc()) {
            $userId = $row["user_id"];

            if (!isset($userData[$userId])) {
                $userData[$userId] = array(
                    'user_id' => $row["user_id"],
                    'username' => $row["username"],
                    'email' => $row["email"],
                    'tickets' => array(),
                );
            }

            $userData[$userId]['tickets'][] = array(
                'ticket_id' => $row["ticket_id"],
                'event_type' => $row["event_type"],
                'event_id' => $row["event_id"],
                'ticket_date' => $row["ticket_date"],
                'price' => $row["price"],
            );
        }

        $jsonResult = json_encode(array_values($userData), JSON_PRETTY_PRINT);
        echo $jsonResult;
    } else {
        echo json_encode(['error' => 'No user found']);
    }
}

// Close the database connection
$conn->close();
?>
