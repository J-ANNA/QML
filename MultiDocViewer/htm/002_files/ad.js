/* duba_component 2017-05-03T19:19:25+0800 */
function ad1(){var a=when.defer();return Ad_MiddleModel&&Ad_MiddleModel.init(a),a.promise}function ad2(){var a=when.defer();return $cookie("bigc1")&&$cookie("bigc1").split("-")[1]==$(".top_ad_ban a").attr("cid")?($(".top_ad_tmall").css("display","block"),a.resolve()):(Ad.closed="block",Ad&&Ad.init(a)),a.promise}function ad3(){var a=when.defer();return BottomAd&&BottomAd.init(a),a.promise}function ad4(){var a=when.defer();return window.redBag&&window.redBag(a),a.promise}function ad5(){var a=when.defer();return"undefined"!=typeof qqf_url&&qqf_url.bigurl&&qqf_url.smallurl?flyBalloon&&flyBalloon(a):a.resolve(),a.promise}function ad6(){var a=when.defer();return hotBox&&hotBox.bindOverTurn(a),a.promise}function ad7(){var a=when.defer();return null==$cookie("left_side_close")&&$(".left_content_hook").size()>0?showLeftHook&&showLeftHook(a):a.resolve(),a.promise}function ad8(){var a=when.defer();return Floor2&&Floor2.init(a),a.promise}function ad9(){function a(){var a=$(window).width(),b=$("#J_FloorWrap"),c=b.length>0&&b.is(":visible");1347>a?(Floor2.showDt=!1,$(".side_bar").hide(),1200>a&&(c||($(".second_nav").length>0?0==$(".second_nav .active").index()?0:1:0)||$(".side_bar").show(),1175>a&&(Floor2.showDt=!1,$(".side_bar").hide()))):c||($(".second_nav").length>0?0==$(".second_nav .active").index()?0:1:0)||$(".side_bar").show()}a(),$(window).on("resize",function(){a()});var b=when.defer();return b.resolve(),b.promise}function ad10(){var a=when.defer();return car_ads&&car_ads.init(a),a.promise}function ad11(){var a=when.defer();if($(window).width()>1200){var b=$(".J_hotScale");b.length>0?(b.addClass("hot-scaling"),setTimeout(function(){b.removeClass("hot-scaling"),a.resolve()},3e3)):a.resolve()}else a.resolve();return a.promise}function ad13(){var a=when.defer();return Ad_Hspf&&Ad_Hspf.init(a),a.promise}function ad14(){var a=when.defer(),b=$("#redbagRain");return redbagRain.init(b,a),a.promise}function ad15(){var a=when.defer();return Ad_Kpgj&&Ad_Kpgj.init(a),a.promise}function ad16(){var a=when.defer();return Ad_Cjzp&&Ad_Cjzp.init(a),a.promise}function ad17(){var a=when.defer();return siye&&siye.init(a),a.promise}var Floor2={isFirst:!0,isAuto:!1,waveTimer:null,reportWavePv:!0,scroll:!1,sideBarPadding:parseInt($(".left_slidebar_con").find(".left_slidebar").css("paddingTop"))||0,anchorFlag:!1,animing:!1,startTime:null,endTime:null,rollCount:parseInt(floor2Config.roll)||2,showDt:!1,loadImg:function(){var a=$("#J_FloorSlide"),b=$("#J_FloorWrap");$.imgload.call(b.find(".J_panel:eq(0)")),a.ImagesView({cont:".J_cont",list:".J_panel",showPageList:!0,callBack:function(a){$.imgload.call(a),0==a.index()&&__tj({snode:1365,cid:"45386395",w:"dhel"}),1==a.index()&&__tj({snode:1365,cid:"45385806",w:"dhel"})}})},bind:function(){var a=$("#J_FloorWrap"),b=$("#J_FloorWave"),c=this;$("#J_floor2Anchor").show().on("click",function(){c.anchorFlag?(c.downStair(),c.statLoading(),$(this).removeClass("floor2_anchor_fold")):(c.upStair(),$(this).addClass("floor2_anchor_fold")),Stat.TJ(38820322,"gn")}),b.on("click",function(){c.upStair(),Stat.TJ(38820323,"dhel")}),b.on("mouseenter",function(){clearTimeout(c.waveTimer)}).on("mouseleave",function(){c.waveTimer=setTimeout(function(){b.slideUp()},5e3)}),a.find(".J_fold").on("click",function(){c.downStair(),c.statLoading(),Stat.TJ(40187737,"dhel")})},downStair:function(){var a=$("#J_FloorWrap"),b=$(".left_slidebar_con"),c=$(".side_bar"),d=Floor2;d.startTime=!1,d.animing=!0,d.scroll?(a.hide(),a.slideUp(100,function(){$(window).scrollTop(0),d.isAuto=!0,b.css("top",0).find(".left_slidebar").css("padding-top",d.sideBarPadding),d.showDt&&c.show(),d.animing=!1,document.body.onmousewheel=null})):a.slideUp(100,function(){setTimeout(function(){b.css("top",0).find(".left_slidebar").css("padding-top",d.sideBarPadding),d.showDt&&c.show()}),d.animing=!1,document.body.onmousewheel=null}),d.anchorFlag=!1,setTimeout(function(){$("#J_floor2Anchor").removeClass("floor2_anchor_fold")})},upStair:function(){var a=$("#J_FloorWrap"),b=$(".left_slidebar_con"),c=$(".side_bar"),d=$("#style_box"),e=556,f=Floor2;document.body.onmousewheel=function(){return!1},clearTimeout(f.waveTimer),$("#J_FloorWave").hide(),f.animing=!0,a.slideDown(100,function(){f.animing=!1,d.length>0&&parseInt(d.css("height"))&&($("#style_box").css("height",0),themeSetObj.toggleSkin.height=!1,$(".J_ico_themes").html("<em></em>换肤")),f.startTime=+new Date}),b.is(":visible")&&b.css("top",e).find(".left_slidebar").css("padding-top",0),c.is(":visible")?(f.showDt=!0,c.hide()):f.showDt=!1,f.isFirst&&(f.loadImg(),f.isFirst=!1),f.scroll=!0,f.anchorFlag=!0,$("#J_floor2Anchor").addClass("floor2_anchor_fold"),Stat.TJ(37760314,"dhel","","",1365)},show:function(){if(!($("#J_FloorWrap").length<1)){this.bind();var a=0,b=!1,c=-1,d=0,e=this,f=$("#J_FloorWrap"),g=$(".left_slidebar_con"),h=$("#J_FloorWave");$(document).on("mousewheel DOMMouseScroll",function(g){e.isAuto&&(c=-1,e.isAuto=!1),d=document.body.scrollTop||document.documentElement.scrollTop,0==d&&0!=c&&(b=!0),g.originalEvent.wheelDelta>0||g.originalEvent.detail<0?0==d&&(b&&a++,f.is(":visible")||(h.slideDown(),clearTimeout(e.waveTimer),e.waveTimer=setTimeout(function(){h.slideUp()},5e3)),e.reportWavePv&&(Stat.TJ(38820323,"dhel","","",1365),e.reportWavePv=!1)):(0==d&&0==c&&g.originalEvent.wheelDelta<=0&&g.originalEvent.detail>=0&&e.statLoading(),e.downStair(),e.scroll=!1),c=d}),$(window).on("scroll",function(){d=document.body.scrollTop||document.documentElement.scrollTop,556>d&&f.is(":visible")?g.css("top",556-d).find(".left_slidebar").css("padding-top",0):g.css("top",0).find(".left_slidebar").css("padding-top",e.sideBarPadding)})}},statLoading:function(){var a=this;a.startTime&&(a.endTime=+new Date,__tj({snode:1365,cid:"45386298",w:"dhel",loading:a.endTime-a.startTime}))},init:function(a){this.show(),a&&a.resolve()}},Ad={showBg:!1,init:function(a){Ad.domain=window.location.hostname,Ad.inWidth=document.documentElement.clientWidth,Ad.inHeight=document.documentElement.clientHeight,Ad.topBan(a)},topBan:function(a){function b(b){"dbzmtip"==b?(d.attr("data-originall","/static/v2/images/promotion/jhs.jpg"),d.attr("href","http://s.click.taobao.com/t?e=m%3D2%26s%3DunTEsguIp%2FgcQipKwQzePCperVdZeJviEViQ0P1Vf2kguMN8XjClAr1OmKVebKf8W9enz40Vo1K75SCrlHqn%2F0nCiR6R4Lx%2BgcAuXaaSK1Fi4dMP%2FYbEPuo0BcZWWIRYYA%2FDpPH01wK9AmARIwX9K%2BAjBDXvuqoU47FHjfsActnIQu5PdXpojKJn5AyUbPoV"),c.css("background","url(/static/v2/images/promotion/jhs_x.jpg) repeat-x"),d.css("background","url(/static/v2/images/promotion/jhs.jpg) center center no-repeat ")):(d.attr("data-originall",window.topUrl.url),c.css("background","url("+window.topUrl.repeat+") repeat-x"),d.css("background","url("+window.topUrl.url+") center center no-repeat "),d.attr("href",window.topUrl.href),d.attr("cid",window.topUrl.cid));var e=d.attr("data-originall"),f=new Image,g=$(".top_ad_tmall").size()?45:0;f.onload=function(){d.attr("src","/static/v2/images/blank.gif");this.height;c.animate({height:330},1e3,function(){Ad.closed&&$("#top_closed").show().click(function(b){b.preventDefault(),$(".top_ad_tmall").css("display","block"),$(this).parent().parent().hide();var c=$.NOW_NEXT()-+new Date;c=Number((c/864e5).toFixed(5)),$cookie("bigc1",$.NOW_NEXT()+"-"+$(".top_ad_ban a").attr("cid"),{expires:c}),a.resolve(),setTimeout(function(a){window.clearTimeout(Ad.topBanTime)},1e3)})}).show(),c.hover(function(){window.clearTimeout(window.hoverBig||null),Ad.topBanTime&&clearTimeout(Ad.topBanTime)},function(){Ad.topBanTime=setTimeout(function(){c.animate({height:g},null,function(){c.hide(),$(".top_ad_tmall").css("display","block"),a.resolve()})},2e3)}),Ad.topBanTime=setTimeout(function(){c.animate({height:45},null,function(){if(c.hide(),$(".top_ad_tmall").css("display","block"),window.topUrl&&"1"==window.topUrl.playonce){var b=$.NOW_NEXT()-+new Date;b=Number((b/864e5).toFixed(5)),$cookie("bigc1",$.NOW_NEXT()+"-"+$(".top_ad_ban a").attr("cid"),{expires:b})}a.resolve()})},4e3)},f.src=e}var c=$(".top_ad_ban");if(0==c.length)return void a.resolve();var d=c.find("a");Ad.showBg=!0,b("jsq"),setTimeout(function(){try{$.trace(2720761,!0)}catch(a){}},1e3)}},car_ads={init:function(a){function b(){f>h?($(".car_ads a").css("margin-left",h+=1.6),h>820&&$(".car_ads a").css("z-index",3)):(clearInterval(i),$(".car_ads .ad1").hide(),$(".car_ads .ad2").show())}if($(".car_ads").length>0&&$(".car_ads .ad1").size()>0&&$(".car_ads .ad2").size()>0){$(".car_ads").show();var c=$(".car_ads .ad1").width(),d=$(".car_ads .ad2").width(),e=d>c?d:c,f=1180-e;$(".car_ads a").css("width",e),$(".car_ads .ad1").css("margin-left",-(c/2)),$(".car_ads .ad2").css("margin-left",-(d/2));var g=$.browser.msie?15:20,h=0,i=setInterval(function(){b()},g);a.resolve();var j=!1;$(".car_ads a").hover(function(){clearInterval(i),$(".car_ads .ad1").hide(),$(".car_ads .ad2").show();var a=$(this).attr("id");j||(__tj(1031100,1365,a,"car_ads","","","","index"),j=!0)},function(){f>h&&($(".car_ads .ad1").show(),$(".car_ads .ad2").hide(),i=setInterval(function(){b()},g))}).click(function(){var a=$(this).attr("id"),b=$(this).attr("href");__tj(1031100,1163,a,"car_ads","","","","index","","","","",b)})}else a.resolve()}},popShow=function(){function a(){var a="",b=navigator.userAgent;return b.indexOf("LBBROWSER")>=0?a="liebao":b.indexOf("Maxthon")>=0?a="maxthon":b.indexOf("360SE")>=0?a="360se":window.opera?a="opera":/AppleWebKit\/(\S+)/.test(b)?/Chrome\/(\S+)/.test(b)?a="chrome":/Version\/(\S+)/.test(b)&&(a="safari"):/KHTML\/(\S+)/.test(b)||/Konqueror\/([^;]+)/.test(b)?a="konq":b.indexOf("Firefox")>=0?a="firefox":/MSIE ([^;]+)/.test(b)&&(a="ie"),a}if("undefined"!=typeof topshow){for(var b=a(),c=!0,d=0;d<topshow.browsers.length;d++)topshow.browsers[d]==b&&(c=!1);if(c&&""!=topshow.text){var e='<div><div style="position:absolute;top:0;left:50%;margin-left:-475px;width:200px;z-index:99999;"><p style="position:absolute;top:0px;left:330px;display:block;width:400px;height:26px;line-height:26px;background:url(http://img1.ijinshan.com/static/images/1x1.gif) repeat;"><a target="_blank" href="'+topshow.url+'" cid="'+topshow.cid+'" style="color:'+topshow.color+';overflow: hidden;position:relative;top:-4px;"><img src="'+topshow.img1+'" style="width:22px; height:22px;position:relative;top:6px;">'+topshow.text+'<img src="'+topshow.img2+'" style="width:75px;height:22px;position:relative;top:7px;"></a></p></div></div>';$("#wrapper").append(e)}}if("undefined"!=typeof rightPop){var f="",g="",h="",i="";if(1==rightPop.length)f=rightPop[0].url,g=rightPop[0].img,i=rightPop[0].cid;else if(rightPop.length>1)for(var j=100*Math.random(),k=0,l=0,d=0,m=rightPop.length;m>d;d++)k+=parseInt(rightPop[d].percent),l=k-parseInt(rightPop[d].percent),function(a,b){if(j>a&&b>=j){f=rightPop[d].url,g=rightPop[d].img,i=rightPop[d].cid;try{__tj(1031100,1365,rightPop[d].cid,"sy","","","","index")}catch(c){}}}(l,k);""!=f&&""!=g&&(h='<div><div id="ppysj" cid="'+i+'" style="position:absolute;top:0px;right:0;width:100px;height:100px;z-index:999"><object width="100" height="100" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" style="z-index:998"><param name="movie" value="https://www.duba.com/static/media/curl.swf?'+g+"#"+f+'" width="85" height="85"><param name="wmode" value="transparent"><param name="allowScriptAccess" value="always" /><!--[if !IE]>--><object width="100" height="100" allowScriptAccess="always"  type="application/x-shockwave-flash" data="https://www.duba.com/static/media/curl.swf?'+g+"#"+f+'"><param name="wmode" value="transparent"><!--<![endif]--><!--[if !IE]>--></object><!--<![endif]--></object></div></div>',$("#js-ysjpp").append(h),window.cyswftrace=function(){try{__tj(1031100,1163,i,"sy","","","","index")}catch(a){}}),document.body.clientWidth<1340&&$("#ppysj").css("display","none"),$(window).resize(function(){document.body.clientWidth<1340?$("#ppysj").css("display","none"):$("#ppysj").css("display","block")})}};popShow();var BottomAd={height:250,imgW:0,imgH:0,firstImgW:0,firstImgH:0,isFirst:!0,timer:null,nextPromise:null,show:function(){var a,b,c,d=new Image,e=this,f=document,g=Math.min(f.documentElement.clientWidth,f.body.clientWidth),h=$("#J_BottomAdBan"),i=h.find(".J_link"),j=$(".left_slidebar_con"),k=j.is(":visible")?parseInt(j.css("width")):0;if(i.hide(),i.length>1&&(i=g>=1180?i.eq(1):i.eq(0)),i.find("img").length>0)i.show(),a=i.find("img").width(),c=g-2*k,a=c>Math.max(e.firstImgW,e.imgW)?Math.max(e.firstImgW,e.imgW):c<Math.min(e.firstImgW,e.imgW)?c:Math.min(e.firstImgW,e.imgW),b=(e.imgW>=a?e.imgH:e.firstImgH)*a/(e.imgW>=a?e.imgW:e.firstImgW),h.css({width:a,marginLeft:-a/2,height:b});else{var l=i.attr("cid"),m=i.attr("data-original");m&&($(d).on("load",function(){e.imgW=d.width,e.imgH=d.height,a=Math.min(e.imgW,g-2*k),b=e.imgH*a/e.imgW,a&&(i.append(d).show(),e.isFirst?(h.css({width:a,marginLeft:-a/2,height:0}),h.show().animate({height:b}),e.firstImgW=e.imgW,e.firstImgH=e.imgH,e.isFirst&&e.bind(),$.trace(l,!0,"mcgg")):h.css({width:a,marginLeft:-a/2,height:b})),$(d).off("load")}),d.src=m)}},bind:function(){this.isFirst=!1;var a=$("#J_BottomAdBan"),b=this,c=$(window);a.off("click").on("click","a",function(){b.close()}),c.resize(b.resize),b.timer=setTimeout(function(){b.close(!0),c.off("resize",b.resize),b.nextPromise&&b.nextPromise.resolve()},1e4)},close:function(a){clearTimeout(this.timer);var b=$("#J_BottomAdBan"),c=b.find(".J_link");if(!a){var d=$.NOW_NEXT()-+new Date;d=Number((d/864e5).toFixed(5)),$cookie("btmask",$.NOW_NEXT()+"-"+c.attr("cid"),{expires:d})}b.animate({height:0},function(){b.hide()})},resize:function(){var a=BottomAd;a.isShow()&&a.show()},isShow:function(){var a,b=$("#J_BottomAdBan"),c=document,d=$("#wrapper"),e=this.height,f=0;return d.length>0&&(f=d.offset().top),a="undefined"!=typeof Ad&&Ad&&Ad.showBg?e+330:e+f,e=Math.max(e,a),b.length<1||b.find(".J_link").length<1?!1:Math.min(c.documentElement.clientHeight,c.body.clientHeight)<e?!1:$cookie("btmask")&&$cookie("btmask").split("-")[1]==$("#J_BottomAdBan").find(".J_link").attr("cid")?!1:!0},init:function(a){this.isShow()?(this.nextPromise=a,this.show(),a.resolve()):a.resolve()}},Ad_Cjzp={timer:null,zpTimer:null,butInterval:null,init:function(a){(null==$cookie("ad_cjzp")||!$cookie("ad_cjzp"))&&window.ad_cjzp&&window.ad_cjzp.ggImg&&window.ad_cjzp.closeImg?this.create(a):a.resolve()},create:function(a){var b=this,c=new Image;c.onload=function(){var c="ad_cjzp",d="",e="";1==ad_cjzp.mengceng&&(c+=" ad_cjzp_mask",e='<div class="mask"></div>'),d+='<div class="'+c+'">'+e+'<div class="ad_cjzp_wrap"><img class="btn_close" src="'+ad_cjzp.closeImg+'" alt="关闭" /><a href="'+ad_cjzp.ggUrl+'" cid="'+ad_cjzp.ggCid+'" target="_blank">                    <div class="ad_cjzp_img1" style="background-image:url('+ad_cjzp.ggImg+');"></div>                    <div class="ad_cjzp_img2" style="background-image:url('+ad_cjzp.ggImg+');">                    <div class="ad_cjzp_box">                        <div class="ad_cjzp_award" style="background-image:url('+ad_cjzp.ggImg+');"></div>                        <span class="ad_cjzp_arrow" style="background-image:url('+ad_cjzp.ggImg+');"></span>                    </div>                    </div>                    </a></div></div>',$("body").append(d),b.event(a),__tj(1031100,1365,ad_cjzp.ggCid,"cjzp")},c.src=ad_cjzp.ggImg},event:function(a){function b(){c.blink=!0,c.butInterval=setInterval(function(){e.addClass("ad_cjzp_arrow_down"),setTimeout(function(){e.removeClass("ad_cjzp_arrow_down")},400)},1500)}var c=this,d=$(".ad_cjzp"),e=(d.find(".ad_cjzp_box"),d.find(".ad_cjzp_arrow"));d.find(".btn_close").on("click",function(b){b.preventDefault(),b.stopPropagation(),c.close(a,1),__tj(1031100,1163,ad_cjzp.closeCid,"cjzp")}),d.find("a").on("click",function(b){c.close(a,1),b.stopPropagation(),__tj(1031100,1163,ad_cjzp.ggCid,"cjzp","","","","","","","","",ad_cjzp.ggUrl)}).on("mouseenter",function(){c.zpTimer?(clearTimeout(c.zpTimer),b(),d.addClass("ad_cjzp_animate ad_cjzp_animate_fast")):d.addClass("ad_cjzp_animate_fast")}).on("mouseleave",function(){d.removeClass("ad_cjzp_animate_fast")}),c.zpTimer=setTimeout(function(){d.addClass("ad_cjzp_animate"),b(),clearTimeout(c.zpTimer),c.zpTimer=null},2e3);var f=parseInt(ad_cjzp.autoClose);f>0&&(c.timer=setTimeout(function(){c.close(a,1,1)},1e3*f)),1!=ad_cjzp.mengceng&&$("body").one("click",function(){c.close(a,1,1)})},close:function(a,b,c){if(clearTimeout(this.timer),clearTimeout(this.zpTimer),clearTimeout(this.butInterval),b&&$(".ad_cjzp a").fadeOut(function(){$(".ad_cjzp").remove()}),!c){var d=$.NOW_NEXT()-+new Date;d=Number((d/864e5).toFixed(5)),$cookie("ad_cjzp","close",{expires:d})}a.resolve()}},ad_hspf={closeCid:40187763,ggCid:40187738,ggUrl:"https://s.click.taobao.com/t?e=m%3D2%26s%3D6hsppJygMZYcQipKwQzePCperVdZeJviLKpWJ%2Bin0XJRAdhuF14FMVepTEAIYpWU79%2FTFaMDK6QEfvLsqYycKIf%2F3sjpoe72wNgD6cBMCJN%2FCrKs8PRVJLg5kJpUiIWcbYbSbVjnPd6R4ypTBJBwtOQKEdpGVcTl4reRQcXD1bHBV7GfGbfBR6Hvmp47zBYVcWCaq8Ydoqqq8z9vCsVgmqQAnVTbpciOC3qMqgr7%2BGU1usVnEIFPhi5nM6pBEk4MvDovBBh%2F%2FUm7KEl6b4zk6klaGaW7FGJu2XPP23XswEOcI1zX3waUocYMXU3NNCg%2F"},Ad_Hspf={timer:null,init:function(a){null!=$cookie("ad_hsbf")&&$cookie("ad_hsbf")?a.resolve():this.create(a)},create:function(a){var b=this,c=' <div class="ad_hspf">                        <div class="mask"></div>                        <a target="_blank" href="'+ad_hspf.ggUrl+'" class="hspf-wrapper"><span class="close_btn"></span><div id="J_AdHspf"></div></a>                    </div>';$("body").append(c),HDBF.init(document.getElementById("J_AdHspf")),b.event(a),__tj(1031100,1365,ad_hspf.ggCid,"hspf","","","","index")},event:function(a){var b=this;$(".ad_hspf .close_btn").click(function(c){c.preventDefault(),b.close(1),__tj(1031100,1163,ad_hspf.closeCid,"hspf","","","","index"),a.resolve()}),$(".ad_hspf a").click(function(c){b.close(1),__tj(1031100,1163,ad_hspf.ggCid,"hspf","","","","index","","","","",ad_hspf.ggUrl),a.resolve()}),$(".ad_hspf").on("click",function(){b.close(1),__tj(1031100,1163,40492662,"hspf","","","","index"),a.resolve()})},close:function(a,b){if(clearTimeout(this.timer),a&&(HDBF.stop(),$(".ad_hspf").remove()),!b){var c=$.NOW_NEXT()-+new Date;c=Number((c/864e5).toFixed(5)),$cookie("ad_hsbf","close",{expires:c})}}};!function(){function a(a){return document.getElementById(a)}var b=[null,null,null],c=0,d={prefix:function(){for(var a,b="t,webkitT,MozT,msT,OT".split(","),c=document.createElement("div").style,d=0;d<b.length;d++)if(a=b[d]+"ransform",a in c)return c=null,b[d].substr(0,b[d].length-1);return c=null,""}(),addPrefix:function(a,b){return""===this.prefix?a:b?this.prefix+a.charAt(0).toUpperCase()+a.substr(1):"-"+this.prefix.toLowerCase()+"-"+a}},e=['<div class="hs-wrapper">','<div class="hs-bd" id="J_HSBD" >','<span class="hs-cover" id="J_HSCover"></span>',"</div>",'<div class="hs-ft">','<div class="hs-ready">','<span id="J_HSNum"></span>',"</div>","</div>","</div>"].join(""),f={starting:!1,rand:function(a,b){return parseInt(Math.random().toString().substr(2,6))%(b-a+1)+a},anim:function(a,b,c,e){a.style[d.addPrefix("animation")]=(b>0?"parabola ":"parabola2 ")+e+"ms",tParabola(a,b,0,{curvature:c,duration:e,onProcess:function(a,b,c){c>=.2&&(this.elem.style.visibility="visible"),c>=.5&&(this.elem.style.zIndex=3)},onCompleted:function(){this.elem.parentNode.removeChild(this.elem)}})},step:function(a){var c=this,d=this.rand(150,200);clearTimeout(b[a]),b[a]=setTimeout(function(){c.create(a)},d)},create:function(a){var b=document.createElement("i");1==a?b.className="hs-rb hs-rb-sz"+this.rand(2,5)+" hs-rb-st"+this.rand(1,2):b.className="hs-light";var d,e,f=(this.rand(0,1)||-1)*this.rand(81,290),g=Math.abs(f);e=g>280?1.5:g>260?1.6:g>250?1.67:g>230?1.76:g>200?1.9:g>170?2.09:g>140?2.45:g>100?1.9:g>80?.2:2,d=(200-(g-50)/(2/e))/1e3,this.$bd.appendChild(b),this.anim(b,f,d,this.rand(1500,2e3)),c++,this.step(a)},ready:function(){var a=this,c=this.$num,d=this.$bd;num=3,b[2]=setInterval(function(){if(c.className="",d.className="hs-bd",0==num)return clearInterval(b[2]),d.className="hs-bd hs-start",a.$cover.className="hs-cover hs-fadein",a.step(0),a.step(1),void setTimeout(function(){d.className+=" hs-bd-start"},300);var e="hs-num"+num;setTimeout(function(){c.className=e,d.className="hs-bd hs-shock"},200),num--},1e3)},stop:function(){for(var a=0,c=b.length;c>a;a++)clearTimeout(b[a]),clearInterval(b[a]),b[a]=null},init:function(b){this.starting||(this.starting=!0,b.innerHTML=e,this.$bd=a("J_HSBD"),this.$cover=a("J_HSCover"),this.$num=a("J_HSNum"),this.ready())}};window.HDBF=f}(),function(){function a(){return+new Date}function b(){return!1}function c(a){return a=parseInt(a),isFinite(a)?a:0}function d(a,b,c){var d=0,e=(b-c*a*a-d)/a;return{a:c,b:e,c:d}}function e(a,b){return a*b}function f(a,b){return b.a*a*a+b.b*a+b.c}function g(a,c,d,e){return"object"==typeof c&&c.type&&1===c.type.nodeType?(e=c,c=0,d=0):"object"!=typeof e&&(e={}),a&&1===a.nodeType?(this.elem=a,e.x=c,e.y=d,this.type="drift",this.curvature=.001,this.onBeforeStart=this.onProcess=this.onCompleted=b,this.duration=500,this.options(e),this.autoStart=e.autoStart===!1?!1:!0,this):void 0}var h=window.getComputedStyle?function(a,b){var c=window.getComputedStyle(a,null),d=c?c.getPropertyValue(b)||c[b]:void 0;return d}:document.documentElement.currentStyle?function(a,b){var c,d=a.currentStyle,e=a.style;return c=d?d[b]:void 0,null==c&&e&&e[b]&&(c=e[b]),null==c?0:c}:b;g.prototype={start:function(b){var c=0,d=0;return this.options(b),this.begin=a(),this.end=this.begin+this.duration,0!==this.driftX||0!==this.driftY?(this.onBeforeStart.call(this,c,d),this.onProcess.call(this,c,d,0),j.push(this),k.start(),this):void 0},step:function(a){var b,c,d;return a>this.end?(b=this.driftX,c=this.driftY,this.update(b,c),this.stop(),this.onProcess.call(this,b,c,1),this.onCompleted.call(this,b,c)):(d=(a-this.begin)/this.duration,b=e(this.driftX,d),c=f(b,this.abc),this.update(b,c),this.onProcess.call(this,b,c,d)),this},update:function(a,b){return this.elem.style.position="absolute",this.elem.style.left=this.left+a+"px",this.elem.style.top=this.top+b+"px",this},reset:function(){return this.update(0,0),this},options:function(a){this.left=c(h(this.elem,"left")),this.top=c(h(this.elem,"top")),"object"!=typeof a&&(a={});var b=null==a.x&&"number"==typeof this.driftX?this.driftX:a.x,e=null==a.y&&"number"==typeof this.driftY?this.driftY:a.y;return null!=a.type&&(this.type=a.type),"position"===this.type?(b=c(b)-this.left,e=c(e)-this.top):1===this.type.nodeType?(b=c(h(this.type,"left"))-this.left,e=c(h(this.type,"top"))-this.top):(b=c(b),e=c(e)),this.driftX=b,this.driftY=e,this.curvature=null==a.curvature?this.curvature:parseFloat(a.curvature),this.abc=d(this.driftX,this.driftY,this.curvature),this.onBeforeStart="function"==typeof a.onBeforeStart?a.onBeforeStart:this.onBeforeStart,this.onProcess="function"==typeof a.onProcess?a.onProcess:this.onProcess,this.onCompleted="function"==typeof a.onCompleted?a.onCompleted:this.onCompleted,this.duration=null==a.duration?this.duration:parseInt(a.duration),this},stop:function(){for(var a=j.length-1;a>=0;a--)if(j[a]===this){j.splice(a,1);break}return this}};var i=null,j=[],k={tick:function(){for(var b=0,c=a();b<j.length;b++)j[b].step(c);0===j.length&&k.stop()},start:function(){i||(i=setInterval(k.tick,17))},stop:function(){clearInterval(i),i=null}};window.tParabola=function(a,b,c,d){var e=new g(a,b,c,d);return e.autoStart&&e.start(),e}}();var Ad_Kpgj={timer:null,init:function(a){(null==$cookie("ad_kpgj")||!$cookie("ad_kpgj"))&&window.ad_kpgj&&window.ad_kpgj.ggImg&&window.ad_kpgj.closeImg?this.create(a):a.resolve()},create:function(a){var b=this,c=new Image;c.onload=function(){var c='<div class="ad_kpgj"><a href="'+ad_kpgj.ggUrl+'" class="ad_kpgj_animate" cid="'+ad_kpgj.ggCid+'" target="_blank">                    <img src="'+ad_kpgj.ggImg+'" />                    <img class="btn_close" src="'+ad_kpgj.closeImg+'" alt="关闭" />                    </a></div>';$("body").append(c),b.event(a),__tj(1031100,1365,ad_kpgj.ggCid,"kpgj","","","","index")},c.src=ad_kpgj.ggImg},event:function(a){var b=this;$(".ad_kpgj .btn_close").click(function(c){c.preventDefault(),c.stopPropagation(),b.close(a,1),__tj(1031100,1163,ad_kpgj.closeCid,"kpgj","","","","index")}),$(".ad_kpgj a").click(function(c){b.close(a,1),c.stopPropagation(),__tj(1031100,1163,ad_kpgj.ggCid,"kpgj","","","","index","","","","",ad_kpgj.ggUrl)});var c=parseInt(ad_kpgj.autoClose);c>0&&(b.timer=setTimeout(function(){b.close(a,1,1)},1e3*c)),$("body").one("click",function(){b.close(a,1,1)})},close:function(a,b,c){if(clearTimeout(this.timer),b&&$(".ad_kpgj a").fadeOut(function(){$(".ad_kpgj").remove()}),!c){var d=$.NOW_NEXT()-+new Date;d=Number((d/864e5).toFixed(5)),$cookie("ad_kpgj","close",{expires:d})}a.resolve()}},Ad_MiddleModel={timer:null,init:function(a){(null==$cookie("ad_middleModal_close")||!$cookie("ad_middleModal_close"))&&window.ad_middleModal&&window.ad_middleModal.ggImg&&window.ad_middleModal.closeImg?this.create(a):a.resolve()},create:function(a){var b=this,c=new Image;c.onload=function(){var d=' <div class="ad_middleModal '+("B"==ad_middleModal.abTest?"ad_planB":"")+'">                    <div class="mask"></div>                    <a href="'+ad_middleModal.ggUrl+'" class="ad_middleModal_con" cid="'+ad_middleModal.ggCid+'" target="_blank">                    <img id="btn_ad_close" src="'+ad_middleModal.closeImg+'" alt="关闭" cid="'+ad_middleModal.closeCid+'" />                    <img src="'+ad_middleModal.ggImg+'" alt=""/>                    </a>                    </div>';$("body").append(d),"B"==ad_middleModal.abTest?$(".ad_planB").css({"margin-left":-(c.width/2),width:c.width,"margin-top":-(c.height/2)}):$(".ad_middleModal a").css("margin-top",-(c.height/2)),b.event(a),"1"!=ad_middleModal.reshowFlag&&b.close(),__tj(1031100,1365,ad_middleModal.ggCid,"kpgg","","","","index")},c.src=ad_middleModal.ggImg},event:function(a){var b=this;$("#btn_ad_close").click(function(c){c.preventDefault(),b.close(1),__tj(1031100,1163,ad_middleModal.closeCid,"kpgg","","","","index"),a.resolve()}),$(".ad_middleModal a").click(function(c){b.close(1),__tj(1031100,1163,ad_middleModal.ggCid,"kpgg","","","","index","","","","",ad_middleModal.ggUrl),a.resolve()}),"B"!=ad_middleModal.abTest&&1==ad_middleModal.blankoff&&$(".ad_middleModal").on("click",function(){b.close(1),__tj(1031100,1163,39255352,"kpgg","","","","index"),a.resolve()}),b.timer=setTimeout(function(){b.close(1,1),a.resolve()},1e4)},close:function(a,b){if(clearTimeout(this.timer),a&&$(".ad_middleModal").remove(),!b){var c=$.NOW_NEXT()-+new Date;c=Number((c/864e5).toFixed(5)),$cookie("ad_middleModal_close","close",{expires:c})}}};$(function(){window.flyBalloon=function(a){function b(a,c,e,f){try{var g=new Image,h=!1;g.onload=function(){if(!h){if(h=!0,a.length>0){if(a.length==c)var i=g;else i=f;a.splice(0,1),b(a,c,e,i)}if(0==a.length&&d){var j=g;e(i,j),d=!1}}},a[0]&&(g.src=a[0])}catch(i){console.log(i)}finally{}}var c=[],d=!0;c.push(qqf_url.start),c.push(qqf_url.end),qqf_url.mergeimg&&qqf_url.launchimg&&(c.push(qqf_url.launchimg),c.push(qqf_url.mergeimg)),b(c,c.length,function(b,c){var d=document.createElement("div"),e=$(".pos_tmall");if(imgHeight=b.height,imgWidth=b.width,!e.size()&&!qqf_url.mergeimg)return void a.resolve();if(qqf_url.mergeimg){var f="405";$(window).width()<1200&&(f="340");var g='<a  id="redbag2" class="J_qqf" href="'+qqf_url.smallurl+'" cid="'+qqf_url.smallcid+'" style="position:absolute;left:50%;top:0px;margin-left:'+f+'px; display:block; z-index:105;"><img src="'+qqf_url.end+'" style="width:100px;height:94px;"/></a>',h=1500,i=100,j=2e3,k=parseInt(imgWidth/4),l=parseInt(imgHeight/4),m=$("body").hasClass("response")?360:430,n=39;$(".search_inner").append(g)}else h=2500,i=1e3,j=2500,k=parseInt(imgWidth/2),l=parseInt(imgHeight/2),m=$("body").hasClass("response")?340:405,n=6;$(".J_notice").hide(),$(".search_promotion").hide();var o=e.offset();e.position();d.id="redbag2";var p=$(d),q="position:absolute;top:-"+o.top+"px;left:-"+o.left+"px;height:"+imgHeight+"px;width:"+imgWidth+"px;z-index:199;display:block";d.innerHTML='<a class="cypop1" w="sright" style="'+q+'" href="'+qqf_url.bigurl+'" cid="'+qqf_url.bigcid+'" ><img src="'+qqf_url.start+'" id="cat1" height="100%"></a>';var r=p.children().eq(0),s=$(".search_wrap").offset(),t=o.top-s.top-40,u=o.left-s.left+40;$(".search_inner").append(d),p.addClass("J_qqf"),$(".search_wrap").eq(0).hasClass("fixed")?($("#redbag2").hide(),p.hide()):($("#redbag2").show(),p.show()),setTimeout(function(){r.animate({top:t,left:u},{queue:!0,duration:h},"easeOutCircular"),r.animate({top:t,left:u},{queue:!0,duration:i}),r.animate({top:n,left:"50%","margin-left":m,height:l,width:k},{queue:!0,duration:j,complete:function(){qqf_url.mergeimg?($("#cat1").attr("src",qqf_url.launchimg),$(".cypop1").hide(),$("#redbag2").attr("href",qqf_url.launchurl).attr("cid",qqf_url.launchcid),$("#redbag2").find("img").attr("src",qqf_url.launchimg),setTimeout(function(){$("#cat1").attr("src",qqf_url.mergeimg),$("#redbag2").attr("href",qqf_url.mergeurl).attr("cid",qqf_url.mergecid),$("#redbag2").find("img").attr("src",qqf_url.mergeimg)},500)):($("#cat1").attr("src",qqf_url.end),$(".cypop1").attr("href",qqf_url.smallurl).css("width",c.width).css("height",c.height),$(".cypop1").attr("cid",qqf_url.smallcid)),$(".search_wrap").eq(0).hasClass("fixed")?$("#redbag2").hide():$("#redbag2").show(),a.resolve()}},"easeOutCircular")},1e3)})},"undefined"!=typeof qqf_url&&qqf_url.bigurl&&qqf_url.smallurl?($(".J_notice").hide(),$(".search_promotion").hide()):$(".search_promotion").children().length>0?($(".J_notice").hide(),$(".search_promotion").show()):$(".J_notice").show()}),$(function(){window.redBag=function(a){setTimeout(function(){if(!($(window).width()<1200)){if(!red_url||!red_url.start||!red_url.end)return void a.resolve();var b=document.createElement("div"),c=$(".tmall_famous");if(c.size()){var d=c.offset(),e=(c.parent().position(),$(b)),f=$("#wrapper"),g=f.offset().top;b.id="redbag1";var h="position:absolute;height:120px;width:100px;top:-100px;left:-200px;z-index:150;display:block";b.innerHTML='<a class="" style="'+h+'" href="'+red_url.open+'" cid="2647989" ><img src="'+red_url.start+'" id="cat" height="100%"></a>',$("#wrapper").append(b);var i=e.children().eq(0);e.find("img").animate({height:30},{queue:!1,duration:3e3,complete:function(){i.css({height:30,width:36})}}),i.animate({top:d.top-g},{queue:!1,duration:500},"easeInQuint"),i.animate({left:d.left+c.outerWidth(!0),top:d.top-g},{queue:!1,duration:3e3,complete:function(){a.resolve(),$("#cat").attr("src",red_url.end);try{showPop()}catch(b){}}},"easeOutCircular")}else try{showPop()}catch(e){}}},0)},$(window).resize(function(){setTimeout(function(){var a=$(".tmall_famous"),b=a.offset();a&&b&&$("#redbag1 a").css({left:b.left+a.outerWidth(!0)})},10)})}),$(function(){var a=$("#wrapper"),b=$(".skin_bg"),c=$(".mainbg"),d=$(".left_slidebar"),e=d.width(),f=$(window).width(),g={adleft:"",init:function(){"undefined"!=typeof window.ggSkinObj&&window.ggSkinObj.url&&(this.adleft=this.getBtnPos(),"tmall"==window.ggSkinObj.skintype?g.repeatAdBg():g.skinAdBg())},getBtnPos:function(){var a,b=d.is(":visible")?e:0,f=c.offset().left,g=17,h=f-g;return a=h>70?70:0>h?0:h>b?b:b>0?h:0,a+"px"},showCloseBtn:function(){if($cookie("dou11Nav"))return!1;var a=1214;return $("body").hasClass("response")&&(a=1030),f>a},repeatAdBg:function(){if(!$cookie("theme1")&&!$cookie("dou11Nav")){for(var d="",e=0,f="",h=window.screen.width>2e3?3e3:2e3,i=window.screen.width>2e3?600:400,j=0;i>j;j++)ggSkinObj.style.bg&&(f=ggSkinObj.style.bg.length>1&&(Math.floor(j/14)%2==1&&j%2==0||Math.floor(j/14)%2==0&&j%2==1)?ggSkinObj.style.bg[1]:ggSkinObj.style.bg[0]),j%14==0?e%2==0?(d+='<a href="'+ggSkinObj.url+'" cid="'+ggSkinObj.cid+'" style="display:inline-block;margin-left:30px;width:138px;height:138px;background-image:url('+f+')"></a>',e++):(d+='<a href="'+ggSkinObj.url+'" cid="'+ggSkinObj.cid+'" style="display:inline-block;width:138px;height:138px;background-image:url('+f+')"></a>',e++):d+='<a href="'+ggSkinObj.url+'" cid="'+ggSkinObj.cid+'" style="display:inline-block;width:138px;height:138px;background-image:url('+f+')"></a>';
b.html('<div class="tmall_bg15" style="width:'+h+'px;">'+d+"</div>");var k="display:none;";this.showCloseBtn()&&(k=""),a.append('<a href="javascript:;" cid="2612508" style="'+k+"left:"+g.adleft+';top:17px;" class="adclosed"></a>'),c.css("background","#f7f8f8"),this.bindEvent();try{__tj(1031100,1365,25765331,"")}catch(l){}}},skinAdBg:function(){if($cookie("theme1")&&$cookie("theme1").split("|")[2]&&$cookie("theme1").split("|")[2]<window.ggSkinObj.startt||!$cookie("theme1")){if($cookie("closeSkinAd")||0!=$(".skinadclosed").size())return;a.append('<a href="javascript:;" class="skinadclosed" style="left:'+g.adleft+'"></a>'),g.bindEvent();try{__tj(1031100,1365,window.ggSkinObj.cid,"pifu")}catch(b){}}},bindEvent:function(){function b(b){"tmall"==b?(c.css({background:""}),$cookie("dou11Nav",(new Date).getDate(),{expires:5}),$(".doule11-nav").css("display","none"),$(".tmall_bg15").css("display","none"),$(".adclosed").css("display","none"),f>1280&&1400>f&&slidebar()):(a.removeClass().css("background",""),$("#main").css({"background-image":"","background-color":"",background:"none"}),$(document).find(".bgOpen").remove(),$(".skinadclosed").css("display","none"),$cookie("closeSkinAd","1",{expires:5}))}$(".adclosed").on("click",function(a){a.preventDefault(),b("tmall")}),$(".skinadclosed").on("click",function(a){a.preventDefault(),b("skinAd")})}};if("undefined"!=typeof ggSkinObj&&"undefined"!=typeof ggSkinObj.url){if($.browser.msie&&6==$.browser.version)return;g.init(),$(window).resize(function(){g.adleft=g.getBtnPos(),$(".skinadclosed").css("left",g.adleft),$(".adclosed").css("left",g.adleft),f=$(window).width(),g.showCloseBtn()?$(".adclosed").show():$(".adclosed").hide()})}});var leftTip={timer:null,init:function(){if($(".ad_leftTip_out").length>0){var a=!1;if($(".ad_leftTip_out").hover(function(){if(clearTimeout(this.timer),$(".ad_leftTip_out").css("width","612px"),$(".ad_fixLeftTip .adcon").css("left","0px"),$(".adcon i").addClass("close"),!a){a=!0;var b=$(".ad_fixLeftTip .bimg").attr("cid");__tj(1031100,1365,b,"xqtip","","","","index")}},function(){$(".ad_fixLeftTip .adcon").css("left","-493px"),this.timer=setTimeout(function(){$(".ad_leftTip_out").css("width","120px")},500),$(".adcon i").removeClass("close")}),$("body").width()<1503&&null==$cookie("left_side_close"))$(".ad_leftTip_out").hide();else if($("body").width()<1403&&null!=$cookie("left_side_close"))$(".ad_leftTip_out").hide();else{$(".ad_leftTip_out").show();var b=$(".ad_fixLeftTip .adlogo a").attr("cid");setTimeout(function(){__tj(1031100,1365,b,"xqtip","","","","index")},500)}}}};jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{easeOutIn:function(a,b,c,d,e){return.4>a?(-d*((b=b/e-1)*b*b*b-1)+c)/2.5:.4+(d*(b/=e)*b*b*b+c)/2.5},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c}});var redbagRain={render:!1,init:function(a,b){a=a?a:$("#redbagRain");var c=!!window.ActiveXObject,d=c&&!window.XMLHttpRequest;if(0==a.size()||$cookie("ad_rbrain")||d)return void(b&&b.resolve());var e=this;e.render=!0,b&&(e.def=b),a.addClass("active"),e.$wrap=a,e.$body=$("#J_RedRainBody"),e.$readyNum=$("#J_RedRainNum"),e.$rainBody=$("#J_rrRain"),e.$rainFoot=$("#J_rrRainFoot"),e.autoClose="0"==a.attr("data-autoclose")&&"undefined"==a.attr("data-autoclose")||isNaN(parseInt(a.attr("data-autoclose")))?!1:parseInt(a.attr("data-autoclose")),$("#J_RedRainReady").css("top",-$(window).height()/2-150+"px"),e.$readyNum.addClass("rr-num4"),__tj(1031100,1365,"40551989","xctj","","","","tiyan21"),setTimeout(e.ready,400),e.bindevent()},count:0,timers:[null,null,null],rand:function(a,b){return parseInt(Math.random().toString().substr(2,6))%(b-a+1)+a},ready:function(){var a=redbagRain,b=3;a.timers[0]=setInterval(function(){a.$readyNum.attr("class",""),setTimeout(function(){return a.$readyNum.addClass("rr-num"+b),b--,0==b?(a.rain(),clearInterval(a.timers[0]),void setTimeout(function(){a.$readyNum.attr("class",""),a.href=a.$rainBody.attr("data-href")},500)):void 0},200)},1e3)},createBag:function(){var a=this,b="rr-rb rr-rb-sz"+a.rand(1,5)+" rr-rb-st"+a.rand(1,2),c=a.$rainBody.find("img").attr("src"),d=$(window).width(),e=0,f=a.count%2==0?a.rand(90,d/2-90):a.rand(d/2+90,d-90),g=-$(window).height()+a.rand(-400,-300),h=a.rand(5e3,6e3);a.count>12||($('<a class="'+b+'" href="'+a.href+'" target="_blank" cid="40551989" w="xctj"></a>').css({"background-image":"url("+c+")",left:f,top:g}).appendTo(a.$rainBody).animate({top:e},h,"easeInOutQuad",function(){$(this).css("top",g),a.loopRain($(this),e,d)}),a.count++,a.rain())},loopRain:function(a,b,c){var d=this,e=a.index()%2==0?d.rand(90,c/2-90):d.rand(c/2+90,c-90),f=-$(window).height()+d.rand(-400,-300),g=d.rand(5e3,6e3);return d.now=+new Date,d.autoClose&&d.now-d.beginT>1e3*d.autoClose?(clearTimeout(d.timers[1]),clearInterval(d.timers[0]),d.$wrap.fadeOut(),void(d.def&&d.def.resolve())):void a.css("left",e).animate({top:b},g,"easeInOutQuad",function(){$(this).css("top",f),d.loopRain(a,b,c)})},rain:function(){var a=this;0==a.count&&(a.beginT=+new Date,a.createBag()),a.timers[1]=setTimeout(function(){a.createBag(),7==a.count&&a.footShow()},700)},footShow:function(){var a=this;a.$wrap.addClass("activefoot"),a.$rainFoot.show().animate({bottom:"0px"})},bindevent:function(){function a(c){clearTimeout(b.timers[1]),clearInterval(b.timers[0]),b.$wrap.hide(),c&&c.target&&($(c.target).parents("#redbagRain").size()>0||"redbagRain"==$(c.target).attr("id"))&&$cookie("ad_rbrain",1,{expires:1}),$(document).off("click","a",a),b.def&&b.def.resolve()}var b=this;$(document).on("click","a",a)}};$(function(){$.browser.msie&&"6.0"==$.browser.version||(ggSortList&&ggSortList.length>0&&loadJS("/static/v2/js/when.js",function(){function adLoad(idx){if(array[idx]){for(var funArray=[],i=0;i<array[idx].length;i++)try{"function"==typeof eval(array[idx][i])&&funArray.push(eval(array[idx][i]+"()"))}catch(e){continue}when.settle(funArray).then(function(a){idx<array.length&&adLoad(idx+1)})}}var index=(parseInt($cookie("ggRuleIndex")||-1)+1)%ggSortList.length,array=ggSortList[index]||[],time=$.NOW_NEXT()-+new Date;time=Number((time/864e5).toFixed(5)),$cookie("ggRuleIndex",index,{expires:time}),adLoad(0)}),leftTip.init())});