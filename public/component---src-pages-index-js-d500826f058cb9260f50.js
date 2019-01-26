(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{132:function(e,t,n){"use strict";n.r(t);n(30);var a=n(0),r=n.n(a),i=(n(154),n(134)),o=n(156),c=n.n(o),l=function(e){var t=e.title,n=e.subtitle,a=e.link,o=e.intro,l=e.date;return r.a.createElement("div",{onClick:function(){return Object(i.navigate)(a)},className:c.a.box},r.a.createElement("div",null,r.a.createElement("div",{className:c.a.left},r.a.createElement(i.Link,{className:c.a.title,to:a},t),r.a.createElement("p",{className:c.a.subtitle},n)),r.a.createElement("div",{className:c.a.right},r.a.createElement("p",{className:c.a.date},l)),r.a.createElement("div",{className:"clear"})),r.a.createElement("p",{className:c.a.intro},o))},u=n(139),s=(n(157),n(158),[{title:"Web Game Controller",subtitle:"Play game with your friends, at any time, on any device",intro:"The idea of this project comes from Nintendo Switch, \n    where multiple detached controllers can be connected to one host.",date:"2018.06 - 2018.11",link:"/"},{title:"3D Drawing with AR",subtitle:"Draw freely",intro:"Inspired by Iron Man, I've always been hoping to draw freely with hands in the 3D space",link:"/paint"},{title:"Bosch IoT Hackathon",subtitle:"Evacuation strategy under emergency",intro:"Targeting government and business users, the hackathon prototype provides\n      a solution for emergency evacuation under massive scale situtations",date:"2017.05",link:"/bosch"}]);t.default=function(e){e.data;return r.a.createElement(u.a,null,s.map(function(e){return r.a.createElement(l,Object.assign({},e,{key:e.title}))}))}},134:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(133),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(135),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(29);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},135:function(e,t,n){var a;e.exports=(a=n(137))&&a.default||a},136:function(e){e.exports={data:{site:{siteMetadata:{title:"EvsChen/Portfolio"}}}}},137:function(e,t,n){"use strict";n.r(t);n(30);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(46),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},138:function(e,t,n){},139:function(e,t,n){"use strict";var a=n(136),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(140),u=n.n(l),s=n(134),d=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{marginBottom:"1rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{textDecoration:"none"}},t))))},m=(n(138),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 2rem"}},t))},data:a})});m.propTypes={children:c.a.node.isRequired};t.a=m},154:function(e,t,n){"use strict";n(155)("link",function(e){return function(t){return e(this,"a","href",t)}})},155:function(e,t,n){var a=n(23),r=n(21),i=n(22),o=/"/g,c=function(e,t,n,a){var r=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},156:function(e,t,n){e.exports={hoverColor:"#ffc100",box:"entry-module--box--3GmoU",title:"entry-module--title--37d5q",subtitle:"entry-module--subtitle--10otx",intro:"entry-module--intro--VxbaE",date:"entry-module--date--15ZpO",left:"entry-module--left--1BgiQ",right:"entry-module--right--1RpJj"}},157:function(e,t,n){},158:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-d500826f058cb9260f50.js.map