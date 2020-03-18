"use strict";
let range;
let pos=0;
let person;
let gender="";
let date;
let _lastButton;
let nation="US";

$(document).ready(function(){
    inviaRichiesta("results=1&gender=&nat=US",aggiornaPagina);
    inizia();
  $("#btnGenerate").click(function() {
    inizia();
    inviaRichiesta("results="+range+"&gender="+gender+"&nat="+nation, aggiornaPagina);
    aggiornaFrecce();
  });
    $("#phrase").html("Hi, my name is");
});

function inizia()
{
    let chk=document.getElementsByName("chkNazione");
    nation="";
    for(let i=0;i<chk.length;i++)
        {
            if($(chk[i]).prop("checked")==true)
                {
                    if(nation=="")
                        nation=$(chk[i]).prop("id").split('-')[1];
                    else
                        nation+=","+$(chk[i]).prop("id").split('-')[1];
                } 
        }
    
    range=$("#rangeRisultati").val();
    if($("#radio-female").prop("checked")==true)
        gender="female";
    else if($("#radio-male").prop("checked")==true)
        gender="male";
    else
        gender="";
}
/*
RICHIESTA SERVER
*/
function inviaRichiesta(parametri, callBack) {
    pos=0;
  $.ajax({
    url: "https://randomuser.me/api", //default: currentPage
    type: "GET",
    data: parametri,
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    dataType: "json",
    async: true, // default
    timeout: 5000,
    success: callBack,
    error: function(jqXHR, test_status, str_error) {
      alert("Server Error: " + jqXHR.status + " - " + jqXHR.responseText);
    }
  });
}

function mostraDettagli(_btn){
    if (_lastButton) {
        _lastButton.css("background-position-y", "-48px");
    }
    _btn.css("background-position-y", "-96px");
    _lastButton = _btn;
    
    switch(_btn.attr("id")){
        case "profilo":
            $("#phrase").text("Hi, my name is");
            $("#pInfo").html(person.name.title + " " + person.name.first + " " + person.name.last);
            $("img").attr("src", person.picture.large);
        break;
        case "email":
            $("#phrase").text("My email adress is");
            $("#pInfo").html(person.email);
        break;
        case "birthday":
            $("#phrase").text("My birthday is");
            $("#pInfo").html(person["dob"]["date"].split("T")[0]);
        break;
        case "address":
            $("#phrase").text("My address is");
        $("#pInfo").html(person["location"]["street"]["number"]+" "+person["location"]["street"]["name"]);
        break;         
        case "cell":
                $("#phrase").text("My phone number is");
                $("#pInfo").html(person["phone"]);
        break;
        case "password":
                $("#phrase").text("My password is");
                $("#pInfo").html(person["login"]["password"]);
        break;
    }
}
/*
FRECCE
*/
function frecciaSX(){
    if(pos != 0)
    {
        pos--;
        aggiornaPagina(date);
    }
    else
    {
        document.getElementById("frecciaSX").disabled = true;
        $("#frecciaSX").css("border-right", '25px solid white');
    }
    document.getElementById("frecciaDX").disabled = false;
    $("#frecciaDX").css("border-left", '25px solid black');
}

function frecciaDX(){
    if(pos != range-1)
    {
        pos++;
        aggiornaPagina(date);
    }
    else
    {
        $("#frecciaDX").prop("disabled","true");
        $("#frecciaDX").css("border-left", '25px solid white');
    }
    $("frecciaSX").prop("disabled","false");
    $("#frecciaSX").css("border-right", '25px solid black');
}
/*
FINE FRECCE
*/

/*
AGGIORNAMENTI
*/
function aggiornaFrecce(){
    $("frecciaSX").prop("disabled","false");
    $("#frecciaSX").css("border-right", '25px solid black');
    $("frecciaDX").prop("disabled","false");
    $("#frecciaDX").css("border-left", '25px solid black');
}
function aggiornaRange(){
    $("#rangeCorrente").text($("#rangeRisultati").val());
}
function aggiornaPagina(data){
  console.log(data);
    date=data;
  person = data.results[pos];
  $("#pInfo").html(person.name.title + " " + person.name.first + " " + person.name.last);
  $("img").attr("src", person.picture.large);
}