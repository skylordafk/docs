import{c as p}from"./chunks/constants.ee9f0db7.js";import{_ as y,o as _,c as d,k as s,t as l,C as u,H as i,a as n,Q as o}from"./chunks/framework.51d6c45b.js";const F={props:["params"],methods:{async add(){if(!window.keplr)alert("Please install keplr extension");else{if(window.keplr.experimentalSuggestChain)try{await window.keplr.experimentalSuggestChain({chainId:this.params.chainId,chainName:this.params.chainName,rpc:this.params.rpc,rest:this.params.rest,bip44:{coinType:118},bech32Config:{bech32PrefixAccAddr:"celestia",bech32PrefixAccPub:"celestiapub",bech32PrefixValAddr:"celestiavaloper",bech32PrefixValPub:"celestiavaloperpub",bech32PrefixConsAddr:"celestiavalcons",bech32PrefixConsPub:"celestiavalconspub"},currencies:[{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia"}],feeCurrencies:[{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia",gasPriceStep:{low:.1,average:.2,high:.4}}],stakeCurrency:{coinDenom:"TIA",coinMinimalDenom:"utia",coinDecimals:6,coinGeckoId:"celestia"}})}catch{alert("Failed to suggest the chain")}const t=this.params.chainId;await window.keplr.enable(t)}}}},A={class:"center"};function m(t,c,E,h,a,r){return _(),d("div",A,[s("button",{class:"keplrButton",onClick:c[0]||(c[0]=(...e)=>r.add&&r.add(...e))},l(`Add/switch to ${E.params.chainName}`),1)])}const C=y(F,[["render",m],["__scopeId","data-v-0cb9ca4a"]]),T={components:{AddNetworkKeplr:C},data(){return{constants:p,ARABICA_PARAMS:{chainId:`${p.arabicaChainId}`,chainName:"Arabica devnet",rpc:`${p.arabicaRpcUrl}`,rest:`${p.arabicaRestUrl}`},MOCHA_PARAMS:{chainId:`${p.mochaChainId}`,chainName:"Mocha testnet",rpc:`${p.mochaRpcUrl}`,rest:`${p.mochaRestUrl}`},MAINNET_PARAMS:{chainId:`${p.mainnetChainId}`,chainName:"Celestia",rpc:`${p.mainnetRpcUrl}`,rest:`${p.mainnetRestUrl}`}}}},un=JSON.parse('{"title":"Keplr integration with Celestia","description":"How you can add Celestia network parameters to Keplr.","frontmatter":{"description":"How you can add Celestia network parameters to Keplr.","next":{"text":"Integrating Leap for developers","link":"developers/leap"},"head":[["meta",{"name":"og:title","content":"Keplr integration with Celestia | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/keplr.md","filePath":"developers/keplr.md","lastUpdated":1698751995000}'),b=o("",12),w=s("p",null,[n("Behind the scenes, here are the parameters we are passing to the "),s("code",null,"AddNetworkKeplr"),n(" function:")],-1),q={class:"vp-code-group vp-adaptive-theme"},k=o("",1),g={class:"blocks"},D={class:"language-js vp-adaptive-theme active"},I=s("button",{title:"Copy Code",class:"copy"},null,-1),B=s("span",{class:"lang"},"js",-1),f={class:"shiki github-dark vp-code-dark"},P=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@site/src/components/AddNetworkKeplr'")],-1),N=s("span",{class:"line"},null,-1),v=o("",1),S={class:"line"},R={style:{color:"#9ECBFF"}},x=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"  chainName: 'Celestia',")],-1),M={class:"line"},K={style:{color:"#9ECBFF"}},V={class:"line"},U={style:{color:"#9ECBFF"}},j=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},"}")],-1),H=s("span",{class:"line"},null,-1),G=o("",1),O={class:"shiki github-light vp-code-light"},J=s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@site/src/components/AddNetworkKeplr'")],-1),Q=s("span",{class:"line"},null,-1),L=o("",1),Y={class:"line"},W={style:{color:"#032F62"}},z=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"  chainName: 'Celestia',")],-1),X={class:"line"},Z={style:{color:"#032F62"}},$={class:"line"},ss={style:{color:"#032F62"}},ns=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},"}")],-1),as=s("span",{class:"line"},null,-1),ls=o("",1),os={class:"language-js vp-adaptive-theme"},ps=s("button",{title:"Copy Code",class:"copy"},null,-1),es=s("span",{class:"lang"},"js",-1),ts={class:"shiki github-dark vp-code-dark"},cs=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@site/src/components/AddNetworkKeplr'")],-1),rs=s("span",{class:"line"},null,-1),is=o("",1),Es={class:"line"},ys={style:{color:"#9ECBFF"}},_s=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"  chainName: 'Mocha testnet',")],-1),ds={class:"line"},hs={style:{color:"#9ECBFF"}},us={class:"line"},Fs={style:{color:"#9ECBFF"}},As=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},"}")],-1),ms=s("span",{class:"line"},null,-1),Cs=o("",1),Ts={class:"shiki github-light vp-code-light"},bs=s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@site/src/components/AddNetworkKeplr'")],-1),ws=s("span",{class:"line"},null,-1),qs=o("",1),ks={class:"line"},gs={style:{color:"#032F62"}},Ds=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"  chainName: 'Mocha testnet',")],-1),Is={class:"line"},Bs={style:{color:"#032F62"}},fs={class:"line"},Ps={style:{color:"#032F62"}},Ns=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},"}")],-1),vs=s("span",{class:"line"},null,-1),Ss=o("",1),Rs={class:"language-js vp-adaptive-theme"},xs=s("button",{title:"Copy Code",class:"copy"},null,-1),Ms=s("span",{class:"lang"},"js",-1),Ks={class:"shiki github-dark vp-code-dark"},Vs=s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@site/src/components/AddNetworkKeplr'")],-1),Us=s("span",{class:"line"},null,-1),js=o("",1),Hs={class:"line"},Gs={style:{color:"#9ECBFF"}},Os=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"  chainName: 'Arabica devnet',")],-1),Js={class:"line"},Qs={style:{color:"#9ECBFF"}},Ls={class:"line"},Ys={style:{color:"#9ECBFF"}},Ws=s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},"}")],-1),zs=s("span",{class:"line"},null,-1),Xs=o("",1),Zs={class:"shiki github-light vp-code-light"},$s=s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@site/src/components/AddNetworkKeplr'")],-1),sn=s("span",{class:"line"},null,-1),nn=o("",1),an={class:"line"},ln={style:{color:"#032F62"}},on=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"  chainName: 'Arabica devnet',")],-1),pn={class:"line"},en={style:{color:"#032F62"}},tn={class:"line"},cn={style:{color:"#032F62"}},rn=s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},"}")],-1),En=s("span",{class:"line"},null,-1),yn=o("",1);function _n(t,c,E,h,a,r){const e=u("AddNetworkKeplr");return _(),d("div",null,[b,i(e,{params:a.MAINNET_PARAMS},null,8,["params"]),i(e,{params:a.MOCHA_PARAMS},null,8,["params"]),i(e,{params:a.ARABICA_PARAMS},null,8,["params"]),w,s("div",q,[k,s("div",g,[s("div",D,[I,B,s("pre",f,[s("code",null,[P,n(`
`),N,n(`
`),v,n(`
`),s("span",S,[s("span",R,"  chainId: '"+l(a.constants.mainnetChainId)+"',",1)]),n(`
`),x,n(`
`),s("span",M,[s("span",K,"  rpc: '"+l(a.constants.mainnetRpcUrl)+"',",1)]),n(`
`),s("span",V,[s("span",U,"  rest: '"+l(a.constants.mainnetRestUrl)+"'",1)]),n(`
`),j,n(`
`),H,n(`
`),G])]),s("pre",O,[s("code",null,[J,n(`
`),Q,n(`
`),L,n(`
`),s("span",Y,[s("span",W,"  chainId: '"+l(a.constants.mainnetChainId)+"',",1)]),n(`
`),z,n(`
`),s("span",X,[s("span",Z,"  rpc: '"+l(a.constants.mainnetRpcUrl)+"',",1)]),n(`
`),s("span",$,[s("span",ss,"  rest: '"+l(a.constants.mainnetRestUrl)+"'",1)]),n(`
`),ns,n(`
`),as,n(`
`),ls])])]),s("div",os,[ps,es,s("pre",ts,[s("code",null,[cs,n(`
`),rs,n(`
`),is,n(`
`),s("span",Es,[s("span",ys,"  chainId: '"+l(a.constants.mochaChainId)+"',",1)]),n(`
`),_s,n(`
`),s("span",ds,[s("span",hs,"  rpc: '"+l(a.constants.mochaRpcUrl)+"',",1)]),n(`
`),s("span",us,[s("span",Fs,"  rest: '"+l(a.constants.mochaRestUrl)+"'",1)]),n(`
`),As,n(`
`),ms,n(`
`),Cs])]),s("pre",Ts,[s("code",null,[bs,n(`
`),ws,n(`
`),qs,n(`
`),s("span",ks,[s("span",gs,"  chainId: '"+l(a.constants.mochaChainId)+"',",1)]),n(`
`),Ds,n(`
`),s("span",Is,[s("span",Bs,"  rpc: '"+l(a.constants.mochaRpcUrl)+"',",1)]),n(`
`),s("span",fs,[s("span",Ps,"  rest: '"+l(a.constants.mochaRestUrl)+"'",1)]),n(`
`),Ns,n(`
`),vs,n(`
`),Ss])])]),s("div",Rs,[xs,Ms,s("pre",Ks,[s("code",null,[Vs,n(`
`),Us,n(`
`),js,n(`
`),s("span",Hs,[s("span",Gs,"  chainId: '"+l(a.constants.arabicaChainId)+"',",1)]),n(`
`),Os,n(`
`),s("span",Js,[s("span",Qs,"  rpc: '"+l(a.constants.arabicaRpcUrl)+"',",1)]),n(`
`),s("span",Ls,[s("span",Ys,"  rest: '"+l(a.constants.arabicaRestUrl)+"'",1)]),n(`
`),Ws,n(`
`),zs,n(`
`),Xs])]),s("pre",Zs,[s("code",null,[$s,n(`
`),sn,n(`
`),nn,n(`
`),s("span",an,[s("span",ln,"  chainId: '"+l(a.constants.arabicaChainId)+"',",1)]),n(`
`),on,n(`
`),s("span",pn,[s("span",en,"  rpc: '"+l(a.constants.arabicaRpcUrl)+"',",1)]),n(`
`),s("span",tn,[s("span",cn,"  rest: '"+l(a.constants.arabicaRestUrl)+"'",1)]),n(`
`),rn,n(`
`),En,n(`
`),yn])])])])])])}const Fn=y(T,[["render",_n]]);export{un as __pageData,Fn as default};
