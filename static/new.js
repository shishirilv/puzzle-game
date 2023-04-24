var lc=document.getElementById("logincard");
var rc=document.getElementById("registercard");
lc.addEventListener("click",function(){
    window.location.href="http://127.0.0.1:8000/login/";
});
rc.addEventListener("click",function(){
    window.location.href="http://127.0.0.1:8000/register/";
});
