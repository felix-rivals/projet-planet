<?php

class File {
    
public static function build_path($path_array) {
    $DS = DIRECTORY_SEPARATOR;
    $ROOT_FOLDER = "/home/ann2/mathioua/public_html/site_musique";
    return __DIR__ . $DS . ".." . $DS . join('/', $path_array);
    }
}


?>
