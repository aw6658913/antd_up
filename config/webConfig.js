const paths = require('./paths');
const fs = require('fs');

// 获取web包版本号
let WEB_VERSION = '';
if (fs.existsSync(paths.appVersionPath)) {
    WEB_VERSION = fs.readFileSync(paths.appVersionPath, 'utf-8');
}

module.exports = {
    WEB_VERSION, // web打包版本号
};
