(this["webpackJsonpnew-react-2"]=this["webpackJsonpnew-react-2"]||[]).push([[0],{188:function(e,t,a){e.exports=a(385)},385:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),s=a(182),i=a(49),c=a(80),d=a(81),h=a(88),u=a(82),m=a(89),g=a(50),p=a(25),f=a(388),E=a(386),S=a(125),_=a.n(S),v=(a(193),function(e){var t=e.reduce((function(e,t){return e+t}))/e.length;return Math.round(t)}),b=a(90),y=function(e){return r.a.createElement(b.b,{data:e.data,options:{legend:{position:"bottom"}}})},C=function(e){return r.a.createElement(b.c,{data:e.data,height:280,options:{responsive:!0,legend:{position:"bottom"},title:{display:!0,text:e.title},tooltips:{position:"nearest",mode:"index",intersect:!1,itemSort:function(e,t,a){return t.yLabel-e.yLabel}},hover:{mode:"nearest",intersect:!0},scales:{x:{display:!0,scaleLabel:{display:!0,labelString:"Month"}},y:{display:!0,scaleLabel:{display:!0,labelString:"Value"}},yAxes:[{display:!0,ticks:{beginAtZero:!0}}]}}})},k=function(e){return r.a.createElement(b.a,{data:e.data,height:210,options:{responsive:!0,legend:{display:!1},title:{display:!0,text:"Average by Section"},tooltips:{mode:"label"},elements:{line:{fill:!1}},scales:{xAxes:[{display:!0,gridLines:{display:!1},labels:["Section 1 : "+e.data.datasets[0].data[0],"Section 2 : "+e.data.datasets[0].data[1],"Section 3 : "+e.data.datasets[0].data[2],"Section 4 : "+e.data.datasets[0].data[3],"Section 5 : "+e.data.datasets[0].data[4]]}],yAxes:[{type:"linear",display:!0,position:"left",id:"y-axis-1",labels:{show:!0}}]}}})},w=function(e,t,a){return{label:e,fill:!1,lineTension:.4,backgroundColor:t,borderColor:t,data:a}},x=function(e,t){return{labels:e,datasets:t}},B=function(e,t){return{labels:e,datasets:[{label:"rata-rata",type:"line",data:t,fill:!1,lineTension:0,borderColor:"#FF6384",backgroundColor:"#FF6384",pointBorderColor:"#FF6384",pointBackgroundColor:"#FF6384",pointHoverBackgroundColor:"#FF6384",pointHoverBorderColor:"#FF6384"}]}},F=["4+3=7","2*6=12","1+1=2","9/3=3","9-7=2","3*2=6","8/2=4","4*2=8","7-3=4","1/1=1","5+2=7","7*2=14"],j=["(5+3)/4=2","2*8/4=4","6/2+2=5","(7-2)*2=10","5*3-4=11","3*(5+1)=18","3+4+3=10","5-(1-1)=5","2*2*3=12","4/2/2=1","9/3*2=6","3*2+4=10"],A=["5+4*2=13","8+4/2=10","6+3=9","9-7=2","7*(8-6)=14","(7-2)*2=10","6/2=3","3*2+4=10","3*2=6","8/2=4","8-2=6","6/2+2=5"],I=["4+3=7","2+9=11","8-2=6","5*3-4=11","4*3=12","8+4/2=10","7*2=14","1*8/2=4","9/3=3","7+(5-2)=10","8/4=2","7-3=4"],O=["9/3*2=6","6/2=3","3*5-1=14","3*(5+1)=18","2*6=12","4+9-7=6","9-8=1","2*8/4=4","7*(8-6)=14","(5+3)/4=2","3+9=12","8/4+7=9"],M=["Section 1","Section 2","Section 3","Section 4","Section 5"],T=a(91),L=a.n(T);a(278);L.a.initializeApp({apiKey:"AIzaSyA_Opf83HriQCLBL7TeB939SUoTKE1Jv0A",authDomain:"brem-br3m.firebaseapp.com",databaseURL:"https://brem-br3m.firebaseio.com",projectId:"brem-br3m",storageBucket:"brem-br3m.appspot.com",messagingSenderId:"111396317998"});var R=L.a.database().ref(),D=(L.a.database.ServerValue.TIMESTAMP,R.child("riset")),z=D.child("dataresponden"),H=D.child("section1"),U=D.child("section2"),J=D.child("section3"),K=D.child("section4"),P=D.child("section5"),V=a(387),W=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).renderCol=function(e,t){var a=[];return e.map((function(e,n){a.push({title:e,dataIndex:t+(n+1),key:t+(n+1),width:100})})),a},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=[{title:"Name",dataIndex:"name",key:"name",width:100,fixed:"left"},{title:"Responden Data",children:[{title:"Umur",dataIndex:"age",key:"age",width:60},{title:"Gender",dataIndex:"gender",width:65,key:"gender"},{title:"Sekolah",dataIndex:"sekolah",width:80,key:"sekolah"},{title:"Kelas",dataIndex:"kelas",width:65,key:"kelas"},{title:"Submit Time",dataIndex:"time",width:100,key:"time"}]},{title:"Section 1",children:this.renderCol(F,"s1_")},{title:"Section 2",children:this.renderCol(I,"s2_")},{title:"Section 3",children:this.renderCol(A,"s3_")},{title:"Section 4",children:this.renderCol(O,"s4_")},{title:"Section 5",children:this.renderCol(j,"s5_")},{title:"Rata-rata hasil Section",fixed:"right",children:[{title:"1",dataIndex:"ms1",key:"ms1",width:60,sorter:function(e,t){return e.ms1-t.ms1}},{title:"2",dataIndex:"ms2",key:"ms2",width:60,sorter:function(e,t){return e.ms2-t.ms2}},{title:"3",dataIndex:"ms3",key:"ms3",width:60,sorter:function(e,t){return e.ms3-t.ms3}},{title:"4",dataIndex:"ms4",key:"ms4",width:60,sorter:function(e,t){return e.ms4-t.ms4}},{title:"5",dataIndex:"ms5",key:"ms5",width:60,sorter:function(e,t){return e.ms5-t.ms5}}]}],t=this.props,a=t.responden_data,n=t.section1,o=t.section2,l=t.section3,s=t.section4,i=t.section5,c=[];return 0!==a.length&&0!==n.length&&0!==o.length&&0!==l.length&&0!==s.length&&0!==i.length&&a.map((function(e,t){c.push({key:t,name:e.nama,age:e.umur,kelas:e.kelas,sekolah:e.sekolah,gender:e.gender,time:new Date(e.timestamp).toLocaleDateString("en-US"),s1_1:n[t][0],s1_2:n[t][1],s1_3:n[t][2],s1_4:n[t][3],s1_5:n[t][4],s1_6:n[t][5],s1_7:n[t][6],s1_8:n[t][7],s1_9:n[t][8],s1_10:n[t][9],s1_11:n[t][10],s1_12:n[t][11],s2_1:o[t][0],s2_2:o[t][1],s2_3:o[t][2],s2_4:o[t][3],s2_5:o[t][4],s2_6:o[t][5],s2_7:o[t][6],s2_8:o[t][7],s2_9:o[t][8],s2_10:o[t][9],s2_11:o[t][10],s2_12:o[t][11],s3_1:l[t][0],s3_2:l[t][1],s3_3:l[t][2],s3_4:l[t][3],s3_5:l[t][4],s3_6:l[t][5],s3_7:l[t][6],s3_8:l[t][7],s3_9:l[t][8],s3_10:l[t][9],s3_11:l[t][10],s3_12:l[t][11],s4_1:s[t][0],s4_2:s[t][1],s4_3:s[t][2],s4_4:s[t][3],s4_5:s[t][4],s4_6:s[t][5],s4_7:s[t][6],s4_8:s[t][7],s4_9:s[t][8],s4_10:s[t][9],s4_11:s[t][10],s4_12:s[t][11],s5_1:i[t][0],s5_2:i[t][1],s5_3:i[t][2],s5_4:i[t][3],s5_5:i[t][4],s5_6:i[t][5],s5_7:i[t][6],s5_8:i[t][7],s5_9:i[t][8],s5_10:i[t][9],s5_11:i[t][10],s5_12:i[t][11],ms1:v(n[t]),ms2:v(o[t]),ms3:v(l[t]),ms4:v(s[t]),ms5:v(i[t])})})),r.a.createElement(V.a,{columns:e,dataSource:c,bordered:!0,size:"middle",scroll:{x:"calc(700px + 50%)",y:480}})}}]),t}(n.Component),q=a(129),G=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={card1:!1,card2:!1,card3:!1,card4:!1,card5:!1,card6:!1,card7:!1,card8:!1,responden_data:[],section1:[],section2:[],section3:[],section4:[],section5:[]},a.loadSection=function(e){H.once("value",(function(t){var n=[],r=[];t.forEach((function(e){"-"===e.key.substring(0,1)&&(n.push(Object(i.a)(e.val())),r.push(v(e.val())))})),a.setState({section1:n}),a.setState({section1_respond_average:r});var o=[];F.forEach((function(t,a){var r=[];e.forEach((function(e,t){r.push(n[t][a])})),o.push(v(r))})),a.setState({section1_average:o})})),U.once("value",(function(t){var n=[],r=[];t.forEach((function(e){"-"===e.key.substring(0,1)&&(n.push(Object(i.a)(e.val())),r.push(v(e.val())))})),a.setState({section2:n}),a.setState({section2_respond_average:r});var o=[];I.forEach((function(t,a){var r=[];e.forEach((function(e,t){r.push(n[t][a])})),o.push(v(r))})),a.setState({section2_average:o})})),J.once("value",(function(t){var n=[],r=[];t.forEach((function(e){"-"===e.key.substring(0,1)&&(n.push(Object(i.a)(e.val())),r.push(v(e.val())))})),a.setState({section3:n}),a.setState({section3_respond_average:r});var o=[];A.forEach((function(t,a){var r=[];e.forEach((function(e,t){r.push(n[t][a])})),o.push(v(r))})),a.setState({section3_average:o})})),K.once("value",(function(t){var n=[],r=[];t.forEach((function(e){"-"===e.key.substring(0,1)&&(n.push(Object(i.a)(e.val())),r.push(v(e.val())))})),a.setState({section4:n}),a.setState({section4_respond_average:r});var o=[];O.forEach((function(t,a){var r=[];e.forEach((function(e,t){r.push(n[t][a])})),o.push(v(r))})),a.setState({section4_average:o})})),P.once("value",(function(t){var n=[],r=[];t.forEach((function(e){"-"===e.key.substring(0,1)&&(n.push(Object(i.a)(e.val())),r.push(v(e.val())))})),a.setState({section5:n}),a.setState({section5_respond_average:r});var o=[];j.forEach((function(t,a){var r=[];e.forEach((function(e,t){r.push(n[t][a])})),o.push(v(r))})),a.setState({section5_average:o})}))},a.handleSwitchMean1=function(e){a.setState({mean1:e})},a.handleSwitchMean2=function(e){a.setState({mean2:e})},a.handleSwitchMean3=function(e){a.setState({mean3:e})},a.handleSwitchMean4=function(e){a.setState({mean4:e})},a.handleSwitchMean5=function(e){a.setState({mean5:e})},a.handleSwitchCard1=function(e){a.setState({card1:e})},a.handleSwitchCard2=function(e){a.setState({card2:e})},a.handleSwitchCard3=function(e){a.setState({card3:e})},a.handleSwitchCard4=function(e){a.setState({card4:e})},a.handleSwitchCard4=function(e){a.setState({card4:e})},a.handleSwitchCard5=function(e){a.setState({card5:e})},a.handleSwitchCard6=function(e){a.setState({card6:e})},a.handleSwitchCard7=function(e){a.setState({card7:e})},a.handleSwitchCard8=function(e){a.setState({card8:e})},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;z.orderByChild("sekolah").equalTo("sdn 4 kalibagor").once("value",(function(t){var a=[];t.forEach((function(e){a.push(Object(s.a)({uid:e.key},e.val()))})),e.setState({responden_data:a},e.loadSection(a))}))}},{key:"render",value:function(){var e,t,a,n=this.state,o=n.responden_data,l=n.section1,s=n.section2,i=n.section3,c=n.section4,d=n.section5,h=n.section1_respond_average,u=n.section2_respond_average,m=n.section3_respond_average,S=n.section4_respond_average,b=n.section5_respond_average,T=n.section1_average,L=n.section2_average,R=n.section3_average,D=n.section4_average,z=n.section5_average,H=n.card1,U=n.card2,J=n.card3,K=n.card4,P=n.card5,V=n.card6,G=n.card7,N=n.card8,Q=n.mean1,Z=n.mean2,$=n.mean3,X=n.mean4,Y=n.mean5,ee=function(e){return{gender:{type:"exact",value:e}}},te=Object(q.multiColumnSearchArrayTable)(o,ee("male")),ae=Object(q.multiColumnSearchArrayTable)(o,ee("female")),ne=function(e){return o.map((function(t,a){return w(t.nama,_()({luminosity:"dark",format:"rgba",alpha:.7}),1===e?l[a]:2===e?s[a]:3===e?i[a]:4===e?c[a]:5===e?d[a]:[])}))};return r.a.createElement("div",null,r.a.createElement("div",{style:{background:"#ECECEC",padding:"30px"}},r.a.createElement(g.a,{gutter:16,style:{marginBottom:24}},r.a.createElement(p.a,{span:24},r.a.createElement(f.a,{title:"Total Responden",bordered:!1},r.a.createElement(p.a,{span:12},r.a.createElement("div",null,r.a.createElement("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10vh"}},"Total :",o.length),r.a.createElement("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"4vh"}},"Laki-laki :",te.length),r.a.createElement("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"4vh"}},"Perempuan :",ae.length))),r.a.createElement(p.a,{span:12},r.a.createElement(y,{data:(t=te.length,a=ae.length,{labels:["Laki-laki","Perempuan"],datasets:[{data:[t,a],backgroundColor:["#36A2EB","#FF6384"],hoverBackgroundColor:["#36A2EB","#FF6384"]}],options:{legend:{position:"bottom"}}})}))))),r.a.createElement(g.a,{gutter:16,style:{marginBottom:24}},r.a.createElement(p.a,{span:24},r.a.createElement(f.a,{title:"Data Responden",bordered:!1,extra:r.a.createElement(E.a,{onChange:this.handleSwitchCard1})},H?r.a.createElement(W,{responden_data:o,section1:l,section2:s,section3:i,section4:c,section5:d}):null))),r.a.createElement(g.a,{gutter:16,style:{marginBottom:24}},r.a.createElement(p.a,{span:24},r.a.createElement(f.a,{title:"Section 1",bordered:!1,extra:r.a.createElement(E.a,{onChange:this.handleSwitchCard2})},U?r.a.createElement(g.a,null,r.a.createElement(p.a,{span:16,offset:4},r.a.createElement(E.a,{onChange:this.handleSwitchMean1})," ","rata-rata",r.a.createElement(C,{title:"Section 1",data:Q?B(F,T):x(F,0!==o.length&&0!==l.length&&0!==s.length&&0!==i.length&&0!==c.length&&0!==d.length?ne(1):[])}))):null))),r.a.createElement(g.a,{gutter:16,style:{marginBottom:24}},r.a.createElement(p.a,{span:24},r.a.createElement(f.a,{title:"Section 2",bordered:!1,extra:r.a.createElement(E.a,{onChange:this.handleSwitchCard3})},J?r.a.createElement(g.a,null,r.a.createElement(p.a,{span:16,offset:4},r.a.createElement(E.a,{onChange:this.handleSwitchMean2})," ","rata-rata",r.a.createElement(C,{title:"Section 2",data:Z?B(I,L):x(I,0!==o.length&&0!==l.length&&0!==s.length&&0!==i.length&&0!==c.length&&0!==d.length?ne(2):[])}))):null))),r.a.createElement(g.a,{gutter:16,style:{marginBottom:24}},r.a.createElement(p.a,{span:24},r.a.createElement(f.a,{title:"Section 3",bordered:!1,extra:r.a.createElement(E.a,{onChange:this.handleSwitchCard4})},K?r.a.createElement(g.a,null,r.a.createElement(p.a,{span:16,offset:4},r.a.createElement(E.a,{onChange:this.handleSwitchMean3})," ","rata-rata",r.a.createElement(C,{title:"Section 3",data:$?B(A,R):x(A,0!==o.length&&0!==l.length&&0!==s.length&&0!==i.length&&0!==c.length&&0!==d.length?ne(3):[])}))):null))),r.a.createElement(g.a,{gutter:16,style:{marginBottom:24}},r.a.createElement(p.a,{span:24},r.a.createElement(f.a,{title:"Section 4",bordered:!1,extra:r.a.createElement(E.a,{onChange:this.handleSwitchCard5})},P?r.a.createElement(g.a,null,r.a.createElement(p.a,{span:16,offset:4},r.a.createElement(E.a,{onChange:this.handleSwitchMean4})," ","rata-rata",r.a.createElement(C,{title:"Section 4",data:X?B(O,D):x(O,0!==o.length&&0!==l.length&&0!==s.length&&0!==i.length&&0!==c.length&&0!==d.length?ne(4):[])}))):null))),r.a.createElement(g.a,{gutter:16,style:{marginBottom:24}},r.a.createElement(p.a,{span:24},r.a.createElement(f.a,{title:"Section 5",bordered:!1,extra:r.a.createElement(E.a,{onChange:this.handleSwitchCard6})},V?r.a.createElement(g.a,null,r.a.createElement(p.a,{span:16,offset:4},r.a.createElement(E.a,{onChange:this.handleSwitchMean5})," ","rata-rata",r.a.createElement(C,{title:"Section 5",data:Y?B(j,z):x(j,0!==o.length&&0!==l.length&&0!==s.length&&0!==i.length&&0!==c.length&&0!==d.length?ne(5):[])}))):null))),r.a.createElement(g.a,{gutter:16,style:{marginBottom:24}},r.a.createElement(p.a,{span:24},r.a.createElement(f.a,{title:"Rata-rata",bordered:!1,extra:r.a.createElement(E.a,{onChange:this.handleSwitchCard7})},G?r.a.createElement(g.a,null,r.a.createElement(p.a,{span:16,offset:4},r.a.createElement(C,{title:"Average by Responden",data:x(M,0!==o.length&&0!==l.length&&0!==s.length&&0!==i.length&&0!==c.length&&0!==d.length?o.map((function(e,t){return w(e.nama,_()({luminosity:"dark",format:"rgba",alpha:.7}),[v(l[t]),v(s[t]),v(i[t]),v(c[t]),v(d[t])])})):[])}))):null))),r.a.createElement(g.a,{gutter:16,style:{marginBottom:24}},r.a.createElement(p.a,{span:24},r.a.createElement(f.a,{title:"Result",bordered:!1,extra:r.a.createElement(E.a,{onChange:this.handleSwitchCard8})},N?r.a.createElement(g.a,null,r.a.createElement(p.a,{span:16,offset:4},r.a.createElement(k,{data:(e=[0!==h.length?v(h):0,0!==u.length?v(u):0,0!==m.length?v(m):0,0!==S.length?v(S):0,0!==b.length?v(b):0],{datasets:[{label:"Line",type:"line",data:e,fill:!1,lineTension:0,borderColor:"#FF6384",backgroundColor:"#FF6384",pointBorderColor:"#FF6384",pointBackgroundColor:"#FF6384",pointHoverBackgroundColor:"#FF6384",pointHoverBorderColor:"#FF6384"},{type:"bar",label:"Bar",data:e,fill:!1,backgroundColor:"#36A2EB",borderColor:"#36A2EB",hoverBackgroundColor:"#36A2EB",hoverBorderColor:"#36A2EB",yAxisID:"y-axis-1"}]})}))):null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[188,1,2]]]);
//# sourceMappingURL=main.11f4716e.chunk.js.map