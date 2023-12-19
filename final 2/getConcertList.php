<?php
    require_once('database.php');

    if ($_SERVER["REQUEST_METHOD"] == "GET") {

        $query = "SELECT c.*, s.event_type, s.city, s.location, s.date, s.pensioner_price, s.adult_price, s.student_price, s.children_price FROM Concert c LEFT JOIN Session s ON c.id = s.event_id AND s.event_type = 'CONCERTS' ORDER BY c.id, s.date;";

        $result = $conn->query($query);

        if ($result->num_rows > 0) {
            $concerts = array();

            while ($row = $result->fetch_assoc()) {
                $concertId = $row["id"];

                if (!isset($concerts[$concertId])) {
                    $concerts[$concertId] = array(
                        'id' => $row["id"],
                        'name' => $row["name"],
                        'overview' => $row["overview"],
                        'image_url' => $row["image_url"],
                        'trailer_url' => $row["trailer_url"],
                        'sessions' => array(),
                    );
                }

                $concerts[$concertId]['sessions'][] = array(
                    'event_type' => $row["event_type"],
                    'city' => $row["city"],
                    'location' => $row["location"],
                    'date' => $row["date"],
                    'pensioner_price' => $row["pensioner_price"],
                    'adult_price' => $row["adult_price"],
                    'student_price' => $row["student_price"],
                    'children_price' => $row["children_price"],
                );
            }

            $jsonResult = json_encode(array_values($concerts), JSON_PRETTY_PRINT);
            echo $jsonResult;
        } else {
            echo json_encode(['error' => 'No concerts found']);
        }
    }



