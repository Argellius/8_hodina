<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    session_start();
    $jmeno = $_POST["jmeno"] ?? "";
    $heslo = $_POST["password"] ?? "";

    $_SESSION["jmeno"] = $jmeno;
    $_SESSION["heslo"] = $heslo;

    header("Location: index.php");
    exit;
}



?>

<!DOCTYPE html>
<html lang="cs-cz">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Javascript</title>
</head>

<body>

    <main>
        <h1>Login:</h1>
        <form action="" method="post">
            <label for="jmeno">Jméno:</label>
            <input name="jmeno" id="jmeno" required>

            <label for="password">Heslo:</label>
            <input type="password" name="password" id="password" required>
            <button type="submit"> Přihlášení </button>
        </form>
    </main>



</body>

</html>