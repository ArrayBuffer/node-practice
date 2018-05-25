## 正则表达式

## 相关方法

- **[RegExp.prototype.exec](http://www.w3school.com.cn/jsref/jsref_exec_regexp.asp)**

  如果 exec() 找到了匹配的文本，则返回一个结果数组。否则，返回 null。

  此数组的第 0 个元素是与正则表达式相匹配的文本。第 1 个元素是与 RegExpObject 的第 1 个子表达式相匹配的文本（如果有的话），第 2 个元素是与 RegExpObject 的第 2 个子表达式相匹配的文本（如果有的话）。...以此类推

  除了数组元素和 length 属性之外，exec() 方法还返回两个属性:
    - index 属性声明的是匹配文本的第一个字符的位置
    - input 属性则存放的是被检索的字符串 string