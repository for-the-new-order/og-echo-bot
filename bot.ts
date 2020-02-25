import * as Discord from 'discord.js';
import { configuration } from './config';

const bot = new Discord.Client();

bot.login(configuration.auth.token);

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
