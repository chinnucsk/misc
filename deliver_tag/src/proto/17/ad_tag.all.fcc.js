(function(){
Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){var c=this.length,d=Number(b)||0,d=0>d?Math.ceil(d):Math.floor(d);for(0>d&&(d+=c);d<c;d+=1)if(d in this&&this[d]===a)return d;return-1});
var modedoc=/BackCompat/i.test(window.document.compatMode)?window.document.body:window.document.documentElement,AdingoFluctCommon=function(){var a={v:0,exist:!1,done:!1,tag_template:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"width="{$sWidth}" height="{$sHeight}" style="border:none;padding:0;margin:0"><param name="movie" value="{$sSrc}"><param name="flashvars" value="{$flashVars}"><param name="allowScriptAccess" value="always"><param name="quality" value="autohigh"><param name="bgcolor" value="#fff"><param name="wmode" value="opaque"><embed src="{$sSrc}"flashvars="{$flashVars}"quality="autohigh"allowscriptaccess="always"swliveconnect="FALSE"width="{$sWidth}"height="{$sHeight}"wmode="opaque"type="application/x-shockwave-flash"pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></object>'},b=
null;this.flashInfo=function(){if(null!==b)return b();if(-1!==window.navigator.userAgent.toLowerCase().indexOf("msie"))try{if("undefined"!==typeof new ActiveXObject("ShockwaveFlash.ShockwaveFlash")){var c=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version");a.v=parseInt(c.match(/([0-9]+)/)[0],10);a.exist=!0}}catch(d){}else"undefined"!==typeof navigator.plugins["Shockwave Flash"]&&(a.v=parseInt(navigator.plugins["Shockwave Flash"].description.match(/\d+\.\d+/),10),a.exist=0!==
a.v?!0:!1);a.done=!0;b=function(){return a};return b()}};
AdingoFluctCommon.prototype={gZoom:function(){return""===modedoc.style.zoom?1:modedoc.style.zoom},lZoom:function(a){return""!==modedoc.style.zoom?a*modedoc.style.zoom:this.wwidth()>this.dwidth()?this.wwidth()>=a?this.dwidth()/this.wwidth():this.dwidth()/a:1},lposX:function(a){return(this.offsetX()+this.wwidth()-a*this.gZoom()*this.lZoom(a))/this.gZoom()/this.lZoom(a)/2},lposY:function(a,b){return(this.offsetY()+this.wheight()-a*this.gZoom()*this.lZoom(b))/this.gZoom()/this.lZoom(b)},lposXY:function(a,
b){var c=this.lZoom(a),d=this.gZoom(),e=Math.max(0,this.offsetY()),f=this.offsetX(),f=(this.wwidth()-a*d*c)/d/c/2+f,g=(e+this.wheight()-b*d*c)/d/c,h=e/d/c;0<e&&e+this.wheight()>=this.dheight()-4&&(g=h);this.isAndroid()&&window.outerHeight/window.devicePixelRatio>e&&(g=(window.outerHeight/window.devicePixelRatio-b)*d*c/d/c);return{x:f,y:g,zoom:c}},wsize:function(){return{h:this.wheight,w:this.wwidth}},wheight:function(){var a=null;null===a&&(a="undefined"!==typeof window.innerHeight?function(){return window.innerHeight}:
function(){return modedoc.clientHeight});return a()},wwidth:function(){var a=null;null===a&&(a="undefined"!==typeof window.innerWidth?function(){return window.innerWidth}:function(){return modedoc.clientWidth});return a()},dsize:function(){return{h:this.dheight,w:this.dwidth}},dheight:function(){var a=null;null===a&&(a=function(){return Math.max(modedoc.clientHeight,modedoc.scrollHeight)});return a()},dwidth:function(){var a=null;null===a&&(a=function(){return Math.max(modedoc.clientWidth,modedoc.scrollWidth)});
return a()},scrollPos:function(){return{y:this.scrollY,x:this.scrollX}},offsetY:function(){var a=null;null===a&&(a="undefined"!==typeof window.scrollY?function(){return Math.max(0,window.scrollY)}:"undefined"!==typeof window.pageYOffset?function(){return Math.max(0,window.pageYOffset)}:function(){return Math.max(0,modedoc.scrollTop)});return a()},offsetX:function(){var a=null;null===a&&(a="undefined"!==typeof window.scrollX?function(){return Math.max(0,window.scrollX)}:"undefined"!==typeof window.pageXOffset?
function(){return Math.max(0,window.pageXOffset)}:function(){return Math.max(0,modedoc.scrollLeft)});return a()},beacon:function(a){var b=window.document.createElement("img");b.setAttribute("src",a);b.setAttribute("style","display:none;position:absolute;border:none;padding:0;margin:0;");b.setAttribute("width",0);b.setAttribute("height",0);b.setAttribute("border",0);return b},create_element:function(a){return window.document.createElement(a)},deleteById:function(a){a=this.byId(a);a.parentNode.removeChild(a)},
loader:function(a,b){var c=this.create_element("script");c.setAttribute("id","fluctAdLoader_"+a);c.src=b;return c},byId:function(a){return window.document.getElementById(a)},iframe:function(a,b){var c=b.width+"px",d=b.height+"px",e=this.create_element("iframe"),f="0px";1===this.util.hv(b,"overlay")&&(f="-4px");e.setAttribute("id",a);e.setAttribute("style","width:"+c+";height:"+d+";border:none;padding:0;margin:0;margin-bottom:"+f+";pointer-events:auto;");e.setAttribute("marginwidth",0);e.setAttribute("marginheight",
0);e.setAttribute("allowtransparency","false");e.setAttribute("vspace",0);e.setAttribute("hspace",0);e.setAttribute("frameborder",0);e.setAttribute("scrolling","no");return e},parse_param:function(a){var b={};b.tag=this.myTag(a);a=b.tag.src;if(0>a.indexOf("?"))return b;a=a.substring(a.indexOf("?")+1);for(var c=a.split("&"),d=c.length,e=0;e<d;e+=1){var f=c[e].split("=");b[f[0]]=f[1]}b.requestQuery=a;return b},myTag:function(a){return"script"===a.nodeName.toLowerCase()?a:this.myTag(a.lastChild)},insertAfter:function(a,
b){a.parentNode.insertBefore(b,a.nextSibling)},unit_beacon:function(a,b){var c=this.byId(a),d=this.beacon(b.beacon);c.appendChild(d);return!0},html_ad:function(a,b){var c=this.byId(a),d=this.iframe("adingoFluctIframe_"+b.unit_id,b);c.appendChild(d);c=d.contentWindow.document;c.open();c.write('<html><head></head><body style="padding:0px;margin:0px;border:none;">'+b.html+"</body></html>");c.close();return!0},image_ad:function(a,b){var c=this.byId(a),d=this.create_element("img");d.setAttribute("src",
b.creative_url);d.setAttribute("width",b.width);d.setAttribute("height",b.height);d.setAttribute("border",0);d.setAttribute("style","border:none;padding:0;margin:0;");0<b.alt.length&&d.setAttribute("alt",this.unicodeDecoder(b.alt));var e=this.create_element("a");e.setAttribute("href",b.landing_url);e.setAttribute("target",this.openTarget(b.open));c.appendChild(e);e.appendChild(d);return!0},flash_ad:function(a,b){var c=this.flashInfo(),d=this.byId(a);if(c.exist&&5<c.v){var e="clickTAG="+escape(b.landing_url)+
"&targetTAG="+this.openTarget(b.open),c=c.tag_template.replace(/\{\$sWidth\}/g,b.width),c=c.replace(/\{\$sHeight\}/g,b.height),c=c.replace(/\{\$sSrc\}/g,b.creative_url),c=c.replace(/\{\$flashVars\}/g,e);d.innerHTML=c;return!0}return null!==b.alt_mage&&""!==b.alt_mage?(e=this.create_element("img"),e.setAttribute("src",b.alt_image),e.setAttribute("width",b.width),e.setAttribute("height",b.height),e.setAttribute("border",0),e.setAttribute("style","border:none;padding:0;margin:0;"),0<b.alt.length&&e.setAttribute("alt",
this.unicodeDecoder(b.alt)),c=this.create_element("a"),c.setAttribute("href",b.landing_url),c.setAttribute("target",this.openTarget(b.open)),d.appendChild(c),c.appendChild(e),!0):!1},unicodeDecoder:function(a){a=a.match(/\\u[0-9a-fA-F]{4}/g);var b="";if(null===a)return"";for(var c=0;c<a.length;c+=1)b+=String.fromCharCode(a[c].replace("\\u","0x"));return b},openTarget:function(a){switch(a){case 1:return"_blank";case 2:return"_top";default:return"_top"}},overlay:function(a){var b=this.byId("adingoFluctUnit_"+
a.unit_id),c=this.create_element("div"),d=a.height+"px",e=a.width+"px";c.setAttribute("id","adingoFluctOverlay_"+a.unit_id);c.setAttribute("class","adingoFluctOverlay");c.setAttribute("style","width:"+e+";height:"+d+";bottom:0px;left:0px;position:absolute;z-index:9993;display:none;font-size:18px;line-height:1.5em;visibility:visible;opacity:0;verticalAlign:middle;padding:0px;margin:0px;border:none;overflow: hidden;");b.appendChild(c);return"adingoFluctOverlay_"+a.unit_id},clearDiv:function(a){var b=
this.byId("adingoFluctUnit_"+a);a=this.byId("adingoFluctOverlay_"+a);if(null===a)for(;b.firstChild;)b.removeChild(b.firstChild);else for(;a.firstChild;)a.removeChild(a.firstChild)},setOpacity:function(a,b){a.style.opacity=b;a.style.filter="alpha(opacity="+100*b+")"},hv:function(a,b){return"undefined"===typeof a[b]?null:a[b]},unit:function(a,b){for(var c in a)for(var d=a[c],e=0;e<d.json.num;e+=1){var f=d.json.ads[e];if(f.unit_id===b)return f}return null},addHandler:function(a,b,c,d){"undefined"!==
typeof a.addEventListener?a.addEventListener(b,c,d):"undefined"!==typeof a.attachEvent&&a.attachEvent("on"+b,c)},removeHandler:function(a,b,c,d){"undefined"!==typeof a.removeEventListener?a.removeEventListener(b,c,d):"undefined"!==typeof a.detachEvent&&a.detachEvent("on"+b,c)},isLandscape:function(){return this.wheight()<this.wwidth()?!0:!1},isAndroid:function(){return 0<=navigator.userAgent.toLowerCase().indexOf("android",0)?!0:!1}};var AdingoFluctSync=function(){};
AdingoFluctSync.logly=function(a){var b="",c=window.document.referrer;try{b=window.parent.document.referrer}catch(d){}try{c=window.parent.document.URL}catch(e){}b="sid=1&aid=$luid&url="+escape(c)+"&rurl="+escape(b);return a.beacon(("https:"===window.document.location.protocol?"https://":"http://")+"dsp.logly.co.jp/sg.gif?"+b)};
AdingoFluctSync.scaleout=function(a){var b=encodeURIComponent(window.document.location.href),c=encodeURIComponent(window.document.referrer);return a.beacon("http://bid.socdm.com/rtb/sync?proto=adingo&sspid=adingo&tp="+b+"&pp="+c+"&t=.gif")};AdingoFluctSync.fout=function(a){return a.beacon("http://sync.fout.jp/sync?xid=fluct")};AdingoFluctSync.render=function(a,b,c){for(var d in c)"logly"===d?b.parentNode.insertBefore(AdingoFluctSync[d](a,c[d]),b):b.parentNode.insertBefore(AdingoFluctSync[d](a),b)};
if("undefined"===typeof window.adingoFluct){var AdingoFluct=function(){this.util=new AdingoFluctCommon;this.data={};this.render_queue=[];this.rendered_units=[];this.effectWatcher=null;this.effectExecute=!1;this.moveWatcher=null;this.moveExecute=!1;this.overlayUnits={};this.reloadWatcher=null;this.synced=!1;this.refreshUnits={};this.addedHandler=!1};AdingoFluct.URL="http://y-nomura.sh.adingo.jp.dev.fluct.me/api/json/v1/?";AdingoFluct.LOAD_NONE=0;AdingoFluct.LOADING=1;AdingoFluct.LOADED=2;AdingoFluct.LOAD_ERROR=
3;AdingoFluct.prototype={destroy:function(){this.rendered_units=this.render_queue=this.data=this.util=null;null!==this.effectWatcher&&(clearTimeout(this.effectWatcher),this.effectWatcher=null,this.effectExecute=!1);null!==this.moveWatcher&&(clearTimeout(this.moveWatcher),this.moveWatcher=null,this.moveExecute=!1);this.overlayUnits=null;null!==this.reloadWatcher&&(clearTimeout(this.reloadWatcher),this.reloadWatcher=null);this.synced=!1;this.refreshUnits=null},setGroup:function(a){a=this.util.parse_param(a);
this.data[a.G]=a;this.data[a.G].load_status=AdingoFluct.LOAD_NONE},callback:function(a){if("success"===a.status){this.util.deleteById("fluctAdLoader_"+a.G);var b=this.data[a.G];b.load_status=AdingoFluct.LOADED;b.json=a;b=this.render_queue.slice(0);this.render_queue=[];if(0<b.length){if(!1===this.synced){var c=b.shift();AdingoFluctSync.render(this.util,this.util.byId("adingoFluctUnit_"+c),a.syncs);this.showAd(c);this.synced=!0}for(;0<b.length;)a=b.shift(),null!==a&&this.showAd(a)}}var b=a=0,d;for(d in this.data)a+=
1,this.data[d].load_status===AdingoFluct.LOADED&&(b+=1);a===b&&(this.rendered_units=[])},reloadInvoke:function(a,b){var c=this.util.hv(this.data[a],"rate");if(null===c||0>=parseInt(c,10))c=60;this.reloadWatcher=setTimeout(function(){window.adingoFluct.reload(a,b)},1E3*c)},reload:function(a,b){null!==this.reloadWatcher&&(clearTimeout(this.reloadWatcher),this.reloadWatcher=null);this.data[a].load_status=AdingoFluct.NONE;this.render_queue.push(b);this.load(a)},load:function(a){var b=null,c=this.data[a],
b="undefined"!==typeof c.url?c.url:AdingoFluct.URL;c.load_status=AdingoFluct.LOADING;b=b+c.requestQuery+"&cb=adingoFluct.callback&ttl="+Math.random();a=this.util.loader(a,b);this.util.insertAfter(c.tag,a)},showAd:function(a){var b=null;if(-1===this.rendered_units.indexOf(a)){var c=this.util.byId("adingoFluctUnit_"+a);null===c&&(c=this.util.create_element("div"),c.setAttribute("id","adingoFluctUnit_"+a),this.util.insertAfter(this.util.myTag(window.document),c));for(var d in this.data)if(c=this.data[d],
"undefined"!==typeof c.load_status&&c.load_status===AdingoFluct.LOADED)for(var e=0;e<c.json.num;e+=1){var f=c.json.ads[e];if(String(f.unit_id)===a){b=[d,f];break}}else-1===this.rendered_units.indexOf(a)&&this.render_queue.push(a),c.load_status===AdingoFluct.LOAD_NONE&&this.load(d);null!==b&&(this.rendered_units.push(a),this.out(b))}},out:function(a){var b=a.shift();a=a.shift();var c="adingoFluctUnit_"+a.unit_id;this.util.clearDiv(a.unit_id);var d=null,d=1===a.overlay?this.util.overlay(a):c;switch(a.creative_type){case "html":this.util.html_ad(d,
a);break;case "flash":this.util.flash_ad(d,a);break;case "image":this.util.image_ad(d,a)}1===a.overlay&&(this.visibleOverlay(d,500),!1===this.addedHandler&&(this.util.addHandler(window.document,"touchstart",function(a){window.adingoFluct.touchHandler(a)},!0),this.util.addHandler(window,"resize",function(a){window.adingoFluct.touchHandler(a)},!0),this.moveWatcher=setTimeout(function(){window.adingoFluct.move(d)},100),this.addedHandler=!0));this.util.unit_beacon(c,a);1===this.util.hv(a,"reload")&&(this.refreshUnits[b]=
a,this.reloadInvoke(b,a.unit_id))},touchHandler:function(a){if(null===a.srcElement.offsetParent||"undefined"===typeof a.srcElement.offsetParent||"undefined"===typeof a.srcElement.offsetParent.className||"adingoFluctOverlay"!==a.srcElement.offsetParent.className){null!==this.effectWatcher&&(!1===this.effectExecute?(clearTimeout(this.effectWatcher),this.effectWatcher=null):(clearTimeout(this.effectWatcher),this.effectWatcher=null,this.effectExecute=!1));for(var b in this.overlayUnits)this.visibleOverlay(b,
1E3)}},resizeHandler:function(){for(var a in this.overlayUnits)this.visibleOverlay(a,1E3)},visibleOverlay:function(a,b){this.overlayUnits[a]={};this.overlayUnits[a].winPosX=this.util.offsetX();this.overlayUnits[a].winPosY=this.util.offsetY();if(!this.effectExecute&&!this.util.isLandscape()){this.effectExecute=!0;var c=this.util.byId(a);c.style.display="block";var d=this.util.lposXY(parseInt(c.style.width,10),parseInt(c.style.height,10)),e=Math.max(0,d.x)+"px",f=d.y+"px";c.style.zoom=d.zoom;this.util.setOpacity(c,
0);c.style.top=f;c.style.left=e;c=null;this.overlayUnits[a]={};this.overlayUnits[a].winPosX=this.util.offsetX();this.overlayUnits[a].winPosY=this.util.offsetY();this.effectWatcher=setTimeout(function(){window.adingoFluct.show(a,0)},b)}},show:function(a,b){clearTimeout(this.effectWatcher);this.effectWatcher=null;var c=this.util.byId(a);b+=0.09;this.util.setOpacity(c,b);c=null;1>=b?this.effectWatcher=setTimeout(function(){window.adingoFluct.show(a,b)},24):this.effectExecute=!1},move:function(a){var b=
!1;if(null!==this.util.hv(this.overlayUnits,a)){var c=this.overlayUnits[a].winPosY;if(this.overlayUnits[a].winPosX!==this.util.offsetX()||c!==this.util.offsetY())b=!0;this.util.isLandscape()?(b=this.util.byId(a),this.util.setOpacity(b,0)):b&&(this.util.setOpacity(this.util.byId(a),0),this.overlayUnits[a].winPosX=this.util.offsetX(),this.overlayUnits[a].winPosY=this.util.offsetY(),null!==this.effectWatcher&&(!1===this.effectExecute?(clearTimeout(this.effectWatcher),this.effectWatcher=null):(clearTimeout(this.effectWatcher),
this.effectWatcher=null,this.effectExecute=!1)),this.visibleOverlay(a,500))}clearTimeout(this.moveWatcher);this.moveWatcher=null;this.moveWatcher=setTimeout(function(){window.adingoFluct.move(a)},100)}};AdingoFluct.prototype.showAd=AdingoFluct.prototype.showAd;AdingoFluct.prototype.callback=AdingoFluct.prototype.callback;AdingoFluct.prototype.setGroup=AdingoFluct.prototype.setGroup;AdingoFluct.prototype.touchHandler=AdingoFluct.prototype.touchHandler;AdingoFluct.prototype.resizeHandler=AdingoFluct.prototype.resizeHandler;
window.adingoFluct=new AdingoFluct}window.adingoFluct.setGroup(window.document);
}());
