const fs = require("fs");
module.exports.config = {
  name: "love you",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "ARIF BABU", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("syapa") ||
     react.includes("I love") || react.includes("lOve") || react.includes("LoVe") ||
react.includes("❤️") ||
react.includes("I love U")) {
    var msg = {
        body: `𝑰 𝑳𝑶𝑽𝑬 𝒀𝑶𝑼 𝑻𝑶𝑶 𝑴𝑬𝑹𝑰 𝑱𝑨𝑨𝑵 🙈`,attachment: fs.createReadStream(__dirname + `/ARIF-BABU/LOVE-YOU.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
