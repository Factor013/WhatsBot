function getMessage(msg, client){

    const menu = 'Seja Bem vindo(a)!\n\n' +
                 'Escolha uma opção:\n\n' +
                 '1 - Suporte Técnico\n' +
                 '2 - Informações\n';

    client.sendMessage(msg.from, menu);

}


module.exports = { getMessage };