var menu_bang=false;
    // 解決回上一頁問題
    window.addEventListener('pageshow', function (event) {
        if (event.persisted) { // 如果是從快取中回到頁面
          document.getElementById('nav-toggle').checked = false;
        }
      });
  
      // 保險起見，載入頁面時也重置狀態
      window.addEventListener('load', function () {
        document.getElementById('nav-toggle').checked = false;
      });


$(document).ready(function () {
  // 偵測點擊事件，切換 active 樣式
  $('.ham').click(function () {
    $(this).toggleClass('active');
  });
});

$(".ham").click(function () { 
    if(menu_bang)
    {
        menu_bang=false;
        $(".nav_ul").css({
            left:"100%"
        })
        
    }
    else
    {
        menu_bang=true;
        $(".nav_ul").css({
            left:"0%"
        })
    }

}


);