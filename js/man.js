$(document).ready(function () {
    // 當點擊球員時，顯示對應的彈跳視窗
    $('.man_box').on('click', function () {
        const img = $(this).data('img');  // 獲取球員圖片
        var data = $(this).data('info').split(',');
        var say= $(this).data('say');

        // 更新彈跳視窗的內容
        $('#popup-img').attr('src', img);
        $('#popup-info').empty();
        data.forEach(function(item) {
            $('#popup-info').append('<p>' + item + '</p>');
          });

        // 顯示遮罩和彈跳視窗
        $('#popup-info').append('<br>');
        $('#popup-info').append('<p>' +  say+ '</p>');
        $('#overlay, #popup').fadeIn();
    });

    // 當點擊關閉按鈕或遮罩時，隱藏彈跳視窗
    $('.close, #overlay').on('click', function () {
        $('#overlay, #popup').fadeOut();
    });
});


$(".man_box").hover(function () {
    $(this).css({
        transform:"scale(1.05)"
    })
    }, function () {
        $(this).css({
            transform:"scale(1)"
        })
    }
);