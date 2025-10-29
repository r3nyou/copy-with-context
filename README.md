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

## 開發與打包

> ⚠️ 重要提示：開發和測試擴展時，請使用 **VS Code** 而不是 Cursor。Cursor 的 Extension Development Host 可能存在相容性問題。開發流程建議：在 Cursor 中編輯程式碼 → 在 VS Code 中調試測試 → 打包後再安裝到 Cursor 使用。

### 編譯擴展

```bash
# 安裝依賴
yarn install

# 編譯
yarn compile

# 或使用 watch 模式（開發時）
yarn watch
```

### 開發調試

1. 在 VS Code 中打開專案：

   ```bash
   code /path/to/copy-with-context
   ```

2. 按 `F5` 啟動 Extension Development Host

3. 在彈出的測試視窗中測試擴展功能

4. 修改程式碼後，在測試視窗中按 `Cmd+R`（Mac）或 `Ctrl+R`（Windows/Linux）重新載入

### 打包成 .vsix 文件

```bash
# 確保已安裝 vsce
npm install -g @vscode/vsce

# 打包（會在項目根目錄生成 .vsix 文件）
vsce package --allow-missing-repository
```

打包後會生成 `copy-with-context-0.0.1.vsix` 文件。

## 安裝方式

1. 打開 VS Code 或 Cursor
2. 按 `Cmd+Shift+P`（Mac）或 `Ctrl+Shift+P`（Windows/Linux）
3. 輸入並選擇：`Extensions: Install from VSIX...`
4. 選擇 `copy-with-context-0.0.1.vsix` 文件
5. 重新載入視窗

### 驗證安裝

安裝後，您可以：

- 在擴展面板中搜尋 "Copy with Context" 確認已安裝
- 按 `Cmd+Shift+P` 輸入 "Copy with Context" 測試命令是否可用

## License

MIT
