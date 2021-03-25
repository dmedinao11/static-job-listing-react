(this["webpackJsonpstatic-job-listing"]=this["webpackJsonpstatic-job-listing"]||[]).push([[0],{20:function(e,t,o){},22:function(e,t,o){},32:function(e,t,o){},33:function(e,t,o){},34:function(e,t,o){},35:function(e,t,o){},36:function(e,t,o){},37:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),c=o(8),i=o.n(c),s=(o(20),o(1)),l=function(e){var t=e.children;return Object(s.jsx)("div",{className:"card",children:t})},r=(o(22),o(12)),d=o(15),u=o(5),j=function(){return Object(u.b)()},g=u.c,p=o(4),b=Object(p.c)({name:"filter",initialState:{tags:[]},reducers:{apply:function(e,t){e.tags.includes(t.payload)||e.tags.push(t.payload)},remove:function(e,t){e.tags=e.tags.filter((function(e){return e!==t.payload}))},removeAll:function(e){e.tags=[]}}}),m=b.actions,f=m.apply,v=m.remove,h=m.removeAll,O=b.reducer,x=(o(32),function(e){var t=e.tag,o=j();return Object(s.jsxs)("div",{className:"tag",children:[Object(s.jsx)("span",{className:"tag__name",children:t}),Object(s.jsx)("a",{className:"tag__close",onClick:function(){o(v(t))},children:Object(s.jsx)(r.a,{icon:d.a})})]})}),_=function(){var e=g((function(e){return e.filters.tags})).map((function(e,t){return Object(s.jsx)(x,{tag:e},t)})),t=e.length>0?"filterTab--show":"filterTab--hide",o=j();return Object(s.jsx)("div",{className:"filterTab "+t,children:Object(s.jsx)(l,{children:Object(s.jsxs)("div",{className:"filterTab__container",children:[Object(s.jsx)("section",{className:"filterTab__tags",children:e}),Object(s.jsx)("a",{className:"filterTab__clear",onClick:function(){o(h())},children:"Clear"})]})})})},y=(o(33),function(e){var t=e.tag,o=j();return Object(s.jsx)("a",{className:"job__filterTag",onClick:function(){o(f(t))},children:t})}),S=(o(34),function(e){var t=e.job;return Object(s.jsx)("div",{className:"job ".concat(t.featured?"job--featured":""),children:Object(s.jsx)(l,{children:Object(s.jsxs)("div",{className:"job__container",children:[Object(s.jsx)("img",{className:"job__logo",src:t.logo,alt:"logo"}),Object(s.jsxs)("div",{className:"job__description",children:[Object(s.jsxs)("div",{className:"job__tags",children:[Object(s.jsx)("h1",{className:"job__enterprise",children:t.company}),t.new&&Object(s.jsx)("div",{className:"job__chip job__chip--new",children:"NEW!"}),t.featured&&Object(s.jsx)("span",{className:"job__chip job__chip--featured",children:"FEATURED"})]}),Object(s.jsx)("h1",{className:"job__title",children:t.position}),Object(s.jsx)("div",{className:"job__info",children:"".concat(t.postedAt," \xb7 ").concat(t.contract," \xb7 ").concat(t.location)})]}),Object(s.jsxs)("div",{className:"job__filterTags",children:[Object(s.jsx)(y,{tag:t.role}),Object(s.jsx)(y,{tag:t.level}),t.tools.map((function(e,t){return Object(s.jsx)(y,{tag:e},t)})),t.languages.map((function(e,t){return Object(s.jsx)(y,{tag:e},t)}))]})]})})})}),w=[{id:1,company:"Photosnap",logo:o.p+"static/media/photosnap.5a867c13.svg",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:o.p+"static/media/manage.5a528a96.svg",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:o.p+"static/media/account.903d6cd0.svg",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:o.p+"static/media/myhome.aaaaa430.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:o.p+"static/media/loop-studios.7778c957.svg",new:!1,featured:!1,position:"Software Engineer",role:"Fullstack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:o.p+"static/media/faceit.54a148ce.svg",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:o.p+"static/media/shortly.3c01b577.svg",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:o.p+"static/media/insure.4d535e7e.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:o.p+"static/media/eyecam-co.0abb14e8.svg",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:o.p+"static/media/the-air-filter-company.9b55f644.svg",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}],F=Object(p.b)(w,(function(e){return e})),N=function(e){return e.filters.tags.reduce((function(e,t){return e.filter((function(e){return e.role===t||e.level===t||e.tools.includes(t)||e.languages.includes(t)}))}),e.jobs)},J=function(){var e=g(N);return Object(s.jsx)(s.Fragment,{children:e.map((function(e){return Object(s.jsx)(S,{job:e},e.id)}))})},T=(o(35),function(){return Object(s.jsx)("header",{className:"header"})});var A=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(T,{}),Object(s.jsx)("main",{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(_,{}),Object(s.jsx)(J,{})]})})]})},k=Object(p.a)({reducer:{filters:O,jobs:F}});o(36);i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(u.a,{store:k,children:Object(s.jsx)(A,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c9c0eacf.chunk.js.map