const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');

const imgUrl = 'http://s1.huishoubao.com/static/m/1004/img/6.png';

const saveImg = (filePath, data) => {
  fs.writeFile(filePath, data, 'binary', (err) => {
    if (err) {
      console.log(err);
    }
  });
}

const fetchImg = (uri) => {
  const { ext, name } = path.parse(uri);
  var imgUrl = path.parse(uri);

  let options = {
    hostname: imgUrl.hostname,
    path: imgUrl.path,
    headers:  {
      'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'zh-CN,zh;q=0.9',
      'Host': 's1.huishoubao.com',
      'Referer': 'http://mobile.huishoubao.com/',
      'Pragma': 'no-cache',
      'Connection': 'keep-alive',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
    }
  };

  http.get(options, res => {

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
    console.log(e);
    console.error(`错误: ${e.message}`);
  });
}

fetchImg(imgUrl);