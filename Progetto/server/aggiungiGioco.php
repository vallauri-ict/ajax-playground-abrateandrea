<?php
    header("Content-type:application/json;charset=utf-8");
    require ("_libreria.php");

    _checkSession("username");
    
    //1. Controllo parametri.
    if(!isset($_REQUEST["nome"]))
    {
        http_response_code(400);
        die("Parametro mancante: nome.");
    }
    if(!isset($_REQUEST["produttore"]))
    {
        http_response_code(400);
        die("Parametro mancante: produttore.");
    }
    if(!isset($_REQUEST["piattaforma"]))
    {
        http_response_code(400);
        die("Parametro mancante: piattaforma.");
    }
    if(!isset($_REQUEST["anno"]))
    {
        http_response_code(400);
        die("Parametro mancante o errato: anno.");
    }

    //2. Connessione.
    $con= _connection("4b_giochi");

    //3.Query
    $nome=$_REQUEST["nome"];
    $produttore=$_REQUEST["produttore"];
    $piattaforma=$_REQUEST["piattaforma"];
    $anno=$_REQUEST["anno"];
    $username=$_SESSION["username"];
    $sql="INSERT INTO giochi (nome, produttore, piattaforma, anno, utente) VALUES ('$nome', '$produttore', '$piattaforma', '$anno','$username');";
    $data=_eseguiQuery($con, $sql);
    echo($data);

    //4. Chiusura connessione.
    $con->close();
?>