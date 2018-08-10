!function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],i=n.length,r=window.console=window.console||{};i--;)e=n[i],r[e]||(r[e]=t)}(),function(e,$){"use strict";function t(e,t,n,i,r,o,s){var a;if(s="number"==typeof s?s:0,e.css(n,i+o),a=e.width(),a>=t){if(e.css(n,""),a===t)return{match:"exact",size:parseFloat((parseFloat(i)-.1).toFixed(3))};var l=t-s,u=a-t;return{match:"estimate",size:parseFloat((parseFloat(i)-("word-spacing"===n&&s&&u<l?0:r)).toFixed(3))}}return a}function n(e,n,i,r,o){var s=e.clone(!0).addClass("bigtext-cloned").css({fontFamily:e.css("font-family"),textTransform:e.css("text-transform"),wordSpacing:e.css("word-spacing"),letterSpacing:e.css("letter-spacing"),position:"absolute",left:a.DEBUG_MODE?0:-9999,top:a.DEBUG_MODE?0:-9999}).appendTo(document.body),l=[],u=[],c=[],p=[];return n.css("float","left").each(function(){var e=$(this),n=a.supports.wholeNumberFontSizeOnly?[8,4,1]:[8,4,1,.1],s,u;if(e.hasClass(a.EXEMPT_CLASS))return l.push(null),p.push(null),void c.push(!1);var d=32,f=parseFloat(e.css("font-size")),g=(e.width()/f).toFixed(6);u=parseInt(i/g,10)-d;e:for(var h=0,S=n.length;h<S;h++)t:for(var b=1,m=10;b<=m;b++){if(u+b*n[h]>r){u=r;break e}if(s=t(e,i,"font-size",u+b*n[h],n[h],"px",s),"number"!=typeof s){if(u=s.size,"exact"===s.match)break e;break t}}p.push(i/u),u>r?(l.push(r),c.push(!1)):o&&u<o?(l.push(o),c.push(!0)):(l.push(u),c.push(!1))}).each(function(e){var n=$(this),r=0,o=1,s;if(n.hasClass(a.EXEMPT_CLASS))return void u.push(null);n.css("font-size",l[e]+"px");for(var c=1,p=3;c<p;c+=o)if(s=t(n,i,"word-spacing",c,o,"px",s),"number"!=typeof s){r=s.size;break}n.css("font-size",""),u.push(r)}).removeAttr("style"),a.DEBUG_MODE?s.css({"background-color":"rgba(255,255,255,.4)"}):s.remove(),{fontSizes:l,wordSpacings:u,ratios:p,minFontSizes:c}}var i=0,r=$("head"),o=e.BigText,s=$.fn.bigtext,a={DEBUG_MODE:!1,DEFAULT_MIN_FONT_SIZE_PX:null,DEFAULT_MAX_FONT_SIZE_PX:528,GLOBAL_STYLE_ID:"bigtext-style",STYLE_ID:"bigtext-id",LINE_CLASS_PREFIX:"bigtext-line",EXEMPT_CLASS:"bigtext-exempt",noConflict:function(t){return t&&($.fn.bigtext=s,e.BigText=o),a},test:{wholeNumberFontSizeOnly:function(){if(!("getComputedStyle"in e)||null===document.body)return!0;var t=$("<div/>").css({position:"absolute","font-size":"14.1px"}).appendTo(document.body).get(0),n=e.getComputedStyle(t,null);return!n||"14px"===n.getPropertyValue("font-size")}},supports:{wholeNumberFontSizeOnly:void 0},init:function(){void 0===a.supports.wholeNumberFontSizeOnly&&(a.supports.wholeNumberFontSizeOnly=a.test.wholeNumberFontSizeOnly()),$("#"+a.GLOBAL_STYLE_ID).length||r.append(a.generateStyleTag(a.GLOBAL_STYLE_ID,[".bigtext * { white-space: nowrap; } .bigtext > * { display: block; }",".bigtext ."+a.EXEMPT_CLASS+", .bigtext ."+a.EXEMPT_CLASS+" * { white-space: normal; }"]))},bindResize:function(t,n){$.throttle?$(e).unbind(t).bind(t,$.throttle(100,n)):($.fn.smartresize&&(t="smartresize."+t),$(e).unbind(t).bind(t,n))},getStyleId:function(e){return a.STYLE_ID+"-"+e},generateStyleTag:function(e,t){return $("<style>"+t.join("\n")+"</style>").attr("id",e)},clearCss:function(e){var t=a.getStyleId(e);$("#"+t).remove()},generateCss:function(e,t,n,i){var r=[];a.clearCss(e);for(var o=0,s=t.length;o<s;o++)r.push("#"+e+" ."+a.LINE_CLASS_PREFIX+o+" {"+(i[o]?" white-space: normal;":"")+(t[o]?" font-size: "+t[o]+"px;":"")+(n[o]?" word-spacing: "+n[o]+"px;":"")+"}");return a.generateStyleTag(a.getStyleId(e),r)},jQueryMethod:function(e){return a.init(),e=$.extend({minfontsize:a.DEFAULT_MIN_FONT_SIZE_PX,maxfontsize:a.DEFAULT_MAX_FONT_SIZE_PX,childSelector:"",resize:!0},e||{}),this.each(function(){var t=$(this).addClass("bigtext"),o=t.width(),s=t.attr("id"),l=e.childSelector?t.find(e.childSelector):t.children();s||(s="bigtext-id"+i++,t.attr("id",s)),e.resize&&a.bindResize("resize.bigtext-event-"+s,function(){a.jQueryMethod.call($("#"+s),e)}),a.clearCss(s),l.addClass(function(e,t){return[t.replace(new RegExp("\\b"+a.LINE_CLASS_PREFIX+"\\d+\\b"),""),a.LINE_CLASS_PREFIX+e].join(" ")});var u=n(t,l,o,e.maxfontsize,e.minfontsize);r.append(a.generateCss(s,u.fontSizes,u.wordSpacings,u.minFontSizes))}),this.trigger("bigtext:complete")}};$.fn.bigtext=a.jQueryMethod,e.BigText=a}(this,jQuery),$("#bigtext").bigtext().resize();