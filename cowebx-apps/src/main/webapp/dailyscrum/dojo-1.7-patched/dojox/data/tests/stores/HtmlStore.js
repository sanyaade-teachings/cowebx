/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

define(["dojo","dijit","dojox","dojox/data/HtmlStore","dojo/data/api/Read","dojo/data/api/Identity"],function(_1,_2,_3){_1.getObject("dojox.data.tests.stores.HtmlStore",1);_3.data.tests.stores.HtmlStore.getBooks3Store=function(){return new _3.data.HtmlStore({url:_1.moduleUrl("dojox.data.tests","stores/books3.html").toString(),dataId:"books3"});};_3.data.tests.stores.HtmlStore.getBooks3StoreOnCreate=function(){return new _3.data.HtmlStore({url:_1.moduleUrl("dojox.data.tests","stores/books3.html").toString(),dataId:"books3",fetchOnCreate:true});};_3.data.tests.stores.HtmlStore.getBooks2Store=function(){return new _3.data.HtmlStore({url:_1.moduleUrl("dojox.data.tests","stores/books2.html").toString(),dataId:"books2"});};_3.data.tests.stores.HtmlStore.getBooksStore=function(){return new _3.data.HtmlStore({url:_1.moduleUrl("dojox.data.tests","stores/books.html").toString(),dataId:"books"});};_3.data.tests.stores.HtmlStore.getBooksStoreWhitespace=function(){return new _3.data.HtmlStore({url:_1.moduleUrl("dojox.data.tests","stores/booksWhitespace.html").toString(),dataId:"books",trimWhitespace:true});};_3.data.tests.stores.HtmlStore.getBooks3StoreWhitespace=function(){return new _3.data.HtmlStore({url:_1.moduleUrl("dojox.data.tests","stores/books3Whitespace.html").toString(),dataId:"books3",trimWhitespace:true});};doh.register("dojox.data.tests.stores.HtmlStore",[function testReadAPI_fetch_all_table(t){var _4=_3.data.tests.stores.HtmlStore.getBooksStore();var d=new doh.Deferred();function _5(_6,_7){t.assertEqual(20,_6.length);d.callback(true);};function _8(_9,_a){d.errback(_9);};_4.fetch({query:{isbn:"*"},onComplete:_5,onError:_8});return d;},function testReadAPI_fetch_all_table_Whitespace(t){var _b=_3.data.tests.stores.HtmlStore.getBooksStoreWhitespace();var d=new doh.Deferred();function _c(_d,_e){t.assertEqual(20,_d.length);d.callback(true);};function _f(_10,_11){d.errback(_10);};_b.fetch({query:{isbn:"*"},onComplete:_c,onError:_f});return d;},function testReadAPI_fetch_all_list(t){var _12=_3.data.tests.stores.HtmlStore.getBooks3Store();var d=new doh.Deferred();function _13(_14,_15){t.assertEqual(5,_14.length);d.callback(true);};function _16(_17,_18){d.errback(_17);};_12.fetch({query:{name:"*"},onComplete:_13,onError:_16});return d;},function testReadAPI_fetch_one_table(t){var _19=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _1a(_1b,_1c){t.assertEqual(1,_1b.length);d.callback(true);};function _1d(_1e,_1f){d.errback(_1e);};_19.fetch({query:{isbn:"A9B574"},onComplete:_1a,onError:_1d});return d;},function testReadAPI_fetch_one_table_Whitespace(t){var _20=_3.data.tests.stores.HtmlStore.getBooksStoreWhitespace();var d=new doh.Deferred();function _21(_22,_23){t.assertEqual(1,_22.length);d.callback(true);};function _24(_25,_26){d.errback(_25);};_20.fetch({query:{isbn:"19"},onComplete:_21,onError:_24});return d;},function testReadAPI_fetch_one_list(t){var _27=_3.data.tests.stores.HtmlStore.getBooks3Store();var d=new doh.Deferred();function _28(_29,_2a){t.assertEqual(1,_29.length);d.callback(true);};function _2b(_2c,_2d){d.errback(_2c);};_27.fetch({query:{name:"A9B57C - Title of 1 - Author of 1"},onComplete:_28,onError:_2b});return d;},function testReadAPI_fetch_one_list_oncreate(t){var _2e=_3.data.tests.stores.HtmlStore.getBooks3StoreOnCreate();var d=new doh.Deferred();function _2f(_30,_31){t.assertEqual(1,_30.length);d.callback(true);};function _32(_33,_34){d.errback(_33);};_2e.fetch({query:{name:"A9B57C - Title of 1 - Author of 1"},onComplete:_2f,onError:_32});return d;},function testReadAPI_fetch_one_list_Whitespace(t){var _35=_3.data.tests.stores.HtmlStore.getBooks3StoreWhitespace();var d=new doh.Deferred();function _36(_37,_38){t.assertEqual(1,_37.length);d.callback(true);};function _39(_3a,_3b){d.errback(_3a);};_35.fetch({query:{name:"A9B57C - Title of 1 - Author of 1"},onComplete:_36,onError:_39});return d;},function testReadAPI_fetch_paging(t){var _3c=_3.data.tests.stores.HtmlStore.getBooksStore();var d=new doh.Deferred();function _3d(_3e,_3f){t.assertEqual(5,_3e.length);_3f.start=3;_3f.count=1;_3f.onComplete=_40;_3c.fetch(_3f);};function _40(_41,_42){t.assertEqual(1,_41.length);_42.start=0;_42.count=5;_42.onComplete=_43;_3c.fetch(_42);};function _43(_44,_45){t.assertEqual(5,_44.length);_45.start=2;_45.count=20;_45.onComplete=_46;_3c.fetch(_45);};function _46(_47,_48){t.assertEqual(18,_47.length);_48.start=9;_48.count=100;_48.onComplete=_49;_3c.fetch(_48);};function _49(_4a,_4b){t.assertEqual(11,_4a.length);_4b.start=2;_4b.count=20;_4b.onComplete=_4c;_3c.fetch(_4b);};function _4c(_4d,_4e){t.assertEqual(18,_4d.length);d.callback(true);};function _4f(_50,_51){t.assertEqual(20,_50.length);_51.start=1;_51.count=5;_51.onComplete=_3d;_3c.fetch(_51);};function _52(_53,_54){d.errback(_53);};_3c.fetch({onComplete:_4f,onError:_52});return d;},function testReadAPI_fetch_pattern0(t){var _55=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _56(_57,_58){t.assertEqual(1,_57.length);d.callback(true);};function _59(_5a,_5b){d.errback(_5a);};_55.fetch({query:{isbn:"?9B574"},onComplete:_56,onError:_59});return d;},function testReadAPI_fetch_pattern1(t){var _5c=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _5d(_5e,_5f){t.assertEqual(4,_5e.length);d.callback(true);};function _60(_61,_62){d.errback(_61);};_5c.fetch({query:{isbn:"A9B57?"},onComplete:_5d,onError:_60});return d;},function testReadAPI_fetch_pattern2(t){var _63=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _64(_65,_66){t.assertEqual(5,_65.length);d.callback(true);};function _67(_68,_69){d.errback(_68);};_63.fetch({query:{isbn:"A9*"},onComplete:_64,onError:_67});return d;},function testReadAPI_fetch_pattern_caseInsensitive(t){var _6a=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _6b(_6c,_6d){t.assertEqual(1,_6c.length);d.callback(true);};function _6e(_6f,_70){d.errback(_6f);};_6a.fetch({query:{isbn:"?9b574"},queryOptions:{ignoreCase:true},onComplete:_6b,onError:_6e});return d;},function testReadAPI_fetch_pattern_caseSensitive(t){var _71=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _72(_73,_74){t.assertEqual(1,_73.length);d.callback(true);};function _75(_76,_77){d.errback(_76);};_71.fetch({query:{isbn:"?9B574"},queryOptions:{ignoreCase:false},onComplete:_72,onError:_75});return d;},function testReadAPI_getLabel_table(t){var _78=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _79(_7a,_7b){t.assertEqual(_7a.length,1);var _7c=_78.getLabel(_7a[0]);t.assertTrue(_7c!==null);t.assertEqual("Item #4",_7c);d.callback(true);};function _7d(_7e,_7f){d.errback(_7e);};_78.fetch({query:{isbn:"A9B574"},onComplete:_79,onError:_7d});return d;},function testReadAPI_getLabel_list(t){var _80=_3.data.tests.stores.HtmlStore.getBooks3Store();var d=new doh.Deferred();function _81(_82,_83){t.assertEqual(_82.length,1);var _84=_80.getLabel(_82[0]);t.assertTrue(_84!==null);t.assertEqual("A9B57C - Title of 1 - Author of 1",_84);d.callback(true);};function _85(_86,_87){d.errback(_86);};_80.fetch({query:{name:"A9B57C - Title of 1 - Author of 1"},onComplete:_81,onError:_85});return d;},function testReadAPI_getLabelAttributes(t){var _88=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _89(_8a,_8b){t.assertEqual(_8a.length,1);var _8c=_88.getLabelAttributes(_8a[0]);t.assertTrue(_8c===null);d.callback(true);};function _8d(_8e,_8f){d.errback(_8e);};_88.fetch({query:{isbn:"A9B574"},onComplete:_89,onError:_8d});return d;},function testReadAPI_getValue(t){var _90=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _91(_92,_93){t.assertEqual(1,_92.length);var _94=_92[0];t.assertTrue(_90.hasAttribute(_94,"isbn"));t.assertEqual(_90.getValue(_94,"isbn"),"A9B574");d.callback(true);};function _95(_96,_97){d.errback(_96);};_90.fetch({query:{isbn:"A9B574"},onComplete:_91,onError:_95});return d;},function testReadAPI_getValues(t){var _98=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _99(_9a,_9b){t.assertEqual(1,_9a.length);var _9c=_9a[0];t.assertTrue(_98.hasAttribute(_9c,"isbn"));var _9d=_98.getValues(_9c,"isbn");t.assertEqual(1,_9d.length);t.assertEqual("A9B574",_9d[0]);d.callback(true);};function _9e(_9f,_a0){d.errback(_9f);};_98.fetch({query:{isbn:"A9B574"},onComplete:_99,onError:_9e});return d;},function testReadAPI_isItem(t){var _a1=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _a2(_a3,_a4){t.assertEqual(1,_a3.length);var _a5=_a3[0];t.assertTrue(_a1.isItem(_a5));t.assertTrue(!_a1.isItem({}));t.assertTrue(!_a1.isItem("Foo"));t.assertTrue(!_a1.isItem(1));d.callback(true);};function _a6(_a7,_a8){d.errback(_a7);};_a1.fetch({query:{isbn:"A9B574"},onComplete:_a2,onError:_a6});return d;},function testReadAPI_isItem_multistore(t){var _a9=_3.data.tests.stores.HtmlStore.getBooksStore();var _aa=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _ab(_ac,_ad){t.assertEqual(1,_ac.length);var _ae=_ac[0];t.assertTrue(_a9.isItem(_ae));function _af(_b0,_b1){t.assertEqual(1,_b0.length);var _b2=_b0[0];t.assertTrue(_aa.isItem(_b2));t.assertTrue(!_a9.isItem(_b2));t.assertTrue(!_aa.isItem(_ae));d.callback(true);};_aa.fetch({query:{isbn:"A9B574"},onComplete:_af,onError:_b3});};function _b3(_b4,_b5){d.errback(_b4);};_a9.fetch({query:{isbn:"1"},onComplete:_ab,onError:_b3});return d;},function testReadAPI_hasAttribute(t){var _b6=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _b7(_b8,_b9){t.assertEqual(1,_b8.length);var _ba=_b8[0];t.assertTrue(_b6.hasAttribute(_ba,"isbn"));t.assertTrue(!_b6.hasAttribute(_ba,"bob"));d.callback(true);};function _bb(_bc,_bd){d.errback(_bc);};_b6.fetch({query:{isbn:"A9B574"},onComplete:_b7,onError:_bb});return d;},function testReadAPI_containsValue(t){var _be=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _bf(_c0,_c1){t.assertEqual(1,_c0.length);var _c2=_c0[0];t.assertTrue(_be.containsValue(_c2,"isbn","A9B574"));t.assertTrue(!_be.containsValue(_c2,"isbn","bob"));d.callback(true);};function _c3(_c4,_c5){d.errback(_c4);};_be.fetch({query:{isbn:"A9B574"},onComplete:_bf,onError:_c3});return d;},function testReadAPI_sortDescending(t){var _c6=_3.data.tests.stores.HtmlStore.getBooksStore();var _c7=[9,8,7,6,5,4,3,20,2,19,18,17,16,15,14,13,12,11,10,1];var d=new doh.Deferred();function _c8(_c9,_ca){t.assertEqual(20,_c9.length);for(var i=0;i<_c9.length;i++){t.assertEqual(_c7[i],_c6.getValue(_c9[i],"isbn").toString());}d.callback(true);};function _cb(_cc,_cd){d.errback(_cc);};var _ce=[{attribute:"isbn",descending:true}];_c6.fetch({query:{isbn:"*"},sort:_ce,onComplete:_c8,onError:_cb});return d;},function testReadAPI_sortAscending(t){var _cf=_3.data.tests.stores.HtmlStore.getBooksStore();var _d0=[1,10,11,12,13,14,15,16,17,18,19,2,20,3,4,5,6,7,8,9];var d=new doh.Deferred();function _d1(_d2,_d3){t.assertEqual(20,_d2.length);var _d4=1;for(var i=0;i<_d2.length;i++){t.assertEqual(_d0[i],_cf.getValue(_d2[i],"isbn").toString());}d.callback(true);};function _d5(_d6,_d7){d.errback(_d6);};var _d8=[{attribute:"isbn"}];_cf.fetch({query:{isbn:"*"},sort:_d8,onComplete:_d1,onError:_d5});return d;},function testReadAPI_sortDescendingNumeric(t){var _d9=_3.data.tests.stores.HtmlStore.getBooksStore();_d9.comparatorMap={};_d9.comparatorMap["isbn"]=function(a,b){var ret=0;if(parseInt(a.toString())>parseInt(b.toString())){ret=1;}else{if(parseInt(a.toString())<parseInt(b.toString())){ret=-1;}}return ret;};var d=new doh.Deferred();function _da(_db,_dc){t.assertEqual(20,_db.length);var _dd=20;for(var i=0;i<_db.length;i++){t.assertEqual(_dd,_d9.getValue(_db[i],"isbn").toString());_dd--;}d.callback(true);};function _de(_df,_e0){d.errback(_df);};var _e1=[{attribute:"isbn",descending:true}];_d9.fetch({query:{isbn:"*"},sort:_e1,onComplete:_da,onError:_de});return d;},function testReadAPI_sortAscendingNumeric(t){var _e2=_3.data.tests.stores.HtmlStore.getBooksStore();_e2.comparatorMap={};_e2.comparatorMap["isbn"]=function(a,b){var ret=0;if(parseInt(a.toString())>parseInt(b.toString())){ret=1;}else{if(parseInt(a.toString())<parseInt(b.toString())){ret=-1;}}return ret;};var d=new doh.Deferred();function _e3(_e4,_e5){t.assertEqual(20,_e4.length);var _e6=1;for(var i=0;i<_e4.length;i++){t.assertEqual(_e6,_e2.getValue(_e4[i],"isbn").toString());_e6++;}d.callback(true);};function _e7(_e8,_e9){d.errback(_e8);};var _ea=[{attribute:"isbn"}];_e2.fetch({query:{isbn:"*"},sort:_ea,onComplete:_e3,onError:_e7});return d;},function testReadAPI_isItemLoaded(t){var _eb=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _ec(_ed,_ee){t.assertEqual(1,_ed.length);var _ef=_ed[0];t.assertTrue(_eb.isItemLoaded(_ef));d.callback(true);};function _f0(_f1,_f2){d.errback(_f1);};_eb.fetch({query:{isbn:"A9B574"},onComplete:_ec,onError:_f0});return d;},function testReadAPI_getFeatures(t){var _f3=_3.data.tests.stores.HtmlStore.getBooks2Store();var _f4=_f3.getFeatures();var _f5=0;for(i in _f4){t.assertTrue((i==="dojo.data.api.Read"||i==="dojo.data.api.Identity"));_f5++;}t.assertEqual(2,_f5);},function testReadAPI_getAttributes(t){var _f6=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _f7(_f8,_f9){t.assertEqual(1,_f8.length);var _fa=_f8[0];var _fb=_f6.getAttributes(_fa);t.assertEqual(3,_fb.length);for(var i=0;i<_fb.length;i++){t.assertTrue((_fb[i]==="isbn"||_fb[i]==="title"||_fb[i]==="author"));}d.callback(true);};function _fc(_fd,_fe){d.errback(_fd);};_f6.fetch({query:{isbn:"A9B574"},onComplete:_f7,onError:_fc});return d;},function testReadAPI_functionConformance(t){var _ff=_3.data.tests.stores.HtmlStore.getBooksStore();var _100=new _1.data.api.Read();var _101=true;for(i in _100){var _102=_100[i];if(typeof _102==="function"){var _103=_ff[i];if(!(typeof _103==="function")){_101=false;break;}}}t.assertTrue(_101);},function testIdentityAPI_getIdentity_table(t){var _104=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _105(_106,_107){t.assertEqual(1,_106.length);var item=_106[0];t.assertEqual(4,_104.getIdentity(item));d.callback(true);};function _108(_109,_10a){d.errback(_109);};_104.fetch({query:{isbn:"A9B574"},onComplete:_105,onError:_108});return d;},function testIdentityAPI_getIdentity_list(t){var _10b=_3.data.tests.stores.HtmlStore.getBooks3Store();var d=new doh.Deferred();function _10c(_10d,_10e){t.assertEqual(1,_10d.length);var item=_10d[0];t.assertEqual("A9B57C - Title of 1 - Author of 1",_10b.getIdentity(item));d.callback(true);};function _10f(_110,_111){d.errback(_110);};_10b.fetch({query:{name:"A9B57C - Title of 1 - Author of 1"},onComplete:_10c,onError:_10f});return d;},function testIdentityAPI_getIdentityAttributes(t){var _112=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _113(_114,_115){t.assertEqual(1,_114.length);var item=_114[0];var _116=_112.getIdentityAttributes(item);t.assertEqual(null,_116);d.callback(true);};function _117(_118,_119){d.errback(_118);};_112.fetch({query:{isbn:"A9B574"},onComplete:_113,onError:_117});return d;},function testIdentityAPI_fetchItemByIdentity_table(t){var _11a=_3.data.tests.stores.HtmlStore.getBooks2Store();var d=new doh.Deferred();function _11b(item,_11c){t.assertTrue(item!==null);t.assertTrue(_11a.isItem(item));t.assertEqual("A9B574",_11a.getValue(item,"isbn"));d.callback(true);};function _11d(_11e,_11f){d.errback(_11e);};_11a.fetchItemByIdentity({identity:4,onItem:_11b,onError:_11d});return d;},function testIdentityAPI_fetchItemByIdentity_list(t){var _120=_3.data.tests.stores.HtmlStore.getBooks3Store();var d=new doh.Deferred();function _121(item,_122){t.assertTrue(item!==null);t.assertTrue(_120.isItem(item));t.assertEqual("A9B57C - Title of 1 - Author of 1",_120.getValue(item,"name"));d.callback(true);};function _123(_124,_125){d.errback(_124);};_120.fetchItemByIdentity({identity:"A9B57C - Title of 1 - Author of 1",onItem:_121,onError:_123});return d;},function testIdentityAPI_functionConformance(t){var _126=_3.data.tests.stores.HtmlStore.getBooksStore();var _127=new _1.data.api.Identity();var _128=true;for(i in _127){var _129=_127[i];if(typeof _129==="function"){var _12a=_126[i];if(!(typeof _12a==="function")){_128=false;break;}}}t.assertTrue(_128);}]);});require(["dojox/data/tests/stores/HtmlStore"]);