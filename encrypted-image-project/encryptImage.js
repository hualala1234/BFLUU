const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// 使用 __dirname 來確保正確的相對路徑
const imagePath = path.join(__dirname, '../assets/img/age.jpg');
console.log('圖片檔案路徑:', imagePath);  // 顯示絕對路徑

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const encryptImage = (imagePath, outputPath) => {
    try {
        const image = fs.readFileSync(imagePath);  // 讀取圖片檔案
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encrypted = cipher.update(image);
        encrypted = Buffer.concat([encrypted, cipher.final()]);

        const result = {
            iv: iv.toString('hex'),
            content: encrypted.toString('base64')
        };

        fs.writeFileSync(outputPath, JSON.stringify(result));
        console.log('圖片加密完成，請保管密鑰:', key.toString('hex'));
    } catch (err) {
        console.error('檔案讀取或加密失敗:', err);
    }
};

// 使用相對路徑儲存加密的圖片
encryptImage(imagePath, path.join(__dirname, '../assets/img/encrypted-age.json'));
