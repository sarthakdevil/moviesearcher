<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "id21529355_root";
    $password = "Root@123";
    $database = "users";
    $conn = mysqli_connect($servername, $username, $password, $database);
}
    ?>