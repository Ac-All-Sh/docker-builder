<div align="center">

# Docker Builder

**Auto Build Multi-Architecture Docker Images**

[![GitHub stars](https://img.shields.io/github/stars/Ac-All-Sh/docker-builder.svg)](https://github.com/Ac-All-Sh/docker-builder/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/Ac-All-Sh/docker-builder.svg)](https://github.com/Ac-All-Sh/docker-builder/issues)

**[Documentation](https://ac-all-sh.github.io/docker-builder/doc.html)**

</div>

---

## Overview

Docker Builder is a web-based tool for automatically building multi-architecture Docker images using GitHub Actions.

## Quick Start

1. Configure Docker Hub secrets: `DOCKERHUB_USER` and `DOCKERHUB_TOKEN`
2. Visit https://ac-all-sh.github.io/docker-builder/
3. Enter source image, output image name, and select architectures
4. Click "Build Image"
5. Build artifacts will be saved to GitHub Releases

## API

Trigger builds via GitHub Actions:

```bash
gh workflow run build.yml \
  -f image_source=nginx \
  -f image_name=yourusername/nginx \
  -f image_tag=latest \
  -f architectures=amd64,arm64
```

### Parameters

| Parameter | Description | Required |
|-----------|-------------|----------|
| `image_source` | Source image name | Yes |
| `image_name` | Output image name | Yes |
| `image_tag` | Image tag (default: latest) | No |
| `architectures` | Target architectures (comma separated) | Yes |

### Supported Architectures

- `amd64` - x86_64
- `arm64` - 64-bit ARM
- `arm` - 32-bit ARM (v7)

## Author

**Ac.All.Sh** - [GitHub](https://github.com/Ac-All-Sh) | WeChat: @attychen
