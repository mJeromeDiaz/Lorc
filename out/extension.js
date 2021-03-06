"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = require("vscode");
const symfonyExeCommandList = require("./symfonyExeCommandList.json");
const symfonyCommandList = require("./symfonyCommandList.json");
const composerCommandList = require("./composerCommandList.json");
const bundleCommandList = require("./bundleCommandList.json");
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    // console.log('Congratulations, your extension "Loc" is now active!');
    let disposable = vscode_1.commands.registerCommand('extension.lorc', () => __awaiter(this, void 0, void 0, function* () {
        // const options = ['Symfony', 'Doctrine', 'Symfony Exe'].map(label => ({ label }));
        const options = [
            { label: 'Symfony.exe', detail: 'Executable Symhony' },
            { label: 'Symfony', detail: 'Symfony commands' },
            { label: 'Composer', detail: 'Composer commands' },
            { label: 'Bundle Symfony', detail: 'recurent symfony bundle' }
        ];
        // create first pick (menu)
        const quickPick = vscode_1.window.createQuickPick();
        quickPick.items = options;
        quickPick.title = 'List of recurrent command';
        // on selected item
        quickPick.onDidChangeSelection((secondPickOptions) => {
            // create second pick
            const quickPickCommand = vscode_1.window.createQuickPick();
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
                    let terminals = vscode_1.window.terminals;
                    if (terminals.length > 1) {
                        selectTerminal().then(terminal => {
                            if (terminal) {
                                terminal.sendText(cmd);
                            }
                        });
                    }
                    else {
                        if (terminals[0]) {
                            terminals[0].sendText(cmd);
                        }
                        else {
                            vscode_1.window.showErrorMessage('No active terminal');
                        }
                    }
                }
                quickPickCommand.hide();
            });
        });
        quickPick.show();
    }));
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
/**
 * Set terminal by is name
 */
function selectTerminal() {
    const terminals = vscode_1.window.terminals;
    const items = terminals.map(t => {
        return {
            label: `Terminal to use: ${t.name}`,
            terminal: t
        };
    });
    return vscode_1.window.showQuickPick(items).then(item => {
        return item ? item.terminal : undefined;
    });
}
function ensureTerminalExists() {
    if (vscode_1.window.terminals.length === 0) {
        vscode_1.window.showInformationMessage('New terminal create');
        const terminal = vscode_1.window.createTerminal('Lorc');
        terminal.show();
    }
    return true;
}
//# sourceMappingURL=extension.js.map