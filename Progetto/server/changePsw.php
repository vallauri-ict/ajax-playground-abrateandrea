<?php
    header("Content-type:application/json;charset=utf-8");
    require("_libreria.php");

    _checkSession("username");

    $con=_connection("4b_giochi");
    
    $oldPsw=$_REQUEST["oldPsw"];
    $newPsw=$_REQUEST["newPsw"];
    $username=$_SESSION["username"];
    $dbPsw=_eseguiQuery($con, "SELECT password FROM utenti WHERE username='$username'");
    echo json_encode($dbPsw);
    
    if($oldPsw==$dbPsw[0]["password"])
    {
        _eseguiQuery($con, "UPDATE utenti SET password = '$newPsw' WHERE username ='$username'");
    }
    else
    {
       $con->close();
       error(401,"La vecchia password non corrisponde");
    }

    $con->close();
?>