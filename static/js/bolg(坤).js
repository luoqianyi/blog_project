/*
window.onload=function(){
	
	
	
}
*/
$(function() {
	//个人中心
	$('.member').hover(function() {
		// alert('show');
		$('.member').css('background', 'url(/static/image/up_arrow.ico) no-repeat center right');
		$('#ul1').show().animate({
			content: {
				o: 100,
				height: 80
			}
		});
	}, function() {
		//alert('hide');
		$('.member').css('background', 'url(/static/image/down_arrow%20.ico) no-repeat center right');
		$('#ul1').animate({
			type: 1,
			speed: 5,
			content: {
				o: 0,
				h: 0
			},
			fn: function() {
				$('#ul1').hide();
			}
		});
	});
	//登录锁屏
	// $('.close').click(function() {
	// 	$('#login').hide();
	// 	$('#reg').hide();
	// 	$('#screen').unlock();
	// 	document.documentElement.style.overflow = 'auto';
	// });
	//注册框
	// $('.reg').click(function() {
	// 	$('#reg').css('transform', 'translate(-50%,-50%)').show();
	// 	$('#screen').lock();
	// 	document.documentElement.style.overflow = 'hidden';
	// });
	//登录框
	// $('.login').click(function() {
	// 	$('#login').css('transform', 'translate(-50%,-50%)').show();
	// 	$('#screen').lock();
	// 	document.documentElement.style.overflow = 'hidden';
	// });
	//拖拽登录框
	// $().getId('login').drag();
	//下面是可以拖动位置有多个
	// $('#login').drag($('h2').first(),$('.other').first());
	
	// $('#reg').drag($('#H1').first());
	// $('#login').drag($('h2').first());
	//百度分享初始化位置
	$('#share').css('top', getScroll().top + (getInner().height - parseInt(getStyle($('#share').first(), 'height'))) / 2 +'px');
	//滚动条事件 
	
	addEvent(window, 'scroll', function() {
		$('#share').animate({
			attr: 'y',
			start: $('#share').css('top', getScroll().top + (getInner().height - parseInt(getStyle($('#share').first(),
				'height'))) / 2 + 'px'),
			type: 0,
			target: getScroll().top + (getInner().height - parseInt(getStyle($('#share').first(), 'height'))) / 2,
		});
		//滚到某一处显示某个元素
		// alert($('#new_bolg').first().offsetTop);
		// alert(getScroll().top);
		$('#screen').css('top',getScroll().top+'px');
		// $('#login').css('top', getScroll().top+400+'px').css('left', '50%');
		// $('#reg').css('top', getScroll().top+400+'px').css('left', '50%');
		var num_scorll=getScroll().top-165-$('#new_bolg').first().offsetTop;
		if(getScroll().top-165>$('#new_bolg').first().offsetTop){
			$('#myself').css('top',1545+num_scorll+'px');
		}
		if(getScroll().top-165<$('#new_bolg').first().offsetTop){
			$('#myself').css('top','10px');
		}
		
	});
	//百度分享收缩效果
	$('#share').hover(function() {
		$('#share').animate({
			attr: 'x',
			target: 0,
		});
	}, function() {
		$('#s').click(function() {
			$('#share').animate({
				attr: 'x',
				target: -211
			})
		})
	});
	//滑动导航
	$('.black').find('li').hover(function() {
		var target = $(this).first().offsetLeft;
		$('#nav').find('span').animate({
			attr: 'x',
			target: target + 40,
			step: 10,
			time: 30
		})
	}, function() {
		$('#nav').find('span').animate({
			attr: 'x',
			target: 40,
			step: 10,
			time: 30
		})
	})
	//左侧菜单
	$('.hfirst').cut(function() {
		$('#uf').animate({
			content: {
				h: 0,
				o: 0
			}
		});
	}, function() {
		$('#uf').animate({
			content: {
				h: 150,
				o: 100
			}
		})
	});
	$('.hsecond').cut(function() {
		$('#us').animate({
			content: {
				h: 0,
				o: 0
			}
		});
	}, function() {
		$('#us').animate({
			content: {
				h: 150,
				o: 100
			}
		})
	});
	$('.hthree').cut(function() {
		$('#ut').animate({
			content: {
				h: 0,
				o: 0
			}
		});
	}, function() {
		$('#ut').animate({
			content: {
				h: 150,
				o: 100
			}
		})
	});
	//表单验证
	//alert($('form').first());
	//alert($('form').first().user.value);
	//alert($('form').form('user').value());//显示输入的值
	//$('form').form('user').value('fhhhh'));修改输入的值
	/*用户名框*/
	// $('form').form('user').bind('focus', function() {
	// 	$('.info_user').css('display', 'block');
	// 	$('.error_user').css('display', 'none');
	// 	$('.succeed_user').css('display', 'none');
	// }).bind('blur', function() {
	// 	if (trim($(this).value()) == '') {
	// 		$('.info_user').css('display', 'none');
	// 		$('.error_user').css('display', 'none');
	// 		$('.succeed_user').css('display', 'none');
	// 	} else if (!/[a-zA-Z0-9_]{2,20}/.test(trim($(this).value()))) {
	// 		$('.error_user').css('display', 'block');
	// 		$('.info_user').css('display', 'none');
	// 		$('.succeed_user').css('display', 'none');
	// 	} else {
	// 		$('.succeed_user').css('display', 'block');
	// 		$('.error_user').css('display', 'none');
	// 		$('.info_user').css('display', 'none');
	// 	}
	// });
	// /*密码框*/
	// $('.text2').bind('focus', function() {
	// 	$('.info_pass').css('display', 'block');
	// 	$('.error_pass').css('display', 'none');
	// 	$('.q1').css('display', 'none');
	// 	$('.q2').css('display', 'none');
	// 	$('.q3').css('display', 'none');
	// }).bind('blur', function() {
	// 	if (trim($(this).value()) == '') {
	// 		$('.info_pass').css('display', 'none');
	// 	} else if (trim($(this).value()).length >= 6 && trim($(this).value()).length <= 20) {
	// 		if (/^[0-9]{6,20}$|^[a-zA-Z]{6,20}$/.test(trim($(this).value()))) {
	// 			$('.info_pass').css('display', 'none');
	// 			$('.q1').css('display', 'block');
	// 		}
	// 		if (/([0-9]+(\W+|\_+|[A-Za-z]+))+|([A-Za-z]+(\W+|\_+|\d+))+|((\W+|\_+)+(\d+|\w+))+/.test(trim($(this).value()))) {
	// 			$('.q1').css('display', 'none');
	// 			$('.info_pass').css('display', 'none');
	// 			$('.q2').css('display', 'block');
	// 		}
	// 		if (/(?=.*[a-z])(?=.*\d)(?=.*[-#_*%$])^.{8,16}$/.test(trim($(this).value()))) {
	// 			$('.q1').css('display', 'none');
	// 			$('.info_pass').css('display', 'none');
	// 			$('.q2').css('display', 'none');
	// 			$('.q3').css('display', 'block');
	// 		}
	// 	} else {
	// 		$('.info_pass').css('display', 'none');
	// 		$('.error_pass').css('display', 'block');
	// 	}
	// });
	//密码强度验证
	// $('form').form('pass').bind('keyup',function(){
	// 	check_pass(this);
	// });
	// function check_pass(element){
	// 	var value=trim($(element).value());
	// 	var value_length=value.length;
	// 	var flag=false;
	// 	var code_length=0;

	// 	if(/[0-9]/.test(value)) code_length++;
	// 	if(/[a-z]/.test(value)) code_length++;
	// 	if(/[A-Z]/.test(value)) code_length++;  
	// 	if(/[^a-zA-Z0-9]/.test(value)) code_length++; 

	// }
	/*密码验证*/
	// $('form').form('notpass').bind('focus', function() {
	// 	$('.info_notpass').css('display', 'block');
	// 	$('.error_notpass').css('display', 'none');
	// 	$('.succeed_notpass').css('display', 'none');
	// }).bind('blur', function() {
	// 	if (trim($(this).value()) == '') {
	// 		$('.info_notpass').css('display', 'none');
	// 	} else if (trim($('form').form('pass').value()) == trim($(this).value())) {
	// 		$('.info_notpass').css('display', 'none');
	// 		$('.error_notpass').css('display', 'none');
	// 		$('.succeed_notpass').css('display', 'block');
	// 	} else {
	// 		$('.info_notpass').css('display', 'none');
	// 		$('.error_notpass').css('display', 'block');
	// 		$('.succced_notpass').css('display', 'none');
	// 	}
	// });
	// //回答验证
	// $('form').form('ans').bind('focus', function() {
	// 	$('.info_ans').css('display', 'block');
	// 	$('.error_ans').css('display', 'none');
	// 	$('.succeed_ans').css('display', 'none');
	// }).bind('blur', function() {
	// 	if (trim($(this).value()) == '') {
	// 		$('.info_ans').css('display', 'none');
	// 	} else if (trim($(this).value()).length >= 2 && trim($(this).value()).length <= 32) {
	// 		$('.info_ans').css('display', 'none');
	// 		$('.error_ans').css('display', 'none');
	// 		$('.succeed_ans').css('display', 'block');
	// 	} else {
	// 		$('.info_ans').css('display', 'none');
	// 		$('.error_ans').css('display', 'block');
	// 		$('.succeed_ans').css('display', 'none');
	// 	}
	// });
	// //邮箱验证
	// $('form').form('email').bind('focus', function() {
	// 	$('.info_email').css('display', 'block');
	// 	$('.error_email').css('display', 'none');
	// 	$('.succeed_email').css('display', 'none');
	// }).bind('blur', function() {
	// 	if (trim($(this).value()) == '') {
	// 		$('.info_email').css('display', 'none');
	// 	} else if (/^[\w-\.]+@[\w-]+(\.[a-zA-Z]{2,4}){1,2}$/.test(trim($(this).value()))) {
	// 		$('.info_email').css('display', 'none');
	// 		$('.error_email').css('display', 'none');
	// 		$('.succeed_email').css('display', 'block');
	// 	} else {
	// 		$('.info_email').css('display', 'none');
	// 		$('.error_email').css('display', 'block');
	// 		$('.succeed_email').css('display', 'none');
	// 	}
	// });
	// //设置年月日
	// var year = $('form').form('year');
	// var month = $('form').form('month');
	// var day = $('form').form('day');
	// var day30 = [4, 6, 9, 11];
	// var day31 = [1, 3, 5, 7, 8, 10, 12];
	// // alert(year.first());
	// /*注入年*/
	// for (var i = 2020; i >= 0; i--) {
	// 	year.first().add(new Option(i, i), undefined);
	// }
	// /*注入月*/
	// for (var i = 1; i <= 12; i++) {
	// 	month.first().add(new Option(i, i), undefined);
	// }
	// /*注入日*/
	// //判断某一值是否存在某个数组里
	// function inArray(array, value) {
	// 	for (var i in array) {
	// 		if (array[i] == value) return true;
	// 	}
	// 	return false;
	// }
	// //设置日期函数
	// function select_day() {
	// 	if (month.value() != 0 && year.value() != 0) {
	// 		var cur_day = 0;
	// 		if (inArray(day31, parseInt(month.value()))) {
	// 			cur_day = 31;
	// 		} else if (inArray(day30, parseInt(month.value()))) {
	// 			cur_day = 30;
	// 		} else {
	// 			if ((parseInt(year.value()) % 4 == 0 && parseInt(year.value()) % 100 != 0) || parseInt(year.value()) % 400 == 0) {
	// 				cur_day = 29;
	// 			} else {
	// 				cur_day = 28;
	// 			}
	// 		}
	// 		day.first().options.length = 1;
	// 		for (var i = 1; i <= cur_day; i++) {
	// 			day.first().add(new Option(i, i), undefined);
	// 		}
	// 	} else {
	// 		day.first().options.length = 1;
	// 	}
	// }
	// /*日期*/
	// year.bind('change', select_day);
	// month.bind('change', select_day)
	// //提示备注
	// /*清尾*/
	// function check_ps() {
	// 	var num = 200 - $('.ps').value().length;
	// 	if (num >= 0) {
	// 		$('.run').css('display', 'block');
	// 		$('.num1').html(num);
	// 		$('.flow').css('display', 'none');
	// 	} else {
	// 		$('.flow').css('display', 'block');
	// 		$('.num2').html(Math.abs(num)).css('color', 'red');
	// 		$('.run').css('display', 'none');
	// 	}
	// }
	// $('.clear').click(function() {
	// 	$('.ps').value($('.ps').value().substring(0, 200));
	// 	check_ps();
	// });
	// /*使用*/
	// $('.ps').bind('keyup', check_ps);
	// //在刷新页面后，还原所有的表单数据初始化状态
	// $('form').first().reset();
	// //提交注册表单
	// /*年月日检测*/
	// function check_birth() {
	// 	if (year.value() != 0 && month.value() != 0 && day.value() != 0) return true;
	// }
	// /*选择日后自动消失*/
	// day.bind('change', function() {
	// 	if (check_birth()) {
	// 		$('.error_birth').css('display', 'none');
	// 	}
	// });
	// /*邮件检测*/
	// function check_email() {
	// 	if (/^[\w\-\.]+@[\w\-]+(\.[a-zA-Z]{2,4}){1,2}$/.test(trim($('form').form('email').value()))) return true;
	// }
	// /*问答*/
	// function check_ans() {
	// 	if (trim($('form').form('ans').value()).length >= 2 && trim($('form').form('ans').value()).length <= 32) return true;
	// }
	// /*提问*/
	// $('form').form('ques').bind('change', function() {
	// 	if ($(this).value() != 0) {
	// 		$('.error_ques').css('display', 'none');
	// 	}
	// });
	//
	// function check_ques() {
	// 	if ($('form').form('ques').value() != 0) return true;
	// }
	// /*密码检测*/
	// function check_pass() {
	// 	if (trim($('form').form('pass').value()).length != 0) return true;
	// }
	// /*密码确认*/
	// function check_notpass() {
	// 	if (trim($('form').form('pass').value()) == trim($('form').form('notpass').value())) return true;
	// }
	// /*用户名检测*/
	// function check_user() {
	// 	if (/[a-zA-Z0-9_]{2,20}/.test($('form').form('user').value())) return true;
	// }
	// /*检测*/
	// $('#but1').click(function() {
	// 	var f = true;
	// 	if (!check_user()) {
	// 		$('.error_user').css('display', 'block');
	// 		f = false;
	// 	}
	// 	if (!check_pass()) {
	// 		$('.error_pass').css('display', 'block');
	// 		f = false;
	// 	}
	// 	if (!check_notpass()) {
	// 		$('.error_notpass').css('display', 'block');
	// 		f = false;
	// 	}
	// 	if (!check_ques()) {
	// 		$('.error_ques').css('display', 'block');
	// 		f = false;
	// 	}
	// 	if (!check_ans()) {
	// 		$('.error_ans').css('display', 'block');
	// 		f = false;
	// 	}
	// 	if (!check_email()) {
	// 		$('.error_email').css('display', 'block');
	// 		f = false;
	// 	}
	// 	if (!check_birth()) {
	// 		$('.error_birth').css('display', 'block');
	// 		f = false;
	// 	}
	// 	if (f) {
	// 		alert('表单检测完毕，提交表单！');
	// 		$('form').first().submit();
	//
	// 	}
	// });
	//轮播器初始化
	$('#banner').find('li').getElement(0).css('color', 'red');
	$('#banner').find('strong').html($('#banner').find('img').getElement(0).attr('alt'));
	$('#banner').find('img').opacity(0);
	$('#banner').find('img').getElement(0).opacity(100);
	
	//轮播器计数器
	var banner_index = 1;
	//设置轮播器类别
	var banner_type = 1; //1是透明度轮播，2是上下滚动轮播
	//轮播器坐标
	for (var i = 0; i < $('.img').length(); i++) {
		$('.img').getElement(i).css('top', 0 + (i * 400) + 'px');
	}
	//手动轮播器
	$('#banner').find('li').hover(function() {
		clearInterval(banner_timer);
		// alert($(this).css('color'));
		if ($(this).css('color') != 'rgb(255, 0, 0)') {
			banner(this, banner_index == 0 ? $('.li').length() - 1 : banner_index - 1);
		}
	}, function() {
		banner_timer = $(this).index() + 1;
		banner_timer = setInterval(banner_fn, 3000);
	});
	//自动轮播器
	var banner_timer = setInterval(banner_fn, 3000);
	//简化共用代码	
	function banner(obj, prev) {
		if (banner_type == 1) {
			$('.img').css('zIndex', 1);
			$('.li').css('color', 'green');
			$(obj).css('color', 'red');
			$('#banner').find('strong').html($('.img').getElement($(obj).index()).attr('alt'));
			$('.img').getElement(prev).animate({
				attr: 'o',
				target: 0,
				t: 30,
				step: 10
			});
			$('.img').getElement($(obj).index()).animate({
				attr: 'o',
				target: 100,
				t: 30,
				step: 10
			}).css('top', 0).css('zIndex', 2);
		}
		else if(banner_type == 2) {
			$('.img').opacity(100);
			$('.img').css('zIndex', 1);
			$('.li').css('color', 'green');
			$(obj).css('color', 'red');
			$('#banner').find('strong').html($('.img').getElement($(obj).index()).attr('alt'));
			$('.img').getElement(prev).animate({
				attr: 'y',
				target: 400,
				t: 1,
				step: 5
			}).css('zIndex',1).opacity(100);
			$('.img').getElement($(obj).index()).animate({
				attr: 'y',
				target: 0,
				t: 1,
				step: 5
			}).css('top', '-400px').css('zIndex', 2).opacity(100);
		}

	}

	function banner_fn() {
		if (banner_index >= $('.li').length()) {
			banner_index = 0;
		}
		banner($('.li').getElement(banner_index).first(), banner_index == 0 ? $('.li').length() - 1 : banner_index - 1);
		banner_index++;
	}
	//切换内容栏目
	$('#tab_buttons').find('li').getElement(0).css('border-bottom','2px solid black');
	$('#tab_buttons').find('li').click(function(){
		var num_now=$(this).index();
		$(this).css('border-bottom','2px solid black');
		if(num_now==0){
			$('#tab_buttons').find('li').getElement(1).css('border-bottom','none');
			$('#tab_buttons').find('li').getElement(2).css('border-bottom','none');
			$('#newstab').css('display','block');
			$('#newsmid').css('display','none');
			$('#newslast').css('display','none');
		}else if(num_now==1){
			$('#tab_buttons').find('li').getElement(0).css('border-bottom','none');
			$('#tab_buttons').find('li').getElement(2).css('border-bottom','none');
			$('#newsmid').css('display','block');
			$('#newstab').css('display','none');
			$('#newslast').css('display','none');
		}else{
			$('#tab_buttons').find('li').getElement(0).css('border-bottom','none');
			$('#tab_buttons').find('li').getElement(1).css('border-bottom','none');
			$('#newsmid').css('display','none');
			$('#newstab').css('display','none');
			$('#newslast').css('display','block');
		}
	});
	//鼠标图片放到上面图片变大
	$('#newstab').find('li').hover(function(){
		var num_photo=$(this).index();
		$('#newstab').find('img').getElement(num_photo).animate({
			type:0,
			content:{
				w:210,
				h:110,
			}
		})
		$('#newstab').find('span').getElement(num_photo).animate({
			speed:10,
			content:{
				o:10
			}
		})
	},function(){
		var num_photo=$(this).index();
		$('#newstab').find('img').getElement(num_photo).animate({
			type:0,
			content:{
				w:200,
				h:100,
			}
		})
		$('#newstab').find('span').getElement(num_photo).animate({
			speed:10,
			content:{
				o:60
			}
		})
	});
	
	$('#newsmid').find('li').hover(function(){
		var num_photo=$(this).index();
		$('#newsmid').find('img').getElement(num_photo).animate({
			type:0,
			content:{
				w:220,
				h:110,
			}
		})
		$('#newsmid').find('span').getElement(num_photo).animate({
			speed:10,
			content:{
				o:10
			}
		})
	},function(){
		var num_photo=$(this).index();
		$('#newsmid').find('img').getElement(num_photo).animate({
			type:0,
			content:{
				w:210,
				h:110,
			}
		})
		$('#newsmid').find('span').getElement(num_photo).animate({
			speed:10,
			content:{
				o:60
			}
		})
	});
	
	$('#newslast').find('li').hover(function(){
		var num_photo=$(this).index();
		$('#newsmid').find('img').getElement(num_photo).animate({
			type:0,
			content:{
				w:220,
				h:110,
			}
		})
		$('#newslast').find('span').getElement(num_photo).animate({
			speed:10,
			content:{
				o:10
			}
		})
	},function(){
		var num_photo=$(this).index();
		$('#newsmid').find('img').getElement(num_photo).animate({
			type:0,
			content:{
				w:210,
				h:110,
			}
		})
		$('#newslast').find('span').getElement(num_photo).animate({
			speed:10,
			content:{
				o:60
			}
		})
	});
	//内容表格显示
	$('.newslist').find('dd').hover(function(){
		var num_dd=$(this).index();
		$('.newslist').find('span').getElement(num_dd).css('color','red');
		$('.newslist').find('dd').getElement(num_dd).animate({
			content: {
				h: 60
			}
		});
	},function(){
		var num_dd=$(this).index();
		$('.newslist').find('span').getElement(num_dd).css('color','lightblue');
		$('.newslist').find('dd').getElement(num_dd).animate({
			content:{
				h:30
			}
		})
	});
	
	$('.newslist1').find('dd').hover(function(){
		var num_dd=$(this).index();
		$('.newslist1').find('span').getElement(num_dd).css('color','red');
		$('.newslist1').find('dd').getElement(num_dd).animate({
			content: {
				h: 60
			}
		});
	},function(){
		var num_dd=$(this).index();
		$('.newslist1').find('span').getElement(num_dd).css('color','lightblue');
		$('.newslist1').find('dd').getElement(num_dd).animate({
			content:{
				h:30
			}
		})
	});
	
	$('.newslist2').find('dd').hover(function(){
		var num_dd=$(this).index();
		$('.newslist2').find('span').getElement(num_dd).css('color','red');
		$('.newslist2').find('dd').getElement(num_dd).animate({
			content: {
				h: 70
			}
		});
	},function(){
		var num_dd=$(this).index();
		$('.newslist2').find('span').getElement(num_dd).css('color','lightblue');
		$('.newslist2').find('dd').getElement(num_dd).animate({
			content:{
				h:30
			}
		})
	});
	//阴影显示
	$('#zhuanti').find('li').hover(function(){
		var num_li=$(this).index();
		$('#zhuanti').find('img').getElement(num_li).css('transform','scale(1.1)');
		$(this).css('box-shadow','0px 0px 2px 2px lightgreen');
	},function(){
		var num_li=$(this).index();
		$('#zhuanti').find('img').getElement(num_li).css('transform','scale(1)');
		$(this).css('box-shadow','none');
	});
});
