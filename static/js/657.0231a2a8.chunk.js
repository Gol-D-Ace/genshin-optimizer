"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[657],{2191:function(e,n,i){i.d(n,{Z:function(){return m}});var t=i.p+"static/media/icon_bow.7ceaa8e25b0b8aeb8059.png",r=i.p+"static/media/icon_catalyst.db078b7b8059b30bef60.png",s=i.p+"static/media/icon_claymore.63b1abb8aeae95e8844d.png",c=i.p+"static/media/icon_polearm.e5f4a2a17edcf4ddec4d.png",a=i.p+"static/media/icon_sword.619c9c2d2c38eb90e342.png",o=i.p+"static/media/Item_Fragile_Resin.f9ec8223a0f695b313d4.png",l=i.p+"static/media/Item_Condensed_Resin.1cecf64ac9eea4bd933b.png",d=i.p+"static/media/Item_Wanderer's_Advice.58c62cf7c20b05da5d56.png",u=i.p+"static/media/Item_Hero's_Wit.a79e36d06cf81ac57536.png",x=i.p+"static/media/Item_Adventurer's_Experience.92b5d19508c95dfb3a30.png",h=i.p+"static/media/icon_team_1.41b86f382a2f22046378.png",f=i.p+"static/media/icon_team_2.a3ae60c2d611bee8e4be.png",Z=i.p+"static/media/icon_team_3.e1118d3bf7ee2221b2d7.png",p=i.p+"static/media/icon_team_4.dc2457a39d3389110ffe.png",m={weaponTypes:{bow:t,catalyst:r,claymore:s,polearm:c,sword:a},slot:{flower:i.p+"static/media/icon_slot_flower.32f54857d26800b737d5.png",plume:i.p+"static/media/icon_slot_plume.f76181312931b3f6e2f0.png",sands:i.p+"static/media/icon_slot_sands.c0f765022ede0c4f8940.png",goblet:i.p+"static/media/icon_slot_goblet.073848cfcd634ccca56f.png",circlet:i.p+"static/media/icon_slot_circlet.f3dccabfef6a71aeeb36.png"},resin:{fragile:o,condensed:l},exp_books:{advice:d,wit:u,experience:x},team:{team1:h,team2:f,team3:Z,team4:p}}},3992:function(e,n,i){var t=i(66934),r=i(57621),s=(0,t.ZP)(r.Z)((function(e){return{backgroundColor:e.theme.palette.contentDark.main}}));n.Z=s},71310:function(e,n,i){var t=i(66934),r=i(57621),s=(0,t.ZP)(r.Z)((function(e){return{backgroundColor:e.theme.palette.contentLight.main}}));n.Z=s},10600:function(e,n,i){i.d(n,{CC:function(){return Z},ZP:function(){return p},el:function(){return h}});var t=i(29439),r=i(1413),s=i(45987),c=i(66934),a=i(4834),o=i(24518),l=i(72791),d=i(80184),u=["children","disableRipple","disableFocusRipple","disableTouchRipple"],x=["value","onChange","disabled","float"],h=(0,c.ZP)(a.ZP)((function(e){var n=e.theme;return{backgroundColor:n.palette.primary.main,transition:"all 0.5s ease","&:hover":{backgroundColor:n.palette.primary.dark},"&.Mui-focused":{backgroundColor:n.palette.primary.dark},"&.Mui-disabled":{backgroundColor:n.palette.primary.dark}}})),f=(0,c.ZP)(o.Z)((function(e){return{backgroundColor:e.theme.palette.primary.main,padding:0,overflow:"hidden",div:{width:"100%",height:"100%"}}}));function Z(e){var n=e.children,i=(e.disableRipple,e.disableFocusRipple,e.disableTouchRipple,(0,s.Z)(e,u));return(0,d.jsx)(f,(0,r.Z)((0,r.Z)({disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0},i),{},{children:n}))}function p(e){var n=e.value,i=void 0===n?0:n,c=e.onChange,a=e.disabled,o=void 0!==a&&a,u=e.float,f=void 0!==u&&u,Z=(0,s.Z)(e,x),p=(0,l.useState)(i),m=(0,t.Z)(p,2),j=m[0],b=m[1],v=(0,l.useState)(!1),g=(0,t.Z)(v,2),y=g[0],C=g[1],w=(0,l.useMemo)((function(){return f?parseFloat:parseInt}),[f]),P=(0,l.useCallback)((function(){c(j),C(!1)}),[c,j,C]),k=(0,l.useCallback)((function(){C(!0)}),[C]);(0,l.useEffect)((function(){return b(i)}),[i,b]);var _=(0,l.useCallback)((function(e){return b(w(e.target.value)||0)}),[b,w]),T=(0,l.useCallback)((function(e){return"Enter"===e.key&&P()}),[P]);return(0,d.jsx)(h,(0,r.Z)({value:y&&!j?"":j,"aria-label":"custom-input",type:"number",inputProps:{step:f?.1:1},onChange:_,onBlur:P,onFocus:k,disabled:o,onKeyDown:T},Z))}},33890:function(e,n,i){i.d(n,{Z:function(){return h}});var t=i(1413),r=i(29439),s=i(45987),c=i(1235),a=i(24518),o=i(47047),l=i(65117),d=i(72791),u=i(80184),x=["title","children","id"];function h(e){var n=e.title,i=e.children,h=e.id,f=void 0===h?"dropdownbtn":h,Z=(0,s.Z)(e,x),p=(0,d.useState)(null),m=(0,r.Z)(p,2),j=m[0],b=m[1],v=Boolean(j),g=(0,d.useCallback)((function(e){return b(e.currentTarget)}),[b]),y=(0,d.useCallback)((function(){return b(null)}),[b]);return(0,u.jsxs)(d.Suspense,{fallback:(0,u.jsx)(a.Z,(0,t.Z)((0,t.Z)({endIcon:(0,u.jsx)(c.Z,{})},Z),{},{children:(0,u.jsx)(o.Z,{width:50})})),children:[(0,u.jsx)(a.Z,(0,t.Z)((0,t.Z)({},Z),{},{id:f,"aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":v?"true":void 0,onClick:g,endIcon:(0,u.jsx)(c.Z,{}),children:n})),(0,u.jsx)(l.Z,{id:"basic-menu",anchorEl:j,open:v,onClose:y,MenuListProps:{"aria-labelledby":f},onClick:y,children:(0,u.jsx)(d.Suspense,{fallback:(0,u.jsx)(o.Z,{width:"100%",height:"1000"}),children:i})})]})}},26818:function(e,n,i){var t=(0,i(66934).ZP)("img")({width:"100%",height:"auto"});n.Z=t},55942:function(e,n,i){var t=(0,i(66934).ZP)("img",{name:"ImgIcon",slot:"Root"})((function(e){var n=e.size;return{display:"inline-block",width:"auto",height:"".concat(1.2*(void 0===n?1:n),"em"),verticalAlign:"text-bottom"}}));n.Z=t},92443:function(e,n,i){i.d(n,{Z:function(){return d}});var t=i(1413),r=i(45987),s=i(66934),c=i(24518),a=i(80184),o=["children","disabled"],l=(0,s.ZP)(c.Z)((function(e){var n=e.theme;return{"&.Mui-disabled":{backgroundColor:n.palette.primary.dark,color:n.palette.text.secondary}}}));function d(e){var n=e.children,i=(e.disabled,(0,r.Z)(e,o));return(0,a.jsx)(l,(0,t.Z)((0,t.Z)({},i),{},{disabled:!0,children:n}))}},94916:function(e,n,i){i.r(n),i.d(n,{default:function(){return W},initToolsDisplayResin:function(){return X}});var t=i(29439),r=i(68870),s=i(61889),c=i(20890),a=i(94721),o=i(39504),l=i(4834),d=i(2199),u=i(24518),x=i(72791),h=i(10757),f=i(2191),Z=i(3992),p=i(55942),m=i(17278),j=i(52771),b=i(4942),v=i(1413),g=i(40318),y=i(94070),C=i(71310),w=i(91702),P=i(10600),k=i(26818),_=i(92443),T=i(60393),M=i(80184),D={advice:{name:"Wanderer's Advice",exp:1e3,cost:200,img:f.Z.exp_books.advice},experience:{name:"Adventurer's Experience",exp:5e3,cost:1e3,img:f.Z.exp_books.experience},wit:{name:"Hero's Wit",exp:2e4,cost:4e3,img:f.Z.exp_books.wit}},R=[0,1e3,1325,1700,2150,2625,3150,3725,4350,5e3,5700,6450,7225,8050,8925,9825,10750,11725,12725,13775,14875,16800,18e3,19250,20550,21875,23250,24650,26100,27575,29100,30650,32250,33875,35550,37250,38975,40750,42575,44425,46300,50625,52700,54775,56900,59075,61275,63525,65800,68125,70475,76500,79050,81650,84275,86950,89650,92400,95175,98e3,100875,108950,112050,115175,118325,121525,124775,128075,131400,134775,138175,148700,152375,156075,159825,163600,167425,171300,175225,179175,183175,216225,243025,273100,306800,344600,386950,434425,487625,547200],E=[20,40,50,60,70,80,90];function S(){return{mora:0,level:1,curExp:0,goUnder:!1,books:{advice:0,experience:0,wit:0}}}function I(){for(var e=(0,m.Z)("ToolDisplayExpCalc",S),n=(0,t.Z)(e,2),i=n[0],l=i.mora,x=i.level,h=i.curExp,f=i.goUnder,j=i.books,k=i.books,I=k.advice,H=k.experience,A=k.wit,F=n[1],z=E.find((function(e){return e>x})),G=-h,J=x;J<Math.min(z,R.length);J++)G+=R[J];for(var U=function(e,n,i,t,r){var s=r?Math.floor(t/1e3):Math.ceil(t/1e3),c=Math.min(Math.floor(s/20),e);s-=20*c;var a=Math.min(Math.floor(s/5),n);s-=5*a;var o=Math.min(s,i);if(s-=o,r||0===s)return[c,a,o];if(3===a&&c!==e)return[c+1,0,0];if(a!==n)return[c,a+1,0];if(c!==e)return[c+1,0,0];return null}(A,H,I,G,f)||[],W=(0,t.Z)(U,3),B=W[0],K=void 0===B?0:B,X=W[1],q=void 0===X?0:X,O=W[2],N=void 0===O?0:O,Y={advice:N,experience:q,wit:K},V=2e4*K+5e3*q+1e3*N,Q=V/5,$=G-V,ee=l-Q,ne=V+h,ie=x;ie<Math.min(z,R.length)&&R[ie]<=ne;ie++)ne-=R[ie];ie===z&&(ne=0);var te="";return ee<0?te=(0,M.jsxs)("span",{children:["You don't have enough ",(0,M.jsx)("b",{children:"Mora"})," for this operation."]}):0===U.length?te=(0,M.jsxs)("span",{children:["You don't have enough ",(0,M.jsx)("b",{children:"EXP. books"})," to level to the next milestone."]}):90===x&&(te="You are at the maximum level."),(0,M.jsxs)(Z.Z,{children:[(0,M.jsxs)(s.ZP,{container:!0,sx:{px:2,py:1},spacing:2,children:[(0,M.jsx)(s.ZP,{item:!0,children:(0,M.jsx)(p.Z,{src:D.wit.img,sx:{fontSize:"2em"}})}),(0,M.jsx)(s.ZP,{item:!0,flexGrow:1,children:(0,M.jsx)(c.Z,{variant:"h6",children:"Experience Calculator"})}),(0,M.jsx)(s.ZP,{item:!0,children:(0,M.jsxs)(d.Z,{children:[(0,M.jsx)(u.Z,{color:"primary",disabled:!f,onClick:function(){return F({goUnder:!1})},children:"Full Level"}),(0,M.jsx)(u.Z,{color:"primary",disabled:f,onClick:function(){return F({goUnder:!0})},children:"Don't fully level"})]})})]}),(0,M.jsx)(a.Z,{}),(0,M.jsx)(o.Z,{children:(0,M.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,M.jsx)(s.ZP,{item:!0,children:(0,M.jsxs)(c.Z,{children:[(0,M.jsx)("span",{children:"This calculator tries to calculate the amount of exp books required to get to the next milestone level. "}),f?"It will try to get as close to the milestone level as possible, so you can grind the rest of the exp without any waste.":"It will try to calculate the amount of books needed to minimize as much exp loss as possible."]})}),(0,M.jsx)(s.ZP,{item:!0,xs:6,md:3,children:(0,M.jsxs)(d.Z,{sx:{display:"flex"},children:[(0,M.jsx)(_.Z,{children:"Current Level"}),(0,M.jsx)(P.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,M.jsx)(P.ZP,{value:x,onChange:function(e){return F({level:(0,T.uZ)(e,0,90)})},sx:{px:2}})})]})}),(0,M.jsx)(s.ZP,{item:!0,xs:6,md:3,children:(0,M.jsxs)(d.Z,{sx:{display:"flex"},children:[(0,M.jsx)(_.Z,{children:"Current EXP."}),(0,M.jsx)(P.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,M.jsx)(P.ZP,{value:h,onChange:function(e){return F({curExp:(0,T.uZ)(e,0,(R[x]||1)-1)})},endAdornment:"/".concat(R[x]||0),sx:{px:2}})})]})}),(0,M.jsx)(s.ZP,{item:!0,xs:6,md:3,children:(0,M.jsx)(C.Z,{children:(0,M.jsxs)(r.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,M.jsx)(c.Z,{children:"Next Milestone Level:"}),(0,M.jsx)(c.Z,{children:(0,M.jsx)("b",{children:z})})]})})}),(0,M.jsx)(s.ZP,{item:!0,xs:6,md:3,children:(0,M.jsx)(C.Z,{children:(0,M.jsxs)(r.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,M.jsx)(c.Z,{children:"EXP. to milestone:"}),(0,M.jsx)(c.Z,{children:(0,M.jsxs)("span",{children:[(0,M.jsx)("strong",{children:V})," / ",(0,M.jsx)("strong",{children:G})]})})]})})}),Object.entries(j).map((function(e){var n=(0,t.Z)(e,1)[0];return(0,M.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,M.jsx)(L,{bookKey:n,value:j[n],setValue:function(e){return F({books:(0,v.Z)((0,v.Z)({},j),{},(0,b.Z)({},n,e))})},required:Y[n]})},n)})),(0,M.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,M.jsxs)(d.Z,{sx:{display:"flex"},children:[(0,M.jsx)(_.Z,{children:"Current Mora"}),(0,M.jsx)(P.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,M.jsx)(P.ZP,{value:l,onChange:function(e){return F({mora:Math.max(null!==e&&void 0!==e?e:0,0)})},sx:{px:2}})})]})}),(0,M.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,M.jsx)(C.Z,{children:(0,M.jsxs)(r.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,M.jsx)(c.Z,{children:"Mora Cost: "}),(0,M.jsx)(c.Z,{children:(0,M.jsx)("b",{children:Q})})]})})}),(0,M.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,M.jsx)(C.Z,{children:(0,M.jsxs)(r.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,M.jsxs)(c.Z,{children:["EXP ",f?"Diff":"Waste",": "]}),(0,M.jsx)(c.Z,{children:(0,M.jsx)("b",{children:(0,M.jsx)(w.Z,{color:$<0?"error":"success",children:$})})})]})})}),(0,M.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,M.jsx)(C.Z,{children:(0,M.jsxs)(r.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,M.jsx)(c.Z,{children:"Final Mora: "}),(0,M.jsx)(c.Z,{children:(0,M.jsx)("b",{children:(0,M.jsx)(w.Z,{color:ee<0?"error":"success",children:ee})})})]})})}),(0,M.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,M.jsx)(C.Z,{children:(0,M.jsxs)(r.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,M.jsx)(c.Z,{children:"Final Level: "}),(0,M.jsx)(c.Z,{children:(0,M.jsx)("b",{children:(0,M.jsx)(w.Z,{color:"success",children:ie})})})]})})}),(0,M.jsx)(s.ZP,{item:!0,xs:12,md:4,children:(0,M.jsx)(C.Z,{children:(0,M.jsxs)(r.Z,{sx:{p:1,display:"flex",justifyContent:"space-between"},children:[(0,M.jsx)(c.Z,{children:"Final EXP: "}),(0,M.jsx)(c.Z,{children:(0,M.jsx)("b",{children:(0,M.jsx)(w.Z,{color:ne<0?"error":"success",children:ne})})})]})})})]})}),(0,M.jsx)(a.Z,{}),(0,M.jsx)(o.Z,{sx:{py:1},children:(0,M.jsxs)(s.ZP,{container:!0,spacing:2,children:[(0,M.jsx)(s.ZP,{item:!0,flexGrow:1,children:!!te&&(0,M.jsx)(y.Z,{variant:"filled",severity:"error",children:te})}),(0,M.jsx)(s.ZP,{item:!0,xs:"auto",children:(0,M.jsx)(u.Z,{disabled:!!te,onClick:function(){return F({level:ie,curExp:ne,books:(0,T.xh)(Y,(function(e,n){return j[n]-e})),mora:ee})},color:"success",startIcon:(0,M.jsx)(g.Z,{}),sx:{height:"100%"},children:"Apply"})})]})})]})}function L(e){var n=e.bookKey,i=e.value,t=void 0===i?0:i,l=e.setValue,u=e.required,x=void 0===u?0:u;return(0,M.jsxs)(C.Z,{children:[(0,M.jsx)(o.Z,{sx:{py:1},children:(0,M.jsx)(c.Z,{children:D[n].name})}),(0,M.jsx)(a.Z,{}),(0,M.jsx)(o.Z,{children:(0,M.jsxs)(s.ZP,{container:!0,children:[(0,M.jsx)(s.ZP,{item:!0,xs:3,children:(0,M.jsx)(k.Z,{src:D[n].img})}),(0,M.jsxs)(s.ZP,{item:!0,xs:9,children:[(0,M.jsxs)(d.Z,{sx:{display:"flex"},children:[(0,M.jsx)(_.Z,{children:"Amount"}),(0,M.jsx)(P.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,M.jsx)(P.ZP,{value:t,onChange:function(e){return l(Math.max(null!==e&&void 0!==e?e:0,0))},sx:{px:2}})})]}),(0,M.jsxs)(r.Z,{display:"flex",justifyContent:"space-between",mt:1,children:[(0,M.jsx)(c.Z,{children:"Required:"}),(0,M.jsx)(c.Z,{children:(0,M.jsx)("b",{children:(0,M.jsx)(w.Z,{color:x?"success":"",children:x})})})]})]})]})})]})}var H=i(53174),A=i(54483),F=i(23786),z=i(33890),G={America:-5*j.yJ,Europe:j.yJ,Asia:8*j.yJ,"TW, HK, MO":8*j.yJ};function J(){return{timeZoneKey:Object.keys(G)[0]}}function U(){var e=(0,m.Z)("ToolsDisplayTimezone",J),n=(0,t.Z)(e,2),i=n[0].timeZoneKey,r=n[1],l=(0,x.useCallback)((function(e){return r({timeZoneKey:e})}),[r]),d=(0,x.useState)(new Date(Date.now()+G[i])),u=(0,t.Z)(d,2),h=u[0],f=u[1];(0,x.useEffect)((function(){var e=function n(){return f(new Date(Date.now()+G[i])),setTimeout((function(){e=n()}),j.vL-Date.now()%j.vL)}();return function(){return clearTimeout(e)}}),[i]);var p=new Date(h);p.getUTCHours()<4?p.setUTCHours(4,0,0,0):(p=new Date(p.getTime()+j.mf)).setUTCHours(4,0,0,0);var b=p.getTime()-h.getTime(),v=(0,j.JR)(b);return(0,M.jsxs)(Z.Z,{children:[(0,M.jsxs)(s.ZP,{container:!0,sx:{px:2,py:1},spacing:2,children:[(0,M.jsx)(s.ZP,{item:!0,children:(0,M.jsx)(c.Z,{variant:"h6",children:(0,M.jsx)(A.G,{icon:H.SZw,className:"fa-fw"})})}),(0,M.jsx)(s.ZP,{item:!0,flexGrow:1,children:(0,M.jsx)(c.Z,{variant:"h6",children:"Teyvat Time"})}),(0,M.jsx)(s.ZP,{item:!0,children:(0,M.jsx)(z.Z,{title:i,children:Object.keys(G).map((function(e){return(0,M.jsx)(F.Z,{selected:i===e,disabled:i===e,onClick:function(){return l(e)},children:e},e)}))})})]}),(0,M.jsx)(a.Z,{}),(0,M.jsx)(o.Z,{children:(0,M.jsxs)(s.ZP,{container:!0,justifyContent:"center",spacing:3,children:[(0,M.jsx)(s.ZP,{item:!0,sx:{my:4},children:(0,M.jsx)(c.Z,{variant:"h2",children:h.toLocaleTimeString([],{timeZone:"UTC"})})}),(0,M.jsxs)(s.ZP,{item:!0,display:"flex",flexDirection:"column",justifyContent:"space-around",children:[(0,M.jsxs)(c.Z,{children:["Server Date: ",(0,M.jsx)("b",{children:h.toDateString()})]}),(0,M.jsxs)(c.Z,{children:["Time until reset: ",(0,M.jsx)("b",{children:v})]}),(0,M.jsxs)(c.Z,{children:["Resin until reset: ",(0,M.jsx)("b",{children:Math.floor(b/(8*j.g4))})]})]})]})})]})}function W(e){return h.ZP.send({hitType:"pageview",page:"/tools"}),(0,M.jsxs)(r.Z,{display:"flex",flexDirection:"column",gap:1,my:1,children:[(0,M.jsx)(U,{}),(0,M.jsx)(q,{}),(0,M.jsx)(I,{})]})}var B=160,K=8*j.g4;function X(){return{resin:B,date:(new Date).getTime()}}function q(){var e=(0,m.Z)("ToolsDisplayResin",X),n=(0,t.Z)(e,2),i=n[0],r=i.resin,h=i.date,b=n[1],v=(0,x.useRef)(void 0),g=function(e){e>=B?(v.current&&clearTimeout(v.current),v.current=void 0):v.current=setTimeout((function(){return console.log("set resin",e+1)}),K),b({resin:e,date:(new Date).getTime()})};(0,x.useEffect)((function(){if(r<B){var e=Date.now(),n=B-r,i=Math.min(Math.floor((e-h)/K),n),t=r+i,s=h+i*K;b({resin:t,date:s}),t<B&&(v.current=setTimeout((function(){return g(t+1)}),e-s))}return function(){return v.current&&clearTimeout(v.current)}}),[]);var y=r>=B?h:h+K,C=new Date(r>=B?h:h+(B-r)*K),w=(0,j.JR)(Math.abs(y-Date.now()));return(0,M.jsxs)(Z.Z,{children:[(0,M.jsxs)(s.ZP,{container:!0,sx:{px:2,py:1},spacing:2,children:[(0,M.jsx)(s.ZP,{item:!0,children:(0,M.jsx)(p.Z,{src:f.Z.resin.fragile,sx:{fontSize:"2em"}})}),(0,M.jsx)(s.ZP,{item:!0,children:(0,M.jsx)(c.Z,{variant:"h6",children:"Resin Counter"})})]}),(0,M.jsx)(a.Z,{}),(0,M.jsx)(o.Z,{children:(0,M.jsxs)(s.ZP,{container:!0,spacing:2,children:[(0,M.jsx)(s.ZP,{item:!0,children:(0,M.jsxs)(c.Z,{variant:"h2",children:[(0,M.jsx)(p.Z,{src:f.Z.resin.fragile}),(0,M.jsx)(l.ZP,{type:"number",sx:{width:"2em",fontSize:"4rem"},value:r,inputProps:{min:0,max:999,sx:{textAlign:"right"}},onChange:function(e){return g(parseInt(e.target.value))}}),(0,M.jsxs)("span",{children:["/",B]})]})}),(0,M.jsxs)(s.ZP,{item:!0,flexGrow:1,children:[(0,M.jsxs)(d.Z,{fullWidth:!0,children:[(0,M.jsx)(u.Z,{onClick:function(){return g(0)},disabled:0===r,children:"0"}),(0,M.jsx)(u.Z,{onClick:function(){return g(r-1)},disabled:0===r,children:"-1"}),(0,M.jsx)(u.Z,{onClick:function(){return g(r-20)},disabled:r<20,children:"-20"}),(0,M.jsx)(u.Z,{onClick:function(){return g(r-40)},disabled:r<40,children:"-40"}),(0,M.jsx)(u.Z,{onClick:function(){return g(r-60)},disabled:r<60,children:"-60"}),(0,M.jsx)(u.Z,{onClick:function(){return g(r+1)},children:"+1"}),(0,M.jsx)(u.Z,{onClick:function(){return g(r+60)},children:"+60"}),(0,M.jsxs)(u.Z,{onClick:function(){return g(B)},disabled:r===B,children:["MAX ",B]})]}),(0,M.jsx)(c.Z,{variant:"subtitle1",sx:{mt:2},children:r<B?(0,M.jsxs)("span",{children:["Next resin in ",w,", full Resin at ",C.toLocaleTimeString()," ",C.toLocaleDateString()]}):(0,M.jsxs)("span",{children:["Resin has been full for at least ",w,", since ",C.toLocaleTimeString()," ",C.toLocaleDateString()]})})]}),(0,M.jsx)(s.ZP,{item:!0,xs:12,children:(0,M.jsx)(c.Z,{variant:"caption",children:"Because we do not provide a mechanism to synchronize resin time, actual resin recharge time might be as much as 8 minutes earlier than predicted."})})]})})]})}},17278:function(e,n,i){i.d(n,{Z:function(){return c}});var t=i(29439),r=i(72791),s=i(7618);function c(e,n){var i=(0,r.useContext)(s.t).database,c=(0,r.useState)(i.states.getWithInit(e,n)),a=(0,t.Z)(c,2),o=a[0],l=a[1];(0,r.useEffect)((function(){return e?i.states.follow(e,l):void 0}),[e,l,i]);var d=(0,r.useCallback)((function(n){return i.states.set(e,n)}),[i,e]);return[null!==o&&void 0!==o?o:n(),d]}},52771:function(e,n,i){i.d(n,{JR:function(){return l},e6:function(){return d},g4:function(){return s},mf:function(){return a},vL:function(){return r},yJ:function(){return c}});var t=i(60393),r=1e3,s=60*r,c=60*s,a=24*c;function o(e){var n=e%1e3,i=Math.floor(e/1e3%60),t=Math.floor(e/6e4%60);return{hours:Math.floor(e/36e5),minutes:t,seconds:i,milliseconds:n}}function l(e){var n=o(e),i=n.hours,r=n.minutes,s=n.seconds,c="Minutes";return i&&(c="Hours"),"".concat(i?"".concat(i,":"):"").concat((0,t.H_)(r,"0",2),":").concat((0,t.H_)(s,"0",2)," ").concat(c)}function d(e){var n=o(e),i=n.hours,r=n.minutes,s=n.seconds,c=n.milliseconds,a="Minutes";return i&&(a="Hours"),"".concat(i?"".concat(i,":"):"").concat((0,t.H_)(r,"0",2),":").concat((0,t.H_)(s,"0",2),".").concat((0,t.H_)(c,"0",3)," ").concat(a)}}}]);
//# sourceMappingURL=657.0231a2a8.chunk.js.map