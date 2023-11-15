<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <form method="post" class="linear-gradient-border">
        <input class="" type="name" placeholder="Name" name="Name" id="Name" required><br>
        <input type="email" placeholder="email" name="email" required><br>
        <input type="password" placeholder="pass" name="pass" id="pass" required>
        <input type="password" placeholder="cpass" name="cpass" id="cpass" required>
        <button type="submit">Register</button>
        <a href="http://localhost/sarkx/login.php"><p>Already registered?</p></a>
</form>
<?php
include 'common.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["Name"];
    $email = $_POST["email"];
    $pass = $_POST["pass"];
    $cpass=$_POST["cpass"];
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    if($pass == $cpass){
    $sql = "INSERT INTO `users`(`name`, `email`, `password`) VALUES (?, ?, ?)";
    $stmt = mysqli_prepare($conn, $sql);
    }else{
        echo "password must be same as confirm password";
    }
    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "sss", $name, $email, $pass);
        $result = mysqli_stmt_execute($stmt);

        if ($result) {
            echo " <div id='alert'>
           data entered sucessfully <span class='close' onclick='closeAlert()'>&times;</span>
        </div>";
        } else {
            echo "Error: " . mysqli_error($conn);
        }

        mysqli_stmt_close($stmt);
    } else {
        echo "Error: " . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>
    <script src="register.js">
    </script>
</body>
</html>