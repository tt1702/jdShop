checkLogin();
//如果登录显示账号信息
showUser();

//轮播
function showImages() {
    var request = getRequest();
    request.open("GET", server + "showImages");
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var r = request.responseText;
            var imgsArr = JSON.parse(r);
            appendCircle(imgsArr);
            playImage(imgsArr);
        }
    }
    request.send();
}
var count = 0;
function playImage(imgsArr) {
    var imgNode = $("#img");
    imgNode.attr('src', server + imgsArr[count].img);

    $('#c').children().each(function (index) {
        if (index === count) $(this).css('background', '#fff');
        else $(this).css('background', '#999');
    });
    count++;
    if (count == imgsArr.length) {
        count = 0;
    }
    setTimeout(function () {
        playImage(imgsArr);
    }, 2000);
}

function appendCircle(imgsArr) {
    var ulNode = $("#c");
    for (var i = 0; i < imgsArr.length; i++) {
        ulNode.append('<li></li>');
    }
}
showImages();

//显示广告的栏位
function showADImages() {

    $.get(server + "showADBooks", function (data) {
        addAdBooks(data);
    }, 'json');
}
function addAdBooks(adBooks) {
    adBooks.map(function (item) {
        $('#ad').append('<p><img src="' + server + item.img + '" alt="" width="170px"><span>￥' + item.price + '</span><span>' + item.name + '</span></span><span>共2W+评价</span></p>');
    });
}
showADImages();

//显示图书
function showBooks() {
    $.get(server + "getBooks", function (data) {
        addBooks(data);
    }, 'json');
}
function addBooks(books) {
    books.map(function (item) {
        $('#book').append('<div><img onclick="saveClickMessage(&quot;' + item.name + '&quot;,&quot;' + item.price + '&quot;,&quot;' + server + item.img + '&quot;)"><b class="fa fa-cart-plus"></b>加入购物车</span></aside></div>');
    });
}
showBooks();

//加入购物车
var arr = []
function addCar(name, price, img) {
    var car = {
        name: name,
        price: price,
        img: img,
        number: 1
    }
    var c = localStorage.getItem("car");
    if (c != null && c != "") {
        arr = JSON.parse(c);
    }
    var f = checkBook(name, arr);
    if (f === -1) {
        arr.push(car);
    } else {
        arr[f].number = arr[f].number + 1;
    }
    localStorage.setItem("car", JSON.stringify(arr))

}
//判断本地存储中是否有这个数据 有就话每点击一次数量+1 没有加进去
function checkBook(name, arr) {
    var result = -1;
    arr.forEach(function(item, index){
        if(name === item.name) {
            result = index;
            return;
        }
    })
    return index;
}

//保存点击过得图片的信息
function saveClickMessage(name, price, img) {
    var car = {
        name: name,
        price: price,
        img: img,
        number: 1
    }
    localStorage.setItem("bookMessage", JSON.stringify(car))
    location.href = "message.html"
}