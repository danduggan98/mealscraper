(this.webpackJsonpmagellan=this.webpackJsonpmagellan||[]).push([[0],{30:function(e,t,a){e.exports=a(51)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),i=a.n(l),c=a(13),s=a.n(c),u=a(14),m=a(8),o=a(9),h=a(10),p=a(11),d=a(17);function E(e){for(var t=[],a=e.list.length,n=e.ordered,l=0;l<a;l++){for(var i=[],c=e.list[l],s=c.length,u=c[0],m=1;m<s;m++)i.push(r.a.createElement("li",{key:c[m].toString()},c[m]));"main"!==u&&t.push(r.a.createElement("h4",{key:u.toString()},r.a.createElement("u",null,u))),t.push(n?r.a.createElement("ol",{key:i.toString()},i):r.a.createElement("ul",{key:i.toString()},i))}return r.a.createElement("div",null,t)}var f=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={status:1,recipeID:e.match.params.recipeid,ingredients:"",directions:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/recipe/"+this.state.recipeID);case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent).error?this.setState({status:0}):this.setState({URL:a.URL,imageURL:a.imageURL,author:a.author,recipeName:a.recipeName,difficulty:a.difficulty,totalTime:a.totalTime,prepTime:a.prepTime,inactiveTime:a.inactiveTime,activeTime:a.activeTime,cookTime:a.cookTime,yield:a.yield,ingredients:a.ingredients,directions:a.directions,source:a.source});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.status?r.a.createElement("div",null,this.state.recipeName?r.a.createElement(d.a,null,r.a.createElement("title",null,"Magellan - "+this.state.recipeName)):r.a.createElement(d.a,null,r.a.createElement("title",null,"Magellan")),r.a.createElement("h1",null,this.state.recipeName),r.a.createElement("h2",null,"by ",this.state.author),r.a.createElement("h3",null,"Courtesy of ",this.state.source),this.state.imageURL?r.a.createElement("img",{src:this.state.imageURL,alt:"",width:"600"}):r.a.createElement("p",null),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:this.state.URL},"Original Recipe"),r.a.createElement("br",null),r.a.createElement("h3",null,"Difficulty: ",this.state.difficulty," | Yield: ",this.state.yield),r.a.createElement("br",null),r.a.createElement("h2",null,"Total Time: ",this.state.totalTime),r.a.createElement("ul",null,this.state.prepTime?r.a.createElement("li",null,r.a.createElement("h4",null,this.state.prepTime," prep time")):r.a.createElement("p",null),this.state.cookTime?r.a.createElement("li",null,r.a.createElement("h4",null,this.state.cookTime," cook time")):r.a.createElement("p",null),this.state.activeTime?r.a.createElement("li",null,r.a.createElement("h4",null,this.state.activeTime," active time")):r.a.createElement("p",null),this.state.inactiveTime?r.a.createElement("li",null,r.a.createElement("h4",null,this.state.inactiveTime," inactive time")):r.a.createElement("p",null)),r.a.createElement("br",null),r.a.createElement("h2",null,"Ingredients:"),r.a.createElement(E,{list:this.state.ingredients,ordered:!1}),r.a.createElement("br",null),r.a.createElement("h2",null,"Directions:"),r.a.createElement(E,{list:this.state.directions,ordered:!0})):r.a.createElement("div",null,r.a.createElement("h1",null,"Recipe not found!"),r.a.createElement("h3",null,"Please try again"))}}]),a}(n.Component),v=a(27),g=a.n(v),y=(a(43),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={recipe:n.props.info},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.recipe,t="/recipe/".concat(e._id);return r.a.createElement("div",{id:"card"},r.a.createElement("a",{className:"recipeLink",target:"_blank",rel:"noopener noreferrer",href:t},r.a.createElement("div",{id:"cardInfo"},r.a.createElement("div",{id:"recipeName"},e.recipeName),r.a.createElement("div",{id:"author"},"by ",e.author),r.a.createElement("div",{id:"totalTime"},e.totalTime))))}}]),a}(n.Component)),b=(a(44),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={results:n.props.data,limit:n.props.lmt},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.results.length>this.state.limit,t=Array.from(this.state.results).slice(0,this.state.limit).map((function(e){return r.a.createElement(y,{info:e})}));return r.a.createElement("div",{id:"resultsContainer"},r.a.createElement("h2",null,"Top Results:"),r.a.createElement("div",{id:"resultsList"},t),e?r.a.createElement("div",null,"See more results"):r.a.createElement("p",null))}}]),a}(n.Component)),T=(a(45),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).getResults=Object(u.a)(s.a.mark((function e(){var t,a,r,l,i,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.input){e.next=12;break}return t="/search/".concat(n.state.searchType,"/").concat(n.state.input),n.setState({results:[],loading:!0,emptyInput:!1}),e.next=5,fetch(t);case 5:return a=e.sent,e.next=8,a.json();case 8:if((r=e.sent).error)n.setState({resultsFound:!1,loading:!1});else{for(l=[],i=r.searchResults,c=i.length,u=0;u<c;u++)l.push(i[u]);n.setState({resultsFound:!0,loading:!1,results:l})}e.next=13;break;case 12:n.setState({emptyInput:!0,resultsFound:!0,results:[]});case 13:case"end":return e.stop()}}),e)}))),n.updateInput=function(e){n.setState({input:e.target.value})},n.updateSearchType=function(e){n.setState({searchType:e.currentTarget.value})},n.state={searchType:"name",input:"",emptyInput:!1,resultsFound:!0,loading:!1,results:[]},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"searchBarContainer"},r.a.createElement("form",{name:"searchBar",target:"hiddenFrame",onSubmit:this.getResults},r.a.createElement("input",{name:"search",id:"searchInput",type:"text",autoComplete:"off",placeholder:"Search for recipes",onChange:this.updateInput}),r.a.createElement("button",{type:"submit",id:"searchButton",className:"fa fa-search"}),r.a.createElement("div",{id:"searchType"},r.a.createElement("input",{type:"radio",id:"searchTypeName",name:"searchType",value:"name",onChange:this.updateSearchType,checked:"name"===this.state.searchType}),r.a.createElement("label",{htmlFor:"searchTypeName"},"Recipe Name"),r.a.createElement("br",null),r.a.createElement("input",{type:"radio",id:"searchTypeIng",name:"searchType",value:"ing",onChange:this.updateSearchType,checked:"ing"===this.state.searchType}),r.a.createElement("label",{htmlFor:"searchTypeIng"},"Ingredient"),r.a.createElement("br",null)),r.a.createElement("div",{id:"inputReminder"},this.state.emptyInput?r.a.createElement("h4",null,"Please enter something to search"):r.a.createElement("p",null)),r.a.createElement("div",{id:"loadingBar"},this.state.loading?r.a.createElement("div",null,"Searching...",r.a.createElement(g.a,null)):r.a.createElement("p",null))),r.a.createElement("div",{id:"results"},this.state.resultsFound?r.a.createElement("p",null):r.a.createElement("h3",null,"No results found. Try again"),this.state.results.length?r.a.createElement(b,{data:this.state.results,lmt:9}):r.a.createElement("p",null)),r.a.createElement("iframe",{name:"hiddenFrame",id:"iframe",title:"hidden"}))}}]),a}(n.Component)),k=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Find your next meal!"),r.a.createElement(T,null))}}]),a}(n.Component),j=a(18),O=a(3);a(46);function S(){return r.a.createElement("div",null,r.a.createElement(j.a,null,r.a.createElement("div",{id:"logoBanner"},r.a.createElement(j.b,{to:"/home",className:"logo"},"MAGELLAN")),r.a.createElement(O.d,null,r.a.createElement(O.b,{path:"/recipe/:recipeid",component:f}),r.a.createElement(O.b,{path:"/home",component:k}),r.a.createElement(O.b,{path:"/"},r.a.createElement(O.a,{to:"/home"})))))}a(49);i.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.44e8db61.chunk.js.map