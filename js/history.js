$(document).ready(function() {
    const isSmallScreen = window.innerWidth < 1200; // 檢查螢幕是否小於700
    
    if (isSmallScreen) {
      // 刪除 .history div 和其內部內容
      $('.history').remove();
  
      // 刪除 <script src="./js/history.js"></script> 這個 script 標籤
      $('script[src="./js/history.js"]').remove();
    }
  });



  gsap.registerPlugin(ScrollTrigger);

if ($(window).width() >= 1200){
    $(".big_title_box").each(function(index, element) {
        // 對每個元素應用 GSAP 動畫
        gsap.fromTo(
            element,
            {
                opacity: 1,
                y: 0 // 初始位置：向下偏移 50px
            },
            {
                opacity: 0,
                y: 0, // 最終位置：回到原點
                duration: 0.5,
                ease: "ease.out",
                scrollTrigger: {
                    trigger: element, // 設定觸發的目標元素
                    start: "top-=500 25%", // 當元素頂部到達螢幕的 80% 高度時觸發
                    end: "top-=500 -200%", // 當元素頂部到達螢幕的 30% 高度時結束
                    toggleActions: "play reverse play reverse", // 定義滾動進出行為
                    // markers: true,       // 顯示觸發點的標記，方便調試
                    scrub: true, 
                }
            }
        );
    });
    $(".big_blue_img").each(function(index, element) {
        // 對每個元素應用 GSAP 動畫
        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: -100 // 初始位置：向下偏移 50px
            },
            {
                opacity: 1,
                x: 0, // 最終位置：回到原點
                duration: 0.5,
                ease: "ease.out",
                scrollTrigger: {
                    trigger: element, // 設定觸發的目標元素
                    start: "top 160%", // 當元素頂部到達螢幕的 80% 高度時觸發
                    end: "top -70%", // 當元素頂部到達螢幕的 30% 高度時結束
                    toggleActions: "play reverse play reverse", // 定義滾動進出行為
                    // markers: true,       // 顯示觸發點的標記，方便調試
                }
            }
        );
      });
      $(".big_blue_word").each(function(index, element) {
        // 對每個元素應用 GSAP 動畫
        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: 100 // 初始位置：向下偏移 50px
            },
            {
                opacity: 1,
                x: 0, // 最終位置：回到原點
                duration: 0.5,
                ease: "ease.out",
                scrollTrigger: {
                    trigger: element, // 設定觸發的目標元素
                    start: "top 160%", // 當元素頂部到達螢幕的 80% 高度時觸發
                    end: "top -70%", // 當元素頂部到達螢幕的 30% 高度時結束
                    toggleActions: "play reverse play reverse", // 定義滾動進出行為
                    // markers: true,       // 顯示觸發點的標記，方便調試
                }
            }
        );
      });
      $(".big_blue_h4").each(function(index, element) {
        // 對每個元素應用 GSAP 動畫
        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: 100 // 初始位置：向下偏移 50px
            },
            {
                opacity: 1,
                x: 0, // 最終位置：回到原點
                duration: 0.5,
                ease: "ease.out",
                scrollTrigger: {
                    trigger: element, // 設定觸發的目標元素
                    start: "top 160%", // 當元素頂部到達螢幕的 80% 高度時觸發
                    end: "top -70%", // 當元素頂部到達螢幕的 30% 高度時結束
                    toggleActions: "play reverse play reverse", // 定義滾動進出行為
                    // markers: true,       // 顯示觸發點的標記，方便調試
                }
            }
        );
      });
      $(".big_blue_p").each(function(index, element) {
        // 對每個元素應用 GSAP 動畫
        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: 100 // 初始位置：向下偏移 50px
            },
            {
                opacity: 1,
                x: 0, // 最終位置：回到原點
                duration: 1,
                ease: "ease.out",
                scrollTrigger: {
                    trigger: element, // 設定觸發的目標元素
                    start: "top 170%", // 當元素頂部到達螢幕的 80% 高度時觸發
                    end: "top -70%", // 當元素頂部到達螢幕的 30% 高度時結束
                    toggleActions: "play reverse play reverse", // 定義滾動進出行為
                    // markers: true,       // 顯示觸發點的標記，方便調試
                }
            }
        );
      });
 }
 else{
    $(".big_title_box").each(function(index, element) {
        // 對每個元素應用 GSAP 動畫
        gsap.fromTo(
            element,
            {
                opacity: 0,
                X: -120 // 初始位置：向下偏移 50px
            },
            {
                opacity: 1,
                x: 0, // 最終位置：回到原點
                duration: 1,
                ease: "ease.out",
                scrollTrigger: {
                    trigger: element, // 設定觸發的目標元素
                    start: "top 90%", // 當元素頂部到達螢幕的 80% 高度時觸發
                    end: "top -120%", // 當元素頂部到達螢幕的 30% 高度時結束
                    toggleActions: "play reverse play reverse", // 定義滾動進出行為
                    // markers: true,       // 顯示觸發點的標記，方便調試
                }
            }
        );
    });
    $(".big_blue_img").each(function(index, element) {
        // 對每個元素應用 GSAP 動畫
        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: -50 // 初始位置：向下偏移 50px
            },
            {
                opacity: 1,
                x: 0, // 最終位置：回到原點
                duration: 0.5,
                ease: "ease.out",
                scrollTrigger: {
                    trigger: element, // 設定觸發的目標元素
                    start: "top 80%", // 當元素頂部到達螢幕的 80% 高度時觸發
                    end: "top -70%", // 當元素頂部到達螢幕的 30% 高度時結束
                    toggleActions: "play reverse play reverse", // 定義滾動進出行為
                    // markers: true,       // 顯示觸發點的標記，方便調試
                }
            }
        );
    });
    $(".big_blue_word").each(function(index, element) {
        // 對每個元素應用 GSAP 動畫
        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: -50 // 初始位置：向下偏移 50px
            },
            {
                opacity: 1,
                x: 0, // 最終位置：回到原點
                duration: 0.5,
                ease: "ease.out",
                scrollTrigger: {
                    trigger: element, // 設定觸發的目標元素
                    start: "top 80%", // 當元素頂部到達螢幕的 80% 高度時觸發
                    end: "top -70%", // 當元素頂部到達螢幕的 30% 高度時結束
                    toggleActions: "play reverse play reverse", // 定義滾動進出行為
                    // markers: true,       // 顯示觸發點的標記，方便調試
                }
            }
        );
      });
      $(".big_blue_h4").each(function(index, element) {
        // 對每個元素應用 GSAP 動畫
        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: -50 // 初始位置：向下偏移 50px
            },
            {
                opacity: 1,
                x: 0, // 最終位置：回到原點
                duration: 0.5,
                ease: "ease.out",
                scrollTrigger: {
                    trigger: element, // 設定觸發的目標元素
                    start: "top 80%", // 當元素頂部到達螢幕的 80% 高度時觸發
                    end: "top -70%", // 當元素頂部到達螢幕的 30% 高度時結束
                    toggleActions: "play reverse play reverse", // 定義滾動進出行為
                    // markers: true,       // 顯示觸發點的標記，方便調試
                }
            }
        );
      });
      $(".big_blue_p").each(function(index, element) {
        // 對每個元素應用 GSAP 動畫
        gsap.fromTo(
            element,
            {
                opacity: 0,
                x: -50 // 初始位置：向下偏移 50px
            },
            {
                opacity: 1,
                x: 0, // 最終位置：回到原點
                duration: 0.5,
                ease: "ease.out",
                scrollTrigger: {
                    trigger: element, // 設定觸發的目標元素
                    start: "top 80%", // 當元素頂部到達螢幕的 80% 高度時觸發
                    end: "top -70%", // 當元素頂部到達螢幕的 30% 高度時結束
                    toggleActions: "play reverse play reverse", // 定義滾動進出行為
                    // markers: true,       // 顯示觸發點的標記，方便調試
                }
            }
        );
      });
 }











function shakeButton_2(element) {
    gsap.fromTo(
        element,
        {
            rotation: 80, // 初始旋轉角度
            scale: -1, // 初始大小
        },
        {
            rotation: 115, // 最終旋轉角度
            scale: -1.5, // 放大到 1.5 倍
            duration: 0.3, // 單次旋轉和縮放時間
            repeat: 1, // 重複旋轉 5 次
            yoyo: true, // 來回效果
            ease: "power1.inOut", // 緩動效果
            onComplete: () => {
                // 回到原始大小和角度
                gsap.to(element, {
                    scale: -1,
                    duration: 0.3,
                    rotation: 80,
                    ease: "power1.out",
                });
            },
        }
    );
}
  

  // 按下叉叉按鈕觸發搖晃
  $(".happy").on("click", function () {
    shakeButton_2(this);
    confetti({
        particleCount:300,
        spread:500,
        origin:{y:.10}
    })
  });

  // 滑鼠移到叉叉按鈕觸發搖晃
  $(".happy").on("mouseenter", function () {
    shakeButton_2(this);
  });