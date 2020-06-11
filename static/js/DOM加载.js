//临时找个网上链接图片


//传统DOM加载
// window.onload=function(){
// 	var box=document.getElementById('box');
// 	alert(box.innerHTML);
// 	//ps:如果有图片，那么图片加载完毕后，方可执行onload里的内容
// }
//现代DOM加载
// document.addEventListener('DOMContentLoaded',function(){
// 	var box=document.getElementById('box');
// 	alert(box.innerHTML);
// },false);
// //ps:如果有图片，先执行节点操作的内容，然后再缓缓加载图片，也就是说，当DOM树结构加载完毕后，再执行
//使用doScroll解决ie678的DOM加载问题
// var time=null;
// timer=setInterval(function(){
// 	try{
// 		document.documentElement.doScroll('left');
// 		var box=document.getElementById('box');
// 		alert(box.innerHTML);
// 	}catch(e){};
// },1)

//显示状态
//alert(document.readyState);

// var isReady=false;
// var timer=null;
// function doReady(fn){
// 	if(timer) clearInterval(timer);
// 	if(isReady) return;
// 	isReady=true;
// 	fn();
// }
// function addDomLoaded(fn){
// 	//判断的都是complete，类似与onload，即图片加载后才加载
// 	timer=setInterval(function(){
// 	if(/loaded|complete/.test(document.readyState)){
// 		//loaded是部分加载，有可能只是DOM加载完毕，complete是完全加载，类似于onload
// 		doReady(fn);
// 	}
// },1)

//第二种方法.在图片之前加载
// 	timer=setInterval(function(){
// 		if(document&&document.getElementById&&document.getElementsByTagName&&document.body){
// 		doReady(fn);	
// 		}
// 	},1);
// }
// addDomLoaded(function(){
// 	var box=document.getElementById('box');
// 	alert(box.innerHTML);
// })

//完美兼容
function addDomLoaded(fn){
	if(document.addEventListener){//非ie678
		document.addEventListener('DOMContentLoaded',function(){
			fn();
			document.removeEventListener('DOMContentLoaded',arguments.callee);
		},false)
	}else{
		var isReady=false;
		var time=null;
		function doReady(fn){
			if(timer) clearInterval(timer);
			if(isReady) return;
			isReady=true;
			fn();
		}
		if((sys.opera&&sys.opera<9)||(sys.firefox&&sys.firefox<3)||(sys.webkit&&sys.webkit<525)){
			//无论采用哪种，基本上用不着了
			// 	timer=setInterval(function(){
			// 	if(/loaded|complete/.test(document.readyState)){
			// 		//loaded是部分加载，有可能只是DOM加载完毕，complete是完全加载，类似于onload
			// 		doReady(fn);
			// 	}
			// },1)
			
		//	第二种方法.在图片之前加载
				timer=setInterval(function(){
					if(document&&document.getElementById&&document.getElementsByTagName&&document.body){
					doReady(fn);	
					}
				},1);
		}else if(sys.ie&&sys.ie<9){
			var time=null;
			timer=setInterval(function(){
				try{
					document.documentElement.doScroll('left');
					var box=document.getElementById('box');
					alert(box.innerHTML);
				}catch(e){};
			},1);
		}	
	}
}