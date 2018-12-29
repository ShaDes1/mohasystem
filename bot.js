const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By ♛ 『DE』 NovritschPro#6808");


client.on("ready", () => {
let channel =     client.channels.get("هنا ايدي الروم يلي تبي فيه سبام")
setInterval(function() {
channel.send(`الكلمه يلي تريدها`);
}, 50)
})



        var prefix = "$";
    client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "spam") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR**');


   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء










client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', 'ChannelID').setName("「");
client.channels.find('id', 'ChannelID').setName("「 Wel");
client.channels.find('id', 'ChannelID').setName("「 Welco");
client.channels.find('id', 'ChannelID').setName("「 Welcome");
client.channels.find('id', 'ChannelID').setName("「 Welcome To");
client.channels.find('id', 'ChannelID').setName("「 Welcome To L");
client.channels.find('id', 'ChannelID').setName("「 Welcome To Le");
client.channels.find('id', 'ChannelID').setName("「 Welcome To Leg");
client.channels.find('id', 'ChannelID').setName("「 Welcome To lege");
client.channels.find('id', 'ChannelID').setName("「 Welcome To legen");
client.channels.find('id', 'ChannelID').setName("「 Welcome To legend");
client.channels.find('id', 'ChannelID').setName("「 Welcome To legend Net");
client.channels.find('id', 'ChannelID').setName("「 Welcome To legend NetWork 」");
  }, 3000);
});



















client.on('ready',async () => {
console.log("Starting..");
let g = client.guilds.get("اي دي السيرفر");
let c = g.channels.get("اي دي الروم");
if(c.type === 'voice') {
c.join();
setInterval(() => {
if(!g.me.voiceChannel) c.join();
}, 1);
} else {
console.log("Failed To Join:\n The Channel Type isn't "text"");
}
});







const adminprefix = "الامر";
const devs = ['ايدي اونر 2','ايدي اونر 1'];
client.on('message', message => {
  var argresult = message.content.split().slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'بلاينق')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(${argresult} تم تغيير بلاينق البوت إلى )
} else 
  if (message.content.startsWith(adminprefix + 'اسم')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(${argresult} : تم تغيير أسم البوت إلى)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'افتار')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(${argresult} : تم تغير صورة البوت);
      } else     
if (message.content.startsWith(adminprefix + 'ستريم')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(تم تغيير تويتش البوت إلى  ${argresult})
});







client.on('message', message => {
            if (message.content.startsWith("$rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     اولا ' ,' ممنوع السب ')
.addField('     ثانيا ' ,' لا تسوي سبام  ')
.addField('     ثالثا ' ,' لا تزعج الاخرين ')
.addField('    رابعا' ,' ممنوع الاعلانات ')
.addField('    خامسا' ,' احترم الاخرين ')
.addField('    سادسا' ,' لا تنشر في الشات او بل خاص ')
.addField('    سابعا' ,' لا تنشر روابط! ')
.addField('    ثامنا' ,' لا تسوي سبام ايموجي ')
.addField('    تاسعا' ,' لا تطلب رتبه الاداره ! ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});