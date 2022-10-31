const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, () => {
	console.log('Encendido!');
});

client.on(Events.InteractionCreate, async interaction => {
	//should move to another file or make a new "handler"
	const db = JSON.parse(fs.readFileSync('./data/channels.json'))
	if (interaction.channel.id === db.verify) {
		const role = interaction.guild.roles.cache.get("902225843001122906");
		return interaction.member.roles
			.add(role)
			.then((member) =>
				interaction.reply({
					content: `${role} se ha asignado.`,
					ephemeral: true,
				}),
			);
	}
	//should move to another file or make a new "handler"
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(token);