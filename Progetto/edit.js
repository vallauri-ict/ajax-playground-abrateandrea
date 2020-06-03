"use strict"

$(document).ready(function(){
    $("#navBar").hide();
    $("#wrapper").hide();
    let _body= $("#tBody");

    let trySession=inviaRichiesta("POST","server/isAlreadyOk.php",{});

    trySession.fail(function(jqXHR, test_status, str_error) {
        if(jqXHR.status==403)
        {
            window.location.href="login.html";
        }
        else
        {
            error(jqXHR, test_status, str_error);
        }
    });

    trySession.done(function(data){
        console.log(data);
        $("#navBar").show();
        $("#wrapper").show();
    });
    
    $("#annulla").on("click",function(){
        window.location.href="index.html";
    });
    
    $("#edit").on("click",function(){
        //CANC TABELLA//
        let cancTabella = inviaRichiesta("GET", "server/cancTabella.php");
	    cancTabella.fail(function (jqXHR, test_satus, str_error){
		if(jqXHR.status==403)
		{
			window.location.href="login.html";
		}
		else
		{
			error(jqXHR, test_satus, str_error);
		}
        });
            cancTabella.done(function(data){
    });
        //AGGIORNA TABELLA//
        for(let record of data[0])
         {
            let aggTabella = inviaRichiesta("GET", "server/aggTabella.php", {"nome":_nome, "produttore":_produttore, "piattaforma":_piattaforma, "anno":_anno } );
	        aggTabella.fail(function (jqXHR, test_satus, str_error){
		    if(jqXHR.status==403)
		     {
			   window.location.href="login.html";
		     }
		    else
		     {
			   error(jqXHR, test_satus, str_error);
		     }
            });
               aggTabella.done(function(data){
                   alert("Tabella cancellata correttamente");
          });
        }
    });
    
    let richiestaGiochi = inviaRichiesta("GET", "server/richiestaGiochi.php");
	richiestaGiochi.fail(function (jqXHR, test_satus, str_error){
		if(jqXHR.status==403)
		{
			window.location.href="login.html";
		}
		else
		{
			error(jqXHR, test_satus, str_error);
		}
    });
    richiestaGiochi.done(function(data){
        aggiornaTabella(data);
    });
    
    function aggiornaTabella(data)
    {
        let i=0;
        console.log(data);
        for(let record of data[0])
        {
            console.log(record);
            let r=$("<tr>");
            let _td=$("<td>").prop("id",record["nome"]).appendTo(r);
            $("<input>", {"value": record["nome"]}).appendTo(_td);
            _td=$("<td>").prop("id",record["produttore"]).appendTo(r);
            $("<input>", {"value": record["produttore"]}).appendTo(_td);
            _td=$("<td>").prop("id",record["piattaforma"]).appendTo(r);
            $("<input>", {"value": record["piattaforma"]}).appendTo(_td);
            _td=$("<td>").prop("id",record["anno"]).appendTo(r);
            $("<input>", {"type": "number","value": record["anno"]}).appendTo(_td);
            r.appendTo(_body);
        }
    }

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
});