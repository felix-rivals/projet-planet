<?php

$host = "webinfo";
$dbname = "mathioua";
$password = "071856811BD";
$username = "mathioua";

try {  
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);    
  	} 
  catch (PDOException $e) {
    die("Probleme SQL $dbname :" . $e->getMessage());
  }
?>