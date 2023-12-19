<?php
    require_once('database.php');   

    if ($_SERVER["REQUEST_METHOD"] == "GET") {

        $queryToMovie = "SELECT m.*, s.event_type, s.city, s.location, s.date, s.pensioner_price, s.adult_price, s.student_price, s.children_price FROM Movie m LEFT JOIN Session s ON m.id = s.event_id AND s.event_type = 'MOVIE' ORDER BY m.id, s.date";

        $result = $conn->query($queryToMovie);

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
                    );
                }
        
                $movies[$movieId]['sessions'][] = array(
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
        
            $jsonResult = json_encode(array_values($movies), JSON_PRETTY_PRINT);
            echo $jsonResult;
        } else {
            echo json_encode(['error' => 'No movies found']);
        }
    }
    
    