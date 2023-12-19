<?php
    require_once('database.php');

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST["username"];
        $password = $_POST["password"];

        $data = array();

        $query = "SELECT * FROM `User` WHERE `username` = '$username'";
        $result = $conn->query($query);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                if ($password == $row['password']) {

                    $user = array(
                        'id' => $row["id"],
                        'name' => $row["username"],
                        'email' => $row["mail"]
                    );
    
                    $data[] = $user;
                } else {
                    echo json_encode(['error' => true, 'message' => 'Invalid password']);
                    exit; 
                }
            }
            echo json_encode($data);
        } else {
            echo json_encode(['error' => true, 'message' => 'No results']);
        }
    }
