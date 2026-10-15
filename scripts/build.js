import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  
  fs.readdirSync(from).forEach(element => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    const stat = fs.lstatSync(fromPath);
    if (stat.isFile()) {
      fs.copyFileSync(fromPath, toPath);
    } else if (stat.isDirectory()) {
      copyFolderSync(fromPath, toPath);
    }
  });
}

function copyFileSync(from, to) {
  if (fs.existsSync(from)) {
    const dir = path.dirname(to);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(from, to);
  }
}

console.log('🚀 Preparing dist folder for Cloudflare Pages...');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy HTML files
const htmlFiles = fs.readdirSync(rootDir).filter(f => f.endsWith('.html'));
htmlFiles.forEach(file => {
  copyFileSync(path.join(rootDir, file), path.join(distDir, file));
  console.log(`✓ Copied ${file} -> dist/${file}`);
});

// Copy directories
['css', 'js', 'assets'].forEach(dir => {
  const srcPath = path.join(rootDir, dir);
  const destPath = path.join(distDir, dir);
  if (fs.existsSync(srcPath)) {
    copyFolderSync(srcPath, destPath);
    console.log(`✓ Copied directory ${dir} -> dist/${dir}`);
  }
});

// Cloudflare Pages _headers for security and caching
const headersContent = `/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/css/*
  Cache-Control: public, max-age=86400, stale-while-revalidate=604800

/js/*
  Cache-Control: public, max-age=86400, stale-while-revalidate=604800
`;

fs.writeFileSync(path.join(distDir, '_headers'), headersContent, 'utf-8');
console.log('✓ Generated dist/_headers for Cloudflare Pages');

console.log('✨ Build ready in dist/ directory!');
