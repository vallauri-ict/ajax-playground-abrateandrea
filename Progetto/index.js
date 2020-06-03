"use strict";

$(function () {
    let _body= $("#tBody tbody");
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
    
    $("#btnLogout").on("click", function(){
        let _richiestaLogout = inviaRichiesta("POST", "server/logout.php");
        _richiestaLogout.fail(error);
        _richiestaLogout.done(function (data) { 
            if (data["ok"]==true){
                window.location.href="login.html";
            }
        });
    }) 
    
    $("#btnChange").on("click", function(){ window.location.href="changePsw.html";});
    
    function aggiornaTabella(data)
    {
        console.log(data);
        for(let record of data[0])
        {
            console.log(record);
            let r=$("<tr class='toCanc'>");
            $("<td>", {"text" : record["nome"]}).appendTo(r);
            $("<td>", {"text" : record["produttore"]}).appendTo(r);
            $("<td>", {"text" : record["piattaforma"]}).appendTo(r);
            $("<td>", {"text" : record["anno"]}).appendTo(r);
            r.appendTo(_body);
        }
    }
});
    

