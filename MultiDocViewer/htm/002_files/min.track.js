/* duba 2016-02-18T13:07:49 */
$(function(){function a(a){var b="https://j.wan.liebao.cn/game/recent_invoked_by_frontend?v=2&limit=5&callback=?";$.ajax({type:"GET",url:b,dataType:"jsonp",jsonpCallback:"recent_play"})}window.recent_play=function(a){var b,c;if(a&&1==a.code&&a.data.length>=1){window.location.search.toLowerCase();$cookie("skin_type")?(b=!1,c={show:85911,open:85914,close:84752,click:85917}):$(window).width()<1024?(b=!1,c={show:85911,open:85914,close:84752,click:85917}):(b=!0,c={show:65996,open:84751,close:84752,click:65997});var d=a.data.length>4?4:a.data.length,e=a.mygame.icon,f=a.mygame.text,g=a.mygame.url;f=f||"我的游戏",g=g||"http://wan.liebao.cn/?frm=dbdh-mygamex",e=""==e?"":'<img src="'+e+'" />';var h="";h+='<div class="mg_bar">',h+=""+e+'<a href="'+g+'" cid="'+c.click+'">'+f+'</a><i class="mg_btn"></i>',h+="</div>",h+='<div class="titInfo">您好：<a href="'+a.links.user.url+'"cid="'+c.click+'">'+a.links.user.text+"</a></div>",h+='<div class="titInfo">积分：<a href="'+a.links.credit.url+'"cid="'+c.click+'">'+a.links.credit.text+"</a></div>",h+='<div class="titInfoa"><a cid="2104813" href="'+a.links.sign.url+'" class="orange">'+a.links.sign.text+'</a><a cid="2104894" href="'+a.links.exchange.url+'" class="gray">'+a.links.exchange.text+"</a></div>",h+='<div class="titInfo"><a class="nocolor" href="'+a.links.login.url+'"cid="'+c.click+'">'+a.links.login.text+"</a></div>",h+="<ul>";for(var i=0;d>i;i++)h+='<li><a cid="'+c.click+'" href="'+a.data[i].play_url+'"><img src="'+a.data[i].icon1+'" /><strong>'+a.data[i].game_name+"</strong><i>"+a.data[i].server_name+"</i></a></li>";h+="</ul>";var j=document.createElement("div");j.id="mygame",document.getElementsByTagName("body")[0].appendChild(j),document.getElementById("mygame").innerHTML=h,h="<i>"+d+"</i>";var j=document.createElement("div");j.id="mg_s_icon",document.getElementsByTagName("body")[0].appendChild(j),document.getElementById("mg_s_icon").innerHTML=h,bindGameEvent(c.open,c.close),findDimensions(b,c.show),$(window).resize(function(a){findDimensions(b,0)})}},window.bindGameEvent=function(a,b){var c=$("#mygame").height();$(".mg_btn").click(function(){var d=$("#mygame"),e=$(".mg_btn"),f=e.attr("class");"mg_btn"==f?("zp"==$("#mg_s_icon").attr("class")?(d.animate({height:"0",width:"0"},300),$("#mg_s_icon").show(300)):d.animate({height:"30px",width:"118px"},300),e.addClass("mg_btn_show"),__tj(1031100,1163,b,"","","","")):(d.animate({height:c,width:"156px"},300),e.removeClass("mg_btn_show"),__tj(1031100,1163,a,"","","","")),$("#mg_s_icon").children("i").hide()}),$("#mg_s_icon").click(function(){var b=$("#mygame");b.css("display","block"),b.animate({height:c,width:"156px"},300),$(".mg_btn").removeClass("mg_btn_show"),$("#mg_s_icon").hide(),__tj(1031100,1163,a,"","","","")})},window.findDimensions=function(a,b){a?($("#mg_s_icon").css("display","none"),$("#mg_s_icon").removeClass("zp"),$("#mygame").css("display","block")):($("#mg_s_icon").css("display","block"),$("#mygame").css("display","none"),$("#mg_s_icon").addClass("zp")),b>0&&__tj(1031100,1365,b,"","","","")},a()});