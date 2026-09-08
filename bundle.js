const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'style', 'style.css');
const lyricsPath = path.join(__dirname, 'script', 'lyricsData.js');
const mainPath = path.join(__dirname, 'script', 'main.js');
const htmlPath = path.join(__dirname, 'index.html');

const css = fs.readFileSync(cssPath, 'utf8');
const lyricsJs = fs.readFileSync(lyricsPath, 'utf8');
const mainJs = fs.readFileSync(mainPath, 'utf8');
let html = fs.readFileSync(htmlPath, 'utf8');

// Remove external stylesheet link so browser never blocks on it
html = html.replace(/<link\s+rel=["']stylesheet["']\s+href=["']style\/style\.css["']\s*\/?>/gi, '');

// Ensure style tag is present and up to date
if (html.includes('id="embedded-site-styles"')) {
  html = html.replace(/<style id="embedded-site-styles">[\s\S]*?<\/style>/, `<style id="embedded-site-styles">\n${css}\n</style>`);
} else {
  const styleTag = `<style id="embedded-site-styles">\n${css}\n</style>`;
  html = html.replace('</head>', `  ${styleTag}\n</head>`);
}

// Remove any external script tags for lyricsData.js or main.js
html = html.replace(/<script\s+src=["']script\/lyricsData\.js["']><\/script>/gi, '');
html = html.replace(/<script\s+src=["']script\/main\.js.*?["']><\/script>/gi, '');

// Ensure scripts are embedded and up to date
const scriptTags = `<script id="embedded-lyrics-data">\n${lyricsJs}\n</script>\n<script id="embedded-main-logic">\n${mainJs}\n</script>`;
if (html.includes('id="embedded-lyrics-data"')) {
  html = html.replace(/<script id="embedded-lyrics-data">[\s\S]*?<\/script>\s*<script id="embedded-main-logic">[\s\S]*?<\/script>/, scriptTags);
} else {
  html = html.replace('</body>', `  ${scriptTags}\n</body>`);
}

fs.writeFileSync(htmlPath, html, 'utf8');

// Sync to public directory for Vercel static CDN priority
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(path.join(publicDir, 'index.html'), html, 'utf8');

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach(item => {
    const srcItem = path.join(src, item);
    const destItem = path.join(dest, item);
    if (fs.statSync(srcItem).isDirectory()) {
      copyDirRecursive(srcItem, destItem);
    } else {
      fs.copyFileSync(srcItem, destItem);
    }
  });
}

copyDirRecursive(path.join(__dirname, 'img'), path.join(publicDir, 'img'));
copyDirRecursive(path.join(__dirname, 'style'), path.join(publicDir, 'style'));
copyDirRecursive(path.join(__dirname, 'script'), path.join(publicDir, 'script'));

['customize.json', 'deeperthanitseems.mp3', 'deeperthanitseems.mpeg'].forEach(file => {
  const src = path.join(__dirname, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(publicDir, file));
  }
});

console.log('Bundle complete! Embedded index.html and synced all assets to public/ successfully.');
