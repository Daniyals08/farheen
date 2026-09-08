const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 7777;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.mpeg': 'audio/mpeg',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  let pathname = '/index.html';
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    pathname = decodeURIComponent(parsedUrl.pathname);
  } catch (e) {
    pathname = (req.url || '/').split('?')[0];
  }

  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\' || safePath === '') {
    safePath = 'index.html';
  }
  while (safePath.startsWith('/') || safePath.startsWith('\\')) {
    safePath = safePath.slice(1);
  }

  // Resolve path against BASE_DIR, public directory, and process.cwd()
  let filePath = path.join(BASE_DIR, safePath);
  if (!fs.existsSync(filePath)) {
    const pubPath = path.join(BASE_DIR, 'public', safePath);
    if (fs.existsSync(pubPath)) {
      filePath = pubPath;
    } else {
      const cwdPath = path.join(process.cwd(), safePath);
      if (fs.existsSync(cwdPath)) {
        filePath = cwdPath;
      } else {
        const cwdPubPath = path.join(process.cwd(), 'public', safePath);
        if (fs.existsSync(cwdPubPath)) {
          filePath = cwdPubPath;
        }
      }
    }
  }

  const resolvedBase = path.resolve(BASE_DIR);
  const resolvedCwd = path.resolve(process.cwd());
  const resolvedFile = path.resolve(filePath);

  if (!resolvedFile.startsWith(resolvedBase) && !resolvedFile.startsWith(resolvedCwd)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      console.warn('404 Not Found:', req.url, '-> tried:', filePath);
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const totalSize = stats.size;
    const range = req.headers.range;

    // Handle range requests for video/audio streaming
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;

      if (start >= totalSize || end >= totalSize) {
        res.writeHead(416, {
          'Content-Range': `bytes */${totalSize}`
        });
        res.end();
        return;
      }

      const chunkSize = (end - start) + 1;
      const fileStream = fs.createReadStream(filePath, { start, end });

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${totalSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });

      fileStream.pipe(res);
    } else {
      const isMedia = ext === '.mp4' || ext === '.mpeg' || ext === '.mp3';
      res.writeHead(200, {
        'Content-Length': totalSize,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': isMedia ? 'public, max-age=3600' : 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      });

      fs.createReadStream(filePath).pipe(res);
    }
  });
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`\n🎉 Happy Birthday Server is running!`);
    console.log(`👉 Local: http://localhost:${PORT}`);
    console.log(`👉 Network: http://127.0.0.1:${PORT}\n`);
  });
}

module.exports = server;
