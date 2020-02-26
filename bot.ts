import * as Discord from 'discord.js';
import { configuration } from './config';

var botName = require('./../../package.json').name;
var botVersion = require('./../../package.json').version;

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
    const content = message.content.replace(prefix, '').trim();
    if (content === 'version') {
        await message.channel.send(`${botName}: ${botVersion}`);
    } else {
        const output = `Received:\n\`\`\`\n${content}\n\`\`\``;
        await message.reply(output);
    }
});
