
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/home","pages/index/history","pages/index/about","pages/index/draw","pages/index/new_draw","pages/index/model_select","pages/index/watch_data"],"window":{"navigationStyle":"custom","backgroundColor":"#ffffff","background":"#efeff4"},"tabBar":{"height":"0px","custome":true,"list":[{"pagePath":"pages/index/home"},{"pagePath":"pages/index/model_select"},{"pagePath":"pages/index/about"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Emovision-uniapp","compilerVersion":"4.29","entryPagePath":"pages/index/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"Emovision"}},{"path":"/pages/index/history","meta":{},"window":{"navigationBarTitleText":"Emovision"}},{"path":"/pages/index/about","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"Emovision"}},{"path":"/pages/index/draw","meta":{},"window":{"navigationBarTitleText":"Emovision"}},{"path":"/pages/index/new_draw","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/index/model_select","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":""}},{"path":"/pages/index/watch_data","meta":{},"window":{"navigationBarTitleText":""}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
