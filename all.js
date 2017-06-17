//下拉式選單
$(function(){
    $('.submit').click(function(){
        $('.slider-img').hide();
        $('.areaSelect').show();
        $('.frontPage').show();

        var area = document.getElementById('area').value;
        var result=[];
        for(i=0; i<data.length; i++){
            var PublicArt_Place = data[i].PublicArt_Place;
            if(PublicArt_Place.match(area) || area== "all"){
                result.push(data[i]);
                console.log('show');
            }
        }
        
    
    $('.show').html('');
        if(result.length!=0){
            for(var i=0; i<result.length; i++){
                var PublicArt_Name = result[i].PublicArt_Name;
                var PublicArt_Place = result[i].PublicArt_Place;
                var PublicArt_Image = result[i].PublicArt_Image;
                $('.show').append('<ul><li><a href="detail.html"><img class = "result_img" src ='+PublicArt_Image+'></a><p id = "line"></p><h2 class = "result_name">'+PublicArt_Name+'</h2><p class = "result_place">地址：'+PublicArt_Place+'</p></li></ul>');
            }           
        }else{
            $('.show').html('<img class="unfind" src = "images/unfind.png">');
        }
    })
})


//首頁抓圖片資料
str='';
    for(i=0; i<data.length; i++){       
        str+='<li><img src='+ data[i].PublicArt_Image+'></li>'
  
}
document.getElementById('slider').innerHTML = str;


//圖片輪播 start
 $(function(){
        // 先取得必要的元素並用 jQuery 包裝
        // 再來取得 $block 的寬度及設定動畫時間
        var $block = $('.slider-img'), 
            $slides = $block.find('.slides'), 
            $ul = $slides.find('ul'), 
            _width = $slides.width(), 
            _left = _width * -1, 
            _animateSpeed = 600, 
            // 加入計時器, 輪播時間及控制開關
            timer, _showSpeed = 1500, _stop = false;
        
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

