$(document).ready(function () {
    // 判斷是否為 iOS
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isIOS) {
      // 如果是 iOS，隱藏 big_loader，顯示 big_loader_ios
      $('.big_loader').hide();
      $('.big_loader_ios').show();
    } else {
      // 否則，隱藏 big_loader_ios，顯示 big_loader
      $('.big_loader_ios').hide();
      $('.big_loader').show();
    }
  });

window.onload = function(){
    $(".loader_bg").addClass("loading_animation");
    setInterval(function(){
        $(".loader_bg").css({
            display:"none"
        });
    },800);

}