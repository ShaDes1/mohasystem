const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";





    client.on('message', message => {
        var prefix = "A";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + 'S')) {
            message.channel.send(''+b);
                message.delete(999)
        }
        
       
      });




client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
