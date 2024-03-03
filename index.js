const neonLight = document.createElement('div');
neonLight.textContent = 'NEON';
neonLight.style.fontSize = '50px';
neonLight.style.color = '#fff';
neonLight.style.textShadow = '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0ff, 0 0 70px #0ff, 0 0 80px #0ff, 0 0 100px #0ff, 0 0 150px #0ff';
neonLight.style.animation = 'blink 1s linear infinite alternate';

document.body.appendChild(neonLight);

// 创建动画
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes blink {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
`);
