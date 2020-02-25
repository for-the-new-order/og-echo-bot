import * as Discord from 'discord.js';

const config = require('./config').configuration;
const bot = new Discord.Client();

bot.login(config.auth.token);

bot.on('ready', function(evt: any) {
    console.info('Connected');
    console.info('Logged in as: ');
    console.info(bot.user.username + ' - (' + bot.user.id + ')');
});

bot.on('message', async (message: Discord.Message) => {
    if (message.author.bot) {
        return;
    }
    const prefix = '!ogecho';
    if (!message.content.startsWith(prefix)) {
        return;
    }
    const content = message.content.replace(prefix, '');
    const output = `Received:\n\`\`\`\n${content}\n\`\`\``;
    message.reply(output);
});
