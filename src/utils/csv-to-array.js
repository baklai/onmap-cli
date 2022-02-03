const fs = require('fs');

module.exports = (filePath, separator = ';') => {
  let headers = [];
  const items = [];
  const file = fs.readFileSync(filePath, 'utf8');
  const lines = file.toString().trim().split('\n');
  lines.forEach((line, i) => {
    let parts = line.split(separator);
    if (i) {
      let obj = {};
      parts.forEach((part, i) => (obj[headers[i]] = part));
      items.push(obj);
    } else {
      headers = lines[i].split(separator);
    }
  });
  return items;
};
