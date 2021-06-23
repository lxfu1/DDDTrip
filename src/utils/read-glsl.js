const fs = require('fs');
const path = require('path');

export const readFileGL = (glPath) => {
  return fs.readFileSync(path.resolve(__dirname, glPath)).toString();
}