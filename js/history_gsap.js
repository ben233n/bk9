gsap.registerPlugin(ScrollTrigger);
var a="0";
if ($(window).width() >= 1200 && $(window).width() < 1580){
   a="4000";
}
else{
  a="0";
}

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".history", // 目標觸發器
    id: "historyScroll",
    // markers: true, // 顯示標記，方便調整
    start: "top 10%", // 滾動觸發的開始點
    end: a, // 持續滾動 2000px
    pin: true, // 固定目標元素
    scrub: 1, // 配置平滑滾動
    pinSpacing: true, // 保留元素空間，避免跑版
  },
});

// 動畫開始
tl.to(".ball", {
  y: 190,
  x: 400, // 水平移動 400px
  rotation: 45, // 旋轉 45 度
  duration: 2, // 動畫持續時間
  ease: "power1.inOut",
})
  .to(
    "#human_hard", 
    {
      rotation: 0, // 旋轉 0 度
      x: 0, // translateX(0px)
      y: 0, // translateY(0px)
      duration: 2, // 動畫持續時間
      ease: "power1.inOut",
    },
    0 // 確保兩個動畫從同一時刻開始執行
  )
  .to(
    "#shoot", 
    {
      rotation: -30, // 旋轉 -30 度
      y: 50, // translateY(50px)
      duration: 2, // 動畫持續時間
      ease: "power1.inOut",
    },
    2 // 延遲時間
  )
  .to(
    ".ball", 
    {
      x: 280, // 水平移動 280px
      y: 140, // translateY(50px)
      duration: 2, // 動畫持續時間
      ease: "power1.inOut",
    },
    2 // 延遲時間
  )
  .to(
    ["#shoot",".ball"], 
    {
      y: -20, // translateY(-20px)
      duration: 2, // 動畫持續時間
      ease: "power1.inOut",
    },
    4 // 延遲時間
  )
  .to(
    ".ball", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 8, // 動畫持續時間
      motionPath: {
        path: [{ x: 300, y: -100 }, { x: 600, y: -500 }, { x: 600, y: 150 }], // 左到右的拋物線
        curviness: 1.25, // 使曲線更加柔和
        autoRotate: true, // 使物體根據路徑自動旋轉
      },
      ease: "power1.inOut", // 動畫的緩動效果
    },
    6 // 延遲時間，確保與前面動畫同步
  )
  .to(
    ".history", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 4, // 動畫持續時間
      y:1300,
      ease: "power1.inOut", // 動畫的緩動效果
      scale: 1.8,
    },
    6 // 延遲時間，確保與前面動畫同步
  )
  .to(
    ".history", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 4, // 動畫持續時間
      y:-100,
      ease: "power1.inOut", // 動畫的緩動效果
      scale: 1.6,
    },
    10 // 延遲時間，確保與前面動畫同步
  )
  .to(
    "#shoot", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 2, // 動畫持續時間
      opacity: 0,
      ease: "power1.inOut", // 動畫的緩動效果
      scale: 1.9,
    },
    7 // 延遲時間，確保與前面動畫同步
  )
  .to(
    "#backboard", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 2, // 動畫持續時間
      opacity: 0,
      ease: "power1.inOut", // 動畫的緩動效果
      scale: 1.9,
    },
    7 // 延遲時間，確保與前面動畫同步
  )
  .to(
    "#audience", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 2, // 動畫持續時間
      opacity: 0,
      ease: "power1.inOut", // 動畫的緩動效果
      scale: 1.5,
    },
    7 // 延遲時間，確保與前面動畫同步
  )
  .to(
    "#audience_2", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 2, // 動畫持續時間
      opacity: 0,
      ease: "power1.inOut", // 動畫的緩動效果
      scale: 1.5,
    },
    7 // 延遲時間，確保與前面動畫同步
  )
  .to(
    "#home", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 2, // 動畫持續時間
      opacity: 0,
      ease: "power1.inOut", // 動畫的緩動效果
      scale: 1.5,
    },
    7 // 延遲時間，確保與前面動畫同步
  )
  .to(
    "#home_2", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 2, // 動畫持續時間
      opacity: 0,
      ease: "power1.inOut", // 動畫的緩動效果
      scale: 1.5,
    },
    7 // 延遲時間，確保與前面動畫同步
  )
  .to(
    "#home_3", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 2, // 動畫持續時間
      opacity: 0,
      ease: "power1.inOut", // 動畫的緩動效果
      scale: 1.5,
    },
    7 // 延遲時間，確保與前面動畫同步
  )
  .to(
    "#hoop", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 2, // 動畫持續時間
      opacity: 1,
      ease: "power1.inOut", // 動畫的緩動效果
      scale: 1.5,
    },
    7 // 延遲時間，確保與前面動畫同步
  )
  .to(
    ".ball", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 4, // 動畫持續時間
      y:400,
      ease: "power1.inOut", // 動畫的緩動效果
      scale: 1.9,
      x:610,
    },
    14 // 延遲時間，確保與前面動畫同步
  )
  .to(
    ".history", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 4, // 動畫持續時間
      y:0,
      ease: "power1.inOut", // 動畫的緩動效果
      scale: 1,
    },
    14 // 延遲時間，確保與前面動畫同步
  )
  .to(
    "#hoop", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 4, // 動畫持續時間
      y:-800,
      ease: "power1.inOut", // 動畫的緩動效果
    },
    14 // 延遲時間，確保與前面動畫同步
  )
  .to(
    "#audience_3", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 4, // 動畫持續時間
      opacity: 1,
      ease: "power1.inOut", // 動畫的緩動效果
    },
    14 // 延遲時間，確保與前面動畫同步
  )
  .to(
    ".history", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 4, // 動畫持續時間
      y:-30,
      ease: "power1.inOut", // 動畫的緩動效果
      scale: 1,
    },
    18 // 延遲時間，確保與前面動畫同步
  )
  .to(
    "#hoop", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 4, // 動畫持續時間
      opacity: 0,
      ease: "power1.inOut", // 動畫的緩動效果
      y:-1000,
      scale: 1,
    },
    18 // 延遲時間，確保與前面動畫同步
  )
  .to(
    ".ball", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 4, // 動畫持續時間
      opacity: 0,
      ease: "power1.inOut", // 動畫的緩動效果
      scale: 1,
    },
    18 // 延遲時間，確保與前面動畫同步
  )
  .to(
    "#audience_3", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 4, // 動畫持續時間
      y:-1200,
      ease: "power1.inOut", // 動畫的緩動效果
    },
    22 // 延遲時間，確保與前面動畫同步
  )
  .to(
    ".history", // 使用 motionPath 進行拋物線路徑動畫
    {
      duration: 2, // 動畫持續時間
      opacity: 0,
      ease: "power1.inOut", // 動畫的緩動效果
    },
    22 // 延遲時間，確保與前面動畫同步
  )
  .to(".history", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    onComplete: function() {
      // 動畫完成時執行
      $(this).remove();

      // 清除對應的 ScrollTrigger
      const scrollTrigger = ScrollTrigger.getById("historyScroll");
      if (scrollTrigger) {
        scrollTrigger.kill(); // 解除 ScrollTrigger
      }
      
      const box = $(".history");
      if (box) {
        box.remove(); // 刪除 div
        
      }
      window.scrollTo(0, 0); // 滾動視窗至頂部
    }
  },24);

  


