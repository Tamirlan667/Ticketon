<?php
    require_once('database.php');

    if ($_SERVER["REQUEST_METHOD"] == "GET") {

        $sql = "SELECT kp.*, s.event_type, s.city, s.location, s.date, s.pensioner_price, s.adult_price, s.student_price, s.children_price FROM KidsParty kp LEFT JOIN Session s ON kp.id = s.event_id AND s.event_type = 'FOR_KIDS' ORDER BY kp.id, s.date;";

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $kidsParties = array();

            while ($row = $result->fetch_assoc()) {
                $kidsPartyId = $row["id"];

                if (!isset($kidsParties[$kidsPartyId])) {
                    $kidsParties[$kidsPartyId] = array(
                        'id' => $row["id"],
                        'name' => $row["name"],
                        'overview' => $row["overview"],
                        'duration' => $row["duration"],
                        'age_restriction' => $row["age_restriction"],
                        'image_url' => $row["image_url"],
                        'sessions' => array(),
                    );
                }

                $kidsParties[$kidsPartyId]['sessions'][] = array(
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

            // Convert the result to JSON
            $jsonResult = json_encode(array_values($kidsParties), JSON_PRETTY_PRINT);
            echo $jsonResult;
        } else {
            echo json_encode(['error' => 'No kids parties found']);
        }
    }