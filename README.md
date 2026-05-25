# Marathon Weekly Decision System

這是一個純 HTML/CSS/JS 的初馬訓練決策網站。

## 本機執行

用 VSCode 打開資料夾，Terminal 輸入：

```bash
python -m http.server 8000
```

瀏覽器打開：

```text
http://localhost:8000
```

## 部署到 GitHub Pages

1. 建立 GitHub repository
2. 上傳所有檔案
3. 到 Settings → Pages
4. Source 選 Deploy from branch
5. Branch 選 main / root
6. 等 GitHub 產生網址

## iPhone 加到主畫面

用 Safari 打開 GitHub Pages 網址：

分享 → 加入主畫面

## 設計邏輯

不是固定星期幾的死課表，而是每週課表池：

- Recovery
- Easy
- Aerobic
- Speed
- LSD
- Rest

每天根據疲勞、小腿、足底、睡眠狀態選一個。
