(this.webpackJsonpshvakim=this.webpackJsonpshvakim||[]).push([[0],{58:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),c=a.n(r),s=(a(58),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,108)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))}),l=a(106),o=a(104),m=a(101),d=a(102),b=a(107),j=a(41),p=a(52),x=a(1),h=Object(m.a)((function(e){return{contentContainer:{margin:"0 auto",paddingRight:"1.33rem",paddingLeft:"1.33rem",maxWidth:"82rem"}}})),g=i.a.memo((function(e){var t=e.children,a=Object(p.a)(e,["children"]),n=h();return Object(x.jsx)("div",Object(j.a)(Object(j.a)({className:n.contentContainer},a),{},{children:t}))})),u=a(3),O=Object(m.a)((function(e){return{header:{padding:"1rem 0",background:"#070A0E",minHeight:"80px"},alignedRow:{display:"flex",flexDirection:"row",alignItems:"center"},logoLink:{minWidth:127,height:27,backgroundImage:"url(".concat("/shvakim-app","/images/compound-logo.svg)"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundColor:"transparent"},actions:{minHeight:"3rem",justifyContent:"flex-end",color:"#CFD8DC"},tokenBalance:{background:"#141E27",borderRadius:"3px",cursor:"pointer",padding:"0.43rem 0.665rem",display:"flex",alignItems:"center",letterSpacing:"1px",fontSize:"12px",fontWeight:600,textTransform:"none"},account:{background:"#141E27",borderRadius:"3px",padding:"0.665rem",marginLeft:"1.33rem",letterSpacing:"1px",fontSize:"12px",fontWeight:600,textTransform:"none"},tokenIcon:{marginLeft:"0.25rem",height:"1.25rem",width:"1.25rem",minHeight:"1.25rem",minWidth:"1.25rem"},iconComp:{backgroundImage:"url(".concat("/shvakim-app","/tokens/COMP.svg)")},icon:{flexShrink:0,display:"inline-block",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain",borderRadius:"50%"}}})),f=i.a.memo((function(e){var t=O();return Object(x.jsx)("header",{className:t.header,children:Object(x.jsx)(g,{children:Object(x.jsxs)(d.a,{container:!0,direction:"row",alignItems:"center",style:{alignItems:"center",alignContent:"center"},children:[Object(x.jsx)(d.a,{item:!0,xs:3,className:t.alignedRow,children:Object(x.jsx)("a",{className:t.logoLink,href:"#"})}),Object(x.jsx)(b.a,{xsDown:!0,children:Object(x.jsx)(d.a,{item:!0,xs:6})}),Object(x.jsxs)(d.a,{className:Object(u.a)(t.alignedRow,t.actions),item:!0,xs:9,sm:3,children:[Object(x.jsxs)("div",{className:t.tokenBalance,onClick:function(){return alert("Should open balance modal")},children:["0.0000",Object(x.jsx)("div",{className:Object(u.a)(t.tokenIcon,t.iconComp,t.icon)})]}),Object(x.jsx)(b.a,{xsDown:!0,children:Object(x.jsxs)("a",{className:Object(u.a)(t.account),onClick:function(){return alert("Should open connection modal")},children:[Object(x.jsx)("span",{}),"0x63...5B30"]})})]})]})})})})),v=a(11),y=Object(m.a)((function(e){return{limitBar:{display:"flex",marginTop:"3.25rem"},label:{fontStyle:"medium",fontWeight:600,fontSize:"12px",color:"#AAB8C1"},limitBarLabel:{color:"#657786",marginTop:"0.7rem",marginRight:"0.625rem","&:last-of-type":{marginRight:0,marginLeft:"0.625rem"}},progressBarWrapper:{position:"relative",flex:"1 1"},progress_bar_green:{display:"flex",backgroundColor:"#00D395"},progress:{display:"flex",flexDirection:"row",flex:"1 1",height:"5px",maxWidth:"100%",overflow:"hidden",backgroundColor:"rgba(40, 49, 55, 0.1)",borderRadius:"100px",marginTop:"1rem"},dark_clear:{background:"rgba(54, 61, 68, 0.5)"},thin:{height:"3px"},progress_bar_percent_label:{display:"inline-block",position:"absolute",left:0,top:0,width:"100%"},p:{position:"relative",float:"right",marginRight:"-0.7rem",color:"#ffffff",padding:"0.3rem 0.3rem 0.25rem 0.25rem",backgroundColor:"#070A0E"},small:{fontSize:"12px"},progress_bar_hover_space:{display:"inline-block",position:"absolute",left:0,top:0,width:"100%",height:"10px",marginTop:"1rem"}}})),k=i.a.memo((function(e){var t=y(),a=37.5;return Object(x.jsxs)("div",{className:t.limitBar,children:[Object(x.jsx)("label",{className:Object(u.a)([t.label,t.limitBarLabel]),children:"Borrow Limit"}),Object(x.jsxs)("div",{className:t.progressBarWrapper,children:[Object(x.jsx)("div",{className:Object(u.a)([t.progress,t.dark_clear,t.thin]),children:Object(x.jsx)("div",{role:"progressbar","aria-value-now":"0","aria-valuemin":0,"aria-valuemax":100,className:t.progress_bar_green,style:{width:"".concat(a,"%")}})}),Object(x.jsx)("div",{className:t.progress_bar_percent_label,children:Object(x.jsx)("div",{style:{minWidth:"1%",maxWidth:"99%",width:"".concat(a,"%")},children:Object(x.jsxs)("p",{className:Object(u.a)([t.p,t.small]),children:[a,"%"]})})}),Object(x.jsx)("div",{className:t.progress_bar_hover_space})]}),Object(x.jsx)("label",{className:Object(u.a)([t.label,t.limitBarLabel]),children:"$.00"})]})})),N=Object(m.a)((function(e){return{headline:{fontSize:"1.6rem",fontWeight:300,color:"#ffffff",marginTop:"0.7rem"},textCenter:{textAlign:"center"},textLeft:{textAlign:"left"},label:{fontStyle:"medium",fontWeight:600,fontSize:"12px",color:"#AAB8C1"},supply:{color:"#00D395"},borrow:{color:"#9669ED"}}})),w=i.a.memo((function(e){var t=N(),a=e.titleText,n=e.sum,i=e.isSupply,r=e.alignLeft;return Object(x.jsxs)("div",{className:r?t.textLeft:t.textCenter,children:[Object(x.jsx)("label",{className:Object(u.a)([t.label,i?t.supply:t.borrow]),children:a}),Object(x.jsxs)("div",{className:t.headline,children:["$",n]})]})})),S=a(51),C=Object(m.a)((function(e){return{netApyWrapper:Object(v.a)({height:"140px",width:"140px",position:"relative",left:"50%",transform:"translateX(-50%)"},e.breakpoints.down("xs"),{height:"120px",width:"120px"}),netApy:{},netApyDescription:{display:"flex",flexDirection:"column",position:"absolute",top:0,left:0,right:0,bottom:0,margin:"0.1875rem",backgroundColor:"#070A0E",borderRadius:"50%",alignItems:"center",justifyContent:"center",padding:"0.25rem","&:hover":{backgroundColor:"rgba(20, 30, 39, 0.98)"}},netApyDescription_Active:{backgroundColor:"rgba(20, 30, 39, 0.98)"},label:{textAlign:"center",color:"#657786",fontStyle:"medium",fontWeight:600,fontSize:"12px"},label_active:{color:"white"},headline:{fontWeight:300,color:"#ffffff",marginTop:"0.7rem"},headline_inactive:{fontSize:"1.6rem"},headline_active:{color:"#F9FAFB",fontSize:"12px",textAlign:"center"}}})),A=function(e){var t=C(),a=Object(n.useRef)(null),i=Object(S.a)(a);console.log({hoverTargetRef:a}),console.log({isHovering:i});var r=i?"...":"Net APY",c=i?"Interest earned and paid, plus TOKEN":"...";return Object(x.jsxs)("div",{className:t.netApyWrapper,ref:a,children:[Object(x.jsx)("div",{className:t.netApy,children:Object(x.jsxs)("svg",{viewBox:"0 0 140 140",width:"100%",children:[Object(x.jsx)("path",{d:"M 70 70 L  70 0 A 70 70 0 0 1 70 0 Z",stroke:"transparent",fill:"#9669ED"}),Object(x.jsx)("path",{d:"M 70 70 L  70 0 A 70 70 0 1 1 69.99956017702848 1.381744718642608e-9 Z",stroke:"transparent",fill:"#00D395"})]})}),Object(x.jsxs)("div",{className:Object(u.a)([t.netApyDescription,!!i&&t.netApyDescription_Active]),children:[Object(x.jsx)("label",{className:Object(u.a)([t.label,!!i&&t.label_active]),children:r}),Object(x.jsx)("div",{className:Object(u.a)([t.headline,i?t.headline_active:t.headline]),children:c})]})]})},L=Object(m.a)((function(e){return{content:{},row:{marginRight:"-0.665rem",marginLeft:"-0.665rem"},alignMiddle:{alignItems:"center"},textCenter:{textAlign:"center"},column:{padding:"0 0.665rem"}}})),R=i.a.memo((function(e){var t=L();return Object(x.jsxs)("div",{className:t.content,children:[Object(x.jsx)(b.a,{xsDown:!0,children:Object(x.jsxs)(d.a,{container:!0,direction:"row",className:Object(u.a)([t.row,t.alignMiddle]),children:[Object(x.jsx)(d.a,{className:t.column,item:!0,container:!0,direction:"column",xs:5,children:Object(x.jsx)(w,{sum:0,titleText:"Supply balance",isSupply:!0,alignLeft:!1})}),Object(x.jsx)(d.a,{className:t.column,container:!0,item:!0,direction:"column",xs:2,children:Object(x.jsx)(A,{})}),Object(x.jsx)(d.a,{className:t.column,container:!0,item:!0,direction:"column",xs:5,children:Object(x.jsx)(w,{sum:0,titleText:"Borrow balance",isSupply:!1,alignLeft:!1})})]})}),Object(x.jsx)(b.a,{smUp:!0,children:Object(x.jsxs)(d.a,{container:!0,direction:"row",className:Object(u.a)([t.row,t.alignMiddle]),children:[Object(x.jsx)(d.a,{className:t.column,item:!0,direction:"column",xs:4,children:Object(x.jsx)(A,{})}),Object(x.jsxs)(d.a,{className:t.column,item:!0,direction:"column",xs:8,children:[Object(x.jsx)(w,{sum:0,titleText:"Supply balance",isSupply:!0,alignLeft:!0}),Object(x.jsx)(w,{sum:0,titleText:"Borrow balance",isSupply:!1,alignLeft:!0})]})]})})]})})),B=Object(m.a)((function(e){return{balancesTotal:Object(v.a)({position:"relative",maxWidth:"60em",margin:"0 auto"},e.breakpoints.down("xs"),{margin:"0 1.33rem"})}})),_=i.a.memo((function(e){var t=B();return Object(x.jsxs)("div",{className:t.balancesTotal,children:[Object(x.jsx)(R,{}),Object(x.jsx)(k,{})]})})),T=Object(m.a)((function(e){return{hero:{background:"#070A0E",marginBottom:"-3.75rem",padding:"1.2635rem 0 7.315rem"}}})),W=i.a.memo((function(e){var t=T();return Object(x.jsx)("section",{className:Object(u.a)(t.hero),children:Object(x.jsx)(_,{})})})),I=Object(m.a)((function(e){return{mobileHide:Object(v.a)({},e.breakpoints.down("xs"),{display:"none !important"}),mobileOnly:Object(v.a)({},e.breakpoints.up("sm"),{display:"none !important"}),label:{fontStyle:"medium",fontWeight:600,fontSize:"12px",color:"#AAB8C1"},textRight:{textAlign:"right"},icon:{flexShrink:0,display:"inline-block",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain",borderRadius:"50%",width:"1.8rem",height:"1.8rem",minWidth:"1.8rem",minHeight:"1.8rem"}}})),D=Object(m.a)((function(e){return{panel:{background:"#ffffff",boxShadow:"0px 2px 4px rgb(16 21 24 / 5%)",borderRadius:"4px",height:"100%",width:"100%"}}})),z=i.a.memo((function(e){var t=D();return Object(x.jsx)("div",{className:t.panel,children:e.children})})),H=a(105),M=Object(m.a)((function(e){return{a:{color:"inherit",letterSpacing:"1px",fontSize:"12px",fontWeight:700,textRransform:"uppercase",textDecoration:"none",cursor:"pointer"},asset:{display:"flex",alignItems:"center",flexWrap:"wrap",borderBottom:"1px solid rgba(0, 0, 0, 0.05)",padding:"1.25rem 1.75rem",borderLeft:"2px solid transparent",paddingLeft:"1.625rem",textTransform:"none",fontSize:"1rem",fontWeight:500,letterSpacing:0,transition:"none",height:"6rem"},list_icon:{width:"2.25rem",height:"2.25rem"},identity:{alignItems:"center"},identity_icon:{marginRight:"1rem"},identity_balance:{flex:"1 1",marginRight:"0.25rem",overflow:"hidden"},balance:{"& > div":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},balanceSubtitle:{display:"block",marginTop:"9px",color:"#AAB8C1",fontSize:"0.9em"}}})),F=i.a.memo((function(e){var t=M(),a=I(),n=e.marketType,i=e.assetSummary,r=i.name,c=i.symbol,s=i.amountInWallet,l=i.borrowAPy,o=i.isCollateralable,m=i.supplyApy,b=i.usdLiquidity/1e6,j="supply"===n?m:l;return Object(x.jsxs)("a",{className:Object(u.a)([t.a,t.asset]),children:[Object(x.jsxs)(d.a,{container:!0,item:!0,xs:4,sm:4,className:t.identity,children:[Object(x.jsx)("span",{onClick:function(){return alert("Should open asset modal")},className:Object(u.a)([a.icon,t.identity_icon,t.list_icon]),style:{backgroundImage:"url(".concat("/shvakim-app","/tokens/asset_").concat(c,".svg)")}}),Object(x.jsxs)("div",{className:Object(u.a)([t.balance,t.identity_balance]),children:[Object(x.jsx)("div",{children:r}),Object(x.jsxs)("span",{className:Object(u.a)([a.mobileOnly,t.balanceSubtitle]),children:[j,"%"]})]})]}),Object(x.jsx)(d.a,{item:!0,xs:1,sm:3,className:Object(u.a)([a.mobileHide,a.textRight]),children:Object(x.jsx)("div",{className:Object(u.a)([t.balance]),children:Object(x.jsxs)("div",{children:[j,"%"]})})}),Object(x.jsx)(d.a,{item:!0,xs:4,sm:3,className:Object(u.a)([a.textRight]),children:Object(x.jsx)("div",{className:Object(u.a)([t.balance]),children:Object(x.jsxs)("div",{children:[s.toLocaleString()," ",c]})})}),Object(x.jsx)(d.a,{item:!0,xs:4,sm:2,className:Object(u.a)([a.textRight]),children:Object(x.jsx)("div",{className:Object(u.a)([t.balance]),children:"supply"===n?Object(x.jsx)(H.a,{checked:o}):Object(x.jsxs)("div",{children:["$",parseFloat(b.toFixed(2)).toLocaleString(),"M"]})})})]})})),E=Object(m.a)((function(e){return{panelHeader:{display:"flex",flexFlow:"inherit",alignItems:"center",justifyContent:"space-between",fontSize:"1.1rem",padding:"1rem 1.75rem",borderBottom:"1px solid rgba(0, 0, 0, 0.05)"},zeroMargin:{margin:0},assetsList:{},panelLabels:{padding:"1rem 1.75rem",borderBottom:"1px solid rgba(0, 0, 0, 0.05)",alignItems:"center"},assets:{}}})),P=i.a.memo((function(e){var t=E(),a=I(),n=e.header,i=e.marketType,r=e.assetsInMarket;return Object(x.jsxs)(z,{children:[Object(x.jsx)("div",{className:t.panelHeader,children:Object(x.jsx)("h4",{className:t.zeroMargin,children:n})}),Object(x.jsxs)("div",{className:t.assetsList,children:[Object(x.jsxs)(d.a,{container:!0,direction:"row",className:t.panelLabels,children:[Object(x.jsx)(d.a,{item:!0,xs:4,sm:4,children:Object(x.jsx)("label",{className:a.label,children:"Asset"})}),Object(x.jsx)(d.a,{className:a.textRight,item:!0,xs:1,sm:3,children:Object(x.jsx)("label",{className:Object(u.a)([a.label,a.mobileHide]),children:"APY"})}),Object(x.jsx)(d.a,{className:a.textRight,item:!0,xs:4,sm:3,children:Object(x.jsx)("label",{className:Object(u.a)([a.label,a.textRight,a.mobileHide]),children:"Wallet"})}),Object(x.jsx)(d.a,{className:a.textRight,item:!0,xs:4,sm:2,children:Object(x.jsx)("label",{className:Object(u.a)([a.label,a.textRight,a.mobileHide]),children:"supply"===i?"Collateral":"Liquidity"})})]}),Object(x.jsx)("div",{className:t.assets,children:r.map((function(e){return Object(x.jsx)(F,{marketType:i,assetSummary:e},e.symbol)}))})]})]})})),U=Object(m.a)((function(e){return{interfaceContainer:{"--alertHeight":"0px",minHeight:"calc(100vh - 82px - 23rem + 34px - var(--alertHeight))"},row:{display:"flex",flexFlow:"row wrap",marginRight:"-0.665rem",marginLeft:"-0.665rem"},marketsColumn:Object(v.a)({flexBasis:"100%",padding:"0 0.665rem"},e.breakpoints.up("sm"),{flexBasis:"50%",maxWidth:"50%"})}}));function q(e,t,a,n,i,r,c){return{symbol:e,name:t,supplyApy:a,borrowAPy:n,isCollateralable:i,amountInWallet:r,usdLiquidity:c}}var Z=[q("BAT","Basic Attention token",2.39,11.2,!1,0,4771e4),q("COMP","Compound",1.89,8.93,!1,0,0),q("DAI","Dai",9,12.35,!1,0,29847e3),q("ETH","Ether",.18,2.83,!1,0,221611e4),q("UNI","Uniswap",1.02,8.28,!0,1631,19845e4),q("USDC","USD Coin",8.22,10.5,!1,5340,24095e4),q("USDT","Tether",7.15,9.25,!1,0,5349e4),q("WBTC","Wrapped Bitcoin",.46,5.4,!1,0,16154e5),q("ZRX","0x",.8,6.92,!1,0,14734e4)],$=i.a.memo((function(e){var t=U();I();return Object(x.jsx)("section",{children:Object(x.jsx)(g,{children:Object(x.jsxs)("div",{className:Object(u.a)([t.interfaceContainer,t.row]),children:[Object(x.jsx)("div",{className:t.marketsColumn,children:Object(x.jsx)(P,{header:"Supply Markets",marketType:"supply",assetsInMarket:Z})}),Object(x.jsx)("div",{className:t.marketsColumn,children:Object(x.jsx)(P,{header:"Borrow Markets",marketType:"borrow",assetsInMarket:Z})})]})})})})),J=(Object(m.a)((function(e){return{}})),i.a.memo((function(e){return Object(x.jsxs)("span",{children:[Object(x.jsx)(W,{}),Object(x.jsx)($,{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})})));var X=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(f,{}),Object(x.jsx)(J,{})]})},Y=a(49),K=a.n(Y),G=a(50),Q=a.n(G),V=K()(Q()({})),ee=i.a.memo((function(e){return Object(x.jsx)(l.b,{injectFirst:!0,children:Object(x.jsx)(o.a,{theme:V,children:Object(x.jsx)(X,{})})})}));c.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(ee,{})}),document.getElementById("root")),s()}},[[85,1,2]]]);
//# sourceMappingURL=main.626a4fb2.chunk.js.map