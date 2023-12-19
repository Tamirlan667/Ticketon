<?php
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "root";
    $db = "New_ticketon";

    $conn = @new mysqli(
        $dbhost,
        $dbuser,
        $dbpass,
        $db
      );
        
    if ($mysqli->connect_error) {
        echo 'Errno: '.$mysqli->connect_errno;
        echo '<br>';
        echo 'Error: '.$mysqli->connect_error;
        exit();
    }