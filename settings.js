//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require("fs");
const chalk = require("chalk");

//session
global.sessionid = "ur session id";

//owmner v card
global.ytname = "YT: Xeon"; //ur yt chanel name
global.socialm = "GitHub: Lafouine2"; //ur github or insta name
global.location = "Africa, Cameroon, Douala"; //ur location

//new
global.botname = "𝗙𝗼𝘂𝗶𝗻𝗶 | 𝗕𝗼𝘁 ✨💫"; //ur bot name
global.ownernumber = "237651338525"; //ur owner number
global.ownername = "ʬɸʬ 𝕃𝕠𝕣𝕕 𝔽𝕠𝕦𝕚𝕟𝕚 ʬɸʬ"; //ur owner name
global.websitex = "https://youtu.be/filmsetdesvideos7198";
global.wagc = "https://whatsapp.com/channel/BR0V0YskhBZ3q5umkoyhB9";
global.themeemoji = "🪀";
global.wm = "Xeon Bot Inc.";
global.botscript = "https://github.com/Lafouine2/CheemsBot-MD11"; //script link
global.packname = "Sticker By";
global.author = "ʬɸʬ 𝕃𝕠𝕣𝕕 𝔽𝕠𝕦𝕚𝕟𝕚 ʬɸʬ\n\n+237651338525";
global.creator = "237651338525@s.whatsapp.net";
global.xprefix = ".";
global.premium = ["237651338525"]; // Premium User
global.hituet = 0;

//bot sett
global.typemenu = "v8"; // menu type 'v1' => 'v8'
global.typereply = "v2"; // reply type 'v1' => 'v3'
global.autoblocknumber = "92"; //set autoblock country code
global.antiforeignnumber = "91"; //set anti foreign number country code
global.welcome = false; //welcome/left in groups
global.anticall = false; //bot blocks user when called
global.autoswview = false; //auto status/story view
global.adminevent = false; //show promote/demote message
global.groupevent = false; //show update messages in group chat
//msg
global.mess = {
  limit: "Your limit is up!",
  nsfw: "Nsfw is disabled in this group, Please tell the admin to enable",
  done: "Done✓",
  error: "Error!",
  success: "Here you go!",
};
//thumbnail
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg");

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
