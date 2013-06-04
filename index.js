var toc = require('./toc')
  , lunr = require('lunr')
  , fs = require('fs')
  , idx = lunr(function setupLunr() {
      this.field('title', { boost: 10 });
      this.field('body');
    });

Object.keys(toc).forEach(function loopSections(section) {
  Object.keys(toc[section]).forEach(function loopPages(page) {

    idx.add({
      id: section + '/' + page,
      title: '',
      body: fs.readFileSync('content.md', 'utf-8')
    });

    console.log(section);
  });
});
