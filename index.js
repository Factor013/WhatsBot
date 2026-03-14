const {Client, LocalAuth} = require('whatsapp-web.js');
var qrcode = require('qrcode-terminal')
const { getMessage } = require('./messages');


const client = new Client({
    authStrategy: new LocalAuth({
        clientId:'session',
        dataPath:''
    })
});

client.on('qr', (qr) => {
    console.log("Leia o QRCODE com o Whatsapp:");
    qrcode.generate(qr, { small: true });
});

client.on("ready", () =>{
    console.log('Atendente Online!')
});
client.on("message", msg =>{
    getMessage(msg, client)
});

client.initialize();