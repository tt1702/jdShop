// checkLogin();
//如果登录显示账号信息
showUser();
//显示详情
function showMessage() {
    var book=JSON.parse(localStorage.getItem("bookMessage"));
    document.getElementById("img").src=book.img;
    document.getElementById("name").innerHTML=book.name;
    document.getElementById("price").innerHTML="￥"+book.price;
}
showMessage();