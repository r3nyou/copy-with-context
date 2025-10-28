// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

/**
 * Get language identifier for code fence based on file extension
 */
function getLanguageIdentifier(uri: vscode.Uri, languageId: string): string {
	const fileName = uri.fsPath;
	const ext = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
	
	// Map common extensions to language identifiers
	const extensionMap: { [key: string]: string } = {
		'ts': 'typescript',
		'tsx': 'tsx',
		'js': 'javascript',
		'jsx': 'jsx',
		'py': 'python',
		'rb': 'ruby',
		'go': 'go',
		'rs': 'rust',
		'java': 'java',
		'c': 'c',
		'cpp': 'cpp',
		'cc': 'cpp',
		'cxx': 'cpp',
		'h': 'c',
		'hpp': 'cpp',
		'cs': 'csharp',
		'php': 'php',
		'swift': 'swift',
		'kt': 'kotlin',
		'scala': 'scala',
		'sh': 'bash',
		'bash': 'bash',
		'zsh': 'zsh',
		'fish': 'fish',
		'ps1': 'powershell',
		'r': 'r',
		'sql': 'sql',
		'html': 'html',
		'css': 'css',
		'scss': 'scss',
		'sass': 'sass',
		'less': 'less',
		'json': 'json',
		'xml': 'xml',
		'yaml': 'yaml',
		'yml': 'yaml',
		'toml': 'toml',
		'md': 'markdown',
		'tex': 'latex',
		'vue': 'vue',
		'svelte': 'svelte'
	};
	
	// Try extension map first, fallback to VS Code's language ID
	return extensionMap[ext] || languageId || '';
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Extension "copy-with-context" is now active!');

	const disposable = vscode.commands.registerCommand('copy-with-context.copyWithContext', async () => {
		const editor = vscode.window.activeTextEditor;
		
		if (!editor) {
			vscode.window.showErrorMessage('No active editor found');
			return;
		}

		const selection = editor.selection;
		if (selection.isEmpty) {
			vscode.window.showWarningMessage('Please select some code to copy');
			return;
		}

		// Get selected text (preserves all formatting, indentation, and whitespace)
		const selectedText = editor.document.getText(selection);
		
		// Get file path (relative to workspace if possible)
		const filePath = vscode.workspace.asRelativePath(editor.document.uri);
		
		// Get line numbers (1-indexed for display)
		const startLine = selection.start.line + 1;
		const endLine = selection.end.line + 1;
		
		// Get language identifier for syntax highlighting
		const language = getLanguageIdentifier(editor.document.uri, editor.document.languageId);
		
		// Format line range display
		const lineRange = startLine === endLine 
			? `line ${startLine}` 
			: `lines ${startLine}-${endLine}`;
		
		// Format output: path with line range, then code fence with language
		const formattedOutput = `${filePath} (${lineRange})\n\n\`\`\`${language}\n${selectedText}\n\`\`\``;
		
		// Copy to clipboard
		await vscode.env.clipboard.writeText(formattedOutput);
		
		// Show success message
		const lineCount = endLine - startLine + 1;
		vscode.window.showInformationMessage(`Copied ${lineCount} line${lineCount > 1 ? 's' : ''} with context`);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
