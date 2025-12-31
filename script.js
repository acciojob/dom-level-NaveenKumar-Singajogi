//your JS code here. If required.
const obj=document.querySelector("#level");
let level=0;
let parent="item";
while(parent){
	level+=1;
	parent=parent.parentElement;
}
alert(`The level of the element is:"${level}`);

