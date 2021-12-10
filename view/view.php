<?php
    session_name('planets');
    session_start();
?>


<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title><?php echo $pagetitle ?></title>
    <link rel="stylesheet" href="view/style.css">
</head>

<body>
        <div class="top__side">
            <nav class="navbar">
                <ul>
                    <li><a href="./index.php?action=accueil">Accueil</a></li>
                    <li><a href="">Autres</a></li>
                </ul>
            </nav>
        </div>
        <div class="content">
                <?php

                $filepath = File::build_path(array("view", $controller, "$view.php"));
                require $filepath;

                ?>
        </div>    
    <footer>
    </footer>
</body>

</html>
