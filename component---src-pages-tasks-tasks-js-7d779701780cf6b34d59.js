"use strict";(self.webpackChunkmillions_on_mars=self.webpackChunkmillions_on_mars||[]).push([[100],{1803:function(e,n,a){var t=a(7294),l=a(1597);n.Z=function(e){var n=e.Title,a=e.Items,r=e.TargetLink;return t.createElement("main",null,t.createElement("h1",null,n,t.createElement("br",null)),t.createElement("p",null,t.createElement(l.rU,{to:"/"},"GO Home Page")),t.createElement("p",null,t.createElement("button",{onClick:function(e){e.preventDefault(),"undefined"!=typeof window&&window.history.back()}},"Go Back")),t.createElement("ul",null,Object.keys(a).map((function(e){return t.createElement("li",null,t.createElement("span",null,a[e].Name)," --"," ",r&&t.createElement(l.rU,{to:""+r+a[e].Name},r.split("?")[0]))}))))}},4360:function(e,n){n.Z={User:{Name:"User"},SolarPanel:{Name:"Solar Panel"},WaterFilter:{Name:"Water Filter"},CAD:{Name:"C.A.D."},GreenHouse:{Name:"Green House"}}},3310:function(e,n){n.Z={Dusk:{Name:"Dusk",Value:1},Stamina:{Name:"Stamina",Value:1},Ice:{Name:"Ice",Value:.03},Regolith:{Name:"Regolith",Value:.03},MetalBits:{Name:"Metal Bits",Value:.17},ElectronicBits:{Name:"Electronic Bits",Value:.13},EmptyPowerCell:{Name:"Empty Power Cell",Value:3.4},RoverWires:{Name:"Rover Wires",Value:.8},Vibes:{Name:"Vibes",Value:2.5},CopperLockbox:{Name:"Copper Lockbox",Value:200},WaterRichClay:{Name:"Water Rich Clay",Value:.9},ScavengingTool:{Name:"Scavenging Tool",value:1}}},2726:function(e,n,a){var t=a(3310),l={Scavenger:{Name:"Scavenger",Cost:[{Resource:t.Z.Stamina,Ammount:1},{Resource:t.Z.ScavengingTool,Ammount:1}]}};n.Z=l},1001:function(e,n,a){a.r(n),a.d(n,{Head:function(){return o},default:function(){return u}});var t=a(7294),l=a(1803),r=a(2726),i=[{Building:a(4360).Z.User,Task:r.Z.Scavenger}],u=function(e){var n=r.Z;if("undefined"!=typeof window){var a=new URL(window.location.href).searchParams.get("building");a&&(n=i.filter((function(e){return e.Building.Name===a})).map((function(e){return e.Task})))}return t.createElement(l.Z,{Title:"Tasks",Items:n,TargetLink:"/resources?task="})},o=function(){return t.createElement("title",null,"Tasks Page")}}}]);
//# sourceMappingURL=component---src-pages-tasks-tasks-js-7d779701780cf6b34d59.js.map