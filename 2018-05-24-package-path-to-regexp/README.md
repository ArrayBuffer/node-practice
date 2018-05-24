## 前言

完成上一节遗留的任务学习`path-to-regexp`源码。

另外用来查看正则表达式逻辑的在线网站 [regexper](https://regexper.com) 非常的好用唷


## 代码分析

整个包导出一个function:

```
module.exports = pathToRegexp

function pathToRegexp (path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys)
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
  }

  return stringToRegexp(/** @type {string} */ (path), keys, options)
}
```

- **path** 字符串 | 字符串数组 | 正则表达式

- **keys** 一个数组，在path中匹配的动态参数将会被添加到这个数组中