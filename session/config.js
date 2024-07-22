const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun89@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923185562711" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923185562711";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_42_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDUzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDk2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAwLFxuICAgICAgICA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1MixcbiAgICAgICAgNDksXG4gICAgICAgIDM0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTksXG4gICAgICAgIDU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MixcbiAgICAgICAgMTk3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzLFxuICAgICAgICA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyLFxuICAgICAgICA4OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODksXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgODAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDgzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcwLFxuICAgICAgICA0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE5LFxuICAgICAgICA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDc0LFxuICAgICAgICA0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDczLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjksXG4gICAgICAgIDYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInp1VjRNNnpQbWI4azZOYlJIT0RkWlpDUzZOM250c3Ewa1lZT1FmVktyR3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpXaGdkUFo1U2htUlpJVGRHQjI4NUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjM1YTRiYWItNWFmZi00NGYzLTlhYzQtY2VhZDJhNzY0MWRlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMCxcbiAgICAgIDg5LFxuICAgICAgNTksXG4gICAgICAxMTEsXG4gICAgICAyMzMsXG4gICAgICAzOSxcbiAgICAgIDI1NCxcbiAgICAgIDIyMCxcbiAgICAgIDU4LFxuICAgICAgMTg2LFxuICAgICAgNTQsXG4gICAgICAxOTEsXG4gICAgICAxMDMsXG4gICAgICAyNDUsXG4gICAgICAxOTgsXG4gICAgICA5NCxcbiAgICAgIDIzMixcbiAgICAgIDE1OSxcbiAgICAgIDE3OSxcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0OSxcbiAgICAgIDU3LFxuICAgICAgMTAzLFxuICAgICAgMTY4LFxuICAgICAgMjI0LFxuICAgICAgOTYsXG4gICAgICAzMCxcbiAgICAgIDE1NSxcbiAgICAgIDEzLFxuICAgICAgMTE2LFxuICAgICAgMTA5LFxuICAgICAgMixcbiAgICAgIDE0MyxcbiAgICAgIDMyLFxuICAgICAgMjE1LFxuICAgICAgMjA0LFxuICAgICAgMzQsXG4gICAgICAxOCxcbiAgICAgIDI1MyxcbiAgICAgIDE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFMRE1URzhFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxODU1NjI3MTE6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmY3wnZmK8J2ZiPCdmYDwnZmKXCIsXG4gICAgXCJsaWRcIjogXCIzNDQyMDMzNzY4NDYzOTo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09yMzM2OEVFTXJZOUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidjIrbnZFcHBKK3hZRzMxcVZJYndFa1VYYVNKclloa0hYNzBHS1lTbFFXND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTNnBSNzZONUZHOVduVzZGeUVzRERRTzg5MzJ3RElnK0hBMDRpUXMwbUsrYityNWlVZzhweUZLR3NVdkhaYXg5VFM2ZVBycXRKU1VQbmhqLzUzME1BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2TVZhTWNoZ05yVU1tU3lxaWdNWGd4a1pMc3dzL2VhdVJVbzBOSmMwWk5vWmhiczJnZFZKSEFRcFh1K1EvVDFWOGd4dk83bys1cDVOc1lqMDJ2ejFnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxODU1NjI3MTE6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU3NjUyN1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```FREE『 ", //*『PALESTINE),
 
  author : process.env.PACK_AUTHER|| "romeo",
  packname: process.env.PACK_NAME || "heer",
  botname : process.env.BOT_NAME  || "ROMEO",
 ownername:process.env.OWNER_NAME|| "ROMEO",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
