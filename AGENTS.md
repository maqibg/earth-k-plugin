# Repository Guidelines

## 项目结构与模块组织
- 入口：`main.js`（设定指令前缀）、`index.js`（动态加载 `apps/*.js`）。
- 功能模块：`apps/` 每个文件为一类指令（如 `Help.js`）。
- 公共组件：`components/`（`Cfg`/`Data`/`Common`/`Version`）。
- 配置：`config/`（如 `config.yaml`、`help_default.js`）。
- 静态资源与模板：`resources/`。
- 其他：`guoba.support.js`（果聊锅巴支持）、`defSet/`、`tools/`。

## 构建、测试与本地运行
- 安装依赖：`pnpm i` 或 `npm i`。
- 依赖缺失提示（如 `image-size`）：`pnpm add image-size -w`。
- 部署到云崽：放到 `Yunzai-Bot/plugins/earth-k-plugin`，重启云崽。
- 运行验证：在聊天发送 `#土块帮助`、`#土块版本`。
- FFmpeg 检查（点歌/语音相关）：`ffmpeg -version`。

## 代码风格与命名规范
- 语言与模块：ESM（`import/export`），Node 16+ 建议。
- 缩进与格式：2 空格；尽量保持现有“少分号”风格。
- 命名：
  - 文件：功能类使用大驼峰（如 `GuessGenshin.js`），工具/库用小驼峰。
  - 变量/函数：小驼峰；常量全大写。
- 资源路径：仅读写 `plugins/earth-k-plugin/` 下数据；配置通过 `components/Data.js` 工具访问。

## 测试规范
- 当前无单测脚本；采用手动回归：常用指令如 `#土块帮助`、`#猜语音`、`#点歌`。
- 新增功能需覆盖典型输入/异常输入；在小群灰度后再放量。
- 若引入持久化，使用 `redis` 缓存读写的键需加前缀：`earth-k:*`。

## 提交与 Pull Request
- 提交信息：推荐 Conventional Commits，例如：
  - `feat: 新增你画我猜提示优化`
  - `fix: 修复 GuessGenshin 图片越界`
  - `chore: 升级 systeminformation 到 ^5.21.18`
- PR 要求：
  - 清晰描述目的、变更点与影响范围；关联 Issue（如有）。
  - 提供复现与测试步骤、必要截图或日志。
  - 不提交生成产物、私钥与个人配置。

## 安全与配置提示（可选）
- FFmpeg 环境变量必配，否则点歌/语音功能不可用。
- 自定义帮助：复制 `config/help_default.js` 为 `config/help.js` 再修改；勿改 `config/system/*`。
- 敏感密钥请用环境变量或本地未跟踪文件，不要入库。

