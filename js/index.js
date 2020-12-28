checkLogin();
//如果登录显示账号信息
showUser();

//轮播
function showImages(){
    var request=getRequest();
    request.open("GET",server+"showImages");
    request.onreadystatechange=function(){
        if(request.readyState==4&&request.status==200){
           var r= request.responseText;
           var imgsArr=JSON.parse(r);
           appendCircle(imgsArr);
           playImage(imgsArr);
        }
    }
    request.send();
}
var count=0;
function playImage(imgsArr){
    var imgNode=document.getElementById("img");
    imgNode.src=server+imgsArr[count].img;
    var c=document.getElementById("c").children; //轮播的小圆点
    for(var i=0;i<c.length;i++){
        if(i==count){
            c[i].style.background="#fff";
        }else{
            c[i].style.background="#999";
        }
    }
    count++;
    if(count==imgsArr.length){
        count=0;
    }
    setTimeout(function(){
        playImage(imgsArr);
    },2000);
}

function appendCircle(imgsArr){
    var ulNode=document.getElementById("c");
    for(var i=0;i<imgsArr.length;i++){
        var liNode=document.createElement("li");
        ulNode.appendChild(liNode)
    }
}
showImages();

//显示广告的栏位
function showADImages(){
    var request=getRequest();
    request.open("GET",server+"showADBooks");
    request.onreadystatechange=function(){
        if(request.readyState==4&&request.status==200){
           var r= request.responseText;
           var adBooks=JSON.parse(r);
           addAdBooks(adBooks);
        }
    }
    request.send();
}
function addAdBooks(adBooks){
    var adNode=document.getElementById("ad");
    for(var i=0;i<adBooks.length;i++){
        var p=document.createElement("p");
        p.innerHTML='<img src="'+server+adBooks[i].img+'" alt="" width="170px"><span>￥'+adBooks[i].price+'</span><span>'+adBooks[i].name+'</span></span><span>共2W+评价</span>'
        adNode.appendChild(p);
    }
}
showADImages();

//显示图书
function showBooks(){
    var request=getRequest();
    request.open("GET",server+"getBooks");
    request.onreadystatechange=function(){
        if(request.readyState==4&&request.status==200){
           var r= request.responseText;
           var books=JSON.parse(r);
           addBooks(books);
        }
    }
    request.send();  
}
function addBooks(books){
    var book=document.getElementById("book");
    for(var i=0;i<books.length;i++){
        var divNode=document.createElement("div");
        divNode.innerHTML='<img onclick="saveClickMessage(&quot;'+books[i].name+'&quot;,&quot;'+books[i].price+'&quot;,&quot;'+server+books[i].img+'&quot;)" src="'+server+books[i].img+'" alt=""><aside><em>￥</em>'+books[i].price+'</aside><aside>'+books[i].name+'</aside><aside><span class="self">自营</span><span class="safe">放心购</span><span class="safe2">秒杀</span></aside><aside><span class="btn" onclick="addCar(&quot;'+books[i].name+'&quot;,&quot;'+books[i].price+'&quot;,&quot;'+server+books[i].img+'&quot;)"><b class="fa fa-cart-plus"></b>加入购物车</span></aside>';
        book.appendChild(divNode);

    }
}
showBooks();

//加入购物车
var arr=[]
function addCar(name,price,img){
    var car={
        name:name,
        price:price,
        img:img,
        number:1
    }
    var c=localStorage.getItem("car");
    if(c!=null&&c!=""){
        arr=JSON.parse(c);
    }
    var f=checkBook(name,arr);
    if(f==-1){
        arr.push(car);
    }else{
        arr[f].number=arr[f].number+1;
    }
    localStorage.setItem("car",JSON.stringify(arr))
   
}
//判断本地存储中是否有这个数据 有就话每点击一次数量+1 没有加进去
function checkBook(name,arr) {
    for(var i=0;i<arr.length;i++){
        if(name==arr[i].name){
            return i;
        }
    }
    return -1;
}

//保存点击过得图片的信息
function saveClickMessage(name,price,img){
    var car={
        name:name,
        price:price,
        img:img,
        number:1
    }
    localStorage.setItem("bookMessage",JSON.stringify(car))
    location.href="message.html"
}