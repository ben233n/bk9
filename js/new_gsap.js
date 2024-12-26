$(".new_page_img_box").each(function(index, element) {
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
                start: "top 100%", // 當元素頂部到達螢幕的 80% 高度時觸發
                end: "top -70%", // 當元素頂部到達螢幕的 30% 高度時結束
                toggleActions: "play reverse play reverse", // 定義滾動進出行為
                // markers: true,       // 顯示觸發點的標記，方便調試
            }
        }
    );
});

$(".new_page_p").each(function(index, element) {
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
                start: "top 100%", // 當元素頂部到達螢幕的 80% 高度時觸發
                end: "top -70%", // 當元素頂部到達螢幕的 30% 高度時結束
                toggleActions: "play reverse play reverse", // 定義滾動進出行為
                // markers: true,       // 顯示觸發點的標記，方便調試
            }
        }
    );
});