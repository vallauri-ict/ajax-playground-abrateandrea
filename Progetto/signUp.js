"use strict"

$(document).ready(function() {
    let _error1 = $("#error1");
    let _error2 = $("#error2");
    let _user=$("#txtUsername");
    let _pass=$("#txtPassword");
    let _confPass=$("#txtConfermaPassword");
    _error1.hide();
    _error2.hide();
    
    
    _pass.on("change",function(){
        if(_pass.val().length<8)
        {
            _error1.show();
        }
        else if(_confPass.val().length<8)
        {
            _error1.show();
        }
        else
        {
            _error1.hide();
        }
    });
    _confPass.on("change",function(){
        if(_confPass.val().length<8)
        {
            _error1.show();
        }
        else if(_pass.val().length<8)
        {
            _error1.show();
        }
        else
        {
            _error1.hide();
        }
    });
    
    $("#btnSignUp").on("click",controllaPsw);
    
    $(document).on('keydown', function(event) {	
	   if (event.keyCode == 13)  
		   controllaPsw();
	});
  
    function controllaPsw(){
        if(_pass.val()==_confPass.val())
        {
            _error2.hide();
            let aus=CryptoJS.MD5(_pass).toString();
            let r=inviaRichiesta("POST","server/signUp.php",{"user":(_user.val()),"pass":aus});
            r.fail(function(jqXHR, test_status, str_error) {error(jqXHR, test_status, str_error);
            });

            r.done(function(data){alert("Iscrizione avvenuta correttamente.\nStai per essere reindirizzato alla pagina di login.");
            window.location.href="login.html";
            });                                                
        }
        else
        {
            _error2.show();
        }
    }
});