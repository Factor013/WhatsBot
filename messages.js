const {Poll} = require('whatsapp-web.js')

function getMessage(msg, client){

const poll = new Poll('Escolha uma Opção: ',[
    'Suporte',
    'Informações'
])
client.sendMessage(msg.from, poll);

}


module.exports = { getMessage };






