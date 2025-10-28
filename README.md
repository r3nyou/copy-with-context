# Copy with Context

複製程式碼時自動包含檔案路徑和行號。

## 功能

選擇程式碼後，使用此擴展複製，會自動包含：

- 檔案路徑（相對於工作區）
- 行號範圍
- 語法高亮標記

## 使用方式

1. 選擇任意程式碼
2. 使用以下任一方式複製：
   - 按快捷鍵：`Cmd+Shift+C` (Mac) 或 `Ctrl+Shift+C` (Windows/Linux)
   - 右鍵選單：選擇 "Copy with Context"
   - 命令面板：`Cmd+Shift+P` 輸入 "Copy with Context"

## 輸出格式

````
src/extension.ts (lines 10-15)

​```typescript
export function activate(context: vscode.ExtensionContext) {
    console.log('Extension activated!');
}
​```
````

## 支援的語言

自動檢測並添加正確的語言標記，支援包括：

- TypeScript/JavaScript (ts, tsx, js, jsx)
- Python, Ruby, Go, Rust, Java, C/C++
- HTML, CSS, SCSS, Vue, Svelte
- JSON, YAML, XML, Markdown
- 以及更多...

## License

MIT
