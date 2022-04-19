"use strict";(self.webpackChunkgolioth_developer_training=self.webpackChunkgolioth_developer_training||[]).push([[773],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return p}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),p=r,g=d["".concat(s,".").concat(p)]||d[p]||h[p]||i;return o?n.createElement(g,a(a({ref:t},c),{},{components:o})):n.createElement(g,a({ref:t},c))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6825:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return h},default:function(){return p}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],l={sidebar_position:3},s="Console Signup and Exploration",u={unversionedId:"golioth-intro/signup",id:"golioth-intro/signup",title:"Console Signup and Exploration",description:"This section includes references to the Golioth docs site. We are linking you there so you have the most up-to-date directions on getting started with the Golioth Cloud. Once you have completed a section, you will come back to this page for further instructions.",source:"@site/docs/golioth-intro/signup.md",sourceDirName:"golioth-intro",slug:"/golioth-intro/signup",permalink:"/thread-full-demo/docs/golioth-intro/signup",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Training Requirements",permalink:"/thread-full-demo/docs/golioth-intro/requirements"}},c={},h=[{value:"Overview",id:"overview",level:2},{value:"Signup and Provision your first device",id:"signup-and-provision-your-first-device",level:2},{value:"Where you should start",id:"where-you-should-start",level:3},{value:"Where you should finish",id:"where-you-should-finish",level:3},{value:"Additional exercise",id:"additional-exercise",level:3},{value:"Exploring features on the sidebar",id:"exploring-features-on-the-sidebar",level:2}],d={toc:h};function p(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"console-signup-and-exploration"},"Console Signup and Exploration"),(0,i.kt)("p",null,"This section includes references to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.golioth.io/"},"the Golioth docs site"),". We are linking you there so you have the most up-to-date directions on getting started with the Golioth Cloud. Once you have completed a section, you will come back to this page for further instructions."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Summary:")," Sign up for the Console to get your Golioth account. Go through the wizard steps outlined on the Docs page and on the Console itself in order to provision your first device. The credentials created here allow your device (MagTag for these examples) to authenticate on the Golioth Cloud."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Desired Outcome:")," By the end of this section you should understand how to add a single device to the console and access the credentials for use on your device."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Approximate time:")," 5 minutes")),(0,i.kt)("h2",{id:"signup-and-provision-your-first-device"},"Signup and Provision your first device"),(0,i.kt)("h3",{id:"where-you-should-start"},"Where you should start"),(0,i.kt)("p",null,"Begin by following the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.golioth.io/getting-started"},"Golioth Getting Started Docs")," which will walk you through registering an account and creating a name and credentials for your first device."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"https://docs.golioth.io/getting-started"},(0,i.kt)("img",{loading:"lazy",alt:"Golioth Docs Platform Signup",src:o(8616).Z,width:"1902",height:"912"}))))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"A screenshot from the ",(0,i.kt)("a",{parentName:"td",href:"https://docs.golioth.io/getting-started/"},"Golioth Docs")," site.")))),(0,i.kt)("h3",{id:"where-you-should-finish"},"Where you should finish"),(0,i.kt)("p",null,"Once you have a single device provisioned on ",(0,i.kt)("a",{parentName:"p",href:"https://console.golioth.io"},"the Golioth Console")," this part of the guide is complete."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"th",href:"https://console.golioth.io"},(0,i.kt)("img",{loading:"lazy",alt:"Golioth Console One Device Provisioned",src:o(4804).Z,width:"1918",height:"959"}))))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"A screenshot from the ",(0,i.kt)("a",{parentName:"td",href:"https://console.golioth.io"},"Golioth Console"),".")))),(0,i.kt)("h3",{id:"additional-exercise"},"Additional exercise"),(0,i.kt)("p",null,'Create a "fleet" of 5 devices with unique credentials for each.'),(0,i.kt)("h2",{id:"exploring-features-on-the-sidebar"},"Exploring features on the sidebar"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Summary:")," See how the menus are set up and what features exist on the Golioth console."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Desired Outcome:")," Understand how to navigate to the various locations of the Golioth console."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Approximate time:")," 5 minutes (includes Q&A)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Where you should start:")," Start from the ",(0,i.kt)("a",{parentName:"li",href:"https://console.golioth.io"},"Golioth Console")," and try out the various paths on the sidebar."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Additional exercise:"),' Attempt to add a "tag" and a "blueprint" to your Console.')))}p.isMDXComponent=!0},4804:function(e,t,o){t.Z=o.p+"assets/images/golioth_console_one_device_provisioned-abc59c890fbf416573c69350fb8623d1.png"},8616:function(e,t,o){t.Z=o.p+"assets/images/platform_signup-601ea7c42f8089376e084d564e59184c.png"}}]);