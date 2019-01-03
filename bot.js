const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";




var prefix = "a";
    client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "s") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('by lina');

   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });





client.on("ready", async  => {
setInterval(function(){
client.channels.get("529241607573340170").setName("[");
client.channels.get("529241607573340170").setName("[ Wel");
client.channels.get("529241607573340170").setName("[ Welcome");
client.channels.get("529241607573340170").setName("[ Welcome To");
client.channels.get("529241607573340170").setName("[ Welcome To OB");
client.channels.get("529241607573340170").setName("[ Welcome To OBx");
client.channels.get("529241607573340170").setName("[ Welcome To OBx Sh");
client.channels.get("529241607573340170").setName("[ Welcome To OBx Shop");
client.channels.get("529241607573340170").setName("[ Welcome To OBx Shop ]");
  }, 3000);
});





client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
