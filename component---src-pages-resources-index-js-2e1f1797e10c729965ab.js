"use strict";(self.webpackChunkmillions_on_mars=self.webpackChunkmillions_on_mars||[]).push([[421,404],{1803:function(e,a,t){var n=t(7294),r=t(1597);a.Z=function(e){var a=e.Title,t=e.Items,l=e.TargetLink;return n.createElement("main",null,n.createElement("h1",null,a,n.createElement("br",null)),n.createElement("p",null,n.createElement(r.rU,{to:"/"},"GO Home Page")),n.createElement("p",null,n.createElement("button",{onClick:function(e){e.preventDefault(),"undefined"!=typeof window&&window.history.back()}},"Go Back")),n.createElement("ul",null,Object.keys(t).map((function(e){return n.createElement("li",null,n.createElement("span",null,t[e].Name)," --"," ",l&&n.createElement(r.rU,{to:""+l+t[e].Name},l.split("?")[0]))}))))}},3310:function(e,a){a.Z={Dusk:{Name:"Dusk",Value:1},Stamina:{Name:"Stamina",Value:1},Ice:{Name:"Ice",Value:.03},Regolith:{Name:"Regolith",Value:.03},MetalBits:{Name:"Metal Bits",Value:.17},ElectronicBits:{Name:"Electronic Bits",Value:.13},EmptyPowerCell:{Name:"Empty Power Cell",Value:3.4},RoverWires:{Name:"Rover Wires",Value:.8},Vibes:{Name:"Vibes",Value:2.5},CopperLockbox:{Name:"Copper Lockbox",Value:200},WaterRichClay:{Name:"Water Rich Clay",Value:.9},ScavengingTool:{Name:"Scavenging Tool",value:1}}},2726:function(e,a,t){var n=t(3310),r={Scavenger:{Name:"Scavenger",Cost:[{Resource:n.Z.Stamina,Ammount:1},{Resource:n.Z.ScavengingTool,Ammount:1}]}};a.Z=r},413:function(e,a,t){t.r(a);var n=t(6129);a.default=n.default},6129:function(e,a,t){t.r(a),t.d(a,{Head:function(){return i},default:function(){return u}});var n=t(7294),r=t(1803),l=t(3310),c=t(2726),o=[{Task:c.Z.Scavenger,Resource:l.Z.Dusk,Craft:5},{Task:c.Z.Scavenger,Resource:l.Z.Ice,Craft:10},{Task:c.Z.Scavenger,Resource:l.Z.Regolith,Craft:10},{Task:c.Z.Scavenger,Resource:l.Z.MetalBits,Craft:5},{Task:c.Z.Scavenger,Resource:l.Z.ElectronicBits,Craft:5},{Task:c.Z.Scavenger,Resource:l.Z.EmptyPowerCell,Craft:1},{Task:c.Z.Scavenger,Resource:l.Z.RoverWires,Craft:1},{Task:c.Z.Scavenger,Resource:l.Z.Vibes,Craft:1},{Task:c.Z.Scavenger,Resource:l.Z.CopperLockbox,Craft:1},{Task:c.Z.Scavenger,Resource:l.Z.WaterRichClay,Craft:1}],u=function(){var e=l.Z;if("undefined"!=typeof window){var a=new URL(window.location.href).searchParams.get("task");a&&(e=o.filter((function(e){return e.Task.Name===a})).map((function(e){return e.Resource})))}return n.createElement(r.Z,{Title:"Resources",Items:e})},i=function(){return n.createElement("title",null,"Resources Page")}}}]);
//# sourceMappingURL=component---src-pages-resources-index-js-2e1f1797e10c729965ab.js.map