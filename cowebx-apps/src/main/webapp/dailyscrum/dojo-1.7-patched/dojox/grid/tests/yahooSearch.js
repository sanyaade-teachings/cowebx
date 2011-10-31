/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

dojo.declare("YahooStore",dojox.data.ServiceStore,{_processResults:function(_1,_2){var _3=0;if(_1.ResultSet){_3=_1.ResultSet.totalResultsAvailable;_1=_1.ResultSet.Result;}var _4=this.inherited(arguments);_4.totalCount=_3>1000?1000:_3;return _4;},fetch:function(_5){if(_5.query){if(_5.count){_5.query["results"]=_5.count;}if(typeof _5.start!="undefined"){_5.query["start"]=_5.start+1;}}return this.inherited(arguments);}});var getCellData=function(_6,_7){return grid.store.getValue(_6,_7);};var getLink=function(_8,_9){if(!_9){return "&nbsp;";}return {text:getCellData(_9,"Title"),href:getCellData(_9,"ClickUrl")};};var formatLink=function(_a){return typeof _a=="object"?dojo.string.substitute("<a target=\"_blank\" href=\"${href}\">${text}</a>",_a):_a;};var formatDate=function(_b,_c){if(!_b){return "&nbsp;";}var d=new Date(_b*1000);return dojo.string.substitute("${0}/${1}/${2}",[d.getMonth()+1,d.getDate(),d.getFullYear()]);};var getImage=function(_d,_e){if(!_e){return "&nbsp;";}var _f=getCellData(_e,"Thumbnail");return {href:getCellData(_e,"ClickUrl"),src:_f.Url,width:_f.Width,height:_f.Height};};var formatImage=function(_10){return typeof _10=="object"?dojo.string.substitute("<a href=\"${href}\" target=\"_blank\"><img border=0 src=\"${src}\" width=\"${width}\" height=\"${height}\"></a>",_10):_10;};var getDimensions=function(_11,_12){if(!_12){return "&nbsp;";}var w=getCellData(_12,"Width");var h=getCellData(_12,"Height");return w+" x "+h;};