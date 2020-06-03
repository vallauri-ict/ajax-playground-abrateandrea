"use strict";

$(document).ready(function() {	
	let oldPwd = $("#oldPassword");
	let newPwd = $("#newPassword");
	let _error1 = $("#error1");
	let _error2=$("#error2");
    _error1.hide();
    _error2.hide();
    
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
		$("#btnInvia").on("click", checkPsw);
		$(document).on('keydown', function(event) {
			if (event.keyCode == 13)
				checkPsw();
		});
    });

    oldPwd.on("change",function(){
        if(oldPwd.val().length<8)
        {
            _error1.show();
        }
        else if(newPwd.val().length<8)
        {
            _error1.show();
        }
        else
        {
            _error1.hide();
        }
    });
    newPwd.on("change",function(){
        if(newPwd.val().length<8)
        {
            _error1.show();
        }
        else if(oldPwd.val().length<8)
        {
            _error1.show();
        }
        else
        {
            _error1.hide();
        }
    });
    
function checkPsw(){
        if(newPwd.val().length>7)
            {

                let oldPswMD5=CryptoJS.MD5(oldPwd.val()).toString();
                let pswMD5=CryptoJS.MD5(newPwd.val()).toString();
                let r=inviaRichiesta("POST","server/changePsw.php",{"newPsw":pswMD5,"oldPsw":oldPswMD5});
                r.fail(function(jqXHR, test_status, str_error) {
                if(jqXHR.status==403)
                {
                    window.location.href="login.html";
                }
                else
                {
                    error(jqXHR, test_status, str_error);
                }
                _error2.show();
                });

                r.done(function(data){
                    console.log(data);
                    let logout=inviaRichiesta("POST","server/logout.php");
                    logout.fail(function(jqXHR, test_status, str_error) {
                    if(jqXHR.status==403)
                    {
                        window.location.href="login.html";
                    }
                    else
                    {
                        error(jqXHR, test_status, str_error);
                    }
                });
                
                logout.done(function(data){
                    window.location.href="login.html";
                });
                });
            }
            else
            {
                _error2.show();
            }
}
});