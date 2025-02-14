#!/usr/bin/env node
import { Command } from 'commander';
import add from './commands/add.js';
import init from './commands/init.js';

const program = new Command();

program
  .name('fatcn-ui')
  .description('Chonky UI components for NEXT.js')
  .version('1.1.1');

program
  .command('init')
  .description('Initialize fatcn in your project')
  .action(async () => {
    await init();
  });

program
  .command('add')
  .description('Add a specific component to your project')
  .argument('<component>', 'name of the component to add')
  .option('-no-css, --no-css', 'Do not add the component\'s CSS file')
  .action(async (component, options) => {
    await add(component, options);
  });

program.parse();