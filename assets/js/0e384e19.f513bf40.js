"use strict";(self.webpackChunkgolioth_thread_demo=self.webpackChunkgolioth_thread_demo||[]).push([[671],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),h=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=h(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=h(r),p=a,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return r?o.createElement(m,n(n({ref:t},c),{},{components:r})):o.createElement(m,n({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,n[1]=l;for(var h=2;h<i;h++)n[h]=r[h];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return h},assets:function(){return c},toc:function(){return d},default:function(){return p}});var o=r(7462),a=r(3366),i=(r(7294),r(3905)),n=["components"],l={sidebar_position:1},s="Golioth Thread Demo Overview",h={unversionedId:"intro",id:"intro",title:"Golioth Thread Demo Overview",description:"What is this Demo all about?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/golioth-openthread-demo-docs/docs/intro",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"What is Golioth?",permalink:"/golioth-openthread-demo-docs/docs/golioth-intro/"}},c={},d=[{value:"What is this Demo all about?",id:"what-is-this-demo-all-about",level:2},{value:"System diagram",id:"system-diagram",level:3},{value:"What is Thread?",id:"what-is-thread",level:2},{value:"High Level Video overview",id:"high-level-video-overview",level:3},{value:"Why Golioth is a great fit for Thread applications",id:"why-golioth-is-a-great-fit-for-thread-applications",level:2},{value:"How can you use this material after training is over?",id:"how-can-you-use-this-material-after-training-is-over",level:2}],u={toc:d};function p(e){var t=e.components,l=(0,a.Z)(e,n);return(0,i.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"golioth-thread-demo-overview"},"Golioth Thread Demo Overview"),(0,i.kt)("h2",{id:"what-is-this-demo-all-about"},"What is this Demo all about?"),(0,i.kt)("p",null,"This is a place where you're going to learn about Golioth features and how to create a network of Thread devices by playing with hardware. "),(0,i.kt)("h3",{id:"system-diagram"},"System diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Thread_System_Diagram",src:r(5081).Z,width:"2157",height:"1213"})),(0,i.kt)("h2",{id:"what-is-thread"},"What is Thread?"),(0,i.kt)("p",null,"Thread (and the OpenThread implementation we are using here) is a networking protocol built on top of 802.15.4. It handles the network setup and meshing of small devices using 2.4 GHz radios. Once the network is set up, each device on the mesh network will have it's own IPv6 address and be speaking using CoAP (a transport layer) over UDP. "),(0,i.kt)("h3",{id:"high-level-video-overview"},"High Level Video overview"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCrVLgIniVg6jW38uVqDRIiQ"},"Smart Home Protocols")," made this video showcasing how Thread works, especially in a consumer setting"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/0JC4tNe0OS4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"why-golioth-is-a-great-fit-for-thread-applications"},"Why Golioth is a great fit for Thread applications"),(0,i.kt)("p",null,"Golioth develops and hosts CoAP-based API endpoints on the web, which are built to receive UDP packets. As such, we can talk directly to the IPv6 addressed devices, and use the Golioth console as a management platform for Thread based devices! Any of the services that Golioth users know and love can be implemented on Thread based devices:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Logging"),(0,i.kt)("li",{parentName:"ul"},"LightDB State"),(0,i.kt)("li",{parentName:"ul"},"LightDB Stream"),(0,i.kt)("li",{parentName:"ul"},"DFU")),(0,i.kt)("p",null,"We will showcase many of these functions in the ",(0,i.kt)("a",{parentName:"p",href:"create-thread-node"},"Thread Node section")," of these docs."),(0,i.kt)("h2",{id:"how-can-you-use-this-material-after-training-is-over"},"How can you use this material after training is over?"),(0,i.kt)("p",null,"Developers who successfully complete this training should feel confident that they will be able to program and deploy a simple Thread based IoT system to the field in their application."))}p.isMDXComponent=!0},5081:function(e,t,r){t.Z=r.p+"assets/images/Thread_system_Diagram-e4313e767ebde192b320db17c80e1e1d.png"}}]);