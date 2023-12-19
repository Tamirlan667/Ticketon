<?php
    require_once('database.php');

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST["username"];
        $email = $_POST["email"];
        $password = $_POST["password"];

        $data = array();

        $query = "INSERT INTO `User` (`username`, `mail`, `password`) VALUES ('$username', '$email', '$password')";
        $result = $conn->query($query);

        if($result === true) {
            echo json_encode(['error' => false, 'message' => 'Your account succesfuly created']);
        } else {
            echo json_encode(['error' => true, 'message' => 'Some error happend. Try later']);
        }
    }