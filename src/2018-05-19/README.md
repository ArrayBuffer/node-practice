在node中如何实现路由功能？

在 `req` 中有两个关键的属性：`url` 和 `headers`，其中 `url` 为当前请求的路径，`headers` 是请求头里面的一些信息。

直观的感受一下 `req.headers`

```
{ 
  host: 'localhost:3000',
  connection: 'keep-alive',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
  accept: 'image/webp,image/apng,image/*,*/*;q=0.8',
  referer: 'http://localhost:3000/',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
  cookie: 'Webstorm-4d5611b4=aa88c0a5-d0f0-4a58-9a25-bb50c4a6bbe7; _ga=GA1.1.1613432442.1523283828'
}
```

直观的感受一下 `req.url`

```
/favicon.ico
```

所以想做路由的话，在于解析 `req.url`