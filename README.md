# js-tooltips
js实现鼠标悬停显示信息提示

1. 解决问题的一般流程：分析-设计-实现。
2. js创建dom的方式：creatElement 和 appendChild 联用。
creatElement：创建节点，返回 Element 对象。
appendChild：把元素节点追加到已有的元素上。
3. 鼠标事件： mouseenter 和 mouseleave。
mouseenter：当鼠标指针进入一个元素的边界区域触发。
mouseleave：当鼠标指针从一个元素的边界区域离开时触发。
mouseover：当鼠标指针进入一个元素包括其子元素的边界区域都会触发。
mouseout：当鼠标指针从一个元素包括其子元素的边界区域离开时都会触发。
4. 设置定时器 setTimeout 和 取消定时器 clearTimeout。
setTimeout：用于在指定的毫秒数后调用函数或计算表达式。
setInterval：可按照指定的周期（以毫秒计）来调用函数或计算表达式。
5. 使用用户代理来判断浏览器是否为 IE浏览器 var isIE = this.navigator.userAgent.indexOf("MISE") > -1;
   用该语句不能判断 IE11 的情况。
6. 优化代码

多次使用到 document.getElementById("id") ：使用函数封装。

优化事件绑定的方式：
  传统方法：element.onclick = function(e){...}。
  W3C标准绑定方法：element.addEventListener("click", function(e){...})。（IE浏览器不支持）
  IE事件注册方法：element.attachEvent("onclick", function(e){...})。
绑定事件统一方法：
function addEvent(element, event, callbackFunction) {
  if(element.addEventListener) {
    element.addEventListener(event, callbackFunction, false);
  } else if(element.attachEvent) {
    element.attachEvent("on" + event, callbackFunction);
  }
}

事件冒泡：js事件一直会向父级元素传播知道它被处理。
