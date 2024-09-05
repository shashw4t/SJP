const md = require('markdown-it')();
const fs = require('fs');

const markdown = fs.readFileSync('README.md', 'utf8');
const result = md.render(markdown);

fs.writeFileSync('README.html', result);