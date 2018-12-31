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




client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'obx');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',${member})
        .addField('📢 | Wellllcoome To _OBx Shop__ 💞 💝', Welcome to the server ${member})
        .addField('User ID :', "[" + ${member.id} + "]" )
                .addField('arrow_down',** Your Number ${member.guild.memberCount}**)

                  .addField("Name:",**<@${member.id}>**, true)

                                     .addField(' Server', ${member.guild.name},true)

     .setFooter('OBX Shop')
        .setTimestamp()

      channel.sendEmbed(embed);
}); 
 







client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
