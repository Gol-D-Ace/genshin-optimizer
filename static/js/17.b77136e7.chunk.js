(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[17],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(117),s=a(116),n=a(47),i=a(1);function c(e,t,a){var c,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(!e||!t||!a)return null;var l=n.a.getStatVariant(a)||"success",d=e/100*(t[a]||0),m=Object(i.jsx)("span",{className:"text-".concat(l),children:(null===d||void 0===d||null===(c=d.toFixed)||void 0===c?void 0:c.call(d,o))||d}),p=Object(i.jsx)(r.a,{placement:"top",overlay:Object(i.jsxs)(s.a,{children:[e,"% ",n.a.getStatNamePretty(a)]}),children:m});return Object(i.jsxs)("span",{children:["(",p,")"]})}},110:function(e,t,a){"use strict";var r,s=a(4),n=a(6),i=a(7),c=a.n(i),o=a(0),l=a.n(o),d=a(35),m=a(65),p=a(64),_=((r={})[d.b]="show",r[d.a]="show",r),f=l.a.forwardRef((function(e,t){var a=e.className,r=e.children,i=Object(n.a)(e,["className","children"]),f=Object(o.useCallback)((function(e){Object(p.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return l.a.createElement(d.e,Object(s.a)({ref:t,addEndListener:m.a},i,{onEnter:f}),(function(e,t){return l.a.cloneElement(r,Object(s.a)({},t,{className:c()("fade",a,r.props.className,_[e])}))}))}));f.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},f.displayName="Fade",t.a=f},114:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(0),s=a(119),n=a(124),i=Math.pow(2,31)-1;function c(e,t,a){var r=a-Date.now();e.current=r<=i?setTimeout(t,r):setTimeout((function(){return c(e,t,a)}),i)}function o(){var e=Object(s.a)(),t=Object(r.useRef)();return Object(n.a)((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(r,s){void 0===s&&(s=0),e()&&(a(),s<=i?t.current=setTimeout(r,s):c(t,r,Date.now()+s))},clear:a}}),[])}},115:function(e,t,a){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}a.d(t,"a",(function(){return s}))},116:function(e,t,a){"use strict";var r=a(4),s=a(6),n=a(7),i=a.n(n),c=a(0),o=a.n(c),l=(a(131),a(8)),d=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.placement,c=e.className,d=e.style,m=e.children,p=e.arrowProps,_=(e.popper,e.show,Object(s.a)(e,["bsPrefix","placement","className","style","children","arrowProps","popper","show"]));a=Object(l.a)(a,"tooltip");var f=((null==n?void 0:n.split("-"))||[])[0];return o.a.createElement("div",Object(r.a)({ref:t,style:d,role:"tooltip","x-placement":f,className:i()(c,a,"bs-tooltip-"+f)},_),o.a.createElement("div",Object(r.a)({className:"arrow"},p)),o.a.createElement("div",{className:a+"-inner"},m))}));d.defaultProps={placement:"right"},d.displayName="Tooltip",t.a=d},117:function(e,t,a){"use strict";var r=a(4),s=a(6),n=a(115),i=a(118),c=a(0),o=a.n(c),l=a(114),d=a(112),m=(a(86),a(40)),p=a(7),_=a.n(p),f=a(9),u=a(16),g=a(5),b=a.n(g),y=a(33),h=a.n(y),I=a(120),x=a(59),v=a(121),w=a(140),j=a(141),k=a(125),E=a(135),O=o.a.forwardRef((function(e,t){var a=e.flip,r=e.offset,s=e.placement,n=e.containerPadding,i=void 0===n?5:n,l=e.popperConfig,d=void 0===l?{}:l,m=e.transition,p=Object(I.a)(),_=p[0],g=p[1],b=Object(I.a)(),y=b[0],v=b[1],O=Object(x.a)(g,t),S=Object(k.a)(e.container),C=Object(k.a)(e.target),T=Object(c.useState)(!e.show),M=T[0],B=T[1],D=Object(w.a)(C,_,Object(E.a)({placement:s,enableEvents:!!e.show,containerPadding:i||5,flip:a,offset:r,arrowElement:y,popperConfig:d})),G=D.styles,F=D.attributes,P=Object(u.a)(D,["styles","attributes"]);e.show?M&&B(!1):e.transition||M||B(!0);var A=e.show||m&&!M;if(Object(j.a)(_,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!A)return null;var R=e.children(Object(f.a)({},P,{show:!!e.show,props:Object(f.a)({},F.popper,{style:G.popper,ref:O}),arrowProps:Object(f.a)({},F.arrow,{style:G.arrow,ref:v})}));if(m){var H=e.onExit,N=e.onExiting,W=e.onEnter,K=e.onEntering,L=e.onEntered;R=o.a.createElement(m,{in:e.show,appear:!0,onExit:H,onExiting:N,onExited:function(){B(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:W,onEntering:K,onEntered:L},R)}return S?h.a.createPortal(R,S):null}));O.displayName="Overlay",O.propTypes={show:b.a.bool,placement:b.a.oneOf(v.h),target:b.a.any,container:b.a.any,flip:b.a.bool,children:b.a.func.isRequired,containerPadding:b.a.number,popperConfig:b.a.object,rootClose:b.a.bool,rootCloseEvent:b.a.oneOf(["click","mousedown"]),rootCloseDisabled:b.a.bool,onHide:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var s;return e.rootClose?(s=b.a.func).isRequired.apply(s,[e].concat(a)):b.a.func.apply(b.a,[e].concat(a))},transition:b.a.elementType,onEnter:b.a.func,onEntering:b.a.func,onEntered:b.a.func,onExit:b.a.func,onExiting:b.a.func,onExited:b.a.func};var S=O,C=a(134),T=a(110),M={transition:T.a,rootClose:!1,show:!1,placement:"top"};function B(e){var t=e.children,a=e.transition,n=e.popperConfig,i=void 0===n?{}:n,l=Object(s.a)(e,["children","transition","popperConfig"]),m=Object(c.useRef)({}),p=Object(C.a)(),f=p[0],u=p[1],g=!0===a?T.a:a||null;return o.a.createElement(S,Object(r.a)({},l,{ref:f,popperConfig:Object(r.a)({},i,{modifiers:u.concat(i.modifiers||[])}),transition:g}),(function(e){var n,i=e.props,c=e.arrowProps,l=e.show,p=e.update,f=(e.forceUpdate,e.placement),u=e.state,g=Object(s.a)(e,["props","arrowProps","show","update","forceUpdate","placement","state"]);!function(e,t){var a=e.ref,r=t.ref;e.ref=a.__wrapped||(a.__wrapped=function(e){return a(Object(d.a)(e))}),t.ref=r.__wrapped||(r.__wrapped=function(e){return r(Object(d.a)(e))})}(i,c);var b=Object.assign(m.current,{state:u,scheduleUpdate:p,placement:f,outOfBoundaries:(null==u||null==(n=u.modifiersData.hide)?void 0:n.isReferenceHidden)||!1});return"function"===typeof t?t(Object(r.a)({},g,i,{placement:f,show:l},!a&&l&&{className:"show"},{popper:b,arrowProps:c})):o.a.cloneElement(t,Object(r.a)({},g,i,{placement:f,arrowProps:c,popper:b,className:_()(t.props.className,!a&&l&&"show"),style:Object(r.a)({},t.props.style,i.style)}))}))}B.defaultProps=M;var D=B,G=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return this.props.children},t}(o.a.Component);function F(e,t,a){var r=t[0],s=r.currentTarget,n=r.relatedTarget||r.nativeEvent[a];n&&n===s||Object(i.a)(s,n)||e.apply(void 0,t)}function P(e){var t=e.trigger,a=e.overlay,n=e.children,i=e.popperConfig,p=void 0===i?{}:i,_=e.show,f=e.defaultShow,u=void 0!==f&&f,g=e.onToggle,b=e.delay,y=e.placement,h=e.flip,I=void 0===h?y&&-1!==y.indexOf("auto"):h,x=Object(s.a)(e,["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"]),v=Object(c.useRef)(null),w=Object(l.a)(),j=Object(c.useRef)(""),k=Object(m.b)(_,u,g),E=k[0],O=k[1],S=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(b),C="function"!==typeof n?o.a.Children.only(n).props:{},T=C.onFocus,M=C.onBlur,B=C.onClick,P=Object(c.useCallback)((function(){return Object(d.a)(v.current)}),[]),A=Object(c.useCallback)((function(){w.clear(),j.current="show",S.show?w.set((function(){"show"===j.current&&O(!0)}),S.show):O(!0)}),[S.show,O,w]),R=Object(c.useCallback)((function(){w.clear(),j.current="hide",S.hide?w.set((function(){"hide"===j.current&&O(!1)}),S.hide):O(!1)}),[S.hide,O,w]),H=Object(c.useCallback)((function(){A();for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];null==T||T.apply(void 0,t)}),[A,T]),N=Object(c.useCallback)((function(){R();for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];null==M||M.apply(void 0,t)}),[R,M]),W=Object(c.useCallback)((function(){O(!E),B&&B.apply(void 0,arguments)}),[B,O,E]),K=Object(c.useCallback)((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];F(A,t,"fromElement")}),[A]),L=Object(c.useCallback)((function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];F(R,t,"toElement")}),[R]),V=null==t?[]:[].concat(t),z={};return-1!==V.indexOf("click")&&(z.onClick=W),-1!==V.indexOf("focus")&&(z.onFocus=H,z.onBlur=N),-1!==V.indexOf("hover")&&(z.onMouseOver=K,z.onMouseOut=L),o.a.createElement(o.a.Fragment,null,"function"===typeof n?n(Object(r.a)({},z,{ref:v})):o.a.createElement(G,{ref:v},Object(c.cloneElement)(n,z)),o.a.createElement(D,Object(r.a)({},x,{show:E,onHide:R,flip:I,placement:y,popperConfig:p,target:P}),a))}P.defaultProps={defaultShow:!1,trigger:["hover","focus"]};t.a=P},118:function(e,t,a){"use strict";function r(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}a.d(t,"a",(function(){return r}))},119:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(0);function s(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(0);function s(){return Object(r.useState)(null)}},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(0);function s(e){var t=function(e){var t=Object(r.useRef)(e);return t.current=e,t}(e);Object(r.useEffect)((function(){return function(){return t.current()}}),[])}},125:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(60),s=a(0),n=function(e){var t;return"undefined"===typeof document?null:null==e?Object(r.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};function i(e,t){var a=Object(s.useState)((function(){return n(e)})),r=a[0],i=a[1];if(!r){var c=n(e);c&&i(c)}return Object(s.useEffect)((function(){t&&r&&t(r)}),[t,r]),Object(s.useEffect)((function(){var t=n(e);t!==r&&i(t)}),[e,r]),r}},150:function(e,t,a){"use strict";function r(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}a.d(t,"a",(function(){return r}))},243:function(e,t,a){"use strict";a.r(t);var r=a.p+"static/media/Item_Adventurer's_Flower.31b0a44c.png",s=a.p+"static/media/Item_Adventurer's_Tail_Feather.495e630d.png",n=a.p+"static/media/Item_Adventurer's_Pocket_Watch.25c28494.png",i=a.p+"static/media/Item_Adventurer's_Golden_Goblet.7d50b5cd.png",c=a.p+"static/media/Item_Adventurer's_Bandana.ffcc9215.png",o=a(107),l=a(1),d={name:"Adventurer",rarity:[3],pieces:{flower:"Adventurer's Flower",plume:"Adventurer's Tail Feather",sands:"Adventurer's Pocket Watch",goblet:"Adventurer's Golden Goblet",circlet:"Adventurer's Bandana"},icons:{flower:r,plume:s,sands:n,goblet:i,circlet:c},setEffects:{2:{text:"Max HP increased by 1,000.",stats:{hp:1e3}},4:{text:function(e){return Object(l.jsxs)("span",{children:["Opening chest regenerates 30% Max HP",Object(o.a)(30,e,"finalHP")," over 5s."]})}}}},m=d,p={name:"Archaic Petra",rarity:[4,5],pieces:{flower:"Flower of Creviced Cliff",plume:"Feather of Jagged Peaks",sands:"Sundial of Enduring Jade",goblet:"Goblet of Chiseled Crag",circlet:"Mask of Solitude Basalt"},icons:{flower:a.p+"static/media/Item_Flower_of_Creviced_Cliff.901bea9e.png",plume:a.p+"static/media/Item_Feather_of_Jagged_Peaks.bfbdbc15.png",sands:a.p+"static/media/Item_Sundial_of_Enduring_Jade.b2538326.png",goblet:a.p+"static/media/Item_Goblet_of_Chiseled_Crag.053335a8.png",circlet:a.p+"static/media/Item_Mask_of_Solitude_Basalt.c354cf5c.png"},setEffects:{2:{text:Object(l.jsxs)("span",{children:["Gain a 15% ",Object(l.jsx)("span",{className:"text-geo",children:"Geo DMG Bonus"})]}),stats:{geo_dmg_:15}},4:{text:"Upon obtaining an Elemental Shard created through a Crystallize Reaction, all party members gain 35% DMG to that particular element for 10s. Only one form of Elemental DMG can be gained in this manner at any one time.",conditional:[{type:"artifact",condition:"Pyro",sourceKey:"ArchaicPetra_4",maxStack:1,stats:{pyro_dmg_:35}},{type:"artifact",condition:"Electro",sourceKey:"ArchaicPetra_4",maxStack:1,stats:{electro_dmg_:35}},{type:"artifact",condition:"Hydro",sourceKey:"ArchaicPetra_4",maxStack:1,stats:{hydro_dmg_:35}},{type:"artifact",condition:"Cryo",sourceKey:"ArchaicPetra_4",maxStack:1,stats:{cryo_dmg_:35}}]}}},_={name:"Berserker",rarity:[3,4],pieces:{flower:"Berserker's Rose",plume:"Berserker's Indigo Feather",sands:"Berserker's Timepiece",goblet:"Berserker's Bone Goblet",circlet:"Berserker's Battle Mask"},icons:{flower:a.p+"static/media/Item_Berserker's_Rose.06c4442d.png",plume:a.p+"static/media/Item_Berserker's_Indigo_Feather.a6e6a86e.png",sands:a.p+"static/media/Item_Berserker's_Timepiece.b2ad1dd7.png",goblet:a.p+"static/media/Item_Berserker's_Bone_Goblet.bd66d90a.png",circlet:a.p+"static/media/Item_Berserker's_Battle_Mask.9c6f00a1.png"},setEffects:{2:{text:"CRIT Rate +12%",stats:{critRate_:12}},4:{text:"When HP is below 70%, CRIT Rate increases by an additional 24%.",conditional:{type:"artifact",sourceKey:"Berserker_4",maxStack:1,stats:{critRate_:24}}}}},f={name:"Blizzard Strayer",rarity:[4,5],pieces:{flower:"Snowswept Memory",plume:"Icebreaker's Resolve",sands:"Frozen Homeland's Demise",goblet:"Frost-Weaved Dignity",circlet:"Broken Rime's Echo"},icons:{flower:a.p+"static/media/Item_Snowswept_Memory.ece730e7.png",plume:a.p+"static/media/Item_Icebreaker's_Resolve.96a7db37.png",sands:a.p+"static/media/Item_Frozen_Homeland's_Demise.84d51820.png",goblet:a.p+"static/media/Item_Frost-Weaved_Dignity.20a2ea65.png",circlet:a.p+"static/media/Item_Broken_Rime's_Echo.a9551983.png"},setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-cryo",children:"Cryo DMG Bonus"})," +15%"]}),stats:{cryo_dmg_:15}},4:{text:Object(l.jsxs)("span",{children:["When a character attacks an enemy affected by ",Object(l.jsx)("span",{className:"text-cryo",children:"Cryo"}),", their CRIT Rate is increased by 20%. If the enemy is Frozen, CRIT Rate is increased by an additional 20%"]}),conditional:[{type:"artifact",sourceKey:"BlizzardStrayer_4",condition:"Enemy affected by Cryo",maxStack:1,stats:{critRate_:20}},{type:"artifact",sourceKey:"BlizzardStrayer_4",condition:"Frozen Enemy",maxStack:1,stats:{critRate_:40}}]}}},u={name:"Bloodstained Chivalry",rarity:[4,5],pieces:{flower:"Bloodstained Flower of Iron",plume:"Bloodstained Black Plume",sands:"Bloodstained Final Hour",goblet:"Bloodstained Chevalier's Goblet",circlet:"Bloodstained Iron Mask"},icons:{flower:a.p+"static/media/Item_Bloodstained_Flower_of_Iron.e720eb8c.png",plume:a.p+"static/media/Item_Bloodstained_Black_Plume.f643c83d.png",sands:a.p+"static/media/Item_Bloodstained_Final_Hour.7f3cf2fb.png",goblet:a.p+"static/media/Item_Bloodstained_Chevalier's_Goblet.60ebe6c0.png",circlet:a.p+"static/media/Item_Bloodstained_Iron_Mask.78c7e58f.png"},setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-physical",children:"Physical DMG"})," +25%"]}),stats:{physical_dmg_:25}},4:{text:"After defeating an opponent, increases Charged Attack DMG by 50%, and reduces its Stamina cost to 0 for 10s.",conditional:{type:"artifact",sourceKey:"BloodstainedChivalry_4",maxStack:1,stats:{charged_dmg_:50,staminaDec_:100}}}}},g={name:"Brave Heart",rarity:[3,4],pieces:{flower:"Medal of the Brave",plume:"Prospect of the Brave",sands:"Fortitude of the Brave",goblet:"Outset of the Brave",circlet:"Crown of the Brave"},icons:{flower:a.p+"static/media/Item_Medal_of_the_Brave.4963f0c4.png",plume:a.p+"static/media/Item_Prospect_of_the_Brave.08ad41b6.png",sands:a.p+"static/media/Item_Fortitude_of_the_Brave.4d790285.png",goblet:a.p+"static/media/Item_Outset_of_the_Brave.b2a757fc.png",circlet:a.p+"static/media/Item_Crown_of_the_Brave.43f41135.png"},setEffects:{2:{text:"2-piece Set Bonus: ATK +18%",stats:{atk_:18}},4:{text:"Increases DMG by 30% against enemies with more than 50% HP.",conditional:{type:"artifact",sourceKey:"BraveHeart_4",maxStack:1,stats:{dmg_:30}}}}},b={name:"Crimson Witch of Flames",rarity:[4,5],pieces:{flower:"Witch's Flower of Blaze",plume:"Witch's Ever-Burning Plume",sands:"Witch's End Time",goblet:"Witch's Heart Flames",circlet:"Witch's Scorching Hat"},icons:{flower:a.p+"static/media/Item_Witch's_Flower_of_Blaze.f8ecb4fc.png",plume:a.p+"static/media/Item_Witch's_Ever-Burning_Plume.7e706c41.png",sands:a.p+"static/media/Item_Witch's_End_Time.de3c175b.png",goblet:a.p+"static/media/Item_Witch's_Heart_Flames.505a6377.png",circlet:a.p+"static/media/Item_Witch's_Scorching_Hat.2070d8b6.png"},setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-pyro",children:"Pyro DMG Bonus"})," +15%"]}),stats:{pyro_dmg_:15}},4:{text:"Increases Overloaded and Burning DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using an Elemental Skill increases 2-Piece Set effects by 50% for 10s. Max 3 stacks.",stats:{overloaded_dmg_:40,burning_dmg_:40,vaporize_dmg_:15,melt_dmg_:15},conditional:{type:"artifact",sourceKey:"CrimsonWitchOfFlames_4",maxStack:3,stats:{pyro_dmg_:7.5}}}}},y={name:"Defender's Will",rarity:[3,4],pieces:{flower:"Guardian's Flower",plume:"Guardian's Sigil",sands:"Guardian's Clock",goblet:"Guardian's Vessel",circlet:"Guardian's Band"},icons:{flower:a.p+"static/media/Item_Guardian's_Flower.5e495e58.png",plume:a.p+"static/media/Item_Guardian's_Sigil.9bd56afb.png",sands:a.p+"static/media/Item_Guardian's_Clock.de1c1bf4.png",goblet:a.p+"static/media/Item_Guardian's_Vessel.5fc31ffe.png",circlet:a.p+"static/media/Item_Guardian's_Band.92ad19a4.png"},setEffects:{2:{text:"Base DEF +30%",stats:{def_:30}},4:{text:"Increases Elemental RES by 30% for each element present in the party.",conditional:[{type:"artifact",condition:"Anemo",sourceKey:"DefendersWill_4",maxStack:1,stats:{anemo_res_:30}},{type:"artifact",condition:"Geo",sourceKey:"DefendersWill_4",maxStack:1,stats:{geo_res_:30}},{type:"artifact",condition:"Electro",sourceKey:"DefendersWill_4",maxStack:1,stats:{electro_res_:30}},{type:"artifact",condition:"Hydro",sourceKey:"DefendersWill_4",maxStack:1,stats:{hydro_res_:30}},{type:"artifact",condition:"pyro",sourceKey:"DefendersWill_4",maxStack:1,stats:{pyro_res_:30}},{type:"artifact",condition:"Cryo",sourceKey:"DefendersWill_4",maxStack:1,stats:{cryo_res_:30}}]}}},h={name:"Gambler",rarity:[3,4],pieces:{flower:"Gambler's Brooch",plume:"Gambler's Feathered Accessory",sands:"Gambler's Pocket Watch",goblet:"Gambler's Dice Cup",circlet:"Gambler's Earrings"},icons:{flower:a.p+"static/media/Item_Gambler's_Brooch.10f2af6d.png",plume:a.p+"static/media/Item_Gambler's_Feather_Accessory.b5eb9a72.png",sands:a.p+"static/media/Item_Gambler's_Pocket_Watch.3d084b2a.png",goblet:a.p+"static/media/Item_Gambler's_Dice_Cup.2bf67f76.png",circlet:a.p+"static/media/Item_Gambler's_Earrings.6edf9099.png"},setEffects:{2:{text:"Elemental Skill DMG increased by 20%",stats:{skill_dmg_:20}},4:{text:"Defeating an enemy has 100% chance to remove Elemental Skill CD. Can only occur once every 15s.",conditional:{type:"artifact",sourceKey:"Gambler_4",maxStack:1,stats:{skillCDRed_:100}}}}},I={name:"Gladiator's Finale",rarity:[4,5],pieces:{flower:"Gladiator's Nostalgia",plume:"Gladiator's Destiny",sands:"Gladiator's Longing",goblet:"Gladiator's Intoxication",circlet:"Gladiator's Triumphus"},icons:{flower:a.p+"static/media/Item_Gladiator's_Nostalgia.c19c4d65.png",plume:a.p+"static/media/Item_Gladiator's_Destiny.1547cb34.png",sands:a.p+"static/media/Item_Gladiator's_Longing.04ca82f3.png",goblet:a.p+"static/media/Item_Gladiator's_Intoxication.e37b1905.png",circlet:a.p+"static/media/Item_Gladiator's_Triumphus.aa1627e5.png"},setEffects:{2:{text:"ATK +18%",stats:{atk_:18}},4:{text:"If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%.",conditional:{type:"artifact",sourceKey:"GladiatorsFinale_4",maxStack:1,stats:{normal_dmg_:35}}}}},x={name:"Heart of Depth",rarity:[4,5],pieces:{flower:"Gilded Corsage",plume:"Gust of Nostalgia",sands:"Copper Compass",goblet:"Goblet of Thundering Deep",circlet:"Wine-Stained Tricorne"},icons:{flower:a.p+"static/media/Item_Gilded_Corsage.5f37f891.png",plume:a.p+"static/media/Item_Gust_of_Nostalgia.0bcf7c7d.png",sands:a.p+"static/media/Item_Copper_Compass.15f1961a.png",goblet:a.p+"static/media/Item_Goblet_of_Thundering_Deep.bb3d1636.png",circlet:a.p+"static/media/Item_Wine-Stained_Tricorne.968f992f.png"},setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-hydro",children:"Hydro DMG Bonus"})," +15%"]}),stats:{hydro_dmg_:15}},4:{text:"After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 30% for 15s",conditional:{type:"artifact",sourceKey:"HeartOfDepth_4",maxStack:1,stats:{normal_dmg_:30,charged_dmg_:30}}}}},v={name:"Instructor",rarity:[3,4],pieces:{flower:"Instructor's Brooch",plume:"Instructor's Feathered Accessory",sands:"Instructor's Pocket Watch",goblet:"Instructor's Tea Cup",circlet:"Instructor's Cap"},icons:{flower:a.p+"static/media/Item_Instructor's_Brooch.0a67a037.png",plume:a.p+"static/media/Item_Instructor's_Feather_Accessory.37620927.png",sands:a.p+"static/media/Item_Instructor's_Pocket_Watch.c9f63dde.png",goblet:a.p+"static/media/Item_Instructor's_Tea_Cup.88db1f5e.png",circlet:a.p+"static/media/Item_Instructor's_Cap.bc19a939.png"},setEffects:{2:{text:"Increases Elemental Mastery by 80.",stats:{eleMas:80}},4:{text:"After using Elemental Skill, increases all party members' Elemental Mastery by 120 for 8s.",conditional:{type:"artifact",sourceKey:"Instructor_4",maxStack:1,stats:{eleMas:120}}}}},w={name:"Lavawalker",rarity:[4,5],pieces:{flower:"Lavawalker's Resolution",plume:"Lavawalker's Salvation",sands:"Lavawalker's Torment",goblet:"Lavawalker's Epiphany",circlet:"Lavawalker's Wisdom"},icons:{flower:a.p+"static/media/Item_Lavawalker's_Resolution.96cda8ad.png",plume:a.p+"static/media/Item_Lavawalker's_Salvation.13dec22c.png",sands:a.p+"static/media/Item_Lavawalker's_Torment.094818ab.png",goblet:a.p+"static/media/Item_Lavawalker's_Epiphany.0978abb7.png",circlet:a.p+"static/media/Item_Lavawalker's_Wisdom.f458e8cc.png"},setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-pyro",children:"Pyro RES"})," increased by 40%"]}),stats:{pyro_res_:40}},4:{text:Object(l.jsxs)("span",{children:["Increases DMG against enemies that are Burning or affected by ",Object(l.jsx)("span",{className:"text-pyro",children:"Pyro"})," by 35%."]}),conditional:{type:"artifact",sourceKey:"Lavawalker_4",maxStack:1,stats:{dmg_:35}}}}},j={name:"Lucky Dog",rarity:[3],pieces:{flower:"Lucky Dog's Clover",plume:"Lucky Dog's Eagle Feather",sands:"Lucky Dog's Hourglass",goblet:"Lucky Dog's Goblet",circlet:"Lucky Dog's Silver Circlet"},icons:{flower:a.p+"static/media/Item_Lucky_Dog's_Clover.fc1d61ff.png",plume:a.p+"static/media/Item_Lucky_Dog's_Eagle_Feather.12c09a28.png",sands:a.p+"static/media/Item_Lucky_Dog's_Hourglass.46ff4dce.png",goblet:a.p+"static/media/Item_Lucky_Dog's_Goblet.3f90e132.png",circlet:a.p+"static/media/Item_Lucky_Dog's_Silver_Circlet.2f5e8cf3.png"},setEffects:{2:{text:"DEF increased by 100.",stats:{def:100}},4:{text:"Picking up Mora restores 300 HP."}}},k={name:"Maiden Beloved",rarity:[4,5],pieces:{flower:"Maiden's Distant Love",plume:"Maiden's Heart-stricken Infatuation",sands:"Maiden's Passing Youth",goblet:"Maiden's Fleeting Leisure",circlet:"Maiden's Fading Beauty"},icons:{flower:a.p+"static/media/Item_Maiden's_Distant_Love.37a0415f.png",plume:a.p+"static/media/Item_Maiden's_Heart-stricken_Infatuation.50d5b60d.png",sands:a.p+"static/media/Item_Maiden's_Passing_Youth.b130e0ac.png",goblet:a.p+"static/media/Item_Maiden's_Fleeting_Leisure.3a3a72d9.png",circlet:a.p+"static/media/Item_Maiden's_Fading_Beauty.7b20fa37.png"},setEffects:{2:{text:"Character Healing Effectiveness +15%",stats:{heal_:15}},4:{text:"Using an Elemental Skill or Burst increases healing received by all party members by 20% for 10s.",conditional:{type:"artifact",sourceKey:"MaidenBeloved_4",maxStack:1,stats:{incHeal_:20}}}}},E={name:"Martial Artist",rarity:[3,4],pieces:{flower:"Martial Artist's Red Flower",plume:"Martial Artist's Feathered Accessory",sands:"Martial Artist's Water Hourglass",goblet:"Martial Artist's Wine Cup",circlet:"Martial Artist's Bandana"},icons:{flower:a.p+"static/media/Item_Martial_Artist's_Red_Flower.dcb104dd.png",plume:a.p+"static/media/Item_Martial_Artist's_Feather_Accessory.ce725e1d.png",sands:a.p+"static/media/Item_Martial_Artist's_Water_Hourglass.59992bd2.png",goblet:a.p+"static/media/Item_Martial_Artist's_Wine_Cup.fa9c4b25.png",circlet:a.p+"static/media/Item_Martial_Artist's_Bandana.7f0f8850.png"},setEffects:{2:{text:"Increases Normal Attack and Charged Attack DMG by 15%.",stats:{normal_dmg_:15,charged_dmg_:15}},4:{text:"After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 25% for 8s.",conditional:{type:"artifact",sourceKey:"MartialArtist_4",maxStack:1,stats:{normal_dmg_:25,charged_dmg_:25}}}}},O={name:"Noblesse Oblige",rarity:[4,5],pieces:{flower:"Royal Flora",plume:"Royal Plume",sands:"Royal Pocket Watch",goblet:"Royal Silver Urn",circlet:"Royal Masque"},icons:{flower:a.p+"static/media/Item_Royal_Flora.e33039ae.png",plume:a.p+"static/media/Item_Royal_Plume.60d4ec7b.png",sands:a.p+"static/media/Item_Royal_Pocket_Watch.243a6478.png",goblet:a.p+"static/media/Item_Royal_Silver_Urn.f2a46be3.png",circlet:a.p+"static/media/Item_Royal_Masque.3bc7e315.png"},setEffects:{2:{text:"Elemental Burst DMG +20%",stats:{burst_dmg_:20}},4:{text:"Using an Elemental Burst increase all party members' ATK by 20% for 12s. This effect cannot stack.",conditional:{type:"artifact",sourceKey:"NoblesseOblige_4",maxStack:1,stats:{atk_:20}}}}},S={name:"Prayers for Destiny",rarity:[3,4],pieces:{circlet:"Tiara of Torrents"},icons:{circlet:a.p+"static/media/Item_Tiara_of_Torrents.eda6e71b.png"},setEffects:{1:{text:Object(l.jsxs)("span",{children:["Affected by ",Object(l.jsx)("span",{className:"text-hydro",children:"Hydro"})," for 40% less time."]}),stats:{}}}},C={name:"Prayers for Illumination",rarity:[3,4],pieces:{circlet:"Tiara of Flame"},icons:{circlet:a.p+"static/media/Item_Tiara_of_Flame.2143b195.png"},setEffects:{1:{text:Object(l.jsxs)("span",{children:["Affected by ",Object(l.jsx)("span",{className:"text-pyro",children:"Pyro"})," for 40% less time."]}),stats:{}}}},T={name:"Prayers for Wisdom",rarity:[3,4],pieces:{circlet:"Tiara of Thunder"},icons:{circlet:a.p+"static/media/Item_Tiara_of_Thunder.3969dc1d.png"},setEffects:{1:{text:Object(l.jsxs)("span",{children:["Affected by ",Object(l.jsx)("span",{className:"text-electro",children:"Electro"})," for 40% less time."]}),stats:{}}}},M={name:"Prayers to Springtime",rarity:[3,4],pieces:{circlet:"Tiara of Frost"},icons:{circlet:a.p+"static/media/Item_Tiara_of_Frost.45d02907.png"},setEffects:{1:{text:Object(l.jsxs)("span",{children:["Affected by ",Object(l.jsx)("span",{className:"text-cryo",children:"Cryo"})," for 40% less time."]}),stats:{}}}},B={name:"Resolution of Sojourner",rarity:[3,4],pieces:{flower:"Heart of Comradeship",plume:"Feather of Homecoming",sands:"Sundial of the Sojourner",goblet:"Goblet of the Sojourner",circlet:"Crown of Parting"},icons:{flower:a.p+"static/media/Item_Heart_of_Comradeship.682913d0.png",plume:a.p+"static/media/Item_Feather_of_Homecoming.3abb439f.png",sands:a.p+"static/media/Item_Sundial_of_the_Sojourner.5d2205a3.png",goblet:a.p+"static/media/Item_Goblet_of_the_Sojourner.2001e918.png",circlet:a.p+"static/media/Item_Crown_of_Parting.9f8b613d.png"},setEffects:{2:{text:"ATK +18%",stats:{atk_:18}},4:{text:"Increases Charged Attack CRIT Rate by 30%.",stats:{charged_critRate_:30}}}},D={name:"Retracing Bolide",rarity:[4,5],pieces:{flower:"Summer Night's Bloom",plume:"Summer Night's Finale",sands:"Summer Night's Moment",goblet:"Summer Night's Waterballoon",circlet:"Summer Night's Mask"},icons:{flower:a.p+"static/media/Item_Summer_Night's_Bloom.3cfa81cb.png",plume:a.p+"static/media/Item_Summer_Night's_Finale.e29ff9bc.png",sands:a.p+"static/media/Item_Summer_Night's_Moment.e8b7b580.png",goblet:a.p+"static/media/Item_Summer_Night's_Waterballoon.6c220a1c.png",circlet:a.p+"static/media/Item_Summer_Night's_Mask.8fb771ab.png"},setEffects:{2:{text:"Increases the effectiveness of shields by 35%",stats:{powShield_:35}},4:{text:"Gain an additional 40% Normal and Charged Attack DMG while under the protection of a shield.",conditional:{type:"artifact",sourceKey:"RetracingBolide_4",maxStack:1,stats:{normal_dmg_:40,charged_dmg_:40}}}}},G={name:"Scholar",rarity:[3,4],pieces:{flower:"Scholar's Bookmark",plume:"Scholar's Quill Pen",sands:"Scholar's Clock",goblet:"Scholar's Ink Cup",circlet:"Scholar's Lens"},icons:{flower:a.p+"static/media/Item_Scholar's_Bookmark.9b69d6da.png",plume:a.p+"static/media/Item_Scholar's_Quill_Pen.2da0fcf3.png",sands:a.p+"static/media/Item_Scholar's_Clock.8a56fdb1.png",goblet:a.p+"static/media/Item_Scholar's_Ink_Cup.677fe884.png",circlet:a.p+"static/media/Item_Scholar's_Lens.cb800c47.png"},setEffects:{2:{text:"Energy Recharge +20%",stats:{enerRech_:20}},4:{text:"Gaining Elemental Particles or Orbs gives 3 Energy to all party members who have a bow or a catalyst equipped. Can only occur once every 3s."}}},F={name:"The Exile",rarity:[3,4],pieces:{flower:"Exile's Flower",plume:"Exile's Feather",sands:"Exile's Pocket Watch",goblet:"Exile's Goblet",circlet:"Exile's Circlet"},icons:{flower:a.p+"static/media/Item_Exile's_Flower.ce15b17f.png",plume:a.p+"static/media/Item_Exile's_Feather.389f300d.png",sands:a.p+"static/media/Item_Exile's_Pocket_Watch.2c9318eb.png",goblet:a.p+"static/media/Item_Exile's_Goblet.025d895b.png",circlet:a.p+"static/media/Item_Exile's_Circlet.24d7cb3f.png"},setEffects:{2:{text:"Energy Recharge +20%",stats:{enerRech_:20}},4:{text:"Using an Elemental Burst regenerates 2 Energy for other party members every 2s for 6s. This effect cannot stack."}}},P={name:"Thundering Fury",rarity:[4,5],pieces:{flower:"Thunderbird's Mercy",plume:"Survivor of Catastrophe",sands:"Hourglass of Thunder",goblet:"Omen of Thunderstorm",circlet:"Thunder Summoner's Crown"},icons:{flower:a.p+"static/media/Item_Thunderbird's_Mercy.177c2948.png",plume:a.p+"static/media/Item_Survivor_of_Catastrophe.120209f4.png",sands:a.p+"static/media/Item_Hourglass_of_Thunder.81e88e56.png",goblet:a.p+"static/media/Item_Omen_of_Thunderstorm.d6516589.png",circlet:a.p+"static/media/Item_Thunder_Summoner's_Crown.8dc75e93.png"},setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-electro",children:"Electro DMG Bonus"})," +15%"]}),stats:{electro_dmg_:15}},4:{text:"Increases damage caused by Overloaded, Electro-Charged, and Superconduct DMG by 40%. Triggering such effects decreases Elemental Skill CD by 1s. Can only occur once every 0.8s.",stats:{overloaded_dmg_:40,electrocharged_dmg_:40,superconduct_dmg_:40}}}},A={name:"Thundersoother",rarity:[4,5],pieces:{flower:"Thundersoother's Heart",plume:"Thundersoother's Plume",sands:"Hour of Soothing Thunder",goblet:"Thundersoother's Goblet",circlet:"Thundersoother's Diadem"},icons:{flower:a.p+"static/media/Item_Thundersoother's_Heart.2efdfc95.png",plume:a.p+"static/media/Item_Thundersoother's_Plume.137f2173.png",sands:a.p+"static/media/Item_Hour_of_Soothing_Thunder.97cfc9f7.png",goblet:a.p+"static/media/Item_Thundersoother's_Goblet.c202e226.png",circlet:a.p+"static/media/Item_Thundersoother's_Diadem.3d4c1cd2.png"},setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-electro",children:"Electro RES"})," increased by 40%"]}),stats:{electro_res_:40}},4:{text:Object(l.jsxs)("span",{children:["Increases DMG against enemies affected by ",Object(l.jsx)("span",{className:"text-electro",children:"Electro"})," by 35%."]}),conditional:{type:"artifact",sourceKey:"Thundersoother_4",maxStack:1,stats:{dmg_:35}}}}},R={name:"Tiny Miracle",rarity:[3,4],pieces:{flower:"Tiny Miracle's Flower",plume:"Tiny Miracle's Feather",sands:"Tiny Miracle's Hourglass",goblet:"Tiny Miracle's Goblet",circlet:"Tiny Miracle's Earrings"},icons:{flower:a.p+"static/media/Item_Tiny_Miracle's_Flower.bd09d3e3.png",plume:a.p+"static/media/Item_Tiny_Miracle's_Feather.741ccc8d.png",sands:a.p+"static/media/Item_Tiny_Miracle's_Hourglass.7c6d9210.png",goblet:a.p+"static/media/Item_Tiny_Miracle's_Goblet.3b911cbf.png",circlet:a.p+"static/media/Item_Tiny_Miracle's_Earrings.7b4aa983.png"},setEffects:{2:{text:"All Elemental RES increased by 20%",stats:{anemo_res_:20,geo_res_:20,electro_res_:20,hydro_res_:20,pyro_res_:20,cryo_res_:20}},4:{text:"Incoming elemental DMG increases corresponding Elemental RES by 30% for 10s. Can only occur once every 10s.",conditional:[{type:"artifact",condition:"Anemo",sourceKey:"TinyMiracle_4",maxStack:1,stats:{anemo_res_:30}},{type:"artifact",condition:"Geo",sourceKey:"TinyMiracle_4",maxStack:1,stats:{geo_res_:30}},{type:"artifact",condition:"Electro",sourceKey:"TinyMiracle_4",maxStack:1,stats:{electro_res_:30}},{type:"artifact",condition:"Hydro",sourceKey:"TinyMiracle_4",maxStack:1,stats:{hydro_res_:30}},{type:"artifact",condition:"pyro",sourceKey:"TinyMiracle_4",maxStack:1,stats:{pyro_res_:30}},{type:"artifact",condition:"Cryo",sourceKey:"TinyMiracle_4",maxStack:1,stats:{cryo_res_:30}}]}}},H={name:"Traveling Doctor",rarity:[3],pieces:{flower:"Traveling Doctor's Silver Lotus",plume:"Traveling Doctor's Owl Feather",sands:"Traveling Doctor's Pocket Watch",goblet:"Traveling Doctor's Medicine Pot",circlet:"Traveling Doctor's Handkerchief Crown"},icons:{flower:a.p+"static/media/Item_Traveling_Doctor's_Silver_Lotus.382008d6.png",plume:a.p+"static/media/Item_Traveling_Doctor's_Owl_Feather.601e6044.png",sands:a.p+"static/media/Item_Traveling_Doctor's_Pocket_Watch.9240117c.png",goblet:a.p+"static/media/Item_Traveling_Doctor's_Medicine_Pot.46120643.png",circlet:a.p+"static/media/Item_Traveling_Doctor's_Handkerchief.99f2ad66.png"},setEffects:{2:{text:"Increases incoming healing by 20%.",stats:{incHeal_:20}},4:{text:function(e){return Object(l.jsxs)("span",{children:["Using Elemental Burst restores 20% HP",Object(o.a)(20,e,"finalHP"),"."]})}}}},N=a(61),W=a(2),K=a.p+"static/media/Item_In_Remembrance_of_Viridescent_Fields.0b1e1ed3.png",L=a.p+"static/media/Item_Viridescent_Arrow_Feather.4c374131.png",V=a.p+"static/media/Item_Viridescent_Venerer's_Determination.7d9dd598.png",z=a.p+"static/media/Item_Viridescent_Venerer's_Vessel.df772eed.png",U=a.p+"static/media/Item_Viridescent_Venerer's_Diadem.12cf1052.png",J=a(41),q={Adventurer:m,ArchaicPetra:p,Berserker:_,BlizzardStrayer:f,BloodstainedChivalry:u,BraveHeart:g,CrimsonWitchOfFlames:b,DefendersWill:y,Gambler:h,GladiatorsFinale:I,HeartOfDepth:x,Instructor:v,Lavawalker:w,LuckyDog:j,MaidenBeloved:k,MartialArtist:E,NoblesseOblige:O,PrayersForDestiny:S,PrayersForIllumination:C,PrayersForWisdom:T,PrayersToSpringtime:M,ResolutionOfSojourner:B,RetracingBolide:D,Scholar:G,TheExile:F,ThunderingFury:P,Thundersoother:A,TinyMiracle:R,TravelingDoctor:H,ViridescentVenerer:{name:"Viridescent Venerer",rarity:[4,5],pieces:{flower:"In Remembrance of Viridescent Fields",plume:"Viridescent Arrow Feather",sands:"Viridescent Venerer's Determination",goblet:"Viridescent Venerer's Vessel",circlet:"Viridescent Venerer's Diadem"},icons:{flower:K,plume:L,sands:V,goblet:z,circlet:U},setEffects:{2:{text:Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"text-anemo",children:"Anemo DMG Bonus"})," +15%"]}),stats:{anemo_dmg_:15}},4:{text:"Increases Swirl DMG by 60%. Decreases opponent's Elemental RES to the element infused in the Swirl by 40% for 10s.",stats:{swirl_dmg_:60},conditional:Object.entries(J.a).filter((function(e){var t=Object(W.a)(e,1)[0];return"anemo"!==t&&"geo"!==t&&"physical"!==t})).map((function(e){var t=Object(W.a)(e,2),a=t[0],r=t[1].name;return{type:"artifact",condition:Object(l.jsxs)("span",{children:["Swirl ",Object(l.jsx)("span",{className:"text-".concat(a),children:r})]}),sourceKey:"ViridescentVenerer_4",maxStack:1,stats:Object(N.a)({},"".concat(a,"_enemyRes_"),-40)}}))}}},WanderersTroupe:{name:"Wanderer's Troupe",rarity:[4,5],pieces:{flower:"Troupe's Dawnlight",plume:"Bard's Arrow Feather",sands:"Concert's Final Hour",goblet:"Wanderer's String-Kettle",circlet:"Conductor's Top Hat"},icons:{flower:a.p+"static/media/Item_Troupe's_Dawnlight.28b136bd.png",plume:a.p+"static/media/Item_Bard's_Arrow_Feather.28f8817b.png",sands:a.p+"static/media/Item_Concert's_Final_Hour.96fae1f1.png",goblet:a.p+"static/media/Item_Wanderer's_String_Kettle.ab979823.png",circlet:a.p+"static/media/Item_Conductor's_Top_Hat.5e063b6e.png"},setEffects:{2:{text:"Elemental Mastery +80",stats:{eleMas:80}},4:{text:"Increases Charged Attack DMG by 35% if the character uses a Catalyst or Bow.",conditional:{type:"artifact",sourceKey:"WanderersTroupe_4",maxStack:1,stats:{charged_dmg_:35}}}}}};t.default=q}}]);
//# sourceMappingURL=17.b77136e7.chunk.js.map