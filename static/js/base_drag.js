//拖拽功能
$().exend('drag',function(){
	var tags=arguments;
	for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].onmousedown = function(evt) {
				//拖拽的流程：
				/* 1.先点下去
				   2.在点下的物体被选中，进行move移动
				   3.抬起鼠标，停止移动
				   点击某个物体，用push即可，move和up是全局区域，也就是整个文档通用，
				   应该用document
				 */ 
				if(trim(this.innerHTML).length==0) evt.preventDefault();
				var push = this;
				var insideX = evt.clientX - push.offsetLeft;
				var insideY = evt.clientY - push.offsetTop;
				//自定义拖拽区域
				var flag=false;
				for(var i=0;i<tags.length;i++){
					if(evt.target==tags[i]){
						flag=true;
						break;
					}
				}
				if(flag){
				document.addEventListener('mousemove',move,false);
				document.addEventListener('mouseup',up,false);
				}
				else{
					document.removeEventListener('mousemove',move,false);
					document.removeEventListener('mouseup',up,false);
				}
				function move(evt) {
					var left=evt.clientX-insideX;
					var top=evt.clientY-insideY;
					if(left<0){
						left=0;
					}
					else if(left>innerWidth){
						left=innerWidth;
					}
					if(top<0){
						top=0;
					}
					else if(top>innerHeight){
						top=innerHeight;
					}
					push.style.left = left+'px';
					push.style.top = top+'px';
				}
				function up(evt) {
					document.removeEventListener('mousemove',move,false);
					document.removeEventListener('mouseup',up,false);
				}
			}
		}
		return this;
});
	