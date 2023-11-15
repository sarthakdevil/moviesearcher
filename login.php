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
        <input type="email" placeholder="email" name="email" required><br>
        <input type="password" placeholder="password" name="pass" required>
        <button type="submit">login</button>
        <a href="http://localhost/sarkx/register.php" id="registerpl"><p>register?</p></a>
</form>
<?php
include 'common.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $pass = $_POST['pass'];

    $sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    $stmt = mysqli_prepare($conn, $sql);

    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "ss", $email, $pass);
        mysqli_stmt_execute($stmt);

        $result = mysqli_stmt_get_result($stmt);
        $num = mysqli_num_rows($result);

        if ($num == 1) {
            echo "success";
            session_start();
            $_SESSION['user'] = $email;
            header("Location:mainpage.html");
        
        } else {
            echo "invalid credentials";
        }

        mysqli_stmt_close($stmt);
    } else {
        echo "Query preparation failed.";
    }
}
?>
</body>
</html>