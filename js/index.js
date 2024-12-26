
$(".big_img_word_box").click(function () { 
    $(this).css("animation", "none");
    $(this).offset();     // 強制瀏覽器重繪
    $(this).css("animation", "unstoppable 1s");
});


$(".report_item").hover(
    function () {
      $(this).find(".report_word_box").css({
        transform:"translateY(0px)",
        backgroundColor: "rgba(0, 0, 0, 0.7)"
      }).find(".report_word_p").css({
        opacity: 0.8
      });
      $(this).find(".arrow").css({
        opacity: 0.8
      })
    },
    function () {
        if ($(window).width() < 750) {
            $(this).find(".report_word_box").css({
                transform:"translateY(60px)",
                backgroundColor: "rgba(0, 0, 0, 0)"
            }).find(".report_word_p").css({
              opacity: 0
            });
            $(this).find(".arrow").css({
                opacity: 0
              })
        } else {
            $(this).find(".report_word_box").css({
                transform:"translateY(75px)",
                backgroundColor: "rgba(0, 0, 0, 0)"
            }).find(".report_word_p").css({
              opacity: 0
            });
            $(this).find(".arrow").css({
                opacity: 0
              })
        }

    }
  );

let intervalId; // 用於存儲 setInterval 的 ID
let t = 0;
let reels_index = 0;


// 定義啟動輪播的函數
function startCarousel() {
    intervalId = setInterval(function() {
        let containerWidth = $(".carousel_item").eq(reels_index).width();
        t = t + containerWidth;
        $(".carousel").css({
            transition: "all 0.5s ease",
            transform: "translateX(-" + t + "px)"
        });
        reels_index = reels_index + 1;
        if (reels_index > $(".carousel_item").last().index()) {
            reels_index = 0;
            t = 0;
            $(".carousel").css({
                transition: "none",
                transform: "translateX(0px)"
            });
        }
    }, 3000);
}

// 停止輪播的函數
function stopCarousel() {
    clearInterval(intervalId);
}

// 初始化輪播
startCarousel();


// 滑鼠事件處理
$(".carousel").mouseenter(function() {
    stopCarousel(); // 停止輪播
});

$(".carousel").mouseleave(function() {
    startCarousel(); // 恢復輪播
});


$(".reels_btn").eq(0).click(function () { 
    stopCarousel();
    if(reels_index===0)
    {
        t = $(".carousel").width()-$(".carousel_item").eq(reels_index).width();
        // alert(t);
        $(".carousel").css({
            transition: "none",
            transform: "translateX(-"+ t + "px)"
        });
        t = t -$(".carousel_item").eq(reels_index).width();
        $(".carousel").css({
            transition: "all 0.5s ease",
            transform: "translateX(-" + t + "px)"
        });

        reels_index=$(".carousel_item").last().index()-1;
    }
    else
    {
        reels_index=reels_index - 1 ;
        containerWidth = $(".carousel_item").eq(reels_index).width();
        t = t - containerWidth;
        $(".carousel").css({
            transition: "all 0.5s ease",
            transform: "translateX(-" + t + "px)"
        });
    }

});

$(".reels_btn").eq(1).click(function () { 
    stopCarousel();
    if(reels_index===$(".carousel_item").last().index())
    {
        reels_index = 0;
        t = 0;
        $(".carousel").css({
            transition: "none",
            transform: "translateX(0px)"
        });
        reels_index = 1;
        t=$(".carousel_item").eq(reels_index).width();
        $(".carousel").css({
            transition: "all 0.5s ease",
            transform: "translateX(-"+ t +"px)"
        });
    }
    else
    {
        reels_index=reels_index + 1 ;
        containerWidth = $(".carousel_item").eq(reels_index).width();
        t = t + containerWidth;
        $(".carousel").css({
            transition: "all 0.5s ease",
            transform: "translateX(-" + t + "px)"
        });
    }

});

$(document).ready(function () {
    // 檔案上傳變更事件
    $('#input_img').on('change', function () {
        if (this.files.length > 0) {
            const fileName = this.files[0].name; // 取得檔案名稱
            $('#fileName').html(`選擇的檔案:<br>${fileName}`);
            $(this).siblings(".upload_btn_box").css({
                display: "flex",
                transform:"translateY(0px)"
            }).siblings(".upload").css({
                height: "100px"
            }).find("#youcanup").css({
                fontSize: "0rem"
            })
        } else {
            resetFileUpload();
        }
    });

    // 取消按鈕點擊事件
    $('#cancelbtn').on('click', function () {
        resetFileUpload();

        $(this).parent(".upload_btn_box").css({
            display: "none",
            transform:"translateY(0px)"
        }).siblings(".upload").css({
            height: "100%"
        }).find("#youcanup").css({
            fontSize: "0.9rem"
        });

    });

    // 重設檔案上傳
    function resetFileUpload() {
        $('#input_img').val(''); // 清空檔案輸入
        $('#fileName').html('尚未選擇檔案'); // 重設顯示文字
    }
});



$(document).ready(function () {
    function updateH1() {
        if ($(window).width() < 400) {
            $("#share_title").html("這邊提供大家交流與分享的空間<br>快來說句幹話吧");
        } else {
            $("#share_title").html("這邊提供大家交流與分享的空間，快來說句幹話吧");
        }
    }

    // 初次檢查
    updateH1();

    // 當視窗大小改變時檢查
    $(window).resize(function () {
        updateH1();
    });
});


if ($(window).width() <= 1200) {
    $(document).ready(function () {
        $(document).ready(function () {
            let clickCount = {}; // 記錄每個物件的點擊次數
            let lastClicked = null; // 記錄上一次被點擊的物件
        
            $(".report_item").click(function (event) {
                const currentElement = $(this); // 當前點擊的物件
        
                // 初始化點擊次數
                if (!clickCount[currentElement[0]]) {
                    clickCount[currentElement[0]] = 0;
                }
        
                // 如果點擊了其他兄弟元素，重置所有兄弟的點擊次數
                if (lastClicked && lastClicked !== currentElement[0]) {
                    $(".report_item").each(function () {
                        clickCount[this] = 0; // 將所有兄弟的點擊次數重置
                    });
                }
        
                // 更新最後點擊的物件
                lastClicked = currentElement[0];
        
                // 增加當前物件的點擊次數
                clickCount[currentElement[0]]++;
        
                // 判斷點擊次數是否滿足條件
                if (clickCount[currentElement[0]] === 1) {
                    event.preventDefault(); // 阻止超連結
                } else if (clickCount[currentElement[0]] >= 2) {
                    clickCount[currentElement[0]] = 0; // 重置點擊次數
                }
            });
        });
    });
}


$("#chat_send").click(function () {
    const $this = $(this);
    // 放大主體及子元素
    $this.css({
        height: "50px",
        width: "50px"
    })
  
    // 延遲縮小主體及子元素
    setTimeout(() => {
        $this.css({
            height: "40px",
            width: "40px"
        })
    }, 300);
  });



function appear_f(selector,className,h) {
    $(window).on("scroll", function() {
        $(selector).each(function() {
            const $element = $(this); // 取得當前的 jQuery 物件
            const elementTop = $element[0].getBoundingClientRect().top; // 計算元素的位置

            if (elementTop < $(window).height() * h) {
                $element.addClass(className);
            } else {
                $element.removeClass(className);
            }
        });
    });
}


appear_f(".bang_no_ad","appear_ad",0.7);
appear_f(".title_content","appear_ad",0.8);
appear_f(".reels","appear_left",0.6);




$(document).ready(function () {
    // 當點擊球員時，顯示對應的彈跳視窗
    $('.random-div').on('click', function () {
        $(this).css({
            display: "none"
        })
        $('#overlay, #popup').fadeIn();
    });

    // 當點擊關閉按鈕或遮罩時，隱藏彈跳視窗
    $('.close, #overlay').on('click', function () {
        $('#overlay, #popup').fadeOut();
    });
});
