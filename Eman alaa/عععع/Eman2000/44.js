document.getElementById("reg").onsubmit = function (){
    let emin = document.getElementById("u_email").value;
    let emiR =/\w+@\w+.(com|org|info)/;
    let va =emiR.test(emin);
    var passwordpattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-z])[0-9a-zA-Z]{8,}$/;

if (document.querySelector("#u_name").value === ""){
    alert("يجب عليك ادخال الاسم");
    return false;
}
if (/^[A-Za-zا-ي]+\s{1}[A-Za-zا-ي]+$/.test(document.querySelector("#u_name").value) ===false){
    alert("يجب عليك ادخال الاسم مع اللقب ب اللغه العربيه والانجليزيه");
    return false;
}
if(!passwordpattern.test(document.querySelector("#u_password").value)){
    alert("يجب ان تحتوي كلمه مرور على الاحرف الكبيره والصغيره والارقام وتكون طولها على الاقل 8 احرف");

    return false;
}
if(document.querySelector("#u_password1").value.length==0){
    alert("يجب عليك اعاده كلمه المرور");
    return false;
}
if(document.querySelector("#u_password1").value !==document.querySelector("#u_password").value){
    alert("اعاده كلمه المرور غير صحيحه");
    return false;
}
if(emin===""){
    alert("يجب عليك ادخال البريد الالكتروني");
    return false;
}
if(va===false){
    alert("يجب عليك ادخال البريد الالكتروني بشكل صحيح ");
    return false;
}
if(document.querySelector("tel").value.length==0 || isNaN(document.getElementById("tel").value)){
    alert("يجب عليك ادخال الرقم ويجب ان يكون صحيح");
    return false;
}
var telValue =document.getElementById("tel").value;
if(telValue.length ===0|| Number(telValue)!==Number(telValue)){
    alert("يجب عليك ادخال الرقم ويجب ان يكون صحيح");
    return false;
}
if(Register.user_g[0].checked==false&&Register.user_g[1].checked ==false){
    alert("يجب عليك اختيار الجنس");
    return false;
}
if(document.querySelector("#u_country").selectedIndex==0){
    alert("يجب عليك اختيار الدوله");
    return false;
}
return true;
}
// var taxtareaValue=document.querySelector("#u_comment").value;
// if(taxtareaValue.trim()===""){
//     alert("يجب عليك ادخال نص في المساحه المخصصه");
//     return false;
// }
// if(taxtareaValue.length<50){
// alert("يجب ان يحتوي النص على الاقل 50 حرف ");
// return false;
// }
function thec(){
    if(document.Register.user_agree.checked==true)
    document.Register.ok.disabled=false;
    else
        document.Register.ok.disabled=true;
}