(this["webpackJsonphuman-detection-app"]=this["webpackJsonphuman-detection-app"]||[]).push([[0],{17:function(e,t,n){e.exports=n(40)},22:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(11),l=n.n(c),o=(n(22),n(12)),s=n(13),r=n(16),u=n(15),p=n(14),h=n.n(p),m="4d9384ad4d8749c7837412ba6cbab3f3",d=function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={selectedFile:null,isClick:!1,isPerson:!1,isFileSelected:!1},e.onFileChange=function(t){e.setState({selectedFile:t.target.files[0]}),e.setState({isFileSelected:!0,isClick:!1})},e.onSubmit=function(){if(e.state.isFileSelected){(new FormData).append("myFile",e.state.selectedFile,e.state.selectedFile.name),e.setState({isPerson:!1});var t=e.state.selectedFile,n={method:"POST",headers:{"Content-Type":"application/octet-stream","Ocp-Apim-Subscription-Key":m},data:t,url:"https://centralus.api.cognitive.microsoft.com/vision/v3.0/detect"};h()(n).then((function(t){for(var n=0;n<t.data.objects.length;n++)console.log(t.data.objects[n].object),"person"===t.data.objects[n].object&&e.setState({isPerson:!0});console.log(e.state.isPerson),e.setState({isClick:!0})})).catch((function(e){console.log(e.response)}))}else console.log("Upload a file before clicking submit.")},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h3",null,"Choose a file, then click Submit to check if there is a person in the image."),i.a.createElement("div",null,i.a.createElement("input",{type:"file",onChange:this.onFileChange}),i.a.createElement("button",{onClick:this.onSubmit},"Submit"),function(){if(e.state.isClick)return e.state.isPerson?i.a.createElement("p",null,"There IS a person in the image."):i.a.createElement("p",null,"There is NOT a person in the image.")}()))}}]),n}(a.Component);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.befaf8d0.chunk.js.map