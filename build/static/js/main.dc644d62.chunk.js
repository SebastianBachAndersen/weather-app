(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{174:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(58),s=n.n(a),i=(n(66),n(13)),o=function(e){var t=new Date(1e3*e);return t.getDate()+"/"+t.getMonth()},l=n(2),u=n(0),d=function(e){switch(console.log(e),e){case 800===e:return Object(u.jsx)(l.d,{});case e>=200&&e<=232:return Object(u.jsx)(l.h,{});case e>=300&&e<=321:return Object(u.jsx)(l.b,{});case e>=500&&e<=531:return Object(u.jsx)(l.f,{});case e>=600&&e<=622:return Object(u.jsx)(l.c,{});case e>=701&&e<=781:return Object(u.jsx)(l.i,{});case e>=801&&e<=804:return Object(u.jsx)(l.a,{});default:return Object(u.jsx)(l.d,{})}},j=function(e){var t=e.weather,n=e.showHourly;return Object(u.jsx)("a",{onClick:function(){return n(o(t.dt))},children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h1",{children:o(t.dt)}),Object(u.jsxs)("h3",{children:[Object(u.jsx)(l.g,{}),t.temp.day]}),Object(u.jsxs)("h4",{children:["Tempature feels like: ",t.feels_like.day]}),Object(u.jsxs)("h3",{children:[Object(u.jsx)(l.e,{}),t.humidity]}),d(t.weather[0].id),Object(u.jsxs)("span",{children:[" ",t.weather[0].description]})]})})},h=function(e){var t=e.dailyWeatherList,n=e.showHourly;return console.log(t),Object(u.jsx)(u.Fragment,{children:t.map((function(e,t){return Object(u.jsx)(j,{weather:e,showHourly:n},o(e.dt))}))})},b=n(61),f=function(e){return new Date(1e3*e).getHours()},O=function(e){var t=e.weatherList,n=e.current,c=[],r=[];t.filter((function(e){return o(e.dt)===n})).map((function(e){c.push(f(e.dt)),r.push(e.temp)}));var a={labels:c,datasets:[{label:"Tempature",data:r,fill:!1,backgroundColor:"#FFFFFF",borderColor:"#2D6E7E",color:"#ff0000"}]};return Object(u.jsx)("div",{children:Object(u.jsx)(b.a,{data:a,options:{scales:{}},plugins:{id:"custom_canvas_background_color",beforeDraw:function(e){var t=e.canvas.getContext("2d");t.save(),t.globalCompositeOperation="destination-over",t.fillStyle="#2D6E7E",t.fillRect(0,0,e.width,e.height),t.restore()}},width:1200,height:700})})};var p=function(){var e=new Date,t=Object(c.useState)(void 0),n=Object(i.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(o(e.getTime()/1e3)),l=Object(i.a)(s,2),d=l[0],j=l[1];return Object(c.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,n=e.coords.longitude;fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(n,"&exclude=alerts,minutely&appid=29c7a53dbed814effac1da056c8993eb&units=metric&lang=en")).then((function(e){return e.json()})).then((function(e){console.log(e),a(e)}))}))}),[a]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"dailyWeatherWrapper",children:void 0!==r&&"400"!==r.cod?Object(u.jsx)(h,{dailyWeatherList:r.daily,showHourly:function(e){j(e)}}):Object(u.jsx)("div",{})}),Object(u.jsx)("div",{className:"dailyWeatherWrapper",children:void 0!==r&&"400"!==r.cod?Object(u.jsx)(O,{weatherList:r.hourly,current:d}):Object(u.jsx)("div",{})})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,176)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),x()},66:function(e,t,n){}},[[174,1,2]]]);
//# sourceMappingURL=main.dc644d62.chunk.js.map