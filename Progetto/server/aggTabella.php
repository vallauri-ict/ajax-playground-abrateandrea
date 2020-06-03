<?php
    header("Content-type:application/json;charset=utf-8");
    require ("_libreria.php");

    _checkSession("username");

    $con= _connection("4b_giochi");

    //3. Lancio la query.
    $nome=$_REQUEST["nome"];
    $produttore=$_REQUEST["produttore"];
    $piattaforma=$_REQUEST["piattaforma"];
    $anno=$_REQUEST["anno"];
    $username=$_SESSION["username"];
    $sql="UPDATE professori SET pwd='$newPwd' WHERE codProf=$id"INSERT INTO giochi (nome, produttore, piattaforma, anno, utente) VALUES ('$nome', '$produttore', '$piattaforma', '$anno','$username');";
    $data=_eseguiQuery($con, $sql);
    echo($data);

    $con->close();
?>