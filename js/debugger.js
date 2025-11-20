document.addEventListener("DOMContentLoaded", () => {
    console.log("Debugger blocker loaded.");

    function blockDevTools() {
        setInterval(function () {
            debugger;
        }, 50);
    }

    // 偵測 DevTools 是否開啟（利用 CPU 暫停時間）
    function detectDevTools() {
        const start = performance.now();
        debugger;
        const delay = performance.now() - start;

        if (delay > 150) {
            blockDevTools();  // 啟動無限 debugger
        }
    }

    // 每 1 秒檢查一次
    setInterval(detectDevTools, 1000);
});
