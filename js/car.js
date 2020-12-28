//如果登录显示账号信息
showUser();
//将本地存储中的数据放在购物车页面中
function showCarData(){
    var arr=JSON.parse(localStorage.getItem("car"));
    for(var i=0;i<arr.length;i++){
       $('#carNode').append('<div><span><input type="checkbox"></span><span><img src="'+arr[i].img+'" width="100" height="100" alt=""><em>'+arr[i].name+'</em></span> <span>￥'+arr[i].price+'</span><span><input type="button" value="-"><input type="text"><input type="button" value="+"></span><span>56789</span><span>删除</span></div>');
    }
}
showCarData();