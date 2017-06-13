//首頁抓圖片資料
str='';
	for(i=0; i<data.length; i++){
		str+='<li><img src='+ data[i].PublicArt_Image+'></li>'
   }
document.getElementById('slider').innerHTML = str;


//下拉式選單
			var URL = 'http://opendata.khcc.gov.tw/public/OD_PublicArt.ashx';
			    var areaSelect = new Vue({
                    el: '#areaSelect'
                    , data: {
                        area: '- - - 請選擇地區 - - -'
                        , shows: []
                        , areas: []

                    }
                    , created: function () {
                        this.fetchData();
                    }
                    , methods: {
                        fetchData: function () {
                            var data1 = this;
                            $.ajax({
                                type: 'GET'
                                , url: URL
                                , async: false
                                , success: function (data) {
                                    var thisData = JSON.parse(data);
                                    for (var i in thisData) {
                                        data1.shows.push(thisData[i]);
                                    }
                                }
                            });
                           
                            var areaGroup = {};
                            for (var i in data1.shows) {
                                data1.shows[i].areas = data1.shows[i].PublicArt_Place.substr(3, 3);
                                var key = data1.shows[i].areas;
                                areaGroup[key] = areaGroup[key] || (areaGroup[key] = []);
                                areaGroup[key].push(data1.shows[i].PublicArt_Name);
                                
                            }
                            data1.areas = Object.keys(areaGroup);
                            console.log(JSON.stringify(areaGroup));

                        }
                    }
                });




//圖片輪播 start
 $(function(){
		// 先取得必要的元素並用 jQuery 包裝
		// 再來取得 $block 的寬度及設定動畫時間
		var $block = $('.slider-img'), 
			$slides = $block.find('.slides'), 
			$ul = $slides.find('ul'), 
			_width = $slides.width(), 
			_left = _width * -1, 
			_animateSpeed = 400, 
			// 加入計時器, 輪播時間及控制開關
			timer, _showSpeed = 3000, _stop = false;
		
		// 先把最後一個 li 的內容插入到第一個 li 前面
		// 並設定 $ul 的 left 及 width
		$ul.find('li:first').before($ul.find('li:last')).end().css({
			left: _left,
			width: _width * ($ul.find('li') + 1)
		});

		// 當點擊到 a.prev 時
		var $prev = $block.find('a.prev').click(function(){
			// 移動 $ul
			$ul.stop(false, true).animate({'left' : _left + _width}, _animateSpeed, function () {
				// 把最後一個 li 的內容插入到第一個 li 前面
				$ul.find('li:first').before($ul.find('li:last')).end().css('left', _left);
				// 當移動到正確位置後, 依判斷來啟動計時器
				if(!_stop) {
					clearTimeout(timer);
					timer = setTimeout(move, _showSpeed);
				}
			});
			return false;
		});
		
		// 當點擊到 a.next 時
		var $next = $block.find('a.next').click(function(){
			// 移動 $ul
			$ul.stop(false, true).animate({'left' : _left - _width}, _animateSpeed, function () {
				// 把第一個 li 的內容插入到最後一個 li 後面
				$ul.find('li:last').after($ul.find('li:first')).end().css('left', _left);
				// 當移動到正確位置後, 依判斷來啟動計時器
				if(!_stop) {
					clearTimeout(timer);
					timer = setTimeout(move, _showSpeed);
				}
			});
			return false;
		});
		
		// 如果滑鼠移入 $block 時
		$block.hover(function(){
			// 關閉開關及計時器
			_stop = true;
			clearTimeout(timer);
		}, function(){
			// 如果滑鼠移出 $block 時
			// 開啟開關及計時器
			_stop = false;
			timer = setTimeout(move, _showSpeed);
		}).find('a').focus(function(){
			this.blur();
		});
		
		// 計時器使用
		function move(){
			$next.click();
		};

		timer = setTimeout(move, _showSpeed);
	});

 //圖片輪播 end

/*
 //detail.html & list.html
var xhr = new XMLHttpRequest();
xhr.open('get','http://opendata.khcc.gov.tw/public/OD_PublicArt.ashx');
xhr.send(null);
xhr.onload = function(){
  var data = JSON.parse(xhr.responseText);
  var str = ""
  	for(var i=0;data.length>i;i++){
   	str+='<li><img src='+ data[i].PublicArt_Image+'></li>'
   }
	document.getElementById('img').innerHTML = str;
}*/

/*
 var xhr = new XMLHttpRequest();
xhr.open('get','http://opendata.khcc.gov.tw/public/OD_PublicArt.ashx');
xhr.send(null);
xhr.onload = function(){
  var data1 = JSON.parse(xhr.responseText);
  //data1 = data.result.records;
  //Num=data1.length;
str1='';
str2='名稱 : ';
str3='位址 : ';
str4='  ;  ';
str5='';

for (var i=0;data.length>i;i++){
  str1+= '<li>'+str2+data1[i].PublicArt_Name+str4+str3+data1[i].PublicArt_Place+'</li>'
}
for (var k=0;data1.length>k;k++){
    str5+= '<li><img src='+data[k].PublicArt_Image+'style="width:420px;"></li>'
}
//document.getElementById('img').innerHTML=str5;
document.getElementById('list').innerHTML=str;}
*/