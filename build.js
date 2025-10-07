const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Read index.html
let html = fs.readFileSync('index.html', 'utf8');

// Replace CSS and JS references with minified versions
html = html.replace('styles.css', 'styles.min.css');
html = html.replace('script.js', 'script.min.js');
html = html.replace('supabase-service.js', 'supabase-service.min.js');

// Write to dist
fs.writeFileSync('dist/index.html', html);

// Copy other files
const filesToCopy = [
  'logo.png',
  '_redirects',
  'netlify.toml'
];

filesToCopy.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join('dist', file));
  }
});

// Copy logo directory
if (fs.existsSync('logo')) {
  if (!fs.existsSync('dist/logo')) {
    fs.mkdirSync('dist/logo');
  }
  fs.readdirSync('logo').forEach(file => {
    fs.copyFileSync(path.join('logo', file), path.join('dist', 'logo', file));
  });
}

console.log('✅ Build completed! Files copied to dist/');

