import { window, commands, ExtensionContext, Terminal, QuickPickItem } from 'vscode';
import * as symfonyExeCommandList from './symfonyExeCommandList.json';
import * as symfonyCommandList from './symfonyCommandList.json';
import * as composerCommandList from './composerCommandList.json';
import * as bundleCommandList from './bundleCommandList.json';


export function activate (context: ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "Loc" is now active!');

	let disposable = commands.registerCommand('extension.lorc', async () => {
		// const options = ['Symfony', 'Doctrine', 'Symfony Exe'].map(label => ({ label }));
		const options = [
			{ label: 'Symfony.exe', detail: 'Executable Symhony' },
			{ label: 'Symfony', detail: 'Symfony commands' },
			{ label: 'Composer', detail: 'Composer commands' },
			{ label: 'Bundle Symfony', detail: 'recurent symfony bundle' }
		];

		// create first pick (menu)
		const quickPick = window.createQuickPick();
		quickPick.items = options;
		quickPick.title = 'List of recurrent command';

		// on selected item
		quickPick.onDidChangeSelection((secondPickOptions) => {

			// create second pick
			const quickPickCommand = window.createQuickPick();
			let operateur = '';

			// select items to constitute second picks and an operateur before command
			switch (secondPickOptions[0].label) {
				case 'Symfony.exe': {
					quickPickCommand.items = symfonyExeCommandList;
					operateur = "symfony";
					break;
				}
				case "Symfony": {
					quickPickCommand.items = symfonyCommandList;
					operateur = "php bin/console";
					break;
				}
				case "Composer": {
					quickPickCommand.items = composerCommandList;
					operateur = "composer";
					break;
				}
				case "Bundle Symfony": {
					quickPickCommand.items = bundleCommandList;
					operateur = "composer req";
					break;
				}
			}

			quickPickCommand.title = '' + secondPickOptions[0].label;
			quickPickCommand.show();

			// on select items in second pick
			quickPickCommand.onDidChangeSelection((item) => {
				if (ensureTerminalExists()) {
					let cmd = operateur + ' ' + item[0].label;
					let terminals = window.terminals;

					if(terminals.length > 1) {
						selectTerminal().then(terminal => {
							if (terminal) {
								terminal.sendText(cmd);
							}
						});
					} else {
						if (terminals[0]) {
							terminals[0].sendText(cmd);
						} else {
							window.showErrorMessage('No active terminal');
						}
					}
				}

				quickPickCommand.hide();
			});
		});
		quickPick.show();
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate () { }

/**
 * Set terminal by is name
 */
function selectTerminal (): Thenable<Terminal | undefined> {
	interface TerminalQuickPickItem extends QuickPickItem {
		terminal: Terminal;
	}
	const terminals = <Terminal[]>(<any>window).terminals;
	const items: TerminalQuickPickItem[] = terminals.map(t => {
		return {
			label: `Terminal to use: ${t.name}`,
			terminal: t
		};
	});
	return window.showQuickPick(items).then(item => {
		return item ? item.terminal : undefined;
	});
}

function ensureTerminalExists (): boolean {
	if ((<any>window).terminals.length === 0) {
		window.showInformationMessage('New terminal create');
		const terminal = window.createTerminal('Lorc');
		terminal.show();
	}
	return true;
}