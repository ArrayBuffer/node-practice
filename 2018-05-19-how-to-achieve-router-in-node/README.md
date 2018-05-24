## 前言

这一节主要学习在node中如何实现路由功能。

## 总结

  - 第一步获取当前的请求方法： `req.method`
  - 第二步获取当前的请求path: `req.path`

有了这两者皆可以实现一个完整的路由功能。


## 补充

1. `res.headers` 也是一个很重要的属性。直观的感受一下 `req.headers`

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

2. `path-to-regexp`

在研究的过程中，发现 `koa` `vue-router` 等库都依赖这个库，非常有必要好好看一下源码