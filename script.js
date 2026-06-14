// Language translations
const translations = {
    zh: {
        subtitle: '自动构建多架构 Docker 镜像',
        source_label: '源镜像',
        source_hint: '输入 Docker Hub 镜像名称或完整镜像地址',
        name_label: '输出镜像名称',
        name_hint: '你的 Docker Hub 用户名 / 镜像名',
        tag_label: '镜像标签',
        tag_hint: '留空则使用 "latest"',
        arch_label: '目标架构',
        arch_hint: '选择一个或多个架构',
        build_btn: '开始构建',
        status_building: '正在构建...',
        status_preparing: '准备构建环境',
        log_waiting: '等待开始...',
        result_title: '构建完成!',
        result_message: '镜像已推送到 Docker Hub',
        build_another: '构建其他镜像',
        tab_news: '技术资讯',
        tab_game: '小游戏',
        tab_animation: '动画',
        news_title: '技术资讯',
        news_loading: '加载中...',
        news_refresh: '刷新',
        news_more: '查看更多',
        game_title: '贪吃蛇',
        game_score: '得分: 0',
        game_start: '开始游戏',
        game_hint: '使用方向键或 WASD 控制',
        animation_text: '构建进行中，请稍候...',
        history_btn: '构建历史',
        history_title: '构建历史',
        history_loading: '加载构建历史...',
        history_name: '镜像名称',
        history_tag: '标签',
        history_status: '状态',
        history_date: '时间',
        history_action: '操作',
        history_empty: '暂无构建记录',
        api_notice: '注意：要使用自动构建功能，需要配置具有 repo 权限的 GitHub Token。没有 Token 时，构建将通过手动触发。',
        token_label: 'GitHub Token（可选）',
        token_hint: '用于自动构建。从 GitHub Settings → Developer settings → Personal access tokens 获取',
        token_saved: 'Token 已保存',
        token_empty: '未配置 Token，需手动触发构建',
        footer: '作者: <a href="https://github.com/Ac-All-Sh">Ac.All.Sh</a> | Powered by GitHub Actions'
    },
    en: {
        subtitle: 'Auto Build Multi-Architecture Docker Images',
        source_label: 'Source Image',
        source_hint: 'Enter Docker Hub image name or full image URL',
        name_label: 'Output Image Name',
        name_hint: 'Your Docker Hub username / image name',
        tag_label: 'Image Tag',
        tag_hint: 'Leave empty to use "latest"',
        arch_label: 'Target Architectures',
        arch_hint: 'Select one or more architectures',
        build_btn: 'Build Image',
        status_building: 'Building Image...',
        status_preparing: 'Preparing build environment',
        log_waiting: 'Waiting to start...',
        result_title: 'Build Complete!',
        result_message: 'Your image has been pushed to Docker Hub',
        build_another: 'Build Another Image',
        tab_news: 'Tech News',
        tab_game: 'Mini Game',
        tab_animation: 'Animation',
        news_title: 'Tech News',
        news_loading: 'Loading news...',
        news_refresh: 'Refresh',
        news_more: 'View More',
        game_title: 'Snake Game',
        game_score: 'Score: 0',
        game_start: 'Start Game',
        game_hint: 'Use arrow keys or WASD to play',
        animation_text: 'Building in progress, please wait...',
        history_btn: 'Build History',
        history_title: 'Build History',
        history_loading: 'Loading build history...',
        history_name: 'Image Name',
        history_tag: 'Tag',
        history_status: 'Status',
        history_date: 'Date',
        history_action: 'Action',
        history_empty: 'No build history found',
        api_notice: 'Note: To use automatic builds, you need to configure a GitHub Token with repo scope. Without a token, builds will be triggered manually.',
        token_label: 'GitHub Token (Optional)',
        token_hint: 'For automatic builds. Get from GitHub Settings → Developer settings → Personal access tokens',
        token_saved: 'Token saved',
        token_empty: 'No token configured, manual trigger required',
        footer: 'Author: <a href="https://github.com/Ac-All-Sh">Ac.All.Sh</a> | Powered by GitHub Actions'
    }
};

// AI News data with links
const aiNews = {
    zh: [
        { tag: 'AI', title: 'GPT-5 发布，推理能力大幅提升', content: 'OpenAI 宣布 GPT-5，在逻辑推理和代码生成方面有显著改进。', link: 'https://openai.com' },
        { tag: 'Docker', title: 'Docker Desktop 4.25 发布', content: '新功能包括改进的大型容器镜像性能和更好的 Kubernetes 集成。', link: 'https://www.docker.com/blog/' },
        { tag: 'Cloud', title: 'AWS Lambda 新增 ARM64 支持', content: 'AWS Lambda 现在支持 ARM64 架构，提供更好的性价比。', link: 'https://aws.amazon.com/blogs/aws/' },
        { tag: 'Security', title: 'OpenSSL 发现严重漏洞', content: '新 CVE-2024-XXXX 影响 OpenSSL 3.x，用户需立即更新。', link: 'https://www.openssl.org/' },
        { tag: 'DevOps', title: 'GitHub Actions 改进缓存', content: '新的缓存策略使 CI/CD 管道构建时间减少高达 40%。', link: 'https://github.blog/' },
        { tag: 'Kubernetes', title: 'K8s 1.29 发布', content: 'Kubernetes 1.29 引入了改进集群管理和安全性的新功能。', link: 'https://kubernetes.io/blog/' },
        { tag: 'AI', title: 'Google Gemini Ultra 超越 GPT-4', content: 'Google 声称 Gemini Ultra 在多个基准测试中达到最先进水平。', link: 'https://blog.google/' },
        { tag: 'Linux', title: 'Linux 内核 6.8 发布', content: '新内核版本包含改进的硬件支持和性能优化。', link: 'https://www.kernel.org/' },
        { tag: 'Security', title: '勒索软件攻击瞄准 Docker 仓库', content: '多个 Docker Hub 账户被入侵，建议用户启用双因素认证。', link: 'https://hub.docker.com/' },
        { tag: 'DevOps', title: 'Terraform 1.7 引入无 Provider 状态', content: '新功能允许在不需要 Provider 插件的情况下管理资源。', link: 'https://www.terraform.io/blog' },
        { tag: 'Containers', title: 'Podman 5.0 发布', content: 'Podman 5.0 带来了性能改进和新的 rootless 容器功能。', link: 'https://podman.io/' },
        { tag: 'Networking', title: 'Cilium 1.15 发布', content: '新的 eBPF 网络功能提升了 Kubernetes 集群的网络性能。', link: 'https://cilium.io/' },
        { tag: 'Security', title: 'SLSA 1.0 供应链安全标准', content: 'Google 发布 SLSA 1.0 标准，提升软件供应链安全性。', link: 'https://slsa.dev/' },
        { tag: 'AI', title: 'Meta 发布 Llama 3', content: 'Meta 发布开源大语言模型 Llama 3，性能媲美闭源模型。', link: 'https://ai.meta.com/' },
        { tag: 'Cloud', title: 'Cloud Native Computing Foundation 年度报告', content: 'CNCF 发布年度报告，云原生技术采用率持续增长。', link: 'https://www.cncf.io/' }
    ],
    en: [
        { tag: 'AI', title: 'GPT-5 Released with Enhanced Reasoning', content: 'OpenAI announces GPT-5 with significant improvements in logical reasoning and code generation.', link: 'https://openai.com' },
        { tag: 'Docker', title: 'Docker Desktop 4.25 Released', content: 'New features include improved performance for large container images and better Kubernetes integration.', link: 'https://www.docker.com/blog/' },
        { tag: 'Cloud', title: 'AWS Lambda Adds ARM64 Support', content: 'AWS Lambda now supports ARM64 architecture for better price-performance ratio.', link: 'https://aws.amazon.com/blogs/aws/' },
        { tag: 'Security', title: 'Critical Vulnerability Found in OpenSSL', content: 'New CVE-2024-XXXX affects OpenSSL 3.x, users urged to update immediately.', link: 'https://www.openssl.org/' },
        { tag: 'DevOps', title: 'GitHub Actions Improves Caching', content: 'New caching strategies reduce build times by up to 40% for CI/CD pipelines.', link: 'https://github.blog/' },
        { tag: 'Kubernetes', title: 'K8s 1.29 Released', content: 'Kubernetes 1.29 introduces new features for improved cluster management and security.', link: 'https://kubernetes.io/blog/' },
        { tag: 'AI', title: 'Google Gemini Ultra Outperforms GPT-4', content: 'Google claims Gemini Ultra achieves state-of-the-art results on multiple benchmarks.', link: 'https://blog.google/' },
        { tag: 'Linux', title: 'Linux Kernel 6.8 Released', content: 'New kernel version includes improved hardware support and performance optimizations.', link: 'https://www.kernel.org/' },
        { tag: 'Security', title: 'Ransomware Attack Targets Docker Registries', content: 'Multiple Docker Hub accounts compromised, users advised to enable 2FA.', link: 'https://hub.docker.com/' },
        { tag: 'DevOps', title: 'Terraform 1.7 Introduces Provider-Less State', content: 'New feature allows managing resources without requiring provider plugins.', link: 'https://www.terraform.io/blog' },
        { tag: 'Containers', title: 'Podman 5.0 Released', content: 'Podman 5.0 brings performance improvements and new rootless container features.', link: 'https://podman.io/' },
        { tag: 'Networking', title: 'Cilium 1.15 Released', content: 'New eBPF networking features enhance Kubernetes cluster network performance.', link: 'https://cilium.io/' },
        { tag: 'Security', title: 'SLSA 1.0 Supply Chain Security Standard', content: 'Google releases SLSA 1.0 standard to improve software supply chain security.', link: 'https://slsa.dev/' },
        { tag: 'AI', title: 'Meta Releases Llama 3', content: 'Meta releases open-source large language model Llama 3, rivaling closed-source models.', link: 'https://ai.meta.com/' },
        { tag: 'Cloud', title: 'CNCF Annual Report', content: 'CNCF releases annual report showing continued growth in cloud-native technology adoption.', link: 'https://www.cncf.io/' }
    ]
};

let currentLang = localStorage.getItem('docker-builder-lang') || 'zh';
let buildInProgress = false;
let githubToken = localStorage.getItem('docker-builder-token') || '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language button state
    document.getElementById('langToggle').textContent = currentLang === 'zh' ? 'EN' : '中文';
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    updateLanguage();
    loadNews();
    initGame();

    // Hide entertainment section initially
    document.querySelector('.entertainment-section').classList.add('hidden');

    // Initialize token input
    const tokenInput = document.getElementById('githubToken');
    if (githubToken) {
        tokenInput.value = githubToken;
        updateTokenStatus(true);
    }

    // Save token on input
    tokenInput.addEventListener('input', (e) => {
        const token = e.target.value.trim();
        if (token) {
            githubToken = token;
            localStorage.setItem('docker-builder-token', token);
            updateTokenStatus(true);
        } else {
            githubToken = '';
            localStorage.removeItem('docker-builder-token');
            updateTokenStatus(false);
        }
    });
});

// Update token status display
function updateTokenStatus(saved) {
    const statusEl = document.getElementById('tokenStatus');
    if (saved && githubToken) {
        statusEl.textContent = currentLang === 'zh' ? 'Token 已保存' : 'Token saved';
        statusEl.className = 'token-status saved';
    } else {
        statusEl.textContent = currentLang === 'zh' ? '未配置 Token，需手动触发构建' : 'No token configured, manual trigger required';
        statusEl.className = 'token-status empty';
    }
}

// Language toggle
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('docker-builder-lang', currentLang);
    document.getElementById('langToggle').textContent = currentLang === 'zh' ? 'EN' : '中文';
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    updateLanguage();
    loadNews();
}

function updateLanguage() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'P' || el.tagName === 'SPAN' || el.tagName === 'H3') {
                el.textContent = t[key];
            } else if (el.tagName === 'A') {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });
}

// Tab switching
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName + 'Tab').classList.add('active');
    event.target.classList.add('active');
}

// Load AI News
function loadNews() {
    const newsContent = document.getElementById('newsContent');
    const news = aiNews[currentLang];
    const shuffled = [...news].sort(() => Math.random() - 0.5).slice(0, 6);

    newsContent.innerHTML = shuffled.map(n => `
        <div class="news-item">
            <span class="news-tag">${n.tag}</span>
            <h4>${n.title}</h4>
            <p>${n.content}</p>
            <a href="${n.link}" target="_blank" class="news-link">${translations[currentLang].news_more}</a>
        </div>
    `).join('');
}

// Build Docker Image
async function startBuild() {
    if (buildInProgress) return;

    const imageSource = document.getElementById('imageSource').value.trim();
    const imageName = document.getElementById('imageName').value.trim();
    const imageTag = document.getElementById('imageTag').value.trim() || 'latest';
    const archCheckboxes = document.querySelectorAll('input[name="arch"]:checked');
    const architectures = Array.from(archCheckboxes).map(cb => cb.value);

    const t = translations[currentLang];

    if (!imageSource) {
        alert(currentLang === 'zh' ? '请输入源镜像名称' : 'Please enter an image source');
        return;
    }

    if (!imageName) {
        alert(currentLang === 'zh' ? '请输入输出镜像名称' : 'Please enter an image name');
        return;
    }

    if (architectures.length === 0) {
        alert(currentLang === 'zh' ? '请选择至少一个架构' : 'Please select at least one architecture');
        return;
    }

    // Check if source image is architecture-specific
    if (imageSource.includes('_amd64') || imageSource.includes('_arm64') || imageSource.includes('_arm')) {
        const msg = currentLang === 'zh' 
            ? '检测到源镜像是特定架构的镜像。建议只选择对应的架构。\n\n是否继续？'
            : 'Source image appears to be architecture-specific. Consider selecting only the matching architecture.\n\nContinue anyway?';
        if (!confirm(msg)) return;
    }

    buildInProgress = true;

    // Show entertainment section
    document.querySelector('.entertainment-section').classList.remove('hidden');

    document.getElementById('buildStatus').classList.remove('hidden');
    document.getElementById('buildResult').classList.add('hidden');
    document.getElementById('buildBtn').disabled = true;
    document.getElementById('statusText').textContent = t.status_preparing;
    document.getElementById('progressFill').style.width = '10%';
    document.getElementById('progressText').textContent = '10%';

    const logs = document.getElementById('buildLogs');
    logs.innerHTML = `<div class="log-entry">${currentLang === 'zh' ? '正在提交构建任务...' : 'Submitting build task...'}</div>`;

    try {
        // Trigger GitHub Actions workflow
        const workflowRun = await triggerWorkflow(imageSource, imageName, imageTag, architectures);
        
        if (workflowRun) {
            logs.innerHTML += `<div class="log-entry success">${currentLang === 'zh' ? '构建任务已提交!' : 'Build task submitted!'}</div>`;
            logs.innerHTML += `<div class="log-entry">${currentLang === 'zh' ? 'Workflow ID: ' + workflowRun.id : 'Workflow ID: ' + workflowRun.id}</div>`;
            logs.innerHTML += `<div class="log-entry">${currentLang === 'zh' ? '请在 GitHub Actions 查看构建进度' : 'Check GitHub Actions for build progress'}</div>`;
            
            document.getElementById('progressFill').style.width = '100%';
            document.getElementById('progressText').textContent = '100%';
            document.getElementById('statusText').textContent = currentLang === 'zh' ? '构建任务已提交' : 'Build task submitted';

            await sleep(1000);

            document.getElementById('buildStatus').classList.add('hidden');
            document.getElementById('buildResult').classList.remove('hidden');
            document.getElementById('resultMessage').textContent = currentLang === 'zh' 
                ? '构建任务已提交到 GitHub Actions，请稍后查看结果'
                : 'Build task submitted to GitHub Actions, check results later';
            document.getElementById('resultCommands').innerHTML = `
                <code>${currentLang === 'zh' ? '查看构建状态: ' : 'View build: '}<a href="https://github.com/Ac-All-Sh/docker-builder/actions" target="_blank">GitHub Actions</a></code>
            `;
        }
    } catch (error) {
        logs.innerHTML += `<div class="log-entry error">Error: ${error.message}</div>`;
        document.getElementById('statusText').textContent = currentLang === 'zh' ? '提交失败!' : 'Submission failed!';
        document.getElementById('progressFill').style.width = '100%';
        document.getElementById('progressText').textContent = 'Failed';
    }

    document.getElementById('buildBtn').disabled = false;
    buildInProgress = false;
}

// Trigger GitHub Actions workflow via API
async function triggerWorkflow(imageSource, imageName, imageTag, architectures) {
    const url = 'https://api.github.com/repos/Ac-All-Sh/docker-builder/actions/workflows/build.yml/dispatches';
    
    const body = {
        ref: 'main',
        inputs: {
            image_source: imageSource,
            image_name: imageName,
            image_tag: imageTag,
            architectures: architectures.join(',')
        }
    };

    const headers = {
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
    };

    // Use saved token if available
    if (githubToken) {
        headers['Authorization'] = `token ${githubToken}`;
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    });

    if (response.status === 204) {
        return { id: 'triggered-' + Date.now() };
    } else if (response.status === 404) {
        throw new Error(currentLang === 'zh' 
            ? '无法触发工作流。请确保配置了有效的 GitHub Token。' 
            : 'Cannot trigger workflow. Please configure a valid GitHub Token.');
    } else if (response.status === 403) {
        throw new Error(currentLang === 'zh' 
            ? 'Token 权限不足。请确保 Token 具有 repo 和 workflow 权限。' 
            : 'Insufficient token permissions. Ensure token has repo and workflow scope.');
    } else {
        const data = await response.json();
        throw new Error(data.message || 'Failed to trigger workflow');
    }
}

function resetForm() {
    document.getElementById('buildStatus').classList.add('hidden');
    document.getElementById('buildResult').classList.add('hidden');
    document.getElementById('buildLogs').innerHTML = `<div class="log-entry">${translations[currentLang].log_waiting}</div>`;
    // Hide entertainment section
    document.querySelector('.entertainment-section').classList.add('hidden');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// History variables
let historyPage = 1;
const historyPerPage = 10;
let allBuilds = [];

// Show History Modal
async function showHistory() {
    document.getElementById('historyModal').classList.remove('hidden');
    document.getElementById('historyLoading').classList.remove('hidden');
    document.getElementById('historyContent').classList.add('hidden');
    document.getElementById('historyEmpty').classList.add('hidden');

    await loadBuildHistory();
}

// Hide History Modal
function hideHistory() {
    document.getElementById('historyModal').classList.add('hidden');
}

// Load Build History from GitHub API
async function loadBuildHistory() {
    try {
        const response = await fetch('https://api.github.com/repos/Ac-All-Sh/docker-builder/actions/runs?per_page=100&status=completed');
        const data = await response.json();

        if (data.workflow_runs && data.workflow_runs.length > 0) {
            // Only show successful builds
            allBuilds = data.workflow_runs
                .filter(run => run.conclusion === 'success')
                .map(run => ({
                    id: run.id,
                    name: extractImageName(run),
                    tag: extractTag(run),
                    status: run.status,
                    conclusion: run.conclusion,
                    date: new Date(run.created_at).toLocaleString(),
                    url: run.html_url
                }));

            if (allBuilds.length > 0) {
                renderHistoryTable();
                document.getElementById('historyLoading').classList.add('hidden');
                document.getElementById('historyContent').classList.remove('hidden');
            } else {
                document.getElementById('historyLoading').classList.add('hidden');
                document.getElementById('historyEmpty').classList.remove('hidden');
            }
        } else {
            document.getElementById('historyLoading').classList.add('hidden');
            document.getElementById('historyEmpty').classList.remove('hidden');
        }
    } catch (error) {
        console.error('Error loading history:', error);
        document.getElementById('historyLoading').classList.add('hidden');
        document.getElementById('historyEmpty').classList.remove('hidden');
    }
}

// Extract image name from workflow run
function extractImageName(run) {
    const inputs = run.display_title || '';
    const match = inputs.match(/Build\s+(.+?)(?:\s*:|$)/i);
    return match ? match[1] : 'Unknown';
}

// Extract tag from workflow run
function extractTag(run) {
    const inputs = run.display_title || '';
    const match = inputs.match(/:\s*(.+)$/);
    return match ? match[1] : 'latest';
}

// Render History Table
function renderHistoryTable() {
    const tbody = document.getElementById('historyTableBody');
    const startIndex = (historyPage - 1) * historyPerPage;
    const endIndex = startIndex + historyPerPage;
    const pageBuilds = allBuilds.slice(startIndex, endIndex);

    tbody.innerHTML = pageBuilds.map(build => `
        <tr>
            <td>${build.name}</td>
            <td>${build.tag}</td>
            <td>
                <span class="status-badge ${getStatusClass(build)}">
                    ${getStatusText(build)}
                </span>
            </td>
            <td>${build.date}</td>
            <td>
                <a href="${build.url}" target="_blank" class="action-btn">
                    ${currentLang === 'zh' ? '查看' : 'View'}
                </a>
            </td>
        </tr>
    `).join('');

    renderPagination();
}

// Get Status Class
function getStatusClass(build) {
    if (build.status === 'completed') {
        return build.conclusion === 'success' ? 'status-success' : 'status-failure';
    }
    return 'status-in-progress';
}

// Get Status Text
function getStatusText(build) {
    if (build.status === 'completed') {
        return build.conclusion === 'success' ? 'Success' : 'Failed';
    }
    return 'Running';
}

// Render Pagination
function renderPagination() {
    const pagination = document.getElementById('historyPagination');
    const totalPages = Math.ceil(allBuilds.length / historyPerPage);

    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }

    let html = '';

    // Previous button
    html += `<button class="page-btn" onclick="changePage(${historyPage - 1})" ${historyPage === 1 ? 'disabled' : ''}>
        ${currentLang === 'zh' ? '上一页' : 'Previous'}
    </button>`;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= historyPage - 2 && i <= historyPage + 2)) {
            html += `<button class="page-btn ${i === historyPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
        } else if (i === historyPage - 3 || i === historyPage + 3) {
            html += `<span class="page-btn" style="border:none;cursor:default;">...</span>`;
        }
    }

    // Next button
    html += `<button class="page-btn" onclick="changePage(${historyPage + 1})" ${historyPage === totalPages ? 'disabled' : ''}>
        ${currentLang === 'zh' ? '下一页' : 'Next'}
    </button>`;

    pagination.innerHTML = html;
}

// Change Page
function changePage(page) {
    const totalPages = Math.ceil(allBuilds.length / historyPerPage);
    if (page < 1 || page > totalPages) return;
    historyPage = page;
    renderHistoryTable();
}

// Snake Game
let gameInterval = null;
let snake = [];
let food = {};
let direction = 'right';
let score = 0;
let gameRunning = false;

function initGame() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const gridSize = 20;
    const tileCount = canvas.width / gridSize;

    document.addEventListener('keydown', (e) => {
        if (!gameRunning) return;
        switch(e.key) {
            case 'ArrowUp': case 'w': case 'W':
                if (direction !== 'down') direction = 'up'; break;
            case 'ArrowDown': case 's': case 'S':
                if (direction !== 'up') direction = 'down'; break;
            case 'ArrowLeft': case 'a': case 'A':
                if (direction !== 'right') direction = 'left'; break;
            case 'ArrowRight': case 'd': case 'D':
                if (direction !== 'left') direction = 'right'; break;
        }
    });

    window.startGame = function() {
        snake = [{ x: 10, y: 10 }];
        direction = 'right';
        score = 0;
        gameRunning = true;
        document.getElementById('gameScore').textContent = translations[currentLang].game_score.replace('0', '0');
        spawnFood();
        if (gameInterval) clearInterval(gameInterval);
        gameInterval = setInterval(() => gameLoop(ctx, gridSize, tileCount, canvas), 150);
    };

    function gameLoop(ctx, gridSize, tileCount, canvas) {
        const head = { ...snake[0] };
        switch(direction) {
            case 'up': head.y--; break;
            case 'down': head.y++; break;
            case 'left': head.x--; break;
            case 'right': head.x++; break;
        }

        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
            endGame(); return;
        }
        if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            endGame(); return;
        }

        snake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
            score += 10;
            document.getElementById('gameScore').textContent = translations[currentLang].game_score.replace('0', score);
            spawnFood();
        } else {
            snake.pop();
        }

        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        snake.forEach((segment, index) => {
            ctx.fillStyle = index === 0 ? '#667eea' : '#764ba2';
            ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
        });

        ctx.fillStyle = '#f093fb';
        ctx.beginPath();
        ctx.arc(food.x * gridSize + gridSize / 2, food.y * gridSize + gridSize / 2, gridSize / 2 - 2, 0, Math.PI * 2);
        ctx.fill();
    }

    function spawnFood() {
        food = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };
    }

    function endGame() {
        gameRunning = false;
        clearInterval(gameInterval);
        const ctx = document.getElementById('gameCanvas').getContext('2d');
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = '#fff';
        ctx.font = '24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(currentLang === 'zh' ? '游戏结束!' : 'Game Over!', ctx.canvas.width / 2, ctx.canvas.height / 2 - 20);
        ctx.font = '16px Arial';
        ctx.fillText((currentLang === 'zh' ? '得分: ' : 'Score: ') + score, ctx.canvas.width / 2, ctx.canvas.height / 2 + 10);
    }
}
