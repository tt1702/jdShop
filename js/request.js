var server="http://192.168.0.250:8888/";

function getRequest(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    }else{
        return new ActiveXObject("Microsoft.XMLHTTPs");
    }
}

//判断是否登录
function checkLogin(){
    var r=localStorage.getItem("user");
    if(r==""||r==null){
        location.href="login.html"
    }
}

function showUser(){
    var r=localStorage.getItem("user");
    if(r!=null&&r!=""){
        var p=document.getElementById("changeUser");
        p.removeChild(p.children[0])
        p.removeChild(p.children[0])
        var node=document.createElement("a");
        r=JSON.parse(r);
        node.innerHTML="welcome "+r.username;
        p.appendChild(node);
    }
}