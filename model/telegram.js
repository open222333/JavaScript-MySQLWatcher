const https = require("https");

// Telegram Bot 的 API Token
const token = "<YOUR_API_TOKEN>";

// 聊天 ID
const chatId = "<CHAT_ID>";

// 發送訊息的函式
function sendMessage(message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const data = JSON.stringify({
    chat_id: chatId,
    text: message,
  });

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const req = https.request(url, options, (res) => {
    console.log("訊息已成功發送！");
  });

  req.on("error", (error) => {
    console.error("發送訊息時出錯:", error);
  });

  req.write(data);
  req.end();
}

// 匯出函式
module.exports = { sendMessage };
