<?php
    header("Content-type:application/json;charset=utf-8");
    require ("_libreria.php");

		$con = _connection("4b_giochi");

        $pass=$_REQUEST["pass"];
        $user=$_REQUEST["user"];
        $sql="SELECT username FROM utenti WHERE username='$user';";
        $data= _eseguiQuery($con, $sql);
        if(count($data)==0)
        {
            $sql="INSERT INTO utenti (username, password) VALUES ('$user', '$pass');";
            $data= _eseguiQuery($con, $sql);
        }
        else
        {
            http_response_code(401);
            die("Utente già registrato.");
        }

        echo(json_encode($data));

		$con->close();
?>