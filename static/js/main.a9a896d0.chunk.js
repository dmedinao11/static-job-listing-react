(this["webpackJsonpstatic-job-listing"]=this["webpackJsonpstatic-job-listing"]||[]).push([[0],{20:function(e,t,o){},22:function(e,t,o){},32:function(e,t,o){},33:function(e,t,o){},34:function(e,t,o){},35:function(e,t,o){},36:function(e,t,o){},37:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),c=o(8),i=o.n(c),l=(o(20),o(1)),r=function(e){var t=e.children;return Object(l.jsx)("div",{className:"card",children:t})},s=(o(22),o(12)),d=o(15),u=o(5),j=function(){return Object(u.b)()},g=u.c,p=o(4),b=Object(p.c)({name:"filter",initialState:{tags:[]},reducers:{apply:function(e,t){e.tags.includes(t.payload)||e.tags.push(t.payload)},remove:function(e,t){e.tags=e.tags.filter((function(e){return e!==t.payload}))},removeAll:function(e){e.tags=[]}}}),m=b.actions,f=m.apply,v=m.remove,h=m.removeAll,O=b.reducer,x=(o(32),function(e){var t=e.tag,o=j();return Object(l.jsxs)("div",{className:"tag",children:[Object(l.jsx)("span",{className:"tag__name",children:t}),Object(l.jsx)("a",{className:"tag__close",onClick:function(){o(v(t))},children:Object(l.jsx)(s.a,{icon:d.a})})]})}),_=function(){var e=g((function(e){return e.filters.tags})).map((function(e,t){return Object(l.jsx)(x,{tag:e},t)})),t=e.length>0?"filterTab--show":"filterTab--hide",o=j();return Object(l.jsx)("div",{className:"filterTab "+t,children:Object(l.jsx)(r,{children:Object(l.jsxs)("div",{className:"filterTab__container",children:[Object(l.jsx)("section",{className:"filterTab__tags",children:e}),Object(l.jsx)("a",{className:"filterTab__clear",onClick:function(){o(h())},children:"Clear"})]})})})},y=(o(33),function(e){var t=e.tag,o=j();return Object(l.jsx)("a",{className:"job__filterTag",onClick:function(){o(f(t))},children:t})}),S=(o(34),function(e){var t=e.job;return Object(l.jsx)("div",{className:"job ".concat(t.featured?"job--featured":""),children:Object(l.jsx)(r,{children:Object(l.jsxs)("div",{className:"job__container",children:[Object(l.jsx)("img",{className:"job__logo",src:"../../../../images/"+t.logo,alt:"logo"}),Object(l.jsxs)("div",{className:"job__description",children:[Object(l.jsxs)("div",{className:"job__tags",children:[Object(l.jsx)("h1",{className:"job__enterprise",children:t.company}),t.new&&Object(l.jsx)("div",{className:"job__chip job__chip--new",children:"NEW!"}),t.featured&&Object(l.jsx)("span",{className:"job__chip job__chip--featured",children:"FEATURED"})]}),Object(l.jsx)("h1",{className:"job__title",children:t.position}),Object(l.jsx)("div",{className:"job__info",children:"".concat(t.postedAt," \xb7 ").concat(t.contract," \xb7 ").concat(t.location)})]}),Object(l.jsxs)("div",{className:"job__filterTags",children:[Object(l.jsx)(y,{tag:t.role}),Object(l.jsx)(y,{tag:t.level}),t.tools.map((function(e,t){return Object(l.jsx)(y,{tag:e},t)})),t.languages.map((function(e,t){return Object(l.jsx)(y,{tag:e},t)}))]})]})})})}),w=Object(p.b)([{id:1,company:"Photosnap",logo:"photosnap.svg",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:"manage.svg",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:"account.svg",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:"myhome.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:"loop-studios.svg",new:!1,featured:!1,position:"Software Engineer",role:"Fullstack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:"faceit.svg",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:"shortly.svg",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:"insure.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:"eyecam-co.svg",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:"the-air-filter-company.svg",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}],(function(e){return e})),F=function(e){return e.filters.tags.reduce((function(e,t){return e.filter((function(e){return e.role===t||e.level===t||e.tools.includes(t)||e.languages.includes(t)}))}),e.jobs)},N=function(){var e=g(F);return Object(l.jsx)(l.Fragment,{children:e.map((function(e){return Object(l.jsx)(S,{job:e},e.id)}))})},J=(o(35),function(){return Object(l.jsx)("header",{className:"header"})});var T=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(J,{}),Object(l.jsx)("main",{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(_,{}),Object(l.jsx)(N,{})]})})]})},A=Object(p.a)({reducer:{filters:O,jobs:w}});o(36);i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(u.a,{store:A,children:Object(l.jsx)(T,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.a9a896d0.chunk.js.map