const fs = require('fs')
const { exec } = require('child_process')

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    try {
      //  let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        //let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
       // let media = await conn.downloadAndSaveMediaMessage(q)
         let q = m.quoted ? m.quoted : m 
         let mime = (q.msg || q).mimetype || ''
    let tes = await q.download()
    conn.sendFile(m.chat, tes, 'ok.mp3', null, m, true, { duration : args[0] })
    } catch (e) {
        throw 'reply vn nya'
    }
}
  //  handler.help = ['bass', 'blown', 'deep', 'earrape', 'fast', 'fat', 'nightcore', 'reverse', 'robot', 'slow', 'smooth', 'tupai'].map(v => v + ' [vn]')
//handler.tags = ['audio']
handler.help = ['detikvn <durasi>']
handler.tags = ['tools']
handler.command = /^(detikvn)$/i

module.exports = handler
