const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";




var prefix = "A";
    client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "S") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('by lina');

   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });




client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
