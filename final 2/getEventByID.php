<?php
    require_once('database.php');

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $eventType = $_POST["eventType"];
        $eventID = $_POST["eventID"];

        if($eventType == "" && $eventID == "") {
            echo json_encode(['response' => 'Empty query']);
            exit; 
        }

        $query = "SELECT m.*, c.id AS comment_id, c.user_id AS comment_user_id, c.comment AS comment_text, c.date AS comment_date, s.id AS session_id, s.city AS session_city, s.location AS session_location, s.date AS session_date, s.pensioner_price, s.adult_price, s.student_price, s.children_price 
            FROM Movie m LEFT JOIN Comment c ON m.id = c.event_id AND c.event_type = '$eventType' 
            LEFT JOIN Session s ON m.id = s.event_id AND s.event_type = '$eventType' 
            WHERE m.id = $eventID;";

        $result = $conn->query($query); 

        if ($result->num_rows > 0) {
            $movies = array();
        
            while ($row = $result->fetch_assoc()) {
                $movieId = $row["id"];
        
                if (!isset($movies[$movieId])) {
                    $movies[$movieId] = array(
                        'id' => $row["id"],
                        'name' => $row["name"],
                        'year_of_issue' => $row["year_of_issue"],
                        'distributor' => $row["distributor"],
                        'country_of_manufacture' => $row["country_of_manufacture"],
                        'directed_by' => $row["directed_by"],
                        'main_actors' => $row["main_actors"],
                        'genre' => $row["genre"],
                        'duration' => $row["duration"],
                        'age_restriction' => $row["age_restriction"],
                        'premiere_date' => $row["premiere_date"],
                        'image_url' => $row["image_url"],
                        'trailer_url' => $row["trailer_url"],
                        'overview' => $row["overview"],
                        'sessions' => array(),
                        'comments' => array(),
                    );
                }
        
                $sessionKey = $row["session_id"];
                if (!isset($movies[$movieId]['sessions'][$sessionKey])) {
                    $movies[$movieId]['sessions'][$sessionKey] = array(
                        'event_type' => $row["event_type"],
                        'city' => $row["session_city"],
                        'location' => $row["session_location"],
                        'date' => $row["session_date"],
                        'pensioner_price' => $row["pensioner_price"],
                        'adult_price' => $row["adult_price"],
                        'student_price' => $row["student_price"],
                        'children_price' => $row["children_price"],
                    );
                }
        
                $commentKey = $row["comment_id"];
                if (!isset($movies[$movieId]['comments'][$commentKey])) {
                    $movies[$movieId]['comments'][$commentKey] = array(
                        'comment_id' => $row["comment_id"],
                        'user_id' => $row["comment_user_id"],
                        'comment_text' => $row["comment_text"],
                        'comment_date' => $row["comment_date"],
                    );
                }
            }
        
            $jsonResult = json_encode(array_values($movies), JSON_PRETTY_PRINT);
            echo $jsonResult;
        } else {
            echo json_encode(['error' => 'No movies found']);
        }         
    }