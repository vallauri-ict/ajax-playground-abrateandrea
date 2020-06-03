<?php
    header("Content-type:application/json;charset=utf-8");
    require("_libreria.php");
    _checkSession("username");
    echo(json_encode(array("logout"=>"eff")));
?>