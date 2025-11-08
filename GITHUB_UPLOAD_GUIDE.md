# GitHub 上传指南（图形界面版）

## 🎯 方法一：使用 Cursor/VS Code 内置 Git 功能（推荐）

### 步骤 1: 在 GitHub 上创建新仓库

1. 登录你的 GitHub 账号：https://github.com
2. 点击右上角的 **"+"** 按钮，选择 **"New repository"**
3. 填写仓库信息：
   - **Repository name**: `personal-blog` (或你喜欢的名字)
   - **Description**: 个人博客系统
   - **Visibility**: 选择 Public（公开）或 Private（私有）
   - **⚠️ 重要**: 不要勾选 "Initialize this repository with a README"（因为我们已经有代码了）
4. 点击 **"Create repository"** 创建仓库
5. **复制仓库的 HTTPS 地址**（例如：`https://github.com/你的用户名/personal-blog.git`）

### 步骤 2: 在 Cursor 中连接远程仓库

1. 在 Cursor 中，点击左侧边栏的 **源代码管理图标**（Source Control，看起来像分支的图标）或按 `Ctrl+Shift+G`
2. 点击右上角的 **"..."** 菜单（三个点）
3. 选择 **"Remote"** → **"Add Remote..."**
4. 输入远程仓库名称：`origin`（直接回车使用默认值）
5. 粘贴你刚才复制的 GitHub 仓库地址（HTTPS 地址）
6. 按回车确认

### 步骤 3: 推送代码到 GitHub

1. 在源代码管理面板中，点击右上角的 **"..."** 菜单
2. 选择 **"Push"** → **"Push to..."**
3. 选择 `origin` 作为远程仓库
4. 如果提示选择分支，选择 `main`（如果没有，可能需要先重命名分支）
5. 如果提示登录，输入你的 GitHub 用户名和密码（或 Personal Access Token）

**如果分支名称是 master 而不是 main：**
- 点击左下角的分支名称（显示 "master"）
- 选择 "Rename Branch..."
- 输入 `main` 并确认

---

## 🖥️ 方法二：使用 GitHub Desktop（最简单）

### 安装 GitHub Desktop

1. 下载 GitHub Desktop：https://desktop.github.com/
2. 安装并登录你的 GitHub 账号

### 使用 GitHub Desktop 上传

1. **在 GitHub 上创建新仓库**（参考方法一的步骤1）
2. 打开 GitHub Desktop
3. 点击 **"File"** → **"Add Local Repository"**
4. 点击 **"Choose..."** 按钮
5. 选择你的项目文件夹：`G:\OneDrive\Desktop\cursor\personal blog1`
6. 点击 **"Add Repository"**
7. 在 GitHub Desktop 中，点击右上角的 **"Publish repository"** 按钮
8. 填写信息：
   - **Name**: 你的仓库名（例如：`personal-blog`）
   - **Description**: 个人博客系统
   - **Keep this code private**: 根据需要勾选
9. 点击 **"Publish Repository"**
10. 完成！代码会自动上传到 GitHub

---

## 📝 后续更新代码（GUI方式）

### 使用 Cursor/VS Code：

1. 修改代码后，在源代码管理面板中会看到修改的文件
2. 点击文件旁边的 **"+"** 号添加到暂存区（或点击 "Stage All Changes"）
3. 在上方的输入框输入提交信息（例如："更新首页样式"）
4. 点击 **"✓"** 按钮提交（或按 `Ctrl+Enter`）
5. 点击 **"..."** 菜单 → **"Push"** 推送到 GitHub

### 使用 GitHub Desktop：

1. 修改代码后，GitHub Desktop 会自动检测到更改
2. 在左下角输入提交信息
3. 点击 **"Commit to main"** 按钮
4. 点击顶部的 **"Push origin"** 按钮

---

## 💻 方法三：使用命令行（备选方案）

如果你以后想尝试命令行方式，可以使用以下命令：

```bash
# ⚠️ 重要：将下面的 yourusername 替换为你的 GitHub 用户名，personal-blog 替换为你的仓库名
# 添加远程仓库
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 将分支重命名为 main（如果已经是 main 可以跳过）
git branch -M main

# 推送代码到GitHub
git push -u origin main
```

**示例：**
如果你的 GitHub 用户名是 `zhangsan`，仓库名是 `my-blog`，那么命令应该是：
```bash
git remote add origin https://github.com/zhangsan/my-blog.git
```

---

## ❓ 常见问题

### 1. 如果提示需要认证
- **使用 Personal Access Token 代替密码**
- 生成Token步骤：
  1. GitHub → 右上角头像 → **Settings**
  2. 左侧菜单 → **Developer settings**
  3. **Personal access tokens** → **Tokens (classic)**
  4. 点击 **"Generate new token (classic)"**
  5. 勾选 `repo` 权限
  6. 生成后复制Token（只显示一次，请保存好）
  7. 推送时，用户名输入你的GitHub用户名，密码输入Token

### 2. 在 Cursor 中找不到源代码管理面板？
- 按 `Ctrl+Shift+G` 打开源代码管理面板
- 或者点击左侧边栏最下方的图标（分支图标）

### 3. 如果远程仓库已存在内容
如果GitHub仓库已经有README等文件：
- 在 Cursor 中：点击 **"..."** → **"Pull, Push"** → **"Pull from..."** → 选择 `origin/main`
- 解决可能的冲突后，再推送

### 4. 如何查看是否已连接远程仓库？
- 在 Cursor 中：点击 **"..."** → **"Remote"** → **"Show Remote"**
- 会显示当前连接的远程仓库地址
- 或在终端运行：`git remote -v`

### 5. 如果远程仓库地址错误（包含 yourusername 占位符）
如果看到错误信息提示连接失败，或者远程地址是 `https://github.com/yourusername/...`：

**在 Cursor 中修复：**
1. 点击 **"..."** → **"Remote"** → **"Remove Remote..."**
2. 选择 `origin` 并删除
3. 重新添加正确的远程仓库（参考步骤2）

**使用命令行修复：**
```bash
# 删除错误的远程仓库
git remote remove origin

# 添加正确的远程仓库（替换为你的真实地址）
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 验证地址是否正确
git remote -v
```

### 6. SSH vs HTTPS 连接方式

**✅ 当前状态：SSH 已成功配置！**

你的仓库已配置为使用 SSH 连接（`git@github.com:langzi-666/personal-blog.git`），并且 SSH 密钥已成功添加到 GitHub。现在可以直接使用 `git push` 推送代码，无需输入密码。

**如果遇到 "Permission denied (publickey)" 错误：**

这通常是因为远程仓库使用了 SSH 连接（`git@github.com:...`），但你的电脑没有配置 SSH 密钥。

**推荐解决方案：使用 HTTPS 连接（更简单）**

**使用命令行切换：**
```bash
# 查看当前远程仓库地址
git remote -v

# 如果显示 git@github.com:...，切换为 HTTPS
git remote set-url origin https://github.com/你的用户名/你的仓库名.git

# 验证是否切换成功
git remote -v
```

**两种连接方式的区别：**
- **HTTPS** (`https://github.com/...`)：需要用户名和 Personal Access Token，配置简单，推荐新手使用
- **SSH** (`git@github.com:...`)：需要配置 SSH 密钥，更安全但配置较复杂，配置后无需每次输入密码

**建议：** 如果没有特殊需求，使用 HTTPS 连接即可。如果已配置 SSH（如当前状态），SSH 连接更方便。

---

## ✅ 快速检查清单

### 使用 Cursor/VS Code：
- [ ] 在GitHub上创建了新仓库
- [ ] 复制了仓库的HTTPS地址
- [ ] 在Cursor中添加了远程仓库（origin）
- [ ] 推送了代码到GitHub
- [ ] 在GitHub网页上看到了你的代码

### 使用 GitHub Desktop：
- [ ] 下载并安装了GitHub Desktop
- [ ] 登录了GitHub账号
- [ ] 添加了本地仓库
- [ ] 发布了仓库到GitHub
- [ ] 在GitHub网页上看到了你的代码

---

## 🎉 完成！

完成这些步骤后，你的代码就会出现在GitHub上了！

**推荐使用方式：**
- 🥇 **GitHub Desktop** - 最简单，适合初学者
- 🥈 **Cursor/VS Code 内置功能** - 方便，不需要额外软件
- 🥉 **命令行** - 适合有经验的开发者

