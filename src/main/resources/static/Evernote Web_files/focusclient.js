function focusclient(){var O='bootstrap',P='begin',Q='gwt.codesvr.focusclient=',R='gwt.codesvr=',S='focusclient',T='startup',U='DUMMY',V=0,W=1,X='iframe',Y='javascript:""',Z='position:absolute; width:0; height:0; border:none; left: -1000px;',$=' top: -1000px;',_='CSS1Compat',ab='<!doctype html>',bb='',cb='<html><head><\/head><body><\/body><\/html>',db='undefined',eb='DOMContentLoaded',fb=50,gb='Chrome',hb='eval("',ib='");',jb='script',kb='javascript',lb='moduleStartup',mb='moduleRequested',nb='Failed to load ',ob='head',pb='meta',qb='name',rb='focusclient::',sb='::',tb='gwt:property',ub='content',vb='=',wb='gwt:onPropertyErrorFn',xb='Bad handler "',yb='" for "gwt:onPropertyErrorFn"',zb='gwt:onLoadErrorFn',Ab='" for "gwt:onLoadErrorFn"',Bb='#',Cb='?',Db='/',Eb='img',Fb='clear.cache.gif',Gb='baseUrl',Hb='focusclient.nocache.js',Ib='base',Jb='//',Kb='display.type',Lb=2,Mb='retina',Nb='normal',Ob='user.agent',Pb='webkit',Qb='safari',Rb='msie',Sb=10,Tb=11,Ub='ie10',Vb=9,Wb='ie9',Xb=8,Yb='ie8',Zb='gecko',$b='gecko1_8',_b=3,ac=4,bc='selectingPermutation',cc='focusclient.devmode.js',dc='02C402EE38B5C4A53417A3706C1A182C',ec='20022DC82D5AB04DC43D26B71A4A0430',fc='26D213000DCD88E75F281DAFB0EAA088',gc='4CC86AA80F8F13B32CA34A57A3451F94',hc='57ACD7927EE29686B412EF304050F982',ic='625D55FF74447A019E6B13C519A179FB',jc='6D9A68ED72CF75E4C3A99AD637D78EA4',kc='7FB1AF3EABBE154A4678A7350D7A3DE0',lc='8BC0E3F24B2610F3D47B3885478EE156',mc='ACD048A5B2A73B75EAE8E4B4B93EE465',nc=':',oc='.cache.js',pc='loadExternalRefs',qc='end',rc='http:',sc='file:',tc='_gwt_dummy_',uc='__gwtDevModeHook:focusclient',vc='Ignoring non-whitelisted Dev Mode URL: ',wc=':moduleBase';var o=window;var p=document;r(O,P);function q(){var a=o.location.search;return a.indexOf(Q)!=-1||a.indexOf(R)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:S,sessionId:o.__gwtStatsSessionId,subSystem:T,evtGroup:a,millis:(new Date).getTime(),type:b})}}
focusclient.__sendStats=r;focusclient.__moduleName=S;focusclient.__errFn=null;focusclient.__moduleBase=U;focusclient.__softPermutationId=V;focusclient.__computePropValue=null;focusclient.__getPropMap=null;focusclient.__installRunAsyncCode=function(){};focusclient.__gwtStartLoadingFragment=function(){return null};focusclient.__gwt_isKnownPropertyValue=function(){return false};focusclient.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[S]={moduleName:S};focusclient.__moduleStartupDone=function(e){var f=t[S].bindings;t[S].bindings=function(){var a=f?f():{};var b=e[focusclient.__softPermutationId];for(var c=V;c<b.length;c++){var d=b[c];a[d[V]]=d[W]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(X);a.src=Y;a.id=S;a.style.cssText=Z+$;a.tabIndex=-1;p.body.appendChild(a);u=a.contentDocument;if(!u){u=a.contentWindow.document}u.open();var b=document.compatMode==_?ab:bb;u.write(b+cb);u.close()}
function A(k){function l(a){function b(){if(typeof p.readyState==db){return typeof p.body!=db&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(p.removeEventListener){p.removeEventListener(eb,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(eb,d,false)}var e=setInterval(function(){if(b()){d()}},fb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=v();var f=e.body;var g;if(navigator.userAgent.indexOf(gb)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(hb));for(var i=V;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(W,j.length-W)))}h.appendChild(e.createTextNode(ib));g=e.createElement(jb);g.language=kb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=V;i<c.length;i++){g=e.createElement(jb);g.language=kb;g.text=c[i];f.appendChild(g);d(f,g)}}}
focusclient.onScriptDownloaded=function(a){l(function(){m(a)})};r(lb,mb);var n=p.createElement(jb);n.src=k;if(focusclient.__errFn){n.onerror=function(){focusclient.__errFn(S,new Error(nb+code))}}p.getElementsByTagName(ob)[V].appendChild(n)}
focusclient.__startLoadingFragment=function(a){return D(a)};focusclient.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(jb);d.language=kb;d.text=a;c.appendChild(d);c.removeChild(d)};function B(){var c={};var d;var e;var f=p.getElementsByTagName(pb);for(var g=V,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(qb),k;if(j){j=j.replace(rb,bb);if(j.indexOf(sb)>=V){continue}if(j==tb){k=i.getAttribute(ub);if(k){var l,m=k.indexOf(vb);if(m>=V){j=k.substring(V,m);l=k.substring(m+W)}else{j=k;l=bb}c[j]=l}}else if(j==wb){k=i.getAttribute(ub);if(k){try{d=eval(k)}catch(a){alert(xb+k+yb)}}}else if(j==zb){k=i.getAttribute(ub);if(k){try{e=eval(k)}catch(a){alert(xb+k+Ab)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;focusclient.__errFn=e}
function C(){function e(a){var b=a.lastIndexOf(Bb);if(b==-1){b=a.length}var c=a.indexOf(Cb);if(c==-1){c=a.length}var d=a.lastIndexOf(Db,Math.min(c,b));return d>=V?a.substring(V,d+W):bb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Eb);b.src=a+Fb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Gb);if(a!=null){return a}return bb}
function h(){var a=p.getElementsByTagName(jb);for(var b=V;b<a.length;++b){if(a[b].src.indexOf(Hb)!=-1){return e(a[b].src)}}return bb}
function i(){var a=p.getElementsByTagName(Ib);if(a.length>V){return a[a.length-W].href}return bb}
function j(){var a=p.location;return a.href==a.protocol+Jb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==bb){k=h()}if(k==bb){k=i()}if(k==bb&&j()){k=e(p.location.href)}k=f(k);return k}
function D(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return focusclient.__moduleBase+a}
function F(){var f=[];var g=V;function h(a,b){var c=f;for(var d=V,e=a.length-W;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
j[Kb]=function(){if(o.devicePixelRatio>=Lb)return Mb;return Nb};i[Kb]={normal:V,retina:W};j[Ob]=function(){var a=navigator.userAgent.toLowerCase();var b=p.documentMode;if(function(){return a.indexOf(Pb)!=-1}())return Qb;if(function(){return a.indexOf(Rb)!=-1&&(b>=Sb&&b<Tb)}())return Ub;if(function(){return a.indexOf(Rb)!=-1&&(b>=Vb&&b<Tb)}())return Wb;if(function(){return a.indexOf(Rb)!=-1&&(b>=Xb&&b<Tb)}())return Yb;if(function(){return a.indexOf(Zb)!=-1||b>=Tb}())return $b;return Qb};i[Ob]={gecko1_8:V,ie10:W,ie8:Lb,ie9:_b,safari:ac};__gwt_isKnownPropertyValue=function(a,b){return b in i[a]};focusclient.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};focusclient.__computePropValue=k;o.__gwt_activeModules[S].bindings=focusclient.__getPropMap;r(O,bc);if(q()){return D(cc)}var l;try{h([Nb,Wb],dc);h([Nb,Qb],ec);h([Nb,Ub],fc);h([Mb,Qb],gc);h([Mb,Yb],hc);h([Mb,Wb],ic);h([Mb,$b],jc);h([Mb,Ub],kc);h([Nb,$b],lc);h([Nb,Yb],mc);l=f[k(Kb)][k(Ob)];var m=l.indexOf(nc);if(m!=-1){g=parseInt(l.substring(m+W),Sb);l=l.substring(V,m)}}catch(a){}focusclient.__softPermutationId=g;return D(l+oc)}
function G(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}r(pc,P);r(pc,qc)}
B();focusclient.__moduleBase=C();t[S].moduleBase=focusclient.__moduleBase;var H=F();if(o){var I=!!(o.location.protocol==rc||o.location.protocol==sc);o.__gwt_activeModules[S].canRedirect=I;function J(){var b=tc;try{o.sessionStorage.setItem(b,b);o.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(I&&J()){var K=uc;var L=o.sessionStorage[K];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(L)){if(L&&(window.console&&console.log)){console.log(vc+L)}L=bb}if(L&&!o[K]){o[K]=true;o[K+wc]=C();var M=p.createElement(jb);M.src=L;var N=p.getElementsByTagName(ob)[V];N.insertBefore(M,N.firstElementChild||N.children[V]);return false}}}G();r(O,qc);A(H);return true}
focusclient.succeeded=focusclient();