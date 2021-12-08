<?php
require_once File::build_path(array("model","ModelUtilisateur.php")); // chargement du modèle

class ControllerUser {

    public static function accueil() {
        $controller='user';
        $view='accueil';
        $pagetitle='Site';
        require_once File::build_path(array("view","view.php")); ;  //"redirige" vers la vue
    }


    public static function register() {
        $pagetitle = 'Site - Inscription';
        $controller='user';
        $view='register';
        require File::build_path(array("view","view.php")); ;  //"redirige" vers la vue



    }

    public static function login() {
        $pagetitle = 'Site - Connexion';
        $controller='user';
        $view='login';
        require File::build_path(array("view","view.php")); ;  //"redirige" vers la vue
        
  }


      public static function profil() {
        $pagetitle = 'Site - Profil';
        $controller='user';
        $view='profil';
        require File::build_path(array("view","view.php")); ;  //"redirige" vers la vue
        
  }

    public static function deconnexion() {
        $pagetitle = 'Site';
        $controller='user';
        $view='deconnexion';
        require File::build_path(array("view","view.php")); ;  //"redirige" vers la vue
        
  }



   public static function resetmdp() {
       $controller='user';
       $view='resetmdp';
       $pagetitle='Site - Réinitialiser son mot de passe';
       require_once File::build_path(array("view","view.php")); ;  //"redirige" vers la vue
   }


   public static function redirectionmdp() {
       $controller='user';
       $view='redirectionmdp';
       $pagetitle='Site';
       require_once File::build_path(array("view","view.php")); ;  //"redirige" vers la vue
   }

   public static function resetpseudo(){
    $controller='user';
    $view='resetpseudo';
    $pagetitle='Site - Changer de Pseudo';
    require_once File::build_path(array("view","view.php")); ;  //"redirige" vers la vue
   }

   public static function resetemail(){
    $controller='user';
    $view='resetemail';
    $pagetitle='Site - Changer de Adresse Email';
    require_once File::build_path(array("view","view.php")); ;  //"redirige" vers la vue
   }

   public static function deletedaccount() {
        $controller='user';
        $view='deleteaccount';
        $pagetitle='Site - Suppression';
        require_once File::build_path(array("view", "view.php")); //"redirige" vers la vue

        $sql = "DELETE FROM NDI__User WHERE id = :id";
        $values = array("id" => $_SESSION['id']);
        $req_prep = Model::getPDO()->prepare($sql);
        $req_prep->execute($values);
        session_destroy();
   }

   public static function downloaded() {
       // pour télécharger ses données personnelles
       // ATTENTION : le serveur de l'IUT n'envoit les mails qu'aux adresses jetables yopmail, il faudra s'en créer une pour tester

        $controller='user';
        $view='download';
        $pagetitle='Site - Réception données';
        require_once File::build_path(array("view", "view.php")); //"redirige" vers la vue

        $reqtoken = Model::getPDO()->prepare("SELECT * FROM NDI__User WHERE email = :email");
        $reqtoken->execute(array('email' => $_SESSION['email']));
        $reqtoken = $reqtoken->fetch();

        $mailconf = $reqtoken['email'];


        $header = "From: NuitExpress <tristan.gaido.pro@gmail.com>\n";
        $header .= "MIME-version: 1.0\n";
        $header .= "Content-type: text/html; charset=utf-8\n";
        $header .= "Content-Transfer-ncoding: 8bit";

        $contenu = '<p>Bonjour ' . $reqtoken['pseudo'] . ',</p><br>
                    <p>Voici les données de votre compte qui sont enregistrées dans notre base de données :<p>' 
                    . 'Pseudo : ' . $reqtoken['pseudo'] . '<br />'
                    . 'Email : ' . $reqtoken['email'] . '<br />'
                    . 'Date de création : ' . $reqtoken['date_creation'] . '<br />';
        mail($mailconf, 'Vos donnees personnelles', $contenu, $header);
   }


}
?>