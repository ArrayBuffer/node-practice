# 正则表达式基础

## 1. 什么是正则表达式

正则表达式是由一个字符序列形成的搜索模式。 想要用好正则表达式不容易，详细说明客参考 [MDN 说明](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#assertions)。也可以参考`jquery`中对正则表达式的使用。

## 2. 正则表达式的语法

字面量, 构造函数和工厂符号都是可以的：

```
/pattern/flags
new RegExp(pattern [, flags])
RegExp(pattern [, flags])
```

## 3. 相关方法

- **[RegExp.prototype.exec](http://www.w3school.com.cn/jsref/jsref_exec_regexp.asp)**

  如果 exec() 找到了匹配的文本，则返回一个结果数组。否则，返回 null。  
  此数组的第 0 个元素是与正则表达式相匹配的文本。

  第 1 个元素是与 RegExpObject 的第 1 个子表达式相匹配的文本（如果有的话）  
  第 2 个元素是与 RegExpObject 的第 2 个子表达式相匹配的文本（如果有的话）  
  ...以此类推

  除了数组元素和 length 属性之外，exec() 方法还返回两个属性:
    - index 属性声明的是匹配文本的第一个字符的位置
    - input 属性则存放的是被检索的字符串 string


## 4. 练习

1.匹配手机号码

```
var pattern = /^1(3|4|5|7|8)\d{9}/g;
var pattern = /^1[34578]\d{9}/g;
```

2.验证输入只能是汉字

```
var reg = /^[\u4e00-\u9fa5]{0,}$/
```

3.验证身份证号码

```
var reg = //
\d{15}|\d{18}$
```

## 5. 参考

1. [MDN社区 RegExp](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
