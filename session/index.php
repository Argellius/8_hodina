<?php
session_start();
if (isset($_SESSION["jmeno"]) && isset($_SESSION["heslo"])) {
    echo "Jméno přihlášeného: " . $_SESSION["jmeno"] . "<br>";
    echo "Heslo přihlášeného: " . $_SESSION["heslo"] . "<br>";
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
    <?php if (!isset($_SESSION["jmeno"]) && !isset($_SESSION["heslo"])): ?>
        <a href="login.php"> Přihlásit se </a>
    <?php else: ?>
        <a href="logout.php"> Odhlásit se </a>
    <?php endif; ?>


</body>

</html>