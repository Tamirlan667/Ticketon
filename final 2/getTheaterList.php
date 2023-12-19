<?php
    require_once('database.php');

    if ($_SERVER["REQUEST_METHOD"] == "GET") {

        $queryToTheatre = "SELECT t.*, s.event_type, s.city, s.location, s.date, s.pensioner_price, s.adult_price, s.student_price, s.children_price FROM Theater t LEFT JOIN Session s ON t.id = s.event_id AND s.event_type = 'THEATERS' ORDER BY t.id, s.date;";

        $result = $conn->query($queryToTheatre);

        if ($result->num_rows > 0) {
            $theaters = array();
        
            while ($row = $result->fetch_assoc()) {
                $theaterId = $row["id"];
        
                if (!isset($theaters[$theaterId])) {
                    $theaters[$theaterId] = array(
                        'id' => $row["id"],
                        'name' => $row["name"],
                        'overview' => $row["overview"],
                        'directed_by' => $row["directed_by"],
                        'genre' => $row["genre"],
                        'duration' => $row["duration"],
                        'age_restriction' => $row["age_restriction"],
                        'image_url' => $row["image_url"],
                        'trailer_url' => $row["trailer_url"],
                        'sessions' => array(),
                    );
                }
        
                $theaters[$theaterId]['sessions'][] = array(
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
        
            $jsonResult = json_encode(array_values($theaters), JSON_PRETTY_PRINT);
            echo $jsonResult;
        } else {
            echo json_encode(['error' => 'No theaters found']);
        }
    }