// Global variables
let buildInProgress = false;
let gameInterval = null;
let snake = [];
let food = {};
let direction = 'right';
let score = 0;
let gameRunning = false;

// AI News data
const aiNews = [
    { tag: 'AI', title: 'GPT-5 Released with Enhanced Reasoning', content: 'OpenAI announces GPT-5 with significant improvements in logical reasoning and code generation capabilities.' },
    { tag: 'Docker', title: 'Docker Desktop 4.25 Released', content: 'New features include improved performance for large container images and better integration with Kubernetes.' },
    { tag: 'Cloud', title: 'AWS Lambda Adds ARM64 Support', content: 'AWS Lambda now supports ARM64 architecture for better price-performance ratio.' },
    { tag: 'Security', title: 'Critical Vulnerability Found in OpenSSL', content: 'New CVE-2024-XXXX affects OpenSSL 3.x, users urged to update immediately.' },
    { tag: 'DevOps', title: 'GitHub Actions Improves Caching', content: 'New caching strategies reduce build times by up to 40% for CI/CD pipelines.' },
    { tag: 'Kubernetes', title: 'K8s 1.29 Released', content: 'Kubernetes 1.29 introduces new features for improved cluster management and security.' },
    { tag: 'AI', title: 'Google Gemini Ultra Outperforms GPT-4', content: 'Google claims Gemini Ultra achieves state-of-the-art results on multiple benchmarks.' },
    { tag: 'Linux', title: 'Linux Kernel 6.8 Released', content: 'New kernel version includes improved hardware support and performance optimizations.' },
    { tag: 'Security', title: 'Ransomware Attack Targets Docker Registries', content: 'Multiple Docker Hub accounts compromised, users advised to enable 2FA.' },
    { tag: 'DevOps', title: 'Terraform 1.7 Introduces Provider-Less State', content: 'New feature allows managing resources without requiring provider plugins.' }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadNews();
    initGame();
});

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
    const shuffled = [...aiNews].sort(() => Math.random() - 0.5).slice(0, 4);

    newsContent.innerHTML = shuffled.map(news => `
        <div class="news-item">
            <span class="news-tag">${news.tag}</span>
            <h4>${news.title}</h4>
            <p>${news.content}</p>
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

    // Validation
    if (!imageSource) {
        alert('Please enter an image source');
        return;
    }

    if (!imageName) {
        alert('Please enter an image name');
        return;
    }

    if (architectures.length === 0) {
        alert('Please select at least one architecture');
        return;
    }

    buildInProgress = true;

    // Show build status
    document.getElementById('buildStatus').classList.remove('hidden');
    document.getElementById('buildResult').classList.add('hidden');
    document.getElementById('buildBtn').disabled = true;
    document.getElementById('statusText').textContent = 'Preparing build environment...';
    document.getElementById('progressFill').style.width = '10%';
    document.getElementById('progressText').textContent = '10%';

    const logs = document.getElementById('buildLogs');
    logs.innerHTML = '<div class="log-entry">Starting build process...</div>';

    try {
        // Simulate build steps
        await simulateBuild(logs, imageName, imageTag, architectures);
    } catch (error) {
        logs.innerHTML += `<div class="log-entry error">Error: ${error.message}</div>`;
        document.getElementById('statusText').textContent = 'Build failed!';
        document.getElementById('progressFill').style.width = '100%';
        document.getElementById('progressText').textContent = 'Failed';
    }
}

async function simulateBuild(logs, imageName, imageTag, architectures) {
    const steps = [
        { text: 'Validating image source...', progress: 15, delay: 500 },
        { text: 'Pulling source image...', progress: 25, delay: 1000 },
        { text: `Building for ${architectures[0]}...`, progress: 40, delay: 1500 },
        { text: `Building for ${architectures.length > 1 ? architectures[1] : 'arm64'}...`, progress: 55, delay: 1500 },
        { text: 'Creating multi-arch manifest...', progress: 70, delay: 1000 },
        { text: 'Pushing to Docker Hub...', progress: 85, delay: 1500 },
        { text: 'Cleaning up...', progress: 95, delay: 500 },
    ];

    for (const step of steps) {
        document.getElementById('statusText').textContent = step.text;
        document.getElementById('progressFill').style.width = step.progress + '%';
        document.getElementById('progressText').textContent = step.progress + '%';
        logs.innerHTML += `<div class="log-entry">${step.text}</div>`;
        logs.scrollTop = logs.scrollHeight;
        await sleep(step.delay);
    }

    // Success
    logs.innerHTML += `<div class="log-entry success">Build completed successfully!</div>`;
    document.getElementById('progressFill').style.width = '100%';
    document.getElementById('progressText').textContent = '100%';
    document.getElementById('statusText').textContent = 'Build complete!';

    await sleep(500);

    // Show result
    document.getElementById('buildStatus').classList.add('hidden');
    document.getElementById('buildResult').classList.remove('hidden');
    document.getElementById('resultMessage').textContent = `Your image has been pushed to Docker Hub`;

    const pullCommand = architectures.length > 1
        ? `docker pull --platform ${architectures[0]} ${imageName}:${imageTag}`
        : `docker pull ${imageName}:${imageTag}`;

    document.getElementById('resultCommands').innerHTML = `
        <code>${pullCommand}</code>
    `;

    document.getElementById('buildBtn').disabled = false;
    buildInProgress = false;
}

function resetForm() {
    document.getElementById('buildStatus').classList.add('hidden');
    document.getElementById('buildResult').classList.add('hidden');
    document.getElementById('buildLogs').innerHTML = '<div class="log-entry">Waiting to start...</div>';
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Snake Game
function initGame() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const gridSize = 20;
    const tileCount = canvas.width / gridSize;

    document.addEventListener('keydown', (e) => {
        if (!gameRunning) return;

        switch(e.key) {
            case 'ArrowUp':
            case 'w':
            case 'W':
                if (direction !== 'down') direction = 'up';
                break;
            case 'ArrowDown':
            case 's':
            case 'S':
                if (direction !== 'up') direction = 'down';
                break;
            case 'ArrowLeft':
            case 'a':
            case 'A':
                if (direction !== 'right') direction = 'left';
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                if (direction !== 'left') direction = 'right';
                break;
        }
    });

    window.startGame = function() {
        snake = [{ x: 10, y: 10 }];
        direction = 'right';
        score = 0;
        gameRunning = true;
        document.getElementById('gameScore').textContent = 'Score: 0';
        spawnFood();
        if (gameInterval) clearInterval(gameInterval);
        gameInterval = setInterval(() => gameLoop(ctx, gridSize, tileCount, canvas), 150);
    };

    function gameLoop(ctx, gridSize, tileCount, canvas) {
        // Update snake position
        const head = { ...snake[0] };

        switch(direction) {
            case 'up': head.y--; break;
            case 'down': head.y++; break;
            case 'left': head.x--; break;
            case 'right': head.x++; break;
        }

        // Check wall collision
        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
            endGame();
            return;
        }

        // Check self collision
        if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            endGame();
            return;
        }

        snake.unshift(head);

        // Check food collision
        if (head.x === food.x && head.y === food.y) {
            score += 10;
            document.getElementById('gameScore').textContent = 'Score: ' + score;
            spawnFood();
        } else {
            snake.pop();
        }

        // Draw
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw snake
        snake.forEach((segment, index) => {
            ctx.fillStyle = index === 0 ? '#667eea' : '#764ba2';
            ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
        });

        // Draw food
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
        ctx.fillText('Game Over!', ctx.canvas.width / 2, ctx.canvas.height / 2 - 20);
        ctx.font = '16px Arial';
        ctx.fillText('Score: ' + score, ctx.canvas.width / 2, ctx.canvas.height / 2 + 10);
        ctx.fillText('Click "Start Game" to play again', ctx.canvas.width / 2, ctx.canvas.height / 2 + 40);
    }
}
