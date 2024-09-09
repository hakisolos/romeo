//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0MvdmlKdlh1a2w0TGlZQUEzaHJPRFBFYXFQak1ISTdHV2ZTRStZTldHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0tYWkE2V0pGaExJY2VvMFpEV2lYNExFa2RlSGVQU0daQ2o1ZFBWNkNrUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4R0xVSi9yZFpTc05Dei93N2xoRFlKUTZMekZabS9rZmZYS0F6ZTNZeVVNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0Ty96NFZaU0NhL0s3MytDSE5oeWNsb0dEcGZYUVRrZ3FxQXFzNDZWaUhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNJcWVmUkpGMlcrWk42Z1hhZ2xJa1ROMWJBSTlOb2lyUTFuS3FybTJGWHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBjRjVrRXU3TDhlRUdsOGEzRG9Sa3BTUkNUUEJub0tYTmZvMUZiTUpCbWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUF6M3l4WUJxT21rZ3BxN251ZUkzRTZEUlBCZEFNVUpQeWV5dTUyWHZuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREpqeGQycDI4Z2o0c3BLQlFvS21MMmZUYjVhUldINVlxMmRTS25RZjNuWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJyakczWTBZRVRUYmd1WUFIejU3cHQrK0VheHUzZnp1RUp4TE41K2xGWjdIenQzSlcxUkd2K2Rlays0dlBPWGtURmVzMWd0Q0VQVFNYWldXdW1mM2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA5LCJhZHZTZWNyZXRLZXkiOiI0Z0xBSE11ZkRCYUpkL0R2MTc1SkJqRVgweERWcW04Ny9zanpSdUhOYUpzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvS1FKNXlibVJqcWVKNVVIMEVKOGRRIiwicGhvbmVJZCI6ImRkNjA1ZDQ5LTJmNTktNGM5NS04ZWUzLTllZDZhNjNmZWU5NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQSs3YTVCM3NuTWZEY1dXRmtQT1JaSHhwdGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEFiVS9DYldqSHZPRmpxL29SUXE0RTYzYWN3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFOUEtYSDFIIiwibWUiOnsiaWQiOiIyNjc3NjY2MDkwMjo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkbnwnZG28J2RtPCdkazwnZG2IPCdkanwnZG+IPCdkbDwnZGw8J2RsFvwnZG58J2Rq10ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lLWGpoa1ErdWI3dGdZWUJpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IllRSy9QZFZtcENPNHVveVRLVlFUWnpoNWhSNThpMkJkNGR5UldvMXI5Q1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkUrUUdGME9SL1JPZGxHYlFTR3RpZHVJNjEyeWNNcHBQcDVIZlJjSzhpSGY4NnRJVnNFNzdSbW1lZjZyWStJeGhneHFnUzBHVlZhNmgrbWk4dDJjOEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhcG9xdWZ5ZzJycFBoVVJIZXZpK2FTOWxRbk5OTEhzZnkrZW1YakVpQ0dtcGtFcUtzN0dxcVhBVXZoeTlXRzJ3ajd2akZkM2tLeFA5dHlxQW9taUVpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Nzc2NjYwOTAyOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0VDdnozVlpxUWp1THFNa3lsVUUyYzRlWVVlZkl0Z1hlSGNrVnFOYS9RbCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTg4NzM2N30="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
