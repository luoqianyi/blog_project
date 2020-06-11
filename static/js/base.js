// //对象式
// var base={
// 	getId:function(id){
// 		return document.getElementById(id);
// 	},
// 	getName:function(name){
// 		return document.getElementsByName(name);
// 	},
// 	getTag:function(tag){
// 		return document.getElementsByTagName(tag);
// 	}
// }
// //函数式
// function getId(id){
// 	return document.getElementById(id);
// }
(function(window, document, undefined) {
	var hearts = [];
	window.requestAnimationFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				setTimeout(callback, 1000 / 60);
			}
	})();
	init();

	function init() {
		css(
			".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
		);
		attachEvent();
		gameloop();
	}

	function gameloop() {
		for (var i = 0; i < hearts.length; i++) {
			if (hearts[i].alpha <= 0) {
				document.body.removeChild(hearts[i].el);
				hearts.splice(i, 1);
				continue;
			}
			hearts[i].y--;
			hearts[i].scale += 0.004;
			hearts[i].alpha -= 0.013;
			hearts[i].el.style.cssText = "left:" + hearts[i].x + "px;top:" + hearts[i].y + "px;opacity:" + hearts[i].alpha +
				";transform:scale(" + hearts[i].scale + "," + hearts[i].scale + ") rotate(45deg);background:" + hearts[i].color;
		}
		requestAnimationFrame(gameloop);
	}

	function attachEvent() {
		var old = typeof window.onclick === "function" && window.onclick;
		window.onclick = function(event) {
			old && old();
			createHeart(event);
		}
	}

	function createHeart(event) {
		var d = document.createElement("div");
		d.className = "heart";
		hearts.push({
			el: d,
			x: event.clientX - 5,
			y: event.clientY - 5,
			scale: 1,
			alpha: 1,
			color: randomColor()
		});
		document.body.appendChild(d);
	}

	function css(css) {
		var style = document.createElement("style");
		style.type = "text/css";
		try {
			style.appendChild(document.createTextNode(css));
		} catch (ex) {
			style.styleSheet.cssText = css;
		}
		document.getElementsByTagName('head')[0].appendChild(style);
	}

	function randomColor() {
		return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
	}
})(window, document);
//前台调用
var $ = function(args) {
	return new base(args);
}
//实现连缀的改写：
function base(args) {
	this.elements = []; //创建一个数组，来保存获取的节点和数据
	if (typeof args == 'string') {
		switch (args.charAt(0)) {
			case '#':
				this.getId(args.substring(1));
				break;
			case '.':
				this.getClass(args.substring(1));
				break;
			default:
				this.getTag(args);
		}
	} else if (typeof args == 'object') {
		if (args != undefined) {
			this.elements[0] = args;
		}
	} else if (typeof args == 'function') {
		addDomLoaded(args);
	}
}
//设置CSS选择器子节点
base.prototype.find = function(str) {
	var childElements = []; //临时数组
	for (var i = 0; i < this.elements.length; i++) {
		switch (str.charAt(0)) {
			case '#':
				childElements.push(document.getElementById(str.substring(1)));
				break;
			case '.':
				var all = this.elements[i].getElementsByTagName('*');
				for (var j = 0; j < all.length; j++) {
					if (all[j].className == str.substring(1)) {
						childElements.push(all[j]);
					}
				}
				break;
			default:
				var tags = this.elements[i].getElementsByTagName(str);
				for (var j = 0; j < tags.length; j++) {
					childElements.push(tags[j]);
				}
		}
	}
	this.elements = childElements;
	return this;
}

//获取id节点
base.prototype.getId = function(id) {
	this.elements.push(document.getElementById(id));
	return this;
}
//获取元素节点
base.prototype.getTag = function(tagName) {
	var tags = document.getElementsByTagName(tagName);
	for (var i = 0; i < tags.length; i++) {
		this.elements.push(tags[i]);
	}
	return this;
}
//获取当前节点的下一个元素节点
base.prototype.next = function() {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i] = this.elements[i].nextSibling; //将下一个节点放进来
		if (this.elements[i] == null) throw new Error('找不到下一个同级元素节点！');
	}
	return this;
}
//获取当前节点的上一个元素节点
base.prototype.prev = function() {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i] = this.elements[i].previousSibling; //将上一个节点放进来 
		if (this.elements[i] == null) throw new Error('找不到上一个同级元素节点！');
	}
	return this;
}


//获取class节点
base.prototype.getClass = function(className) {
	var classes = document.getElementsByClassName(className);
	for (var i = 0; i < classes.length; i++) {
		this.elements.push(classes[i]);
	}
	return this;
}
//获取某组节点的数量
base.prototype.length = function() {
	return this.elements.length;
}
//获取某一个节点
base.prototype.getElement = function(num) {
	var element = this.elements[num];
	this.elements = [];
	this.elements[0] = element;
	return this;
}
//获取某一节点的属性
base.prototype.attr = function(attr) {
	return this.elements[0][attr];
}
//获取某一个节点在整个节点组中是第几个索引
base.prototype.index = function() {
	var children = this.elements[0].parentNode.children;
	for (var i = 0; i < children.length; i++) {
		if (this.elements[0] == children[i]) return i;
	}
}
//设置某一个节点的透明度
base.prototype.opacity=function(num){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.opacity=num/100;
	}
	return this;
}

//获取首个节点，并返回这个节点对象
base.prototype.first = function() {
	return this.elements[0];
}
//获取末个节点，并返回这个节点对象
base.prototype.last = function() {
	return this.elements[this.elements - 1];
}
//原型
//设置css
base.prototype.css = function(attr, value) {
	for (var i = 0; i < this.elements.length; i++) {
		if (arguments.length == 1) {
			if (typeof window.getComputedStyle != 'undefined') {
				return window.getComputedStyle(this.elements[i], null)[attr];
			}
			else if(typeofthis.elements[i].currentStyle != 'undefined') {
				return this.elements[i].currentStyle[attr];
			}
		} else {
			this.elements[i].style[attr] = value;
		}
	}
	return this;

}
//设置innerHTML
base.prototype.html = function(str) {
	for (var i = 0; i < this.elements.length; i++) {
		if (arguments.length == 0) {
			return this.elements[i].innerHTML;
		}
		this.elements[i].innerHTML = str;
	}
	return this;
}
//设置onclick
base.prototype.click = function(fn) {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].onclick = fn;
	}
	return this;
}
//添加Class
base.prototype.addClass = function(className) {
	for (var i = 0; i < this.elements.length; i++) {
		if (!this.elements[i].className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
			this.elements[i].className += ' ' + className;
		}
	}
	return this;
}
//锁屏功能
base.prototype.lock=function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.width=getInner().width+'px';
		this.elements[i].style.height=getInner().height+'px';
		this.elements[i].style.display='block';
	}
}
//解除锁屏
base.prototype.unlock=function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display='none';
	}
}
//移除Class
base.prototype.removeClass = function(className) {
	for (var i = 0; i < this.elements.length; i++) {
		if (this.elements[i].className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
			this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ')
		}
	}
	return this;
}
//小心使用下面的，有可能会破坏原本css提供的方法
//添加link或style的CSS规则
base.prototype.addRule = function(style, num) {
	var sheet = document.styleSheets[num];
	sheet.insertRule(style, 0);
	return this;
}
//移出link或style的CSS规则
base.prototype.removeRule = function(index, num) {
	var sheet = document.styleSheets[num];
	sheet.deleteRule(index);
	return this;
}

//删除左右空格
function trim(str) {
	return str.replace(/(^\s*)(^\s*)/g, '');
}
//设置鼠标移入移出方法
base.prototype.hover = function(over, out) {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].onmousemove = over;
		this.elements[i].onmouseout = out;
	}
	return this;
}
//设置点击切换方法
base.prototype.cut = function() {
	for (var i = 0; i < this.elements.length; i++) {
		var count = 0;
		var args = arguments;
		addEvent(this.elements[i], 'click', function() {
			args[count]();
			count++;
			if (count >= args.length) count = 0;
		});
	}
	return this;
}
//设置表单字段元素
base.prototype.form = function(name) {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i] = this.elements[i][name];
	}
	return this;
}
//设置表单内容获取
base.prototype.value = function(str) {
	for (var i = 0; i < this.elements.length; i++) {
		if (arguments.length == 0) {
			return this.elements[i].value;
		}
		this.elements[i].value = str;
	}
	return this;
}

//设置显示
base.prototype.show = function() {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style.display = 'block';
	}
	return this;
}
//设置隐藏
base.prototype.hide = function() {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].style.display = 'none';
	}
	return this;
}
//设置事件发生器
base.prototype.bind = function(event, fn) {
	for (var i = 0; i < this.elements.length; i++) {
		addEvent(this.elements[i], event, fn);
	}
	return this;
}
//设置动画
base.prototype.animate = function(obj) {
	//每10 speed 运动 1 步，这样控制速度，alter 是变化长度,start是起始量,attr是样式(top/left;width/height;opacity),time是显示帧率,透明度的设置在[0，100]之间
	for (var i = 0; i < this.elements.length; i++) {
		var element = this.elements[i];
		var attr = obj['attr'] == 'x' ? 'left' : obj['attr'] == 'y' ? 'top' : obj['attr'] == 'w' ? 'width' : obj['attr'] ==
			'h' ? 'height' : obj['attr'] == 'o' ? 'opacity' : obj['attr'] != undefined ? obj['attr'] : 'left';
		var time = obj['time'] != undefined ? obj['time'] : 50;
		var start = obj['start'] != undefined ? obj['start'] : attr == 'opacity' ? parseFloat(window.getComputedStyle(
			element)[attr]) * 100 : parseInt(window.getComputedStyle(element)[attr]);
		var step = obj['step'] != undefined ? obj['step'] : 10;
		var speed = obj['speed'] != undefined ? obj['speed'] : 6; //缓冲值
		var type = obj['type'] == 0 ? 'constant' : obj['type'] == 1 ? 'buffer' : 'buffer';
		var content = obj['content'];
		var alter = obj['alter'];
		var target = obj['target'];
		if (alter != undefined && target == undefined) { //增量有值，目标量无值 
			target = alter + start;
		} else if (alter == undefined && target == undefined && content == undefined) { //增量和目标量都无值
			throw new Error('alter 增量或者 target 目标量必须传递一个！');
		}
		if (step > target) step = -step;
		//初始化起始点
		if (attr == 'opacity') {
			element.style.opacity = parseInt(start) / 100;
		} else {
			element.style[attr] = start + 'px';
		}
		if (content == undefined) {
			content = {};
			content[attr] = target;
		}
		clearInterval(element.timer);
		element.timer = setInterval(function() {
			for (var i in content) {
				attr = i == 'x' ? 'left' : i == 'y' ? 'top' : i == 'w' ? 'width' : i == 'h' ? 'height' : i == 'o' ? 'opacity' :
					i != undefined ? i : 'left';
				target = content[i];
				if (type == 'buffer') {
					var parse = attr == 'opacity' ? (target - parseFloat(window.getComputedStyle(element)[attr] * 100)) : (target -
						parseInt(window.getComputedStyle(element)[attr]));
					var temp = parse / speed;
					step = step > 0 ? Math.ceil(temp) : Math.floor(temp);
				}

				if (attr == 'opacity') {
					var temp = parseFloat(window.getComputedStyle(element)[attr]) * 100;
					if (step == 0) {
						setOpacity();
					} else if (step > 0 && Math.abs(temp - target) <= step) {
						setOpacity();
					} else if (step < 0 && (temp - target) <= Math.abs(step)) {
						setOpacity();
					} else {
						element.style.opacity = parseInt(temp + step) / 100;
					}
				} else {
					if (step == 0) {
						setTarget();
					} else if (step > 0 && Math.abs(parseInt(window.getComputedStyle(element)[attr]) - target) <= step) {
						setTarget();
					} else if (step < 0 && parseInt(window.getComputedStyle(element)[attr]) - target <= Math.abs(step)) {
						setTarget();
					} else {
						element.style[attr] = parseInt(window.getComputedStyle(element)[attr]) + step + 'px';
					}
				}
			}
			// document.getElementById('aaa').innerHTML+=window.getComputedStyle(element)[attr]+'<br/>';
		}, time);

		function setTarget() {
			element.style[attr] = target + 'px';
			clearInterval(element.timer);
			if (obj.fn != undefined) obj.fn();
		}

		function setOpacity() {
			element.style.opacity = parseInt(target) / 100;
			clearInterval(element.timer);
			if (obj.fn != undefined) obj.fn();
		}
	}
	return this;
}
//获取计算后的style
function getStyle(element, attr) {
	var value;
	if (typeof window.getComputedStyle != 'undefined') { //W3C 
		value = parseInt(window.getComputedStyle(element, null)[attr]);
	} else if (typeofelement.currentStyle != 'undeinfed') { //IE 
		value = parseInt(element.currentStyle[attr]);
	}
	return value;
}

//插件入口
base.prototype.exend = function(name, fn) {
	base.prototype[name] = fn;
}


//添加事件绑定
function addEvent(obj, type, fn) {
	if (typeof obj.addEventListener != 'undefined') {
		obj.addEventListener(type, fn, false);
	}
}
//跨浏览器删除事件
function removeEvent(obj, type, fn) {
	if (typeof obj.removeEventListener != 'undefined') {
		obj.removeEventListener(type, fn, false);
	} else if (typeof obj.detachEvent != 'undefined') {
		obj.detachEvent('on' + type, fn);
	}
}
//跨浏览器获取滚动条位置 
function getScroll() {
	return {
		top: document.documentElement.scrollTop || document.body.scrollTop,
		left: document.documentElement.scrollLeft || document.body.scrollLeft,
	}
}

//跨浏览器获取视口大小
function getInner() {
	if (typeof window.innerWidth != 'undefined') {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		}
	} else {
		return {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		}
	}
}
