import meowHelp from 'cli-meow-help';
import meow from 'meow';

const flags = {
	clear: {
		type: 'boolean' as const,
		default: false,
		shortFlag: 'c',
		desc: 'Clear the console'
	},
	debug: {
		type: 'boolean' as const,
		default: false,
		shortFlag: 'd',
		desc: 'Print debug info'
	},

};

const commands = {
	help: { desc: `Print help info` }
};
// @ts-ignore
const helpText = meowHelp({
	name: `calai`,
	flags,
	commands
});

const options = {
	importMeta: import.meta,
	inferType: true,
	description: 'fatcn-ui',
	hardRejection: false,
	flags
};


export default meow(helpText, options);
