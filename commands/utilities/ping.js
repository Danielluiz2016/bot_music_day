const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = new Command({
    // options
    name: "ping",
    description: `get ping of bot`,
    userPermissions: ['SEND_MESSAGES'],
    botPermissions: ['SEND_MESSAGES'],
    category: "Information",
    cooldown: 10,
    // command start
    run: async ({ client, interaction, args, prefix }) => {
      // Code
      interaction.followUp(`\`\`\`html\n Ping :- ${client.ws.ping} \`\`\``)
    },
  });