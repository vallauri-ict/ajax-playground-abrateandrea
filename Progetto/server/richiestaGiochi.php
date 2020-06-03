<?php
    header("Content-type:application/json;charset=utf-8");
    require ("_libreria.php");

    _checkSession("username");

    $con= _connection("4b_giochi");

    //3. Lancio la query.
    $username=$_SESSION["username"];
    $sql="SELECT * FROM giochi WHERE utente = '$username'";
    $data = _eseguiQuery($con,$sql);
    echo(json_encode(array($data)));
    $con->close();
?>