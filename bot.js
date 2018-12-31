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





const Discord =require('discord. js');
const bot = new Discord.Client();

bot.on('ready', () => {
	console.log("Turning on Bot")
	bot.user.setActivity("New Users", {
		type: 2});
});

bot.on('guildMemberAdd', member => {
	let channel = member.guild.channels.find('name', 'obx');
	let memberavatar = member.user.avatar
	if (!channel) return;
	let embed = new Discord.RichEmbed()
	.setcolor('RANDOM')
	.setThumbnail(memberavatar)
	.addField(':busts_in_silhouette: | name : ', `${member}`)
	.addField(':microphone:  | Welcome!',` **Wellllcoome To ___OBx Shop____  :revolving_hearts: :gift_heart: ** , ${member}`)
	.addField(':id: | user :', "**[" + `${member.id}` + "]**")
	.addField(':family_mwgb: | Your the member',`${member.guild.memberCount}`)
	.addField("Name", `<@` + `${member.id}` + `>`, true)
	.addField('Server', `${member.guild.name}`, true)
	.setFooter(`**${member.guild.name}**`)
	.setTimestamp()
	
	channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {
	
	console.log(`${member}`, "has joined" + `${message.guild.name}`)
	
});





client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
