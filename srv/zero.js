//CREATOR SC + BASE ORI : ZERO YT7
//KLO MAU RECODE GK USAH HPUP CREATOR ORI TOLOL
//SKILL MODAL NYOLONG YT AJA BANGGA
//HARGA CREATOR GBLOK
//GK USH NGAKU² BUATAN LO
//NAMBAH FITUR MASIH ERROR AJA SOK² AN NGAKU BIKINAN LO

//KLO MAU YG FULL NO ENC 100% BELI AJA

//FOLLOW SOSIAL MEDIA
//INSTAGRAM @Zero_YT7
//YOUTUBE Zero YT7
//TIKTOK @_zeroyt7
//GITHUB Zero-YT7

var {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
var { color, bgcolor } = require('../mess/color')
var speed = require('performance-now')
var ggs = require('google-it')
var googleImage = require('g-i-s')
var { EmojiAPI } = require("emoji-api")
var emoji = new EmojiAPI()
var { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../mess/myfunc')
var { fetchJson, kyun, fetchText } = require('../mess/fetcher')
var { y2mateA, y2mateV } = require('../mess/y2mate')
var { pinterest } = require('../mess/pinterest')
var { herolist } = require('../mess/herolist.js')
var { herodetails } = require('../mess/herodetail.js')
var { yta, ytv, igdl, upload, formatDate } = require('../mess/ytdl')
var { wikiSearch } = require('../mess/wiki.js')
var { lirikLagu } = require('../mess/lirik.js')
var Exif = require('../mess/exif')
var exif = new Exif()
var request = require('request')
var translate = require('@vitalets/google-translate-api')
var fs = require('fs')
var hx = require("hxz-api")
var cheerio = require('cheerio')
var brainly = require('brainly-scraper')
var axios = require("axios")
var ffmpeg = require('fluent-ffmpeg')
var fetch = require('node-fetch')
var crypto = require('crypto')  
var yts = require('yt-search')
var Math_js = require('mathjs')
var { removeBackgroundFromImageFile } = require('remove.bg')
var moment = require('moment-timezone')
var { exec, spawn, execSync } = require('child_process')
fakeimg = fs.readFileSync('./img/zero.jpg')
fakethumb = fs.readFileSync('./img/thumbnail.jpg')
blocked = []
multi =false
nopref = false
allpref = true
menusimpel = false

//━━━━━━━━━━━━━━━[ STORAGE ]━━━━━━━━━━━━━━━━━//

var welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var antilink = JSON.parse(fs.readFileSync('./storage/antilink.json'))
var config = JSON.parse(fs.readFileSync('./srv/config.js'))
var antivirtex = JSON.parse(fs.readFileSync('./storage/antivirtex.json'))
var pendaftar = JSON.parse(fs.readFileSync('./storage/user.json'))
var imagi = JSON.parse(fs.readFileSync('./storage/imagi.json'))
var setik = JSON.parse(fs.readFileSync('./storage/setik.json'))
var vien = JSON.parse(fs.readFileSync('./storage/vien.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

NomorOwner = setting.NomorOwner
NameBot = setting.NameBot
NameOwner = setting.NameOwner

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

var apikey1 = config.Lolkey
var apikey2 = config.Xteam
var apikey3 = config.Vhtear
var apikey4 = config.Zeks
var apikey5 = config.Zero
var apikey6 = config.Nurutomo
var apikey7 = config.Hunter

//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━━━//

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
}
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

//━━━━━━━━━━━━━━━[ MODULE EXPORT ]━━━━━━━━━━━━━━━━━//
 
module.exports = zero = async (zero, zer) => {
try {
if (!zer.hasNewMessage) return
zer = zer.messages.all()[0]
if (!zer.message) return
if (zer.key && !zer.key.remoteJid == 'status@broadcast') return
global.blocked
zer.message = (Object.keys(zer.message)[0] === 'ephemeralMessage') ? zer.message.ephemeralMessage.message : zer.message
var typei = Object.keys(zer.message)[0]
global.prefix
var content = JSON.stringify(zer.message)
var from = zer.key.remoteJid
var type = Object.keys(zer.message)[0]
var { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var datre = new Date().toLocaleDateString()
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm :ss')

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var haris = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
var cmd = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
} else {
if (nopref){
prefix = ''
} else {
if (allpref){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
} else {
prefix = prefa
}
}
}
body = (type === 'conversation' && zer.message.conversation.startsWith(prefix)) ? zer.message.conversation : (type == 'imageMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'videoMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'extendedTextMessage') && zer.message[type].text.startsWith(prefix) ? zer.message[type].text : (type == 'listResponseMessage') && zer.message[type].singleSelectReply.selectedRowId ? zer.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && zer.message[type].selectedButtonId ? zer.message[type].selectedButtonId : ''
var budo = (typei === 'conversation') ? zer.message.conversation : (typei === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var budy = (type === 'conversation') ? zer.message.conversation : (type === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var isCmd = body.startsWith(prefix)
var arg = budy.slice(command.length + 2, budy.length)
var q = args.join(' ')
var timestampi = speed();
var latensyi = speed() - timestampi
var pes = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''
var messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
var botNumber = zero.user.jid
var Verived = "0@s.whatsapp.net"
var num = "6285157740529@s.whatsapp.net"
var ownerNumber = [`${NomorOwner}@s.whatsapp.net`,"6285157740529@s.whatsapp.net"]
var isGroup = from.endsWith('@g.us')
var sender = zer.key.fromMe ? zero.user.jid : isGroup ? zer.participant : zer.key.remoteJid
var senderNumber = sender.split("@")[0] 
var conts = zer.key.fromMe ? zero.user.jid : zero.contacts[zer.sender]
var pushname = zer.key.fromMe ? zero.user.name : !conts ? 'unknown' : conts.notify || conts.vname || conts.name || 'unknown' 
var groupMetadata = isGroup ? await zero.groupMetadata(from) : ''
var groupName = isGroup ? groupMetadata.subject : ''
var groupId = isGroup ? groupMetadata.jid : ''
var groupMembers = isGroup ? groupMetadata.participants : ''
var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
var groupDesc = isGroup ? groupMetadata.desc : ''
var groupOwner = isGroup ? groupMetadata.owner : ''
var isOwner = ownerNumber.includes(sender)
var isUser = pendaftar.includes(sender)
var isWelcome = isGroup ? welcome.includes(from) : false
var isGroupAdmins = groupAdmins.includes(sender) || false
var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
var isAntilink = isGroup ? antilink.includes(from) : false
var isAntivirtex = isGroup ? antivirtex.includes(from) : false
var isButton = (type == 'buttonsResponseMessage') ? zer.message.buttonsResponseMessage.selectedButtonId : ''
		
//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━━━//
		
function _0x4a9d(_0x2d113e,_0x24c56a){var _0x4de238=_0x4de2();return _0x4a9d=function(_0x4a9d65,_0x16a6c1){_0x4a9d65=_0x4a9d65-0x68;var _0x465f58=_0x4de238[_0x4a9d65];return _0x465f58;},_0x4a9d(_0x2d113e,_0x24c56a);}(function(_0x2eeffa,_0xe48ec1){var _0xe3eb0b=_0x2eeffa();function _0x5c0c19(_0x2cbd81,_0x567365){return _0x4a9d(_0x2cbd81- -0x49,_0x567365);}while(!![]){try{var _0x4496ba=-parseInt(_0x5c0c19(0x2e,0x2c))/0x1*(parseInt(_0x5c0c19(0x2c,0x2e))/0x2)+parseInt(_0x5c0c19(0x28,0x2a))/0x3*(-parseInt(_0x5c0c19(0x2b,0x2f))/0x4)+-parseInt(_0x5c0c19(0x26,0x22))/0x5+parseInt(_0x5c0c19(0x1f,0x1f))/0x6+-parseInt(_0x5c0c19(0x27,0x2f))/0x7*(-parseInt(_0x5c0c19(0x25,0x21))/0x8)+-parseInt(_0x5c0c19(0x24,0x26))/0x9*(parseInt(_0x5c0c19(0x2d,0x36))/0xa)+parseInt(_0x5c0c19(0x2f,0x27))/0xb;if(_0x4496ba===_0xe48ec1)break;else _0xe3eb0b['push'](_0xe3eb0b['shift']());}catch(_0x1f084b){_0xe3eb0b['push'](_0xe3eb0b['shift']());}}}(_0x4de2,0xaec46));function _0xa0305f(_0x5626b6,_0x308a1a){return _0x4a9d(_0x5626b6- -0x383,_0x308a1a);}function _0x4de2(){var _0x2922ce=['5700198qCsMEY','1369941upMfzc','Format\x20salah,\x20Silahkan\x20Cek\x20Lagi\x20Di\x20List\x20Menu','Mohon\x20Tunggu...\x20Sedang\x20Proses','4AYcyLD','6chJElF','8090zxtcRo','428676rSGCtz','16858347zMuBOS','8521884EpYjLy','Khusus\x20Di\x20Group','Link\x20Error\x20Silahkan\x20Ganti\x20Yg\x20Lain','Jadikan\x20Bot\x20Admin\x20Dulu','Sticker\x20Salah\x20Mohon\x20Coba\x20Lagi','6471VINLBO','8UtyNCh','3635065JXIMSf'];_0x4de2=function(){return _0x2922ce;};return _0x4de2();}mess={'wait':_0xa0305f(-0x310,-0x310),'success':'Done...Jangam\x20Lupa\x20Subscribe\x20Zero\x20YT7','wrongFormat':_0xa0305f(-0x311,-0x314),'error':{'stick':_0xa0305f(-0x317,-0x318),'Iv':_0xa0305f(-0x319,-0x321)},'only':{'group':_0xa0305f(-0x31a,-0x320),'bodmin':_0xa0305f(-0x318,-0x31a),'admin':'Khusus\x20Admin\x20Group'}};

//━━━━━━━━━━━━━━━[ CONNECTION ]━━━━━━━━━━━━━━━━━//
		
var sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
zero.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
zero.sendMessage(from, hasil, type, options).catch(e => {
zero.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}	
var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var reply = (teks) => {
zero.sendMessage(from, teks, text, {quoted:ftrol})
}
var sendMess = (hehe, teks) => {
zero.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? zero.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
var costum = (pesan, tipe, target, target2) => {
zero.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
        
zero.chatRead(from, "read")

var sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

function _0x375814(_0x1efc71,_0x510d2a){return _0x1844(_0x510d2a-0x2f3,_0x1efc71);}(function(_0x491135,_0x50117c){var _0x3f9928=_0x491135();function _0x7af68c(_0x3b3c8d,_0x1f2e0e){return _0x1844(_0x3b3c8d- -0x11f,_0x1f2e0e);}while(!![]){try{var _0x3ab853=parseInt(_0x7af68c(-0x95,-0x97))/0x1*(-parseInt(_0x7af68c(-0x9f,-0x9b))/0x2)+-parseInt(_0x7af68c(-0x9c,-0x99))/0x3+parseInt(_0x7af68c(-0x9d,-0xa0))/0x4+-parseInt(_0x7af68c(-0x9a,-0x9c))/0x5*(parseInt(_0x7af68c(-0x99,-0x95))/0x6)+-parseInt(_0x7af68c(-0x96,-0x93))/0x7*(-parseInt(_0x7af68c(-0x98,-0x9e))/0x8)+parseInt(_0x7af68c(-0x97,-0x9a))/0x9+parseInt(_0x7af68c(-0x94,-0x9a))/0xa;if(_0x3ab853===_0x50117c)break;else _0x3f9928['push'](_0x3f9928['shift']());}catch(_0x39d826){_0x3f9928['push'](_0x3f9928['shift']());}}}(_0x3597,0xd7859));function _0x3597(){var _0x291b56=['6928537MlLEca','2531eQnKQb','7389480DPsnSz','756LBaPMq','Subscribe\x20Zero\x20YT7','4043268yczlNr','4491048kSAgsA','0@s.whatsapp.net','3136930YXBLbK','6oeLZUe','8PMYxId','11019069xdGlmB'];_0x3597=function(){return _0x291b56;};return _0x3597();}function _0x1844(_0x1a2291,_0x3908fc){var _0x359761=_0x3597();return _0x1844=function(_0x1844a7,_0x56f51d){_0x1844a7=_0x1844a7-0x80;var _0x4c148b=_0x359761[_0x1844a7];return _0x4c148b;},_0x1844(_0x1a2291,_0x3908fc);}var ftrol={'key':{'participant':_0x375814(0x379,0x377)},'message':{'orderMessage':{'itemCount':0xa9,'status':0x1,'surface':0x1,'message':_0x375814(0x37a,0x374),'orderTitle':_0x375814(0x379,0x374),'thumbnail':fakethumb,'sellerJid':_0x375814(0x37c,0x377)}}};

//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
zero.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
)
}
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

(function(_0x337a81,_0x13d5ad){var _0xfa77b1=_0x337a81();function _0x4f4688(_0x1cc488,_0x48eae8){return _0x251e(_0x1cc488-0x1ce,_0x48eae8);}while(!![]){try{var _0x279103=-parseInt(_0x4f4688(0x257,0x269))/0x1*(parseInt(_0x4f4688(0x270,0x26a))/0x2)+-parseInt(_0x4f4688(0x276,0x26f))/0x3+-parseInt(_0x4f4688(0x26f,0x25a))/0x4*(parseInt(_0x4f4688(0x25b,0x260))/0x5)+-parseInt(_0x4f4688(0x26b,0x284))/0x6+-parseInt(_0x4f4688(0x26d,0x287))/0x7*(-parseInt(_0x4f4688(0x253,0x24f))/0x8)+parseInt(_0x4f4688(0x251,0x255))/0x9*(-parseInt(_0x4f4688(0x252,0x23b))/0xa)+parseInt(_0x4f4688(0x24e,0x258))/0xb;if(_0x279103===_0x13d5ad)break;else _0xfa77b1['push'](_0xfa77b1['shift']());}catch(_0x47ed81){_0xfa77b1['push'](_0xfa77b1['shift']());}}}(_0x212d,0xc93f1));function _0x251e(_0x4914d2,_0x4cb1c2){var _0x212d15=_0x212d();return _0x251e=function(_0x251eb8,_0x2999d0){_0x251eb8=_0x251eb8-0x76;var _0x298783=_0x212d15[_0x251eb8];return _0x298783;},_0x251e(_0x4914d2,_0x4cb1c2);}var sendStickerFromUrl=async(_0x49f495,_0x900264)=>{var _0x1241e1=Date['now']()/0x2710,_0x59461b=function(_0x5293de,_0x2412df,_0x151a62){function _0x5adca7(_0x34ad26,_0x483b41){return _0x251e(_0x34ad26- -0x138,_0x483b41);}request[_0x5adca7(-0xa1,-0x9b)](_0x5293de,function(_0x3100ae,_0x251555,_0x170736){function _0x2b571a(_0x127584,_0x4cb6fd){return _0x5adca7(_0x4cb6fd-0xdb,_0x127584);}request(_0x5293de)[_0x2b571a(0x39,0x25)](fs[_0x2b571a(0x22,0x24)](_0x2412df))['on'](_0x2b571a(0x2a,0x43),_0x151a62);});};function _0x2560c8(_0x264008,_0x3481b0){return _0x251e(_0x3481b0-0x3dd,_0x264008);}_0x59461b(_0x900264,_0x2560c8(0x46f,0x46e)+_0x1241e1+_0x2560c8(0x467,0x465),async function(){console[_0x411224(0x135,0x124)](_0x411224(0x15b,0x170));let _0x35e289=_0x411224(0x14e,0x137)+_0x1241e1+_0x411224(0x145,0x136);function _0x411224(_0x10c88b,_0x15fbf8){return _0x2560c8(_0x15fbf8,_0x10c88b- -0x320);}let _0x28874e=_0x411224(0x14e,0x146)+_0x1241e1+_0x411224(0x150,0x136);exec(_0x411224(0x13b,0x151)+_0x35e289+_0x411224(0x164,0x173)+_0x28874e,_0x5d2711=>{function _0x3b1a75(_0x430712,_0x251074){return _0x411224(_0x251074-0x202,_0x430712);}let _0x310727=fs[_0x3b1a75(0x35a,0x355)](_0x28874e);zero['sendMessage'](_0x49f495,_0x310727,MessageType['sticker'],{'quoted':ftrol}),fs[_0x3b1a75(0x359,0x35b)](_0x35e289),fs['unlinkSync'](_0x28874e);});});},sendMediaURL=async(_0x4dc8b1,_0xd00503,_0x304aec='',_0x53d5bf=[])=>{function _0x48a3d7(_0x53de13,_0x37736e){return _0x251e(_0x53de13-0x11b,_0x37736e);}_0x53d5bf[_0x48a3d7(0x1a5,0x1a5)]>0x0&&(_0x304aec=normalizeMention(_0x4dc8b1,_0x304aec,_0x53d5bf));var _0x2ed18b=Date[_0x48a3d7(0x1b5,0x1ab)]()/0x2710,_0x4cbf3f=_0x2ed18b[_0x48a3d7(0x1be,0x1d2)]();let _0x4caca6='';var _0x5b8bab=function(_0x1842c8,_0x9e78c4,_0x1e93f6){request['head'](_0x1842c8,function(_0x14aee9,_0x50ba8b,_0x188883){_0x4caca6=_0x50ba8b[_0xd89e80(0x245,0x25a)][_0xd89e80(0x254,0x252)];function _0xd89e80(_0x5938b6,_0x47e67f){return _0x251e(_0x5938b6-0x1b9,_0x47e67f);}request(_0x1842c8)[_0xd89e80(0x23b,0x22f)](fs[_0xd89e80(0x23a,0x226)](_0x9e78c4))['on'](_0xd89e80(0x259,0x26e),_0x1e93f6);});};_0x5b8bab(_0xd00503,_0x4cbf3f,async function(){console[_0x4b9e86(-0x231,-0x227)](_0x4b9e86(-0x219,-0x218));let _0x4030f7=fs[_0x4b9e86(-0x213,-0x205)](_0x4cbf3f),_0x4dd202=_0x4caca6['split']('/')[0x0]+_0x4b9e86(-0x211,-0x207);_0x4caca6===_0x4b9e86(-0x214,-0x1fd)&&(_0x4dd202=MessageType['video'],_0x4caca6=Mimetype['gif']);_0x4caca6['split']('/')[0x0]==='audio'&&(_0x4caca6=Mimetype[_0x4b9e86(-0x223,-0x20c)]);function _0x4b9e86(_0x3fdcd7,_0x44f9a0){return _0x48a3d7(_0x3fdcd7- -0x3c4,_0x44f9a0);}zero[_0x4b9e86(-0x215,-0x218)](_0x4dc8b1,_0x4030f7,_0x4dd202,{'quoted':ftrol,'mimetype':_0x4caca6,'caption':_0x304aec,'contextInfo':{'mentionedJid':_0x53d5bf}}),fs[_0x4b9e86(-0x20d,-0x1f6)](_0x4cbf3f);});};faketeks=_0x1a03c(0x126,0x120);function _0x212d(){var _0x319e05=['then','.webp','sendMessage','image/gif','readFileSync','head','Message','./storage/user.json','now','content-type','unlinkSync','914838TyQLtv','selesai','1526ePUfQP','close','4QjFQuY','200XDINsI','toString','./temp','get','img','\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=20\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20','1693914IjnTRz','_auth=1;\x20_b=\x22AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\x22;\x20_pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=;\x20_ir=0','find','forEach','log','sticker','attr','©Created\x20By\x20Zero\x20YT7','map','stringify','ffmpeg\x20-i\x20','replace','8544063XTlDnI','createWriteStream','pipe','19980sZuhCD','1420XbFxdV','56608GWirCd','mp4Audio','src','.png','2540aMBgoQ','length','push','headers','1043225jQDLyb','load','catch','done','./stik'];_0x212d=function(){return _0x319e05;};return _0x212d();}var pinterest=_0xf48118=>{return new Promise((_0x18503a,_0x291134)=>{function _0x32c898(_0x4d0378,_0x347ee2){return _0x251e(_0x4d0378- -0x3a0,_0x347ee2);}axios['get']('https://id.pinterest.com/search/pins/?autologin=true&q='+_0xf48118,{'headers':{'cookie':_0x32c898(-0x2f7,-0x30f)}})[_0x32c898(-0x30e,-0x30e)](({data:_0x9b5393})=>{const _0x308ac2=cheerio[_0x1a53e0(0x27a,0x266)](_0x9b5393),_0x1affe6=[],_0x4cec10=[];_0x308ac2('div\x20>\x20a')[_0x1a53e0(0x291,0x2a1)]()[_0x1a53e0(0x268,0x27f)](_0x27e40b=>{function _0x1adc97(_0x5593cf,_0x523be0){return _0x1a53e0(_0x5593cf- -0x1e8,_0x523be0);}const _0x1e68c8=_0x308ac2(_0x27e40b)[_0x1adc97(0x7a,0x62)](_0x1adc97(0xaa,0xa8))[_0x1adc97(0x7e,0x6d)](_0x1adc97(0x8b,0x82));_0x1affe6['push'](_0x1e68c8);});function _0x1a53e0(_0x40a16a,_0x117331){return _0x32c898(_0x40a16a-0x58c,_0x117331);}_0x1affe6[_0x1a53e0(0x263,0x25f)](function(_0x361ccf){if(_0x361ccf==undefined)return;function _0x485e66(_0x22ef84,_0x2933dc){return _0x1a53e0(_0x22ef84- -0x10,_0x2933dc);}_0x4cec10[_0x485e66(0x267,0x258)](_0x361ccf[_0x485e66(0x25b,0x265)](/236/g,'736'));}),_0x4cec10['shift'](),_0x18503a(_0x4cec10);})[_0x32c898(-0x311,-0x316)](_0x291134);});};isCmd&&!isUser&&(pendaftar[_0x1a03c(0x136,0x137)](sender),fs['writeFileSync'](_0x1a03c(0x144,0x153),JSON[_0x1a03c(0x128,0x117)](pendaftar,null,0x2)));function _0x1a03c(_0x33a705,_0x4f504e){return _0x251e(_0x33a705-0xab,_0x4f504e);}var sendWebp=async(_0x177308,_0x14d445)=>{var _0x4023e9=Date[_0x363c12(-0x13e,-0x13b)]()/0x2710;function _0x363c12(_0x3dd688,_0x43af0c){return _0x1a03c(_0x43af0c- -0x280,_0x3dd688);}var _0x4f00f2=function(_0x9b9b00,_0x5487ec,_0x4a493f){function _0x33f41e(_0x1b9c48,_0x1ae0bc){return _0x363c12(_0x1b9c48,_0x1ae0bc-0x52d);}request[_0x33f41e(0x3f2,0x3ef)](_0x9b9b00,function(_0xec7b81,_0x350769,_0x2cda7b){function _0x697200(_0x584860,_0x36a477){return _0x33f41e(_0x36a477,_0x584860- -0x506);}request(_0x9b9b00)[_0x697200(-0x12c,-0x113)](fs[_0x697200(-0x12d,-0x13a)](_0x5487ec))['on']('close',_0x4a493f);});};_0x4f00f2(_0x14d445,_0x363c12(-0x138,-0x131)+_0x4023e9+_0x363c12(-0x156,-0x14d),async function(){console['log'](_0x53b2d7(-0x1d6,-0x1e5));function _0x53b2d7(_0x2bc0c7,_0x2c0a66){return _0x363c12(_0x2bc0c7,_0x2c0a66- -0xae);}let _0x1f1036=_0x53b2d7(-0x1ec,-0x1df)+_0x4023e9+'.png',_0x160232=_0x53b2d7(-0x1c6,-0x1df)+_0x4023e9+_0x53b2d7(-0x1e3,-0x1f0);exec(_0x53b2d7(-0x1f0,-0x205)+_0x1f1036+_0x53b2d7(-0x1d8,-0x1dc)+_0x160232,_0x32bf84=>{let _0xfdb98d=fs['readFileSync'](_0x160232);zero[_0xfe2836(-0x69,-0x75)](_0x177308,_0xfdb98d,MessageType[_0xfe2836(-0xa7,-0x90)],{'quoted':ftrol});function _0xfe2836(_0x30ff7e,_0x69f087){return _0x53b2d7(_0x30ff7e,_0x69f087-0x17a);}fs[_0xfe2836(-0x6a,-0x6d)](_0x1f1036),fs[_0xfe2836(-0x83,-0x6d)](_0x160232);});});};

//━━━━━━━━━━━━━━━[ MESSAGE GROUP ]━━━━━━━━━━━━━━━━━//

if (isGroup && isAntilink && !zer.key.fromMe) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply("admin bebas");
reply("ANTILINK DETECTED!! Maaf Kamu Dikick Dari Group");
zero.groupRemove(from, [sender]);
}
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntivirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 VIRTEX DETECTED!! 」\n\nKamu Mengirimkan Virus, Maaf Kamu Di Kick Dari Group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
zero.groupRemove(from, [sender])
}     

//━━━━━━━━━━━━━━━[ MEDIA ]━━━━━━━━━━━━━━━━━//
            
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

switch (command) {                                                           

case 'help':
case 'menu':
function _0x5b20(_0x450663,_0x4c387a){const _0x4f3b12=_0x4f3b();return _0x5b20=function(_0x5b20db,_0x4bc6e2){_0x5b20db=_0x5b20db-0x187;let _0x350a67=_0x4f3b12[_0x5b20db];return _0x350a67;},_0x5b20(_0x450663,_0x4c387a);}function _0x2ba20b(_0x33179c,_0x29094b){return _0x5b20(_0x33179c-0x388,_0x29094b);}(function(_0x32fc9e,_0x2e86d3){const _0xfb80fa=_0x32fc9e();function _0x1d62e5(_0x234a33,_0x339f4a){return _0x5b20(_0x339f4a-0x19d,_0x234a33);}while(!![]){try{const _0x442a36=parseInt(_0x1d62e5(0x33e,0x329))/0x1+parseInt(_0x1d62e5(0x347,0x34a))/0x2*(parseInt(_0x1d62e5(0x338,0x332))/0x3)+parseInt(_0x1d62e5(0x352,0x33d))/0x4*(-parseInt(_0x1d62e5(0x32b,0x326))/0x5)+parseInt(_0x1d62e5(0x328,0x32a))/0x6+parseInt(_0x1d62e5(0x342,0x342))/0x7*(-parseInt(_0x1d62e5(0x34f,0x343))/0x8)+parseInt(_0x1d62e5(0x33d,0x33a))/0x9*(-parseInt(_0x1d62e5(0x332,0x339))/0xa)+parseInt(_0x1d62e5(0x337,0x336))/0xb*(-parseInt(_0x1d62e5(0x32f,0x337))/0xc);if(_0x442a36===_0x2e86d3)break;else _0xfb80fa['push'](_0xfb80fa['shift']());}catch(_0x217986){_0xfb80fa['push'](_0xfb80fa['shift']());}}}(_0x4f3b,0xc8f6e));function _0x4f3b(){const _0x38c52e=['46205YrrzUJ','\x0a🌐\x20Language\x20=\x20Javascript\x0a👥\x20Total\x20Pengguna\x20=\x20','length','434814hKwyiP','4518786iJOFvM','allmenu','readFileSync','prepareMessage','uptime','owner','\x20😇\x0a\x0a✉️\x20Source\x20Code\x20=\x20https://bit.ly/Zero-yt7\x0a👤\x20Author\x20=\x20Zero\x20YT7\x0a🌍\x20Lib\x20=\x20Baileys\x0a⏳\x20Runtime\x20=\x20','toFixed','95337dyxQgo','split','\x0a𝐑𝐮𝐧𝐭𝐢𝐦𝐞\x20:\x20','status','251053zCPhNK','348TTLhVn','\x0a𝐀𝐩𝐚\x20𝐊𝐚𝐛𝐚𝐫...?\x20𝐒𝐞𝐦𝐨𝐠𝐚\x20𝐇𝐚𝐫𝐢𝐦𝐮\x20𝐌𝐞𝐧𝐲𝐞𝐧𝐚𝐧𝐠𝐤𝐚𝐧\x0a𝐉𝐚𝐧𝐠𝐚𝐧\x20𝐋𝐮𝐩𝐚\x20𝐁𝐚𝐡𝐚𝐠𝐢𝐚\x20𝐘𝐚\x0a\x0a[\x20𝗜𝗡𝗙𝗢\x20𝗕𝗢𝗧\x20]\x0a𝐍𝐚𝐦𝐚\x20𝐁𝐨𝐭\x20:\x20','1206780wUMjgX','18fpCwRt','./img/zero.jpg','imageMessage','140nRKKNB','@c.us','OWNER','𝐇𝐚𝐥𝐥𝐨...\x20','\x0a✨\x20Speed\x20=\x20','9352sgsrqB','1880wjDQKW','\x0a𝐒𝐩𝐞𝐞𝐝\x20:\x20','SEWA\x20BOT','https://youtu.be/ilrhJV_QMIE','SCRIPT','sewabot','sendMessage','74GtxrzD','Hallo\x20','message','\x0a𝐍𝐚𝐦𝐚\x20𝐎𝐰𝐧𝐞𝐫\x20:\x20','\x20second\x0a𝐋𝐢𝐛\x20:\x20Baileys\x0a𝐓𝐲𝐩𝐞\x20:\x20NodeJs','\x0a𝐍𝐨𝐦𝐞𝐫\x20𝐎𝐰𝐧𝐞𝐫\x20:\x20','\x20second\x0a☕\x20Device\x20=\x20Windows'];_0x4f3b=function(){return _0x38c52e;};return _0x4f3b();}if(menusimpel==![]){const timestampi=speed(),latensyi=speed()-timestampi;nomor=0x1,stod=''+sender,stst=await zero['getStatus'](sender[_0x2ba20b(0x51e,0x51c)]('@')[0x0]+_0x2ba20b(0x529,0x514)),stst=stst[_0x2ba20b(0x520,0x52a)]==0x191?'':stst[_0x2ba20b(0x520,0x51a)],menu='Hy\x20👋\x20'+pushname+',\x20'+ucapanWaktu+_0x2ba20b(0x51b,0x507)+runtime(process[_0x2ba20b(0x519,0x51b)]())+_0x2ba20b(0x512,0x51f)+pendaftar[_0x2ba20b(0x513,0x509)]+_0x2ba20b(0x52c,0x53e)+latensyi[_0x2ba20b(0x51c,0x531)](0x4)+_0x2ba20b(0x510,0x50a),but=[{'buttonId':_0x2ba20b(0x516,0x507),'buttonText':{'displayText':'ALL\x20MENU'},'type':0x1},{'buttonId':_0x2ba20b(0x533,0x53e),'buttonText':{'displayText':_0x2ba20b(0x530,0x533)},'type':0x1},{'buttonId':_0x2ba20b(0x51a,0x523),'buttonText':{'displayText':_0x2ba20b(0x52a,0x530)},'type':0x1}],sendButLocation(from,menu,faketeks,fakeimg,but);}else{if(menusimpel=!![]){const timestampi=speed(),latensyi=speed()-timestampi;stod=''+sender,menu=_0x2ba20b(0x52b,0x537)+pushname+',\x20'+ucapanWaktu+_0x2ba20b(0x523,0x51c)+NameBot+'\x0a𝐂𝐫𝐞𝐚𝐭𝐨𝐫\x20𝐁𝐨𝐭\x20:\x20'+faketeks+_0x2ba20b(0x538,0x54b)+NameOwner+_0x2ba20b(0x50f,0x4ff)+NomorOwner+_0x2ba20b(0x51f,0x509)+runtime(process[_0x2ba20b(0x519,0x51b)]())+_0x2ba20b(0x52f,0x53b)+latensyi[_0x2ba20b(0x51c,0x520)](0x4)+_0x2ba20b(0x539,0x53e),gbutsan=[{'buttonId':_0x2ba20b(0x516,0x51d),'buttonText':{'displayText':'ALL\x20MENU'},'type':0x1},{'buttonId':'script','buttonText':{'displayText':_0x2ba20b(0x532,0x51f)},'type':0x1}],mhan=await zero[_0x2ba20b(0x518,0x516)](from,fs[_0x2ba20b(0x517,0x52b)](_0x2ba20b(0x526,0x53c)),image,{'thumbnail':fs[_0x2ba20b(0x517,0x519)](_0x2ba20b(0x526,0x530))});const btnmenu={'imageMessage':mhan[_0x2ba20b(0x537,0x529)][_0x2ba20b(0x527,0x522)],'contentText':''+menu,'footerText':''+faketeks,'buttons':gbutsan,'headerType':0x4};await zero[_0x2ba20b(0x534,0x546)](from,btnmenu,MessageType['buttonsMessage'],{'sendEphemeral':!![],'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'externalAdReply':{'title':_0x2ba20b(0x536,0x525)+pushname,'body':''+ucapanWaktu,'mediaType':'2','mediaUrl':_0x2ba20b(0x531,0x528),'thumbnail':fakethumb},'mentionedJid':[num]},'quoted':ftrol});}}
break
case 'setmenu':
if(args[0] == 'ori'){
menusimpel = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menusimpel = false
reply('Sucsess')
}else if (!q) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: `setmenu ori`, buttonText: {displayText: 'ORI'}, type: 1},{buttonId: `setmenu simpel`, buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygelud = {
contentText: `${anu}`,
footerText: '©Created : Zero YT7',
buttons: buttons,
headerType: 1
}
await zero.sendMessage(from, skuygelud, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'sewabot':
sewa = 
`Hay ${pushname}, ${ucapanWaktu}
Mau Sewa Bot Ya ? 

Silahkan Pilih List Di Bawah Ini`
but = [
{ buttonId: `sebulan`, buttonText: { displayText: '1 BULAN' }, type: 1 },
{ buttonId: `permanen`, buttonText: { displayText: 'PERMANEN' }, type: 1 }
]
sendButLocation(from, sewa, faketeks, fakethumb, but, { thumbnail: Buffer.alloc(0) })
break
case 'sebulan':
sebulan =
`Untuk Harga Sewa Bot 
Sebulan 10.000

Silahkan Pilih Metode Pembayarannya Dibawah Ini`
but = [
{ buttonId: `gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
{ buttonId: `dana`, buttonText: { displayText: 'DANA' }, type: 1 },
{ buttonId: `ovo`, buttonText: { displayText: 'OVO' }, type: 1 }
]
sendButLocation(from, sebulan, faketeks, fakethumb, but, { thumbnail: Buffer.alloc(0) })
break
case 'permanen':
permanen =
`Untuk Harga Sewa Bot 
Permanen 15.000

Silahkan Pilih Metode Pembayarannya Dibawah Ini`
but = [
{ buttonId: `gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
{ buttonId: `dana`, buttonText: { displayText: 'DANA' }, type: 1 },
{ buttonId: `ovo`, buttonText: { displayText: 'OVO' }, type: 1 }
]
sendButLocation(from, permanen, faketeks, fakethumb, but, { thumbnail: Buffer.alloc(0) })
break
case 'gopay':
gopay =
`No Gopay : 085157740529
A/N : Mikey`
but = [
{ buttonId: `owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButMessage(from, gopay, faketeks, but, zer)
break
case 'dana':
dana =
`No Dana : 085713029931
A/N : Mustakim`
but = [
{ buttonId: `owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButMessage(from, dana, faketeks, but, zer)
break
case 'ovo':
ovo =
`No Ovo : 08988743499
A/N : Mikey`
but = [
{ buttonId: `owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButMessage(from, ovo, faketeks, but, zer)
break
case 'infobot':
(function(_0x10a3b2,_0x307a82){var _0x2b6bf4=_0x10a3b2();function _0x556508(_0x413bef,_0x9a08f3){return _0x4ded(_0x413bef-0xd1,_0x9a08f3);}while(!![]){try{var _0xe8708f=parseInt(_0x556508(0x1fc,0x1f7))/0x1+parseInt(_0x556508(0x1f9,0x1f3))/0x2+parseInt(_0x556508(0x1f1,0x1f0))/0x3*(-parseInt(_0x556508(0x1f0,0x1ed))/0x4)+-parseInt(_0x556508(0x1fa,0x1f7))/0x5+parseInt(_0x556508(0x1fb,0x1f4))/0x6+parseInt(_0x556508(0x1f7,0x1fd))/0x7*(parseInt(_0x556508(0x1ee,0x1e6))/0x8)+parseInt(_0x556508(0x1ec,0x1ee))/0x9;if(_0xe8708f===_0x307a82)break;else _0x2b6bf4['push'](_0x2b6bf4['shift']());}catch(_0x507d42){_0x2b6bf4['push'](_0x2b6bf4['shift']());}}}(_0x411c,0xd9f65),teks=_0x19be89(-0x14f,-0x14f)+NameOwner+_0x19be89(-0x14f,-0x149)+NameBot+'\x0a•\x20Prefix\x20:\x20Multi\x20Prefix\x20&\x20No\x20Prefix\x0a•\x20Total\x20Pengguna\x20:\x20'+pendaftar[_0x19be89(-0x14f,-0x153)]+'\x0a•\x20Runtime\x20:\x20'+runtime(process[_0x19be89(-0x142,-0x148)]())+'\x0a•\x20Speed\x20:\x20'+latensyi[_0x19be89(-0x152,-0x14a)](0x4)+'\x20second\x0a•\x20Lib\x20:\x20Baileys\x0a•\x20Type\x20:\x20NodeJs\x0a\x0a[\x20THANKS\x20TO\x20]\x0a•\x20Thanks\x20To\x20Allah\x20S.W.T\x0a•\x20Thanks\x20To\x20Ortu\x0a•\x20Thanks\x20To\x20Zero\x20YT7\x20(Cretor\x20Bot)\x0a•\x20Thanks\x20To\x20All\x20Creator\x20Bot\x0a•\x20Thanks\x20To\x20Penyedia\x20Apikey\x0a•\x20Thanks\x20To\x20Penyedia\x20Case\x0a•\x20Thanks\x20To\x20All\x20Subscriber');function _0x19be89(_0xe1ca1b,_0x464a6f){return _0x4ded(_0x464a6f- -0x26d,_0xe1ca1b);}function _0x411c(){var _0x523470=['5351859xLzLSc','SEWA\x20BOT','1336vEyTRr','[\x20INFO\x20BOT\x20]\x0a•\x20Creator\x20Bot\x20:\x20Zero\x20YT7\x0a•\x20Nama\x20Owner\x20:\x20','424tvupat','2949pTsROH','owner','sewabot','toFixed','\x0a•\x20Nama\x20Bot\x20:\x20','uptime','25053veDuij','OWNER','1133784eufvdl','8535040xwQGeQ','5478996FNoVTw','31577SNPZYG','length'];_0x411c=function(){return _0x523470;};return _0x411c();}function _0x4ded(_0x1327dd,_0x48eb41){var _0x411c34=_0x411c();return _0x4ded=function(_0x4dedfc,_0x2f8d70){_0x4dedfc=_0x4dedfc-0x11a;var _0x1f43f4=_0x411c34[_0x4dedfc];return _0x1f43f4;},_0x4ded(_0x1327dd,_0x48eb41);}but=[{'buttonId':prefix+_0x19be89(-0x146,-0x14b),'buttonText':{'displayText':_0x19be89(-0x14c,-0x151)},'type':0x1},{'buttonId':prefix+_0x19be89(-0x150,-0x14c),'buttonText':{'displayText':_0x19be89(-0x14d,-0x146)},'type':0x1}],sendButLocation(from,teks,faketeks,fakethumb,but);
break
case 'allmenu':
teks =
`𝐇𝐚𝐥𝐥𝐨... ${pushname}, ${ucapanWaktu}
𝐀𝐩𝐚 𝐊𝐚𝐛𝐚𝐫...? 𝐒𝐞𝐦𝐨𝐠𝐚 𝐇𝐚𝐫𝐢𝐦𝐮 𝐌𝐞𝐧𝐲𝐞𝐧𝐚𝐧𝐠𝐤𝐚𝐧
𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐁𝐚𝐡𝐚𝐠𝐢𝐚 𝐘𝐚

[ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]
𝐍𝐚𝐦𝐚 𝐁𝐨𝐭 : ${NameBot}
𝐂𝐫𝐞𝐚𝐭𝐨𝐫 𝐁𝐨𝐭 : ${faketeks}
𝐍𝐚𝐦𝐚 𝐎𝐰𝐧𝐞𝐫 : ${NameOwner}
𝐍𝐨𝐦𝐞𝐫 𝐎𝐰𝐧𝐞𝐫 : ${NomorOwner}
𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
𝐒𝐩𝐞𝐞𝐝 : ${latensyi.toFixed(4)} second
𝐋𝐢𝐛 : Baileys
𝐓𝐲𝐩𝐞 : NodeJs

[ 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨 ]
𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮
• ${prefix}antilink
• ${prefix}antivirtex
• ${prefix}welcome
• ${prefix}group
• ${prefix}linkgrup
• ${prefix}hidetag
• ${prefix}tagall
• ${prefix}setdesc
• ${prefix}setname
• ${prefix}setpp
• ${prefix}kick
• ${prefix}add
• ${prefix}demote
• ${prefix}promote

𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐌𝐞𝐧𝐮
• ${prefix}sticker
• ${prefix}toimg
• ${prefix}attp
• ${prefix}tomp3
• ${prefix}stickerwm
• ${prefix}dadu
• ${prefix}semoji
• ${prefix}tomp3
• ${prefix}tomp4
• ${prefix}robot
• ${prefix}balik
• ${prefix}bass
• ${prefix}gemuk
• ${prefix}detikvn
• ${prefix}detikvideo

𝐒𝐭𝐨𝐫𝐚𝐠𝐞 𝐌𝐞𝐧𝐮
• ${prefix}owner
• ${prefix}report
• ${prefix}runtime
• ${prefix}speed

𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮
• ${prefix}bc

𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮
• ${prefix}pinterest
• ${prefix}herolist
• ${prefix}herodetail
• ${prefix}google
• ${prefix}gimage
• ${prefix}wikipedia
• ${prefix}mediafire
• ${prefix}ytsearch
• ${prefix}play
• ${prefix}tinyurl
• ${prefix}fetch
• ${prefix}tiktokdl
• ${prefix}lirik
• ${prefix}tourl
• ${prefix}resepmasakan
• ${prefix}artimimpi
• ${prefix}bilangangka
• ${prefix}kalkulator
• ${prefix}fancytext
• ${prefix}githubstalk
• ${prefix}translate
• ${prefix}ss
• ${prefix}playstore
• ${prefix}tiktokaudio
• ${prefix}brainly
• ${prefix}igstalk
• ${prefix}tiktokstalk
• ${prefix}linkwa
• ${prefix}chara

𝐌𝐚𝐤𝐞𝐫 𝐌𝐞𝐧𝐮
• ${prefix}blackpink
• ${prefix}neon
• ${prefix}greenneon
• ${prefix}advanceglow
• ${prefix}futureneon
• ${prefix}sandwriting
• ${prefix}sandsummer
• ${prefix}sandengraved
• ${prefix}metaldark
• ${prefix}neonlight
• ${prefix}holographic
• ${prefix}text1917
• ${prefix}minion
• ${prefix}duluxesilver
• ${prefix}newyearcard
• ${prefix}bloodfrosted
• ${prefix}halloween
• ${prefix}jokerlogo
• ${prefix}fireworksparkle
• ${prefix}natureleaves
• ${prefix}bokeh
• ${prefix}toxic
• ${prefix}strawberry
• ${prefix}box3d
• ${prefix}roadwarning
• ${prefix}breakwall
• ${prefix}icecold
• ${prefix}luxury
• ${prefix}cloud
• ${prefix}summersand
• ${prefix}horrorblood
• ${prefix}thunder
• ${prefix}pornhub
• ${prefix}glitch
• ${prefix}avenger
• ${prefix}space
• ${prefix}ninjalogo
• ${prefix}marvelstudio
• ${prefix}lionlogo
• ${prefix}wolflogo
• ${prefix}steel3d
• ${prefix}wallgravity
• ${prefix}shadow
• ${prefix}cup
• ${prefix}cup1
• ${prefix}romance
• ${prefix}smoke
• ${prefix}burnpaper
• ${prefix}lovemessage
• ${prefix}undergrass
• ${prefix}love
• ${prefix}coffe
• ${prefix}woodheart
• ${prefix}woodenboard
• ${prefix}summer3d
• ${prefix}wolfmetal
• ${prefix}nature3d
• ${prefix}underwater
• ${prefix}goldenrose
• ${prefix}summernature
• ${prefix}letterleaves
• ${prefix}glowingneon
• ${prefix}fallleaves
• ${prefix}flamming
• ${prefix}harrypotter
• ${prefix}carvedwood
• ${prefix}arcade8bit
• ${prefix}battlefield4
• ${prefix}pubg
• ${prefix}wetglass
• ${prefix}multicolor3d
• ${prefix}watercolor
• ${prefix}luxurygold
• ${prefix}galaxywallpaper
• ${prefix}lighttext
• ${prefix}beautifulflower
• ${prefix}puppycute
• ${prefix}royaltext
• ${prefix}heartshaped
• ${prefix}birtdaycake
• ${prefix}galaxystyle
• ${prefix}hologram3d
• ${prefix}glossychrome
• ${prefix}greenbush
• ${prefix}metallogo
• ${prefix}noeltext
• ${prefix}glittergold
• ${prefix}textcake
• ${prefix}starsnight
• ${prefix}wooden3d
• ${prefix}puppycute
• ${prefix}royaltext
• ${prefix}heartshaped
• ${prefix}birthdaycake
• ${prefix}starsnight
• ${prefix}textbyname
• ${prefix}writegalacy
• ${prefix}galaxybat
• ${prefix}snow3d
• ${prefix}birthdayday
• ${prefix}glodplaybutton
• ${prefix}silverplaybutton
• ${prefix}freefire
• ${prefix}nulis

𝐒𝐭𝐨𝐫𝐚𝐠𝐞 𝐌𝐞𝐧𝐮
• ${prefix}listimage
• ${prefix}liststicker
• ${prefix}listvn
• ${prefix}addsticker
• ${prefix}delsticker
• ${prefix}addvn
• ${prefix}delvn
• ${prefix}addimage
• ${prefix}delimage

𝟏𝟖+ 𝐌𝐞𝐧𝐮
• ${prefix}bokep
• ${prefix}neko
• ${prefix}kanna
• ${prefix}sagiri
• ${prefix}megumin
• ${prefix}wallnime
• ${prefix}ass
• ${prefix}ahegao
• ${prefix}hentai
• ${prefix}yuri
• ${prefix}panties
• ${prefix}chiisaihentai
• ${prefix}trap
• ${prefix}blowjob
• ${prefix}yaoi
• ${prefix}ecchi
• ${prefix}ahegao
• ${prefix}hololewd
• ${prefix}sideoppai
• ${prefix}animefeets
• ${prefix}animebooty
• ${prefix}animethighss
• ${prefix}hentaiparadise
• ${prefix}animearmpits
• ${prefix}hentaifemdom
• ${prefix}lewdanimegirls
• ${prefix}biganimetiddies
• ${prefix}animebellybutton
• ${prefix}hentai4everyone
• ${prefix}bj
• ${prefix}ero
• ${prefix}cum
• ${prefix}feet
• ${prefix}yuri
• ${prefix}trap
• ${prefix}lewd
• ${prefix}feed
• ${prefix}eron
• ${prefix}solo
• ${prefix}gasm
• ${prefix}poke
• ${prefix}anal
• ${prefix}holo
• ${prefix}tits
• ${prefix}kuni
• ${prefix}kiss
• ${prefix}erok
• ${prefix}smug
• ${prefix}baka
• ${prefix}solog
• ${prefix}feetg
• ${prefix}lewdk
• ${prefix}waifu
• ${prefix}pussy
• ${prefix}femdom
• ${prefix}cuddle
• ${prefix}eroyuri
• ${prefix}cum_jpg
• ${prefix}blowjob
• ${prefix}erofeet
• ${prefix}holoero
• ${prefix}classic
• ${prefix}erokemo
• ${prefix}fox_girl
• ${prefix}futari
• ${prefix}lewdkemo
• ${prefix}wallpaper
• ${prefix}pussy_jpg
• ${prefix}kemonomimi
• ${prefix}nsfw_avatar

𝐄𝐯𝐚𝐥 𝐌𝐞𝐧𝐮
• x
• >

𝐅𝐮𝐧 𝐌𝐞𝐧𝐮
• ${prefix}quotes
• ${prefix}darkjoke
• ${prefix}meme
• ${prefix}rate
• ${prefix}kapankah
• ${prefix}apakah
• ${prefix}bisakah
• ${prefix}caripesan
• ${prefix}slot
• ${prefix}suits
• ${prefix}tagme
• ${prefix}tag
• ${prefix}readmore
• ${prefix}fitnahpc`
but = [
{ buttonId: `${prefix}infobot`, buttonText: { displayText: 'INFO BOT' }, type: 1 },
{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'SEWA BOT' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
]
sendButLocation(from, teks, faketeks, fakeimg, but)
break
case 'welcome': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] === 'on') {
if (isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
welcome.push(from)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (args[0] === 'off') {
if (!isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐌𝐚𝐭𝐢 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
var ini = welcome.indexOf(from)
welcome.splice(ini, 1)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (!q){
anu =`SILAHKAN PILIH SALAH SATU`
punten = [{buttonId: 'welcome off', buttonText: {displayText: 'OFF'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'ON️'}, type: 1}]
var btngrass = {
contentText: `${anu}`,
footerText: 'Created By Zero YT7',
buttons: punten,
headerType: 1
}
await zero.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntilink) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antilink.push(from);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤");
} else if (args[0] == "off") {
antilink.splice(from, 1);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤");
} else if (!q) {
sendButMessage(from, `MODE ANTILINK`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antilink on`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antilink off`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntivirtex) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antivirtex.push(from);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (args[0] == "off") {
antivirtex.splice(from, 1);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (!q) {
sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antivirtex on`,
buttonText: {
displayText: `ON`,
},
type: 1,
},
{
buttonId: `antivirtex off`,
buttonText: {
displayText: `OFF`,
},
type: 1,
},
]);
}
break
case 'group':
case 'grup':
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
but = [
{ buttonId: 'groupbuka', buttonText: { displayText: 'BUKA' }, type: 1 },
{ buttonId: 'grouptutup', buttonText: { displayText: 'TUTUP' }, type: 1 }
]
sendButMessage(from, "Silahkan Pilih Untuk Buka/Tutup Group", faketeks, but, zer)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐛𝐮𝐤𝐚 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
zero.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐮𝐭𝐮𝐩 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
zero.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
linkgc = await zero.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩 *${groupName}*`
zero.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, @${mentioned[0].split('@')[0]} 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐃𝐢 𝐆𝐫𝐨𝐮𝐩 *${groupMetadata.subject}*`, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐓𝐢𝐝𝐚𝐤 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐋𝐚𝐠𝐢 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐌𝐞𝐧𝐮𝐫𝐮𝐧𝐤𝐚𝐧 : @${mentioned[0].split('@')[0]} 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐌𝐞𝐦𝐛𝐞𝐫`, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args.length < 1) return reply('Nomer Yg Mau Di Add Mana ?')
if (args[0].startsWith('08')) return reply('Gunakan Kode Negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zero.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('𝐆𝐚𝐠𝐚𝐥 𝐌𝐞𝐧𝐚𝐦𝐛𝐚𝐡𝐤𝐚𝐧 𝐓𝐚𝐫𝐠𝐞𝐭, 𝐌𝐮𝐧𝐠𝐤𝐢𝐧 𝐊𝐚𝐫𝐞𝐧𝐚 𝐃𝐢 𝐏𝐫𝐢𝐯𝐚𝐭𝐞!')
}
break
case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if(!q)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
zero.groupRemove(from, [y])
reply(`𝐒𝐮𝐜𝐜𝐬𝐞𝐬 𝐊𝐢𝐜𝐤 𝐓𝐚𝐫𝐠𝐞𝐭!`)
break
case 'tagall':
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
let arr = [];
let txti = `[ 𝗧𝗔𝗚 𝗔𝗟𝗟 ]\n${q ? q : ''}\n\n`
for (let i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateSubject(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐍𝐚𝐦𝐚 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐣𝐚𝐝𝐢\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateDescription(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐃𝐞𝐬𝐤𝐫𝐢𝐩𝐬𝐢 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ht = body.slice(9)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(ht, members_id, false)
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zero.downloadAndSaveMediaMessage(zer, './storage/media_user')
await zero.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐏𝐫𝐨𝐟𝐢𝐥 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
break

case 'bc':
case 'bcbut':
if (!isOwner && !x.key.fromMe) return reply(`Hanya Untuk @${ownerNumbers.split("@")[0]}`)
if (args.length < 1) return reply('Teksnya?')
anu = await zero.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1}]
var btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await zero.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses Mengirim Broadcast:\n${q}`)
break

case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐙𝐞𝐫𝐨 𝐘𝐓𝟕`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && zer.message.videoMessage.seconds < 11 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, Pada Saat Mengkonversi ${tipe} Ke Stiker. Pastikan Untuk Video Yang Dikirim Tidak Lebih Dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi Kesalahan, Silahkan Coba Beberapa Saat Lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
zero.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim Gambar Dengan Caption ${prefix}sticker Atau Tag Gambar Yang Sudah Dikirim`)
}
break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
zero.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'toimg':
if (!isQuotedSticker) return reply('Reply Stickernya')
encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, Pada Saat Mengkonversi Sticker Ke Gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subscribe Zero YT7`)
fs.unlinkSync(ran)
})
break
case 'stickerwm':
case 'swm':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh: ${prefix + command} Zero | Gantenk`)
if (isMedia && !zer.message.videoMessage || isQuotedImage) {
ppp = `${args.join(' ')}`
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname1 = ppp.split('|')[0]
const author1 = ppp.split('|')[1]
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: zer})
fs.unlinkSync(media)	
fs.unlinkSync(`./sticker/${sender}.webp`)	
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && zer.message.videoMessage.fileLength < 10000000 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
wmsti = body.slice(11)
if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname1 = wmsti.split('|')[0]
const author1 = wmsti.split('|')[1]
exif.create(packname1, author1, `stickwm_${sender}`)
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftrol})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
}
break
case 'dadu':
random = Math.floor(Math.random() * 6) + 1
damdu = fs.readFileSync(`./sticker/${random}.webp`)
zero.sendMessage(from, damdu, sticker, {quoted: ftrol})
break
case 'semoji':
if (args === 0) return reply('emojinya?')   
aku4 = args.join(' ')
emoji.get(`${aku4}`).then(emoji => {
link = `${emoji.images[10].url}`
sendWebp(from, `${link}`).catch(() => reply('gagal'))
})
break
case 'tomp3':
zero.updatePresence(from, Presence.composing)
if (!isQuotedVideo) return reply('Reply Video Nya Kak')
reply(mess.wait)
encmediad = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediad = await zero.downloadAndSaveMediaMessage(encmediad)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
fs.unlinkSync(mediad)
if (err) return reply(mess.error.api)
mhee = fs.readFileSync(ran)
zero.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'robot':
encmedial = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await zero.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: ftrol})
fs.unlinkSync(ran)
})
break
case 'balik':
encmediau = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await zero.downloadAndSaveMediaMessage(encmediau)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:ftrol})
fs.unlinkSync(ran)
})
break
case 'bass':                 
encmediao = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediao = await zero.downloadAndSaveMediaMessage(encmediao)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediao)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:ftrol})
fs.unlinkSync(ran)
})
break
case 'gemuk':
encmediaz = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediaz = await zero.downloadAndSaveMediaMessage(encmediaz)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediaz)
if (err) return ephe('Error!')
hah = fs.readFileSync(ran)
zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:ftrol})
fs.unlinkSync(ran)
})
break
case 'detikvn':
encmediam = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediam = await zero.downloadAndSaveMediaMessage(encmediam)
cokmatane = Number(args[0])
hah = fs.readFileSync(mediam)
zero.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:ftrol})
fs.unlinkSync(mediam)
break
case 'detikvideo':
encmedian = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
median = await zero.downloadAndSaveMediaMessage(encmedian)
cokmatane = Number(args[0])
hah = fs.readFileSync(median)
zero.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: ftrol})
fs.unlinkSync(median)
break

case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = zero.contacts[i] != undefined ? zero.contacts[i].vname || zero.contacts[i].notify : undefined
inilist.push({
"displayName": 'ZeroYT7',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${NameOwner}\n`
+ `ORG: Creator ${NameOwner} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${NomorOwner}:${NomorOwner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await zero.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
{buttonId: 'youtube', buttonText: {displayText: 'YOUTUBE'}, type: 1},
{buttonId: 'instagram', buttonText: {displayText: 'INSTAGRAM'}, type: 1},
{buttonId: 'tiktok', buttonText: {displayText: 'TIKTOK'}, type: 1}
]
 buttons = {
contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
footerText: faketeks,
buttons: button,
headerType: 1
}
await zero.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break      
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = zer.participant
let teks1 = `[𝗥𝗘𝗣𝗢𝗥𝗧]\n𝐏𝐞𝐬𝐚𝐧 : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zero.sendMessage(`6285157740529@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://youtube.com/ZeroYT7`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/Zero_YT7`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':
teks =
`Nih Tiktok Owner Ku Jangan Lupa Di Follow Ya https://tiktok.com/@_zeroyt7`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break
case 'speed':
case 'ping':
reply(`Speed: ${latensyi.toFixed(4)} Second`)
break

case 'play':
if (args.length == 0) return await reply(`Masukin Judul Lagunya\nContoh : ${prefix + command} Aku Bukan Jodohnya`)
teks =
`Silahkan Pilih Tipe File Yg Mau Di Download`
but = [
{ buttonId: `lagu ${q}`, buttonText: { displayText: '🎵 MUSIC' }, type: 1 },
{ buttonId: `video ${q}`, buttonText: { displayText: '🎥 VIDEO' }, type: 1 }
]
sendButLocation(from, teks, faketeks, fakethumb, but)
break
case 'lagu':
if (args.length < 1) return reply('Masukin Judul Lagunya')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
• *Judul :* ${res.all[0].title}
• *ID Video :* ${res.all[0].videoId}
• *Diupload Pada :* ${res.all[0].ago}
• *Views :* ${res.all[0].views}
• *Durasi :* ${res.all[0].timestamp}
• *Channel :* ${res.all[0].author.name}
• *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: zer, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
var tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
• *Judul :* ${res.all[0].title}
• *ID Video :* ${res.all[0].videoId}
• *Diupload Pada :* ${res.all[0].ago}
• *Views :* ${res.all[0].views}
• *Durasi :* ${res.all[0].timestamp}
• *Channel :* ${res.all[0].author.name}
• *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: zer, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: zer, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case "video":
if (args.length === 0)
return reply(`Masukin Judul Lagunya ?\nContoh: ${prefix + command} Aku Bukan Jodohnya`)
reply(mess.wait)
var srch = args.join("")
aramas = await yts(srch)
aramat = aramas.all;
var mulaikah = aramat[0].url;
try {
ytv(mulaikah).then((res) => {
var { dl_link, thumb, title, filesizeF, filesize } = res;
axios
.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000)
return sendMediaURL(from,thumb,`*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
var captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply("error"))
})
})
} catch (err) {
reply(mess.error.api)
}
break
case 'ytmp3':
if (args.length === 0) return reply(`Link Nya Mana ?\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply('Eror')
var srch = args.join(' ')
try {
yta(srch)
.then((res) => {
var { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
var captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
await sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply('error'))
}) 
})
} catch (err) {
reply('Terjadi kesalahan')
}
break
case 'ytmp4':
if (args.length == 0) return reply(`Link Nya Mana ?\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey1}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await zero.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await zero.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
case 'pinterest':
case 'pin':
if (!q) return reply("")
pint = await pinterest (q)
zero.sendMessage(from, {url: `${pint[Math.floor(Math.random() * pint.length)]}`}, image, {quoted: ftrol, thumbnail: Buffer.alloc(0), caption: "Nih Jangan Lupa Subscribe Zero YT7"})
break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Mau Cari Apa Ya')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Mau Cari Apa Ya ?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terzeroi Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: ftrol, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
case 'wikipedia':
case 'wiki':
if (args.length < 1) return reply('Mau Cari Apa Ya ?')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: ftrol, caption: result}).catch(e => {
reply(result)
})
break
case 'ytsearch': case 'yts':
if (args.length < 1) return reply('Judul Yg Mau Dicari Apa ?')
var srch = args.join(' ');
try {
var aramas = await yts(srch);
} catch {
return await zero.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '📖 Title: ' + video.title + '\n'
ytresult += '📨 Link: ' + video.url + '\n'
ytresult += '⏳ Durasi: ' + video.timestamp + '\n'
ytresult += '👥 Views: ' + video.views + '\n'
ytresult += '🗃️ Upload: ' + video.ago + '\n________________________\n\n'
});
ytresult += '*Created Zero YT7*'
await zero.sendMessage(from, tbuff, image, {quoted : ftrol, caption: ytresult})
break
case 'tinyurl':
if (args.length < 1) return reply(`Masukkan link`)
if (!isUrl) return reply(`Masukkan link`)
const fetchText = (url, optiono) => {
return new Promise((resolve, reject) => {
return fetch(url, optiono)
.then(response => response.text())
.then(text => resolve(text))
.catch(err => {
console.log(color(err,'red'))
reject(err)
})
})
}
okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
shorti = `*Result : ${okok}*`
reply(shorti)
break
case 'fetch':
if(!q) return reply('Linknya?')
fetch(`${args[0]}`).then(res => res.text())  
.then(bu =>{
reply(bu)
})   
break
case "ig":
if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
return reply(mess.Iv)
if (!q) return fakegroup("Masukin Link Nya")
reply(mess.wait)
hx.igdl(args[0]).then(async (result) => {
for (let i of result.medias) {
if (i.url.includes("mp4")) {
let link = await getBuffer(i.url)
zero.sendMessage(from, link, video, {
quoted: ftrol,
caption: `Type : ${i.type}`,
});
} else {
let link = await getBuffer(i.url);
zero.sendMessage(from, link, image, {
quoted: ftrol,
caption: `Type : ${i.type}`,
})
}
}
})
break
case 'tiktokk':
case 'tiktokdl':
case 'tiktoknowm':
if (!q) return reply('Linknya?')
var { TiktokDownloader } = require('../mess/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${q}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break
case 'lirik':
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'tourl':
if ((isMedia && !zer.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zer
owgi = await zero.downloadMediaMessage(boij)
res = await upload(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
break
case 'resepmasakan':
if (args.length < 1) return reply('Masukin Nama Makanannya')
var teks = body.slice(14)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${apikey7}`, {method: 'get'})
hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n────────────────────\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`
reply(mess.wait)
buff = await getBuffer(anu.results.thumb)
zero.sendMessage(from, buff, image, {quoted: ftrol, caption: hasilresep})
break
case 'artimimpi':
if (args.length < 1) return reply('Masukin Teksnya')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/artimimpi?q=${body.slice(11)}&apikey=${apikey7}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'bilangangka':
if (args.length < 1) return reply('Masukin Angka Nya')
var teks = body.slice(13)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${apikey7}`, {method: 'get'})
kata = anu.result
reply(kata)
break
case 'kalkulator':
var mtk = body.slice(12)
teks = `${mtk} = ${Math_js.evaluate(mtk)}`
reply(teks)
break
case 'fancytext':
if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${apikey7}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'script':
case 'sc':
function _0x822b(_0x3ffa10,_0xe82a5e){var _0x2bc741=_0x2bc7();return _0x822b=function(_0x822b74,_0x5dc88d){_0x822b74=_0x822b74-0xf6;var _0x493ee4=_0x2bc741[_0x822b74];return _0x493ee4;},_0x822b(_0x3ffa10,_0xe82a5e);}(function(_0x430eaf,_0x51e78c){function _0x2e6d8e(_0x201a11,_0x20d96b){return _0x822b(_0x201a11-0x16a,_0x20d96b);}var _0x40bd27=_0x430eaf();while(!![]){try{var _0x463a82=parseInt(_0x2e6d8e(0x260,0x261))/0x1*(parseInt(_0x2e6d8e(0x268,0x267))/0x2)+parseInt(_0x2e6d8e(0x263,0x261))/0x3*(-parseInt(_0x2e6d8e(0x265,0x269))/0x4)+parseInt(_0x2e6d8e(0x261,0x25c))/0x5+-parseInt(_0x2e6d8e(0x262,0x261))/0x6+-parseInt(_0x2e6d8e(0x267,0x26a))/0x7+parseInt(_0x2e6d8e(0x266,0x261))/0x8+-parseInt(_0x2e6d8e(0x264,0x269))/0x9;if(_0x463a82===_0x51e78c)break;else _0x40bd27['push'](_0x40bd27['shift']());}catch(_0x36db04){_0x40bd27['push'](_0x40bd27['shift']());}}}(_0x2bc7,0xefa9a));function _0x2bc7(){var _0x125aa7=['306XaUXOX','471528ynHiFT','43744cizVHA','6589032QIxAZQ','3032596pohfwx','356emsnjF','Sc\x20Ini\x20Di\x20Buat\x20Oleh\x20:\x20Zero\x20YT7\x0a[\x20INFO\x20SCRIPT\x20]\x0a•\x20Creator\x20:\x20085157740529\x0a•\x20Nama\x20Creator\x20:\x20Zero\x20YT7\x0a\x0a[\x20LINK\x20BASE\x20]\x0a•\x20Base\x201\x20:\x20https://github.com/Zero-YT7/Base-ZeroYT7\x0a•\x20Base\x202\x20:\x20https://github.com/Zero-YT7/BaseNew-ZeroYT7\x0a\x0a[\x20LINK\x20SC\x20FULL\x20FITUR\x20]\x0a•\x20https://youtube.com/ZeroYT7','1795GuMvgo','8918415OcCTlm','2064432QsHHqQ'];_0x2bc7=function(){return _0x125aa7;};return _0x2bc7();}function _0x23ae61(_0x5b065d,_0x115921){return _0x822b(_0x5b065d-0x174,_0x115921);}teks=_0x23ae61(0x273,0x277),fake='Gak\x20Usah\x20Hapus\x20Creator\x20Bot\x20Hargai\x20Pembuat\x20Sc\x20Gk\x20Ush\x20Ngaku²\x20Sc\x20Lo\x0aModal\x20Nyolong\x20Aja\x20Bangga\x20Kalo\x20Mau\x20Jadi\x20Cretor\x20Bikin\x20Sendiri\x20Dari\x20Awal\x20Bukannya\x20Modal\x20Nyolong\x20Dari\x20YT',but=[{'buttonId':'owner','buttonText':{'displayText':'OWNER'},'type':0x1}],sendButLocation(from,teks,fake,fakeimg,but,{'thumbnail':Buffer['alloc'](0x0)});
break
case 'githubstalk':
if (args.length < 1) return reply('Usernamenya?')
var teks = body.slice(13)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${apikey7}`, {method: 'get'})
gstalk = `❏ *GITHUB STALK*\n\n❏ Name : ${anu.result.name}\n❏ Followers : ${anu.result.followers}\n❏ Following : ${anu.result.following}\n❏ Id : ${anu.result.id}\n❏ Node Id : ${anu.result.node_id}\n❏ Type : ${anu.result.type}\n❏ Company : ${anu.result.company}\n❏ Location : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Site Admin : ${anu.result.site_admin}\n❏ Email : ${anu.result.email}\n❏ Created At : ${anu.result.created_at}\n❏ Updated At : ${anu.result.updated_at}\n❏ Twitter Username : ${anu.result.twitter_username}\n❏ Blog : ${anu.result.blog}\n❏ Avatar Url : ${anu.result.avatar_url}\n❏ Gravatar Id : ${anu.result.gravatar_id}\n❏ Html Url : ${anu.result.html_url}`
reply(mess.wait)
buff = await getBuffer(anu.result.avatar_url)
zero.sendMessage(from, buff, image, {quoted: ftrol, caption: gstalk})
break
case 'translate':
case 'ts':
try{
if ( args.length === 1 ){
tekss = zer.message.extendedTextMessage.contextInfo.quotedMessage.conversation
translate(tekss, {client: 'gtx', to:args[0]})
.then((res) =>{
reply(res.text)
}) 
} else
if(args.length > 0 ) {
ngab = args.join(' ')
teks = ngab.split(' ')[0];
bhs = ngab.split(' ')[1];
translate(teks, {client: 'gtx', to:bhs})
.then((res) =>{
reply(res.text)
})
}
} catch (e){
reply(mess.error.api)
}
break
case 'ss':
reply(mess.wait)
sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${apikey7}`)
break
case 'playstore':
if(!q) return reply('lu nyari apa?')
let play = await hx.playstore(`${q}`)
let store = '❉─────────────────────❉\n'
for (let i of play){
store += `\n「 *PLAY STORE* 」\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(store)
break
case 'tiktokaudio':
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.api)
if (!q) return reply('Linknya?')
reply(mess.wait)
hx.ttdownloader(`${args[0]}`)
.then(result => {
var { wm, nowm, audio } = result
axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
.then(async (a) => {
me = `*Link* : ${a.data}`
nowmm = await getBuffer(audio)
zero.sendMessage(from,nowmm ,MessageType.audio,{mimetype:'audio/mp4',quoted: ftrol})
})
})
break 
case 'brainly':
if (args.length == 0) return reply(`Apa Yang Mau Di Cari ?\nContoh : ${prefix + command} Soekarno adalah`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${apikey1}&query=${query}`)
get_result = get_result.result
zerr = "Result Search : \n"
for (var x of get_result) {
zerr += `${x.title}\n`
zerr += `${x.url}\n\n`
}
reply(zerr)
break
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
 if(!q) return reply('cari group apa?')
hx.linkwa(`${q}`)
.then(result => {
let res = '「 *GC WA* 」\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break 
case 'chara':
if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
let im = await hx.chara(`${q}`)
let acak = im[Math.floor(Math.random() * im.length)]
let li = await getBuffer(acak)
await zero.sendMessage(from,li,image,{quoted: ftrol})
break
case 'igstalk':
try{
if (!q) return reply('Usernamenya?')
ig.fetchUser(`${args.join(' ')}`).then(Y => {
console.log(`${args.join(' ')}`)
ten = `${Y.profile_pic_url_hd}`
teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
sendMediaURL(from,ten,teks) 
})} catch {
const tod = await fetchJson(
`https://ferdiz-afk.my.id/api/stalkig?username=${q}`
);
var nih_buff = await getBuffer(tod.picurl);
const tt = `*INSTAGRAM STALK*
\nUsername: ${tod.username}\nFullname: ${tod.fullname}\npostingan: ${tod.post}\ncategory_akun: ${tod.category_name}\nverified: ${tod.verified_user}\nprivate: ${tod.private_user}\nFollowing: ${tod.following}\nFollower: ${tod.followers}\nBio:\n${tod.bio}`;
zero.sendMessage(from, nih_buff, image, { quoted: ftrol, caption: tt });
}
break;
case 'tiktokstalk':
if (!q)return reply(`Username Nya Mana ?\nContoh : ${prefix + command} Zero_YT7`)
reply(mess.wait)
ttst = await fetchJson(`http://zekais-api.herokuapp.com/tiktokstalk?query=${q}`)
ig = `*T I K T O K  S T A L K*
*Username : ${ttst.username}*
*Nick Name : ${ttst.nickname}*
*Video : ${ttst.videoCount}*
*Likes : ${ttst.likes}*
*Followers : ${ttst.follower}*
*Following : ${ttst.following}*
*BIO : ${ttst.bio}*`
buff = await getBuffer(ttst.prof_pic)
zero.sendMessage(from, buff, image,{quoted:ftrol,caption:ig})
break
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
if (args.length == 0) return reply(`Teksnya Mana ?\nContoh : ${prefix + command} Zero YT7`)
ini_txt = args.join(" ")
getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey1}&text=${ini_txt}`).then((gambar) => {
zero.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA SUBSCRIBE ZERO YT7`, quoted : ftrol})
})
break
case 'pornhub':
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Zero YT7`)
txt1 = args[0]
txt2 = args[1]
getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey1}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
zero.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA SUBSCRIBE ZERO YT7`, quoted : ftrol})
})
break
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
if (args.length == 0) return reply(`Teksnya Mana ?\nContoh : ${prefix + command} Zero YT7`)
ini_txt = args.join(" ")
getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey1}&text=${ini_txt}`).then((gambar) => {
zero.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA SUBSCRIBE ZERO YT7`, quoted : ftrol})
})
break
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
if (args.length == 0) return reply(`Example: ${prefix + command} zero Xd`)
txt1 = args[0]
txt2 = args[1]
getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${apikey1}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
zero.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA SUBSCRIBE ZERO YT7`, quoted : ftrol})
})
break
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} Zero YT7`)
ini_txt = args.join(" ")
getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey1}&text=${ini_txt}`).then((gambar) => {
zero.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA SUBSCRIBE ZERO YT7`, quoted : ftrol}) 
})
break
case 'nulis':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh: ${prefix + command} Zero Gantenk`)
ini_txt = args.join(" ")
getBuffer(`https://api.lolhuman.xyz/api/nulis?apikey=${apikey1}&text=${ini_txt}`).then((gambar) => {
zeroyt7.sendMessage(from, gambar, image, { thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA SUBSCRIBE ZERO YT7`, quoted : ftrol })
})
break
case 'imagelist':
case 'listimage':
teks = '*Image List :*\n\n'
for (let awokwkwk of imagi) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": imagi } })
break
case 'stickerlist':
case 'liststicker':
teks = '*Sticker List :*\n\n'
for (let awokwkwk of setik) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": setik } })
break
case 'vnlist':
case 'listvn':
teks = '*VN List :*\n\n'
for (let awokwkwk of vien) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": vien } })
break
case 'addsticker':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!isQuotedSticker) return reply('Reply stiker')
nm = body.slice(12)
if (!nm) return reply('Nama sticker nya apa?')
boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await zero.downloadMediaMessage(boij)
setik.push(`${nm}`)
fs.writeFileSync(`./sticker/${nm}.webp`, delb)
fs.writeFileSync('./storage/setik.json', JSON.stringify(setik))
zero.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: ftrol })
break
case 'delsticker':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
try {
nmm = body.slice(12)
wanu = setik.indexOf(nmm)
setik.splice(wanu, 1)
fs.unlinkSync(`./sticker/${nmm}.webp`)
reply(`Sukses menghapus sticker ${body.slice(12)}`)
} catch (err){
console.log(err)
reply(mess.error.api)
}
break
case 'addvn':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audio')
nm = body.slice(7)
if (!nm) return reply('Nama vn nya apa?')
boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await zero.downloadMediaMessage(boij)
vien.push(`${nm}`)
fs.writeFileSync(`./sticker/media/${nm}.mp3`, delb)
fs.writeFileSync('./storage/vien.json', JSON.stringify(vien))
zero.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: ftrol })
break
case 'delvn':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
try {
nmm = body.slice(7)
wanu = vien.indexOf(nmm)
vien.splice(wanu, 1)
fs.unlinkSync(`./sticker/media/${nmm}.mp3`)
reply(`Sukses menghapus vn ${body.slice(7)}`)
} catch (err){
console.log(err)
reply(mess.error.api)
}
break
case 'addimage':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!isQuotedImage) return reply('Reply image')
nm = body.slice(10)
if (!nm) return reply('Nama image nya apa?')
boij = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await zero.downloadMediaMessage(boij)
imagi.push(`${nm}`)
fs.writeFileSync(`./sticker/media/${nm}.jpg`, delb)
fs.writeFileSync('./storage/imagi.json', JSON.stringify(imagi))
zero.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: ftrol })
break
case 'delimage':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
try {
nmm = body.slice(10)
wanu = imagi.indexOf(nmm)
imagi.splice(wanu, 1)
fs.unlinkSync(`./sticker/media/${nmm}.jpg`)
reply(`Sukses menghapus image ${body.slice(10)}`)
} catch (err){
console.log(err)
reply(mess.error.api)
}
break

case 'neko': 
ini_result = await fetchJson(`https://xnxxapi.herokuapp.com/api/nsfw/nsfwNeko?apikey=xnxx`)
get_result = ini_result.result
ini_img = await getBuffer(get_result)
zero.sendMessage(from, ini_img, image, {quoted:ftrol})
break
case 'kanna':
case 'sagiri':
case 'megumin':
case 'wallnime':
reply(mess.wait)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey1}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await zero.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Created By Zero YT7', imageMessage: imageMsg,
contentText:`DONE NIH JANGAN LUPA SUBSCRIBE ZERO YT7`,buttons,headerType:4}
prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
zero.relayWAMessage(prep)
break
case 'ass': 
case 'ahegao': 
case 'yuri': 
case 'panties': 		
ini_result = await fetchJson(`https://xnxxapi.herokuapp.com/api/nsfw/${command}?apikey=xnxx`)
get_result = ini_result.result
ini_img = await getBuffer(get_result)
zero.sendMessage(from, ini_img, image, {quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey1}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await zero.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Created By Zero YT7', imageMessage: imageMsg,
contentText:`DONE NIH JANGAN LUPA SUBSCRINE ZERO YT7`,buttons,headerType:4}
prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
zero.relayWAMessage(prep)
break
case 'bj':
case 'ero':
case 'cum':
case 'feet':
case 'yuri':
case 'trap':
case 'lewd':
case 'feed':
case 'eron':
case 'solo':
case 'gasm':
case 'poke':
case 'anal':
case 'holo':
case 'tits':
case 'kuni':
case 'kiss':
case 'erok':
case 'smug':
case 'baka':
case 'solog':
case 'feetg':
case 'lewdk':
case 'waifu':
case 'pussy':
case 'femdom':
case 'cuddle':
case 'eroyuri':
case 'cum_jpg':
case 'blowjob':
case 'erofeet':
case 'holoero':
case 'classic':
case 'erokemo':
case 'fox_girl':
case 'futanari':
case 'lewdkemo':
case 'wallpaper':
case 'pussy_jpg':
case 'kemonomimi':
case 'nsfw_avatar':
buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey1}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await zero.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Created By Zero YT7', imageMessage: imageMsg,
contentText:`DONE NIH JANGAN LUPA SUBSCRIBE ZERO YT7`,buttons,headerType:4}
prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
zero.relayWAMessage(prep)
break

case 'quotes':
ini_result = await fetchJson('https://xnxxapi.herokuapp.com/api/randomquote?apikey=xnxx')
get_result = ini_result.result
ini_txt = `${get_result.quotes}\n\n`
ini_txt += `~ ${get_result.author}`
reply(ini_txt)
break
case 'darkjokes':
case 'meme':
buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${apikey1}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await zero.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'©Created By Zero YT7', imageMessage: imageMsg,
contentText:`DONE NIH JANGAN LUPA SUBSCRIBE ZERO YT7`,buttons,headerType:4}
prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
zero.relayWAMessage(prep)
break
case 'rate':
rate = body.slice(1)
const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
zero.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: ftrol })
break
case 'apakah':
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
const kah = apa[Math.floor(Math.random() * apa.length)]
zero.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: ftrol })
break
case 'kapankah':
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
zero.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: ftrol })
break
case 'bisakah':
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
zero.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: ftrol })
break
case 'caripesan':
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await zero.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
zero.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
case 'slot':
case 'slots':
const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
zero.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: ftrol })
break
case 'suit':
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
if (args[0] === 'gunting' ) {
gunting = [
"Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
"Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
"Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = [
"Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
"Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
"Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = [
"Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
"Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
"Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply('Pilih gunting/batu/kertas')
}
break
case 'tag':
if (args.length < 1) return reply(`Nomernya Mana ?\nContoh ${prefix}tag 62xnxx`)
var nomqm = `${body.slice(5)}@s.whatsapp.net`
tagq = `@${nomqm.split('@')[0]}` 
zero.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'tagme':
var nomqm = zer.participant
tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
zero.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'readmore':
case 'more':
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
if (!q.includes('|')) return  reply(mess.error.api)
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
reply( text1 + readmore + text2)
break
case 'fitnahpc':
 if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
var gh = body.slice(10)
var parti = gh.split("|")[0];
var targetq = gh.split("|")[1];
var bot = gh.split("|")[2];
zero.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
break

//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//
        
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return zero.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}