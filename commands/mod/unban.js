module.exports = {
    name: "unban",
    aliases: [],
    run: async (client, message, args) => {
     if (!message.member.permissions.has("BAN_MEMBERS")) {
       message.channel.send({ content: `*${message.author.username},* you need **ban members** permission to run that command.` });
     } else {
       const ID = args[0];
       if (!ID) {
         message.channel.send({ content: `Provide me an ID to unban.` });
       } else {
         const list = await message.guild.bans.fetch();
         const user = list.find((user) => { user.id == `${ID}` });
         if (!user) {
           message.channel.send({ content: `That user is not banned from this server.` });
         } else {
           message.guild.members.users.unban(ID)
           message.channel.send({ content: `Unbanned!` });
         }
       }
     }
  },
};