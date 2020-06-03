"use strict"

$(document).ready(function(){
    $("#logOut").on("click", function(){
        let rq=inviaRichiesta("POST","server/logout.php");
        rq.fail(function(jqXHR, test_status, str_error) {
            if(jqXHR.status==403)
            {
                window.location.href="login.html";
            }
            else
            {
                error(jqXHR, test_status, str_error);
            }
        });

        rq.done(function(data){
            window.location.href="login.html";
        });
    });
    
    $("#annulla").on("click",function(){
        window.location.href="index.html";
    });
    
    $("#aggiungiGioco").on("click",function(){
        let _nome=$("#nome").val();
        let _produttore=$("#produttore").val();
        let _piattaforma=$("#piattaforma").val();
        let _anno=$("#anno").val();

        let _aggiungiGioco= inviaRichiesta("POST", "server/aggiungiGioco.php", {"nome":_nome, "produttore":_produttore, "piattaforma":_piattaforma, "anno":_anno } );
        _aggiungiGioco.fail(function(jqXHR, test_status, str_error) {
            if (jqXHR.status == 403)
            {
                //Unauthorized
                window.location.href="login.html";
            }
            else
            {
                error(jqXHR, test_status, str_error);
            }
        });
        _aggiungiGioco.done(function(data) {
            console.log(data);
            alert("Gioco inserito correttamente");
        });
    });
});