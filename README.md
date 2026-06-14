<div align="center">

# Docker Builder

**Auto Build Multi-Architecture Docker Images**

[![GitHub stars](https://img.shields.io/github/stars/Ac-All-Sh/docker-builder.svg)](https://github.com/Ac-All-Sh/docker-builder/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/Ac-All-Sh/docker-builder.svg)](https://github.com/Ac-All-Sh/docker-builder/issues)
![GitHub last commit](https://img.shields.io/github/last-commit/Ac-All-Sh/docker-builder.svg)

**[English](#english) | [中文](#chinese)**

</div>

---

<a id="english"></a>

## English Documentation

### Features

- **Multi-Architecture Support**: Build images for amd64, arm64, and arm
- **One-Click Build**: Simple web interface for building Docker images
- **GitHub Actions**: Automated build pipeline using GitHub Actions
- **Docker Hub Integration**: Push images directly to Docker Hub

### How It Works

1. Enter the source image name (e.g., `nginx`, `ubuntu`, `redis`)
2. Enter your Docker Hub image name (e.g., `yourusername/myapp`)
3. Select target architectures
4. Click "Build Image"
5. Wait for the build to complete

### Setup

1. Fork this repository
2. Go to Settings > Secrets and variables > Actions
3. Add the following secrets:
   - `DOCKERHUB_USERNAME`: Your Docker Hub username
   - `DOCKERHUB_TOKEN`: Your Docker Hub access token

### Usage

#### Web Interface

Visit the GitHub Pages site to use the web interface:
```
https://ac-all-sh.github.io/docker-builder/
```

#### GitHub Actions

You can also trigger builds manually:

```bash
gh workflow run build.yml \
  -f image_source=nginx \
  -f image_name=yourusername/nginx \
  -f image_tag=latest \
  -f architectures=amd64,arm64
```

### Supported Architectures

| Architecture | Platform | Description |
|-------------|----------|-------------|
| amd64 | linux/amd64 | x86_64 |
| arm64 | linux/arm64 | 64-bit ARM |
| arm | linux/arm/v7 | 32-bit ARM |

### Author

**Ac.All.Sh** - [GitHub](https://github.com/Ac-All-Sh) | WeChat: @attychen

---

<a id="chinese"></a>

## 中文文档

### 功能特性

- **多架构支持**: 支持 amd64、arm64 和 arm 架构
- **一键构建**: 简单的 Web 界面构建 Docker 镜像
- **GitHub Actions**: 使用 GitHub Actions 自动化构建
- **Docker Hub 集成**: 直接推送到 Docker Hub

### 工作原理

1. 输入源镜像名称 (例如: `nginx`, `ubuntu`, `redis`)
2. 输入你的 Docker Hub 镜像名称 (例如: `yourusername/myapp`)
3. 选择目标架构
4. 点击 "Build Image"
5. 等待构建完成

### 配置

1. Fork 此仓库
2. 进入 Settings > Secrets and variables > Actions
3. 添加以下 Secrets:
   - `DOCKERHUB_USERNAME`: 你的 Docker Hub 用户名
   - `DOCKERHUB_TOKEN`: 你的 Docker Hub Access Token

### 使用方法

#### Web 界面

访问 GitHub Pages 站点使用 Web 界面:
```
https://ac-all-sh.github.io/docker-builder/
```

#### GitHub Actions

也可以手动触发构建:

```bash
gh workflow run build.yml \
  -f image_source=nginx \
  -f image_name=yourusername/nginx \
  -f image_tag=latest \
  -f architectures=amd64,arm64
```

### 支持的架构

| 架构 | 平台 | 描述 |
|------|------|------|
| amd64 | linux/amd64 | x86_64 |
| arm64 | linux/arm64 | 64位 ARM |
| arm | linux/arm/v7 | 32位 ARM |

### 作者

**Ac.All.Sh** - [GitHub](https://github.com/Ac-All-Sh) | 微信: @attychen
