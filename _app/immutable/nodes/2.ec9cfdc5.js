import{S as _e,i as he,s as pe,k as u,q as E,a as T,l as m,m as v,r as q,h as _,c as H,n as P,b as M,G as t,u as oe,H as W,J as Y,e as ae,p as fe}from"../chunks/index.838feb98.js";const de={verde:{},rosso:{},amarillo:{},pollo_tandoori:{},portobello_trufado:{},pomodoro:{},boloñesa:{},salmon_trufado:{},"6_quesos":{},carbocrema:{},cacio_e_pepe:{title:"Trompetti al Cacio e Pepe",review:"Al pedirlo se nos advirtió de que llevaba mucha pimienta, y no defraudó. Las trompetas bien de textura y consistencia. El nacimiento de un clásico",score:75},aceite_y_queso:{}},ue={verde:{},rosso:{},amarillo:{},pollo_tandoori:{},portobello_trufado:{},pomodoro:{},boloñesa:{},salmon_trufado:{},"6_quesos":{},carbocrema:{},cacio_e_pepe:{},aceite_y_queso:{}},me={verde:{},rosso:{},amarillo:{},pollo_tandoori:{},portobello_trufado:{},pomodoro:{},boloñesa:{},salmon_trufado:{title:"Tornados con Salmón Trufado",review:"Una pasta suave que le sienta bien a la salsa que empieza en su punto justo de sabor y cremosidad pero que termina siendo un poco demsiado salmón.",score:70},"6_quesos":{},carbocrema:{},cacio_e_pepe:{},aceite_y_queso:{}},ve={verde:{},rosso:{},amarillo:{},pollo_tandoori:{},portobello_trufado:{},pomodoro:{},boloñesa:{},salmon_trufado:{},"6_quesos":{},carbocrema:{},cacio_e_pepe:{},aceite_y_queso:{}},be={verde:{},rosso:{},amarillo:{},pollo_tandoori:{},portobello_trufado:{},pomodoro:{},boloñesa:{},salmon_trufado:{},"6_quesos":{},carbocrema:{title:"Rigatoni Carbocrema",review:"El clásico, tal vez esta sea la pasta ideal para esta salsa, no hay mucho que decir, difícil equivocarse con una carbonara.",score:85},cacio_e_pepe:{},aceite_y_queso:{}},ge={verde:{},rosso:{},amarillo:{},pollo_tandoori:{},portobello_trufado:{},pomodoro:{},boloñesa:{},salmon_trufado:{},"6_quesos":{},carbocrema:{},cacio_e_pepe:{},aceite_y_queso:{}},X={trompetas:de,spaguetti:ue,tornados:me,fusilli:ve,rigatoni:be,gnocchi:ge,"maccheroni estrellas":{verde:{},rosso:{},amarillo:{},pollo_tandoori:{title:"Maccheroni estrellas al pollo tandoori",review:"El picante le sienta bastante bien a la salsa, un resultado bastante sabroso. La pasta un poco demasiado arenosa para mi gusto.",score:70},"portobello trufado":{},pomodoro:{},boloñesa:{},salmon_trufado:{},"6_quesos":{},carbocrema:{},cacio_e_pepe:{},aceite_y_queso:{}}};function te(s,o,l){const e=s.slice();return e[2]=o[l][0],e[3]=o[l][1],e}function le(s,o,l){const e=s.slice();return e[6]=o[l],e}function re(s,o,l){const e=s.slice();return e[9]=o[l],e}function Ee(s){let o,l,e=s[2]+"",a,p,r,g=ce(s[3]),h=[];for(let i=0;i<g.length;i+=1)h[i]=ie(le(s,g,i));return{c(){o=u("section"),l=u("h3"),a=E(e),p=T();for(let i=0;i<h.length;i+=1)h[i].c();r=T(),this.h()},l(i){o=m(i,"SECTION",{id:!0});var c=v(o);l=m(c,"H3",{style:!0});var n=v(l);a=q(n,e),n.forEach(_),p=H(c);for(let y=0;y<h.length;y+=1)h[y].l(c);r=H(c),c.forEach(_),this.h()},h(){fe(l,"text-transform","capitalize"),P(o,"id",s[2])},m(i,c){M(i,o,c),t(o,l),t(l,a),t(o,p);for(let n=0;n<h.length;n+=1)h[n]&&h[n].m(o,null);t(o,r)},p(i,c){if(c&0){g=ce(i[3]);let n;for(n=0;n<g.length;n+=1){const y=le(i,g,n);h[n]?h[n].p(y,c):(h[n]=ie(y),h[n].c(),h[n].m(o,r))}for(;n<h.length;n+=1)h[n].d(1);h.length=g.length}},d(i){i&&_(o),Y(h,i)}}}function se(s){let o,l,e=s[9].title+"",a,p,r,g=s[9].review+"",h,i,c,n,y,N,j,O,C,I,V=s[9].score+"",R,G;return{c(){o=u("article"),l=u("h2"),a=E(e),p=T(),r=u("p"),h=E(g),i=T(),c=u("footer"),n=u("p"),y=E("Valoración final:"),N=T(),j=u("progress"),O=T(),C=u("center"),I=u("small"),R=E(V),G=E(" / 100"),this.h()},l($){o=m($,"ARTICLE",{id:!0});var k=v(o);l=m(k,"H2",{});var z=v(l);a=q(z,e),z.forEach(_),p=H(k),r=m(k,"P",{});var B=v(r);h=q(B,g),B.forEach(_),i=H(k),c=m(k,"FOOTER",{});var A=v(c);n=m(A,"P",{});var S=v(n);y=q(S,"Valoración final:"),S.forEach(_),N=H(A),j=m(A,"PROGRESS",{max:!0,min:!0}),v(j).forEach(_),O=H(A),C=m(A,"CENTER",{});var L=v(C);I=m(L,"SMALL",{});var b=v(I);R=q(b,V),G=q(b," / 100"),b.forEach(_),L.forEach(_),A.forEach(_),k.forEach(_),this.h()},h(){j.value=s[9].score,P(j,"max","100"),P(j,"min","0"),P(o,"id",s[9].id)},m($,k){M($,o,k),t(o,l),t(l,a),t(o,p),t(o,r),t(r,h),t(o,i),t(o,c),t(c,n),t(n,y),t(c,N),t(c,j),t(c,O),t(c,C),t(C,I),t(I,R),t(I,G)},p:W,d($){$&&_(o)}}}function ie(s){let o,l=s[6],e=[];for(let a=0;a<l.length;a+=1)e[a]=se(re(s,l,a));return{c(){o=u("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){o=m(a,"DIV",{class:!0});var p=v(o);for(let r=0;r<e.length;r+=1)e[r].l(p);p.forEach(_),this.h()},h(){P(o,"class","grid")},m(a,p){M(a,o,p);for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(o,null)},p(a,p){if(p&0){l=a[6];let r;for(r=0;r<l.length;r+=1){const g=re(a,l,r);e[r]?e[r].p(g,p):(e[r]=se(g),e[r].c(),e[r].m(o,null))}for(;r<e.length;r+=1)e[r].d(1);e.length=l.length}},d(a){a&&_(o),Y(e,a)}}}function ne(s){let o=ye(s[3]),l,e=o&&Ee(s);return{c(){e&&e.c(),l=ae()},l(a){e&&e.l(a),l=ae()},m(a,p){e&&e.m(a,p),M(a,l,p)},p(a,p){o&&e.p(a,p)},d(a){e&&e.d(a),a&&_(l)}}}function qe(s){let o,l,e,a,p,r,g,h,i,c,n,y,N,j,O,C,I,V,R,G,$,k,z,B,A,S,L=Object.entries(X),b=[];for(let f=0;f<L.length;f+=1)b[f]=ne(te(s,L,f));return{c(){o=u("header"),l=u("hgroup"),e=u("h1"),a=E("Pasta Balboa, revisada."),p=T(),r=u("h2"),g=E("Reviews sobre las pastas de pasta balboa, por y para el amor a la pasta 🍝"),h=T(),i=u("main"),c=u("section"),n=u("h2"),y=E("Reviews"),N=T();for(let f=0;f<b.length;f+=1)b[f].c();j=T(),O=u("section"),C=u("h2"),I=E("Progreso"),V=T(),R=u("p"),G=E("Se han probado "),$=E(s[1]),k=E(" de "),z=E(s[0]),B=E(" posibles pastas!"),A=T(),S=u("progress"),this.h()},l(f){o=m(f,"HEADER",{class:!0});var w=v(o);l=m(w,"HGROUP",{});var d=v(l);e=m(d,"H1",{});var F=v(e);a=q(F,"Pasta Balboa, revisada."),F.forEach(_),p=H(d),r=m(d,"H2",{});var Z=v(r);g=q(Z,"Reviews sobre las pastas de pasta balboa, por y para el amor a la pasta 🍝"),Z.forEach(_),d.forEach(_),w.forEach(_),h=H(f),i=m(f,"MAIN",{class:!0});var J=v(i);c=m(J,"SECTION",{id:!0});var K=v(c);n=m(K,"H2",{});var x=v(n);y=q(x,"Reviews"),x.forEach(_),N=H(K);for(let Q=0;Q<b.length;Q+=1)b[Q].l(K);K.forEach(_),j=H(J),O=m(J,"SECTION",{id:!0});var D=v(O);C=m(D,"H2",{});var ee=v(C);I=q(ee,"Progreso"),ee.forEach(_),V=H(D),R=m(D,"P",{});var U=v(R);G=q(U,"Se han probado "),$=q(U,s[1]),k=q(U," de "),z=q(U,s[0]),B=q(U," posibles pastas!"),U.forEach(_),A=H(D),S=m(D,"PROGRESS",{max:!0,min:!0}),v(S).forEach(_),D.forEach(_),J.forEach(_),this.h()},h(){P(o,"class","container"),P(c,"id","reviews"),S.value=s[1],P(S,"max",s[0]),P(S,"min","0"),P(O,"id","progress"),P(i,"class","container")},m(f,w){M(f,o,w),t(o,l),t(l,e),t(e,a),t(l,p),t(l,r),t(r,g),M(f,h,w),M(f,i,w),t(i,c),t(c,n),t(n,y),t(c,N);for(let d=0;d<b.length;d+=1)b[d]&&b[d].m(c,null);t(i,j),t(i,O),t(O,C),t(C,I),t(O,V),t(O,R),t(R,G),t(R,$),t(R,k),t(R,z),t(R,B),t(O,A),t(O,S)},p(f,[w]){if(w&0){L=Object.entries(X);let d;for(d=0;d<L.length;d+=1){const F=te(f,L,d);b[d]?b[d].p(F,w):(b[d]=ne(F),b[d].c(),b[d].m(c,null))}for(;d<b.length;d+=1)b[d].d(1);b.length=L.length}w&2&&oe($,f[1]),w&1&&oe(z,f[0]),w&2&&(S.value=f[1]),w&1&&P(S,"max",f[0])},i:W,o:W,d(f){f&&_(o),f&&_(h),f&&_(i),Y(b,f)}}}function ye(s){for(const o in s)if(Object.keys(s[o]).length!==0)return!0;return!1}function ce(s){return Object.values(s).filter(e=>Object.keys(e).length!==0).map((e,a)=>({id:a,...e})).reduce((e,a,p)=>(p%2===0?e.push([a]):e[e.length-1].push(a),e),[])}function Oe(s,o,l){let[e,a]=[0,0];for(const[p,r]of Object.entries(X))for(const[g,h]of Object.entries(r))e++,Object.keys(h).length!==0&&a++;return[e,a]}class we extends _e{constructor(o){super(),he(this,o,Oe,qe,pe,{})}}export{we as component};
