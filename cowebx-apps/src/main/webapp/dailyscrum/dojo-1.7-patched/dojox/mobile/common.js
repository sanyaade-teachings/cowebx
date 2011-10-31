/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo/_base/lang","dojo/_base/array","dojo/_base/html","dijit/_WidgetBase"],function(_1,_2,_3,_4){dojo.getObject("mobile",true,dojox);var d=dojo;var ua=navigator.userAgent;d.isBB=ua.indexOf("BlackBerry")>=0&&parseFloat(ua.split("Version/")[1])||undefined;d.isAndroid=parseFloat(ua.split("Android ")[1])||undefined;if(ua.match(/(iPhone|iPod|iPad)/)){var p="is"+RegExp.$1.replace(/i/,"I");var v=ua.match(/OS ([\d_]+)/)?RegExp.$1:"1";d.isIPhone=d[p]=parseFloat(v.replace(/_/,".").replace(/_/g,""));}var _5=d.doc.documentElement;_5.className+=d.trim([d.isBB?"dj_bb":"",d.isAndroid?"dj_android":"",d.isIPhone?"dj_iphone":"",d.isIPod?"dj_ipod":"",d.isIPad?"dj_ipad":""].join(" ").replace(/ +/g," "));var dm=dojox.mobile;dm.getScreenSize=function(){return {h:dojo.global.innerHeight||dojo.doc.documentElement.clientHeight,w:dojo.global.innerWidth||dojo.doc.documentElement.clientWidth};};dm.updateOrient=function(){var _6=dm.getScreenSize();dojo.replaceClass(dojo.doc.documentElement,_6.h>_6.w?"dj_portrait":"dj_landscape",_6.h>_6.w?"dj_landscape":"dj_portrait");};dm.updateOrient();dm.tabletSize=500;dm.detectScreenSize=function(_7){var _8=dm.getScreenSize();var sz=Math.min(_8.w,_8.h);var _9,to;if(sz>=dm.tabletSize&&(_7||(!this._sz||this._sz<dm.tabletSize))){_9="phone";to="tablet";}else{if(sz<dm.tabletSize&&(_7||(!this._sz||this._sz>=dm.tabletSize))){_9="tablet";to="phone";}}if(to){dojo.replaceClass(dojo.doc.documentElement,"dj_"+to,"dj_"+_9);dojo.publish("/dojox/mobile/screenSize/"+to,[_8]);}this._sz=sz;};dm.detectScreenSize();dm.setupIcon=function(_a,_b){if(_a&&_b){var _c=dojo.map(_b.split(/[ ,]/),function(_d){return _d-0;});var t=_c[0];var r=_c[1]+_c[2];var b=_c[0]+_c[3];var l=_c[1];_a.style.clip="rect("+t+"px "+r+"px "+b+"px "+l+"px)";_a.style.top=dojo.style(_a,"top")-t+"px";_a.style.left=dojo.style(_a.parentNode,"paddingLeft")-l+"px";}};dm.hideAddressBarWait=dojo.config["mblHideAddressBarWait"]||2000;dm.hideAddressBar=function(_e,_f){dojo.body().style.minHeight="1000px";setTimeout(function(){scrollTo(0,1);},200);setTimeout(function(){scrollTo(0,1);},800);setTimeout(function(){scrollTo(0,1);dojo.body().style.minHeight=dm.getScreenSize().h+"px";if(_f!==false){dm.resizeAll();}},dm.hideAddressBarWait);};dm.resizeAll=function(evt,_10){dojo.publish("/dojox/mobile/resizeAll",[evt,_10]);dm.updateOrient();dm.detectScreenSize();var _11=function(w){var _12=w.getParent&&w.getParent();return !!((!_12||!_12.resize)&&w.resize);};var _13=function(w){dojo.forEach(w.getChildren(),function(_14){if(_11(_14)){_14.resize();}_13(_14);});};if(_10){if(_10.resize){_10.resize();}_13(_10);}else{dijit.registry.filter(_11).forEach(function(w){w.resize();});}};dm.openWindow=function(url,_15){dojo.global.open(url,_15||"_blank");};dm.createDomButton=function(_16,_17,_18){var s=_16.className;var _19=_18||_16;if(s.match(/(mblDomButton\w+)/)&&s.indexOf("/")===-1){var _1a=RegExp.$1;var _1b=4;if(s.match(/(mblDomButton\w+_(\d+))/)){_1b=RegExp.$2-0;}for(var i=0,p=_19;i<_1b;i++){p=p.firstChild||dojo.create("DIV",null,p);}if(_18){setTimeout(function(){dojo.removeClass(_16,_1a);},0);dojo.addClass(_18,_1a);}}else{if(s.indexOf(".")!==-1){dojo.create("IMG",{src:s},_19);}else{return null;}}dojo.addClass(_19,"mblDomButton");dojo.style(_19,_17);return _19;};if(dojo.config.parseOnLoad){dojo.ready(90,function(){var _1c=dojo.body().getElementsByTagName("*");var i,len,s;len=_1c.length;for(i=0;i<len;i++){s=_1c[i].getAttribute("dojoType");if(s){if(_1c[i].parentNode.getAttribute("lazy")=="true"){_1c[i].setAttribute("__dojoType",s);_1c[i].removeAttribute("dojoType");}}}});}dojo.addOnLoad(function(){dm.detectScreenSize(true);if(dojo.config["mblApplyPageStyles"]!==false){dojo.addClass(dojo.doc.documentElement,"mobile");}if(dojo.config["mblAndroidWorkaround"]!==false&&dojo.isAndroid>=2.2&&dojo.isAndroid<3){if(dojo.config["mblAndroidWorkaroundButtonStyle"]!==false){dojo.create("style",{innerHTML:"BUTTON,INPUT[type='button'],INPUT[type='submit'],INPUT[type='reset'],INPUT[type='file']::-webkit-file-upload-button{-webkit-appearance:none;}"},dojo.doc.head,"first");}dojo.style(dojo.doc.documentElement,"webkitTransform","translate3d(0,0,0)");dojo.connect(null,"onfocus",null,function(e){dojo.style(dojo.doc.documentElement,"webkitTransform","");});dojo.connect(null,"onblur",null,function(e){dojo.style(dojo.doc.documentElement,"webkitTransform","translate3d(0,0,0)");});}var f=dm.resizeAll;if(dojo.config["mblHideAddressBar"]!==false&&navigator.appVersion.indexOf("Mobile")!=-1||dojo.config["mblForceHideAddressBar"]===true){dm.hideAddressBar();if(dojo.config["mblAlwaysHideAddressBar"]===true){f=dm.hideAddressBar;}}dojo.connect(null,(dojo.global.onorientationchange!==undefined&&!dojo.isAndroid)?"onorientationchange":"onresize",null,f);var _1d=dojo.body().getElementsByTagName("*");var i,len=_1d.length,s;for(i=0;i<len;i++){s=_1d[i].getAttribute("__dojoType");if(s){_1d[i].setAttribute("dojoType",s);_1d[i].removeAttribute("__dojoType");}}if(dojo.hash){var _1e=function(_1f){var arr;arr=dijit.findWidgets(_1f);var _20=arr;for(var i=0;i<_20.length;i++){arr=arr.concat(_1e(_20[i].containerNode));}return arr;};dojo.subscribe("/dojo/hashchange",null,function(_21){var _22=dm.currentView;if(!_22){return;}var _23=dm._params;if(!_23){var _24=_21?_21:dm._defaultView.id;var _25=_1e(_22.domNode);var dir=1,_26="slide";for(i=0;i<_25.length;i++){var w=_25[i];if("#"+_24==w.moveTo){_26=w.transition;dir=(w instanceof dm.Heading)?-1:1;break;}}_23=[_24,dir,_26];}_22.performTransition.apply(_22,_23);dm._params=null;});}dojo.body().style.visibility="visible";});dijit.getEnclosingWidget=function(_27){while(_27&&_27.tagName!=="BODY"){if(_27.getAttribute&&_27.getAttribute("widgetId")){return dijit.registry.byId(_27.getAttribute("widgetId"));}_27=_27._parentNode||_27.parentNode;}return null;};dojo.extend(dijit._WidgetBase,{_cv:function(s){return s;}});(function(){if(dojo.isWebKit){dm.hasTouch=(typeof dojo.doc.documentElement.ontouchstart!="undefined"&&navigator.appVersion.indexOf("Mobile")!=-1)||!!d.isAndroid;}})();return dm;});