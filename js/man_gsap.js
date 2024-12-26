gsap.registerPlugin(ScrollTrigger);
$(".new").each(function(index, element) {
    // 對每個元素應用 GSAP 動畫
    gsap.fromTo(
        element,
        {
            opacity: 0,
            y: 100 // 初始位置：向下偏移 50px
        },
        {
            opacity: 1,
            y: 0, // 最終位置：回到原點
            duration: 0.5,
            ease: "ease.out",
            scrollTrigger: {
                trigger: element, // 設定觸發的目標元素
                start: "top 90%", // 當元素頂部到達螢幕的 80% 高度時觸發
                end: "top -1100%", // 當元素頂部到達螢幕的 30% 高度時結束
                toggleActions: "play reverse play reverse", // 定義滾動進出行為
                // markers: true,       // 顯示觸發點的標記，方便調試
            }
        }
    );
});



if ($(window).width() <= 1170) {
    $(".man_box").each(function(index, element) {
        // 對每個元素應用 GSAP 動畫
        const delay = index * 0.5; // 每個元素延遲 0.1 秒
        gsap.fromTo(
            element,
            {
                opacity: 0,
                y: 20 // 初始位置：向下偏移 50px
            },
            {
                opacity: 1,
                y: 0, // 最終位置：回到原點
                duration: 0.5,
                ease: "power1.out",
                delay: delay, // 為每個動畫設置延遲
                scrollTrigger: {
                    trigger: element, // 設定觸發的目標元素
                    start: "top 120%", // 當元素頂部到達螢幕的 80% 高度時觸發
                    end: "top 0%", // 當元素頂部到達螢幕的 30% 高度時結束
                    toggleActions: "play reverse play reverse", // 定義滾動進出行為
                    scrub: true,          // 與滾動進度同步
                }
            }
        );
    });
}
else{
    $(".man_box").each(function(index, element) {
        // 對每個元素應用 GSAP 動畫
        var ff=index/3;
        const delay = ff * 0.1; // 每個元素延遲 0.1 秒
        gsap.fromTo(
            element,
            {
                opacity: 0,
                y: ff *60 // 初始位置：向下偏移 50px
            },
            {
                opacity: 1,
                y: 0, // 最終位置：回到原點
                duration: 0.1,
                ease: "back.out",
                delay: delay, // 為每個動畫設置延遲
                scrollTrigger: {
                    trigger: element, // 設定觸發的目標元素
                    start: "top 90%", // 當元素頂部到達螢幕的 80% 高度時觸發
                    end: "top -150%", // 當元素頂部到達螢幕的 30% 高度時結束
                    toggleActions: "play reverse play reverse", // 定義滾動進出行為
                    // markers: true, // 顯示標記，方便調整
                }
            }
        );
    });
}


function shakeButton(element) {
    gsap.fromTo(
        element,
        {
            rotation: -15, // 初始旋轉角度
            scale: 1, // 初始大小
        },
        {
            rotation: 15, // 最終旋轉角度
            scale: 1.5, // 放大到 1.5 倍
            duration: 0.3, // 單次旋轉和縮放時間
            repeat: 2, // 重複旋轉 5 次
            yoyo: true, // 來回效果
            ease: "power1.inOut", // 緩動效果
            onComplete: () => {
                // 回到原始大小和角度
                gsap.to(element, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: "power1.out",
                });
            },
        }
    );
}
  

  // 按下叉叉按鈕觸發搖晃
  $(".close").on("click", function () {
    shakeButton(this);
  });

  // 滑鼠移到叉叉按鈕觸發搖晃
  $(".close").on("mouseenter", function () {
    shakeButton(this);
  });