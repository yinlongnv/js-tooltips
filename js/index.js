window.onload = function() {
  var toolTipClass = "tooltip-box";

  // 使用用户代理来判断浏览器是否为 IE浏览器
  var isIE = this.navigator.userAgent.indexOf("MISE") > -1;

  var getEl = function(id) {
    return this.document.getElementById(id);
  };

  var demo = getEl("demo");

  // obj 超链接元素
  // id 提示框id
  // html 提示框HTML
  // width 提示框宽度（可选）
  // height 提示框高度（可选）
  function showTooltip(obj, id, html, width, height) {
    if (getEl(id) == null) {
      // 创建
      var toolTipBox = document.createElement("div");
      toolTipBox.className = toolTipClass;
      toolTipBox.id = id;
      toolTipBox.innerHTML = html;
      obj.appendChild(toolTipBox);

      toolTipBox.style.width = width ? width + "px" : "auto";
      toolTipBox.style.height = height ? height + "px" : "auto";

      if (!width && isIE) {
        toolTipBox.style.width = toolTipBox.offsetWidth;
      }

      toolTipBox.style.position = "absolute";
      toolTipBox.style.display = "block";

      var left = obj.offsetLeft;
      var top = obj.offsetTop + 20;

      // 当窗口缩小时，避免提示框被遮挡
      if (
        left + toolTipBox.offsetWidth >
        (document.body.clientWidth || document.documentElement.clientWidth)
      ) {
        var demoLeft = getEl("demo").offsetLeft;
        left =
          (document.body.clientWidth || document.documentElement.clientWidth) -
          toolTipBox.offsetWidth -
          demoLeft;
        if (left < 0) {
          left = 0;
        }
      }

      toolTipBox.style.left = left + "px";
      toolTipBox.style.top = top + "px";

      addEvent(obj, "mouseleave", function() {
        setTimeout(function() {
          getEl(id).style.display = "none";
        }, 300);
      });
    } else {
      // 显示
      getEl(id).style.display = "block";
    }
  }

  function addEvent(element, event, callbackFunction) {
    if (element.addEventListener) {
      element.addEventListener(event, callbackFunction, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + event, callbackFunction);
    }
  }

  addEvent(demo, "mouseover", function(e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;

    if (target.className == "tooltip") {
      var _html,
        _id,
        _width = 200;

      switch (target.id) {
        case "tooltip1":
          _id = "t1";
          _html = "中华人民共和国";
          break;
        case "tooltip2":
          _id = "t2";
          _html = "美国篮球职业联赛";
          break;
        case "tooltip3":
          _id = "t3";
          _html =
            "<h2>春晓</h2><p>春眠不觉晓，</p><p>处处闻啼鸟。</p><p>夜来风雨声，</p><p>花落知多少。</p>";
          _width = 100;
          break;
        case "tooltip4":
          _id = "t4";
          _html = '<img src="img/6.jpg" width="500" />';
          _width = 520;
          break;
        case "tooltip5":
          _id = "t5";
          _html =
            '<div id="mycard"><img src="img/6.jpg" alt=""/><p><strong>昵称一定要长</strong></p><p>我的简介我的简介</p></div>';
          _width = 300;
          break;
        case "tooltip6":
          _id = "t6";
          _html =
            '<iframe src="http://www.imooc.com/" width="480" height="300"></iframe>';
          _width = 500;
          break;
        default:
          return false;
      }
      showTooltip(target, _id, _html, _width);
    }
  });
};
