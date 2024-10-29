const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=WmYmRQYb#kqZDm7B_qahC7ysLbxgBlxthZ6rwQx18rPKtn5hvGF4",
MONGODB: process.env.MONGODB || "qadeer-shard-00-02.jugjz.mongodb.net:27017",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
