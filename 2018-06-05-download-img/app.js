const fs = require('fs');
const path = require('path');
const https = require('https');
const url = 'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=1c5b5e74232eb938f36d7cf2e56385fe/d0c8a786c9177f3e2fb5a1987ccf3bc79e3d56a5.jpg';

const saveImg = (filePath, data) => {
  fs.writeFile(filePath, data, 'binary', (err) => {
    if (err) {
      console.log(err);
    }
  });
}

const fetchImg = (url) => {
  const { ext, name } = path.parse(url);

  https.get(url, res => {

    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
      error = new Error('请求失败。\n' + `状态码: ${statusCode}`);
    }

    if (error) {
      console.error(error.message);
      res.resume();
      return;
    }

    res.setEncoding('binary');
    let rawData = '';

    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        saveImg(`./${name}.${ext}`, rawData);
      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`错误: ${e.message}`);
  });
}

fetchImg(url);