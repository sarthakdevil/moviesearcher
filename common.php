<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "users";
    $conn = mysqli_connect($servername, $username, $password, $database);
}
    ?>