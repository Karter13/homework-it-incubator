(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(e,t,a){e.exports={block:"Message_block__ZNe8s",name:"Message_name__bxBTh",content:"Message_content__sNnhK",text:"Message_text__zeZlF",time:"Message_time__yHMS_"}},function(e,t,a){e.exports={list:"Affairs_list__3QveM",item:"Affairs_item__UOgBQ",name:"Affairs_name__2cVun",buttonsBox:"Affairs_buttonsBox__3GU98"}},,,,function(e,t,a){e.exports={button:"Button_button__1FwsH",type:"Button_type__Sn6ps"}},function(e,t,a){e.exports={input:"Input_input__3xVrl",error:"Input_error__1ZKOp"}},,function(e,t,a){e.exports={optionInput:"Checkbox_optionInput__3X60D","click-wave":"Checkbox_click-wave__3wF9I",radio:"Checkbox_radio__kv3YS"}},,,,,,,function(e,t,a){e.exports={logo:"Image_logo__3iH-d"}},function(e,t,a){e.exports={box:"Greeting_box__16jO1"}},,,,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),l=(a(27),a(21)),o=a(1),u=(a(28),a(17)),s=a.n(u),m=function(e){return r.a.createElement("div",{className:s.a.logo},r.a.createElement("img",{src:e.url,alt:"logo"}))},f=a(2),d=a.n(f),_=function(e){return r.a.createElement("div",{className:d.a.block},r.a.createElement(p,{name:e.myName}),r.a.createElement("div",{className:d.a.content},r.a.createElement(E,{text:e.myText}),r.a.createElement(v,{time:e.realTime})))},p=function(e){return r.a.createElement("div",{className:d.a.name},e.name)},E=function(e){return r.a.createElement("div",{className:d.a.text},e.text)},v=function(e){return r.a.createElement("div",{className:d.a.time},e.time)},h=a(3),g=a.n(h),b=a(7),k=a.n(b),x=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"delete"===e.red?"".concat(k.a.button," ").concat(k.a.type):k.a.button,onClick:e.click},e.value))},y=function(e){return r.a.createElement("div",{className:g.a.list},r.a.createElement("h3",null,"Affairs"),e.affairs.map((function(t){return r.a.createElement("div",{key:t.id,className:g.a.item},r.a.createElement("div",{className:g.a.name},t.name),r.a.createElement("div",{className:g.a.mean},t.priority),r.a.createElement(x,{click:function(){e.removeBusiness(t.id)},value:"Delete",red:"delete"}))})),r.a.createElement("div",{className:g.a.buttonsBox},r.a.createElement(x,{click:function(){return e.filterAffairs("all")},value:"All"}),r.a.createElement(x,{click:function(){return e.filterAffairs("high")},value:"High"}),r.a.createElement(x,{click:function(){return e.filterAffairs("middle")},value:"Middle"}),r.a.createElement(x,{click:function(){return e.filterAffairs("low")},value:"Low"})))},N=a(18),O=a.n(N),j=a(8),w=a.n(j),A=function(e){return r.a.createElement("div",null,r.a.createElement("input",{className:e.error?"".concat(w.a.input," ").concat(w.a.error):w.a.input,type:"text",value:e.value,onChange:function(t){e.onChange(t.currentTarget.value)},onKeyPress:e.pressEnter}))},B=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],i=a[1],l=function(){e.addName(c),i("")};return r.a.createElement("div",{className:O.a.box},r.a.createElement(A,{onChange:function(e){i(e)},value:c,pressEnter:function(t){e.setError(null),13===t.charCode&&l()},error:e.error}),r.a.createElement(x,{value:"Hello",click:l}),r.a.createElement("span",null,"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043c\u0435\u043d - ".concat(e.names.length)))},M=a(36),T=a(10),C=a.n(T),I=function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",className:"".concat(C.a.optionInput," ").concat(C.a.radio),checked:e.checkboxValue,onChange:function(t){e.changeValue(t.currentTarget.checked)}}))},S=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),l=Object(o.a)(i,2),u=l[0];l[1];return r.a.createElement("div",null,r.a.createElement(I,{checkboxValue:a,changeValue:function(e){c(e)}}),r.a.createElement(A,{onChange:function(e){console.log(e)},value:"INPUT",error:u}),r.a.createElement(x,{value:"BUTTON",click:function(){return console.log("click")}}))};function H(){var e=Object(n.useState)([{id:1,name:"Job",priority:"middle"},{id:2,name:"Learning react",priority:"high"},{id:3,name:"Learning English",priority:"high"},{id:4,name:"Learning HTML",priority:"middle"},{id:5,name:"Fishing",priority:"low"}]),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)("all"),u=Object(o.a)(i,2),s=u[0],f=u[1],d=Object(n.useState)([{id:Object(M.a)(),name:"Maikl"}]),p=Object(o.a)(d,2),E=p[0],v=p[1],h=Object(n.useState)(null),g=Object(o.a)(h,2),b=g[0],k=g[1];var x=a;return"high"===s&&(x=a.filter((function(e){return"high"===e.priority}))),"middle"===s&&(x=a.filter((function(e){return"middle"===e.priority}))),"low"===s&&(x=a.filter((function(e){return"low"===e.priority}))),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"message"},r.a.createElement(m,{url:"https://live.staticflickr.com/1170/5152497387_939ee3015a_b.jpg"}),r.a.createElement(_,{myName:"Michael",myText:"I love React!!!",realTime:"19.40"})),r.a.createElement(y,{affairs:x,removeBusiness:function(e){var t=a.filter((function(t){return t.id!==e}));c(t)},filterAffairs:function(e){f(e)}}),r.a.createElement(B,{addName:function(e){if(e&&e.trim()){alert("Hello ".concat(e,"!!"));var t=[{id:Object(M.a)(),name:e}].concat(Object(l.a)(E));v(t)}else k("error"),alert("Enter name please!!!")},names:E,error:b,setError:k}),r.a.createElement(S,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(20);i.a.render(r.a.createElement(V.a,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.dff055ff.chunk.js.map