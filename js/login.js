function login(){
    var request=getRequest();
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    request.open("GET",server+"login?username="+username+"&password="+password);
    request.onreadystatechange=function(){
        if(request.readyState==4&&request.status==200){
           var r= request.responseText;
           if(r!=null&&r!=""){
                var r=request.responseText;
                localStorage.setItem("user",r);
                location.href="index.html"
           }else{
                alert("登录失败");
           }
        }
    }
    request.send();
}