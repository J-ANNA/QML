/* duba 2017-04-13T16:57:33 */
function initWeatherInfo(){var a=$cookie(WEATHER_COOKIE_CITY_KEY)||"101010100|北京";$("#currCityName").html(a.split("|")[1]),getWeatherInfo(!1)}function showSelCitys(){if(0==$("#city_set_ifr").length){var a,b=DUBA.isHttps?type="?type=https&"+DUBA.curr_ver:"?"+DUBA.curr_ver;a=$("body").hasClass("response")?"display:none;width:314px;margin:10px auto;":"display:none;width: 310px;margin:10px auto;",$(".weather").append('<iframe scrolling="no" frameborder="0" allowtransparency="true" id="city_set_ifr" src="/static/v2/iframe/city_set_wide.html'+b+'"  style="'+a+'" ></iframe>')}$("#city_set_ifr").css("display","block"),$(".weather .w-city, #weatherDetail,#weatherLoading").hide(),$(".weather").css("width","310px")}function hideSelCitys(){$("#city_set_ifr, #weatherLoading").hide(),$(".weather .w-city, #weatherDetail").show(),$(".weather").css("width","auto"),$("#weather_7day").css("visibility",""),1==$("#j-air").data("h")&&($("#j-air").show(),$("#j-air").data("h",null))}function getChangeExpires(a){}function getWeatherInfo(isForceReload){function iexhr(a,b,c){var d=new XDomainRequest,e=arguments.callee,f=arguments;d.onload=function(a){return function(){b(a)}}(d)||function(){},d.onerror=function(){d.abort()},d.timeout=c||5e3,d.ontimeout=function(){setTimeout(function(){e.apply(this,f)},1e3)},d.open("get",a),d.send(null)}isForceReload=void 0==isForceReload?!1:isForceReload;var d=new Date,v=d.getFullYear()+""+(d.getMonth()+1)+d.getDate()+d.getHours(),domain="http://weather.123.duba.net",type="";"https:"==location.protocol&&(domain="https://"+location.host,type="type=https");var city=$cookie(WEATHER_COOKIE_CITY_KEY),cityId=city?city.split("|")[0]:"",url=cityId?domain+"/static/weather_info/"+cityId+".html?v="+v:domain+"/weatherinfo/";if(""!=type&&(url=url.indexOf("?")>-1?url+"&"+type:url+"?"+type),$("#weatherDetail").hide(),$("#weatherLoading").show(),0==isForceReload&&"undefined"!=typeof w)changeWeatherHtml(w);else if(!$.browser.msie||"6.0"!=$.browser.version&&"7.0"!=$.browser.version)"undefined"!=typeof XDomainRequest?iexhr(url,function(xdr){var d=eval(xdr.responseText.match(/weather_callback\(\{.*?\}\)/g)[0].replace("weather_callback",""));weather_callback(d)}):$.ajax({url:url,type:"get",async:!0,dataType:"html",success:function(data){var d=eval(data.match(/weather_callback\(\{.*?\}\)/g)[0].replace("weather_callback",""));weather_callback(d)},error:function(){}});else{var T=document.createElement("script"),url=cityId?domain+"/static/weather_info/"+cityId+".html?v="+v:domain+"/weatherinfo/";T.setAttribute("charset","utf-8"),T.src=url,T.id="js_weather",document.body.appendChild(T)}isForceReload&&weatherHoverTip.getWeatherTip()}function weather_callback(a){if(a&&a.weatherinfo){if(a.t&&(server_time=1e3*parseInt(a.t,10),"undefined"!=typeof ChineseCalendar)){var b=new ChineseCalendar(new Date(server_time));$(".pdata").html('<a href="http://www.duba.com/wannianli.html" target="_blank">'+b.MMDD()+"<em></em>"+b.weekday().replace("星期","周")+"</a>")}var c=a.weatherinfo;window.todayWeather=a.weatherinfo.weather1,window.themeSetObj&&window.themeSetObj.setWeatherAutoSwitch&&window.themeSetObj.setWeatherAutoSwitch(),changeWeatherHtml(a);var d=$cookie(WEATHER_COOKIE_CITY_KEY),e=d?d.split("|")[0]:"";e!=c.cityid&&$cookie(WEATHER_COOKIE_CITY_KEY,c.cityid+"|"+c.city,{expires:WEATHER_COOKIE_EXPIRES,path:"/"})}}function changeWeatherHtml(a){var b=a.weatherinfo,c="http://www.duba.com/tianqiyubao.html?cityid=";$("#currCityName").html(b.city.substring(0,4)),$("#weather_7day").attr("href",c+b.cityid),$("#weather_7day").css("visibility",""),$("#air_ad").remove();for(var d=$cookie(WEATHER_COOKIE_CITY_KEY),e=d?d.split("|")[0]:"",f=1;3>f;f++){var g=$("#w-day"+f);if(g.length){g.attr("href","http://www.duba.com/tianqiyubao.html?cityid="+b.cityid);var h=2*f-1,i=99==b["img"+h]?b["img"+(h-1)]:b["img"+h],j="//"+location.hostname+"/static/v2/images/weather/a2/a",k="background:url("+j+i+".png) no-repeat center center;_background:none; _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+j+i+".png);";g.find("img").attr("style",k);var l=b["temp"+f];l=l.replace(/~/,"&nbsp;~&nbsp;"),l=l.replace(/℃/,""),l=l.replace(/℃/,""),g.attr({href:c+b.cityid});var m=b["weather"+f];if(1==f&&(1==$cookie("twflag")||null==$cookie("tips_w"))){1==$cookie("twflag")&&$cookie("tips_w",null);var n="";if(i>=3&&9>=i||19==i||21==i||22==i?n="<a href='/go.html?f=tianqitip1&url=http://t.cn/zYPfqgs'>今天有雨，记得带伞哦</a>":i>=10&&12>=i||i>=23&&25>=i?n="<a href='/go.html?f=tianqitip2&url=http://t.cn/zYPfqgs'>暴雨天气，请注意安全</a>":i>=13&&16>=i||26==i||27==i?n="<a href='/go.html?f=tianqitip3&url=http://t.cn/zYPfgNq'>今天有雪，注意保暖哦</a>":17==i||28==i?n="<a href='/go.html?f=tianqitip4&url=http://t.cn/zYPfgNq'>暴雪天气，请注意安全</a>":(20==i||31==i)&&(n="<a href='/go.html?f=tianqitip5&url=http://t.cn/zYPIvf4'>沙尘天气，记得戴口罩</a>"),b["pm-num"]&&(b["pm-level"]=b["pm-num"]),b.pm&&b["pm-level"]){var o="air_bad",p="",q="";1==b["pm-level"]?(o="air_you",p="优",q="空气质量指数："+b.pm+"\n今天空气质量很好，大家可以到户外走走，呼吸一下新鲜空气，放松一下心情。",window.isWeatherYou=!0):2==b["pm-level"]?(o="air_liang",p="良",q="空气质量指数："+b.pm+"\n今天空气质量可以接受，除少数异常敏感体质的人群外，大家可在户外正常活动。",window.isWeatherYou=!0):3==b["pm-level"]?(o="air_qingdu",p="轻度",q="空气质量指数："+b.pm+"\n轻度污染的天气，易敏感人群在户外活动时间不宜过长，以免吸入过多大气污染物。"):4==b["pm-level"]?(p="中度",q="空气质量指数："+b.pm+"\n中度污染的天气，外出应佩戴口罩，并及时将附着在身体上的霾清理掉。"):5==b["pm-level"]?(p="重度",q="空气质量指数："+b.pm+"\n重度污染的天气，有害物质可能会吸入体内，大家应尽量减少户外活动，更不要剧烈运动。"):(p="严重",q="空气质量指数："+b.pm+"\n严重污染的天气，容易诱发呼吸道疾病，要尽量避免户外活动，留在室内并关好门窗。"),$("#top_weather").show(),"air_you"==o||"air_liang"==o?$("#j-air").prev().html("空气质量:"):$("#j-air").prev().html("空气污染:"),$("#j-air").html(p).attr("href",c+b.cityid).attr("title",q).removeClass().addClass("air_bg "+o).show(),window.weatherInfoAd=window.weatherInfoAd||{},"air_you"!=o&&"air_liang"!=o&&($("#top_weather").append("<a class='air_bg' id='air_ad' style='background:#19a21d;color:#fff;padding:0px 2px;' href='"+window.weatherInfoAd.url+"' cid='"+window.weatherInfoAd.dd_cid+"' title='"+window.weatherInfoAd.desc1+"\n"+window.weatherInfoAd.desc2+"' >"+window.weatherInfoAd.name+"</a>"),$.trace(window.weatherInfoAd.showid,!0)),$("#side_ad").children().size()||(window.isWeatherYou||$("#side_custom").show(),$.trace(window.weatherInfoAd.showidRight,!0))}else b.wind1&&""!=b.wind1&&b.wd?(p=b.wind1.match(/(\d\-\d)|(\d)/g)?b.wd+" : "+b.wind1.match(/(\d\-\d)|(\d)/g)[0]+"级":b.wd+" : "+b.wind1,$("#j-air").html(p).attr("href",c+b.cityid).attr("title",q).removeClass().hide(),$("#j-air").prev().html("")):$("#j-air").prev().html("")}if(m.length>=3){var r=m.lastIndexOf("转");r>0&&(m=m.substring(0,r))}m=m.replace("雷阵雨","阵雨"),m=m.replace("中到",""),m=m.replace("小到",""),m=m.replace("大到",""),m=m.replace("雨夹雪","雨雪"),m.length>=3&&(m=m.substring(0,2)),g.find("b").eq(0).find("span").html(m),g.find("em").eq(0).find("span").html(l+"℃")}}$("#weatherLoading").hide(),$("#weatherDetail").show();var s=0;$cookie("twflag")&&(s=1,$cookie("twflag",null)),101130109==e&&$("#top_weather").hide()}var server_time=(new Date).getTime();$cookie("cstd")&&(server_time+=parseInt($cookie("cstd"),10));var WEATHER_COOKIE_CITY_KEY="WEATHER_COOKIE_CITY_KEY",WEATHER_COOKIE_EXPIRES=365,weatherHoverTip={cityId:"",getWeatherTip:function(){var a=$cookie(WEATHER_COOKIE_CITY_KEY)||"101010100|北京",b=a?a.split("|")[0]:"",c=this;if(this.cityId=b,b){var d="wdata/index/"+b+".json?t="+server_time+"&k=pagecache&rk=23095859929481";$.ajax({url:d,type:"get",async:!0,dataType:"json",success:function(a){if(a&&a.length>0){var b,d;b=[["感冒",a[8].i4],["穿衣",a[4].i4],["洗车",a[21].i4]],d=[["紫外线",a[20].i4],["运动",a[23].i4],["更多 »",""]],c.renderWeather([b,d])}}})}},renderWeather:function(a){for(var b,c="",d=$("#J_WeatherNews").find(".J_weatherNewsBox"),e="http://www.duba.com/tianqiyubao.html?cityid="+this.cityId,f=[[40187731,40187732,40187733],[40187734,40187735,40187736]],g=0;2>g;g++){c+='<ul class="clearfix row'+(g+1)+'">';for(var h=0;3>h;h++)b=a[g][h],c+=' <li><a cid="'+f[g][h]+'" class="clearfix" href="'+e+'"><div class="lt w-icon'+g+h+'"></div><div class="rt"><p class="tip-title'+g+h+'">'+b[0]+'</p> <p class="tip">'+b[1]+"</p></div></a></li>";c+="</ul>"}d.html(c).attr("load",1)},getXingZuoTip:function(){var a=$cookie("xingzuo")||"0",b=this,c=DUBA.isHttps?"https":"http",d="/main3_xingzuoapi.html?xid="+a+"&type="+c;$.ajax({url:d,type:"get",async:!0,dataType:"json",success:function(a){a&&b.renderXingZuo(a)}})},renderXingZuo:function(a){var b=$("#J_XingZuo"),c=b.find(".J_InfoPanel"),d=b.find(".J_xingzuoTest"),e="",f=a.tips,g=new ChineseCalendar(new Date(server_time)).MMDD(),h=f.tag;h.length>30&&(h=f.tag.substring(0,30)+"..."),e+='<a cid="'+f.cid+'" href="'+f.url+'" class="xingzuo-lt" style="background-image: url('+f.img+');"></a><div class="xingzuo-rt"><p><a class="xz-rt-name" cid="'+f.cid+'" href="'+f.url+'">'+f.xname+'</a><a class="change J_change">[切换]</a></p><a cid="'+f.cid+'" href="'+f.url+'">'+g+'运势：<span class="jrys" title="'+f.tag+'">'+h+"</span></a>",e+='<a href="'+f.url+'" cid="'+f.cid+'" class="xz-gz"><span>工作运: <span class="star-bg"><span class="star star'+f.gzyun+'"></span></span></span><span>爱情运: <span class="star-bg"><span class="star star'+f.aqyun+'"></span></span></span></a></div>',c.html(e);var i,j=a.wz||[],k=j.length,l=0;for(e="",e+="<ul>",l;k>l;l++)i=j[l],e+='<li><a cid="'+i.cid+'" href="'+i.url+'">'+i.title+"</a></li>";e+="</ul>",d.html(e);var m=f.xid,n=f.xyun,o=$("#J_XingZuo"),p=o.find(".J_changeXz").find("a"),q=p.eq(m);o.find(".J_xzBox").attr("href",f.url),o.find(".J_xzName").text(q.text()),o.find(".J_xzStars").attr("class","star J_xzStars star"+n),p.removeClass("active"),q.addClass("active")},weatherHover:function(){1!=$("#J_WeatherNews").find(".J_weatherNewsBox").attr("load")&&this.getWeatherTip()},reportXingzuo:!0,reportWeather:!0,weatherTimer:null,xingZuoTimer:null,weatherHandler:function(){var a=weatherHoverTip;a.weatherHover(),$(".bdSug_wpr").css("z-index",-1),$("#search_ext").css("z-index",102),$("#redbag1").length>0&&$("#redbag1").find("a").css("z-index",-1),$(".J_wDay").addClass("w-day-hover"),a.reportWeather&&(Stat.TJ(40155713,"weather","","",1365),a.reportWeather=!1)},xingZuoHandler:function(){var a=weatherHoverTip;$(".bdSug_wpr").css("z-index",-1),$("#search_ext").css("z-index",102),$("#redbag1").length>0&&$("#redbag1").find("a").css("z-index",-1),$("#J_XingZuo").addClass("xingzuo-hover"),a.reportXingzuo&&(Stat.TJ(40155714,"gn","","",1365),a.reportXingzuo=!1)},bind:function(){var a=this,b=$("#J_XingZuo"),c=b.find(".J_InfoPanel"),d=b.find(".J_changePanel"),e=b.find(".J_changeXz a");$(".J_wDay").on("mouseenter",function(){clearTimeout(a.weatherTimer),a.weatherTimer=setTimeout(a.weatherHandler,600)}).on("mouseleave",function(){clearTimeout(a.weatherTimer),$(this).removeClass("w-day-hover"),$(".bdSug_wpr").css("z-index",101);var b=$("#search_ext");if(b.css("z-index",160),$("#redbag1").length>0){var c=$("#redbag1").find("a");b.is(":visible")?c.css("z-index",0):c.css("z-index",150)}}),b.on("mouseenter",function(){clearTimeout(a.xingZuoTimer),a.xingZuoTimer=setTimeout(a.xingZuoHandler,600)}).on("mouseleave",function(){clearTimeout(a.xingZuoTimer),$(this).removeClass("xingzuo-hover"),$(".bdSug_wpr").css("z-index",101);var b=$("#search_ext");if(b.css("z-index",160),$("#redbag1").length>0){var c=$("#redbag1").find("a");b.is(":visible")?c.css("z-index",0):c.css("z-index",150)}}).on("click",".J_change",function(a){c.hide(),d.show(),a.stopPropagation()}),e.on("click",function(){e.removeClass("active"),$(this).addClass("active")}),b.find(".J_sure").on("click",function(){var e=b.find(".J_changeXz").find(".active");$cookie("xingzuo",e.index(),{expires:1460,path:"/"}),a.getXingZuoTip(),c.show(),d.hide(),Stat.TJ(40201779,"gn","","","",e.text())}),b.find(".J_cancel").on("click",function(){c.show(),d.hide()})},init:function(){this.bind(),this.getXingZuoTip()}};try{initWeatherInfo(),weatherHoverTip.init(),$("#js_qh_tq,#currentCity").click(function(a){$("#js-tips-weather").hide(),"block"==$("#j-air").css("display")&&$("#j-air").data("h",1).hide(),showSelCitys(),$("#weather_7day").css("visibility","hidden"),a.preventDefault()})}catch(e){}