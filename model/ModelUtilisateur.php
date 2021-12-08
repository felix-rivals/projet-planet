<?php

$ROOT_FOLDER = __DIR__;
$DS = DIRECTORY_SEPARATOR;
require_once $ROOT_FOLDER . $DS . '..' . $DS . 'lib' . $DS . 'File.php';

require_once File::build_path(array("model","Model.php")); // chargement du modèle

class ModelUtilisateur {

     public static function getAllSondages() {
        
                echo 'Une erreur est survenue <a href=""> retour a la page d\'accueil </a>';
            
            die();
        }
    }
