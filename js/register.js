// 注册
var username;
var password;
function register(){
    
    if(checkTrue()){
        var request=getRequest();
        request.open("GET",server+"regsterUser?username="+username+"&password="+password);
        request.onreadystatechange=function(){
            if(request.readyState==4&&request.status==200){
               var r= request.responseText;
               if(r==1){
                    alert("注册成功");
               }else{
                    alert("注册失败");
               }
            }
        }
        request.send();
    }else{
        alert("请输入正确的注册信息");
    }
}

function checkTrue(){
    var c=0;
    var arr=document.getElementsByTagName("b");
    for(var i=0;i<arr.length;i++){
        if(arr[i].innerHTML=='√'){
            c++
        }
    }
    if(c!=0&&c==arr.length){
        return true;
    }else{
        return false;
    }
}
// 手机号码的规则第一位数字是1第二位是3 5 7 8 共11位 邮箱的规则数字字母下划线的组合2-8@数字和字母的组合3-6位.com结尾
function checkUsername(obj){
    var f=/^1[3578]\d{9}$/.test(obj.value)
    var f2=/^\w{2,8}@[0-9 a-z A-Z]{3,6}\.com}$/.test(obj.value)
    f=f||f2;
    username=obj.value;
    message(f,obj);
}
// 8-10位数字和英文字母组成的密码
function checkPassword(obj){
    password=obj.value;
    var f=/^[0-9 a-z A-Z]{8,10}$/.test(obj.value)
    message(f,obj)
}
// 确认密码
function reCheckPassword(obj){
    var f=obj.value==document.getElementById("pwd").value;
    message(f,obj);
}
function message(f,obj){
    if(f){
        obj.nextElementSibling.innerHTML="√"
    }else{
        obj.nextElementSibling.innerHTML="×"
    }
}