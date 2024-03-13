let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;

val = document.URL;

val = document.links; //HTMLCollection
val = document.links[0];
val = document.links[3]; //<a href="#" id="delete-item4" class="delete-item">…</a>
val = document.links[3].id; //delete-item4
val = document.links[5].id; //clearall

val = document.links[3].className; //delete-item
val = document.links[3].classList; // DOMTokenList
val = document.links[3].classList[0]; //delete-item
val = document.links[3].classList[1]; //myitem

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].className;
val = document.forms[0].classList;
val = document.forms[0].classList[0];
val = document.forms[0].action;
val = document.forms[0].method;

val = document.images;
val = document.images[0];
val = document.images[0].id;
val = document.images[0].className;
val = document.images[0].classList[0];
val = document.images[0].src;
val = document.images[0].alt;

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;

//console.log(val);



// => Change Styling
document.getElementById('tasktitle').style.backgroundColor = "green";
 document.getElementById('tasktitle').style.color = "#fff";
document.getElementById('tasktitle').style.padding = "5px";

// => Change Content
//document.getElementById('tasktitle').textContent = "My Job";
//document.getElementById('tasktitle').innerText = "My Tasks";
document.getElementById('tasktitle').innerHTML = "<span style='color:yellow;'>My Todo</span>";



//=> Call by Class Name
//const lis = document.getElementsByClassName('list-group-item');
// console.log(lis); // HTML Collection
// console.log(lis[2]);

//lis[2].style.color = "blue";
// lis[2].textContent = "Have to visit";
// lis[2].innerText = 'Have to cook';
//lis[2].innerHTML = 'Have to read <a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash-alt"></i></a>'


// => Call by Tag Name (Element)

const litags = document.getElementsByTagName('li');
// console.log(litags); // HTML Collection
// console.log(litags[1]);
// litags[1].style.color="red";
// litags[1].innerHTML = 'Have to cook <a href="#" id="delete-item2" class="delete-item"><i class="fas fa-trash-alt"></i></a>'

				

console.log(document.querySelector('#tasktitle'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h3'));


console.log(document.querySelector("li")); // only first li
console.log(document.querySelector(".list-group-item")); // only frist li


// document.querySelector('li').style.color = "blue";
// document.querySelector('ul li').style.color = "violet";
// document.querySelector('ul li:nth-child(odd)').style.backgroundColor = "gray";
// document.querySelector('ul li:nth-child(even)').style.backgroundColor = "silver";
// document.querySelector('ul li:last-child').style.backgroundColor = "green";
// document.querySelector('ul li:last-of-type').style.backgroundColor = "orange";
// document.querySelector('ul li:nth-of-type(4)').style.backgroundColor = "steelblue";



// => Query Selector All

console.log(document.querySelectorAll('#tasktitle')); //NodeList
console.log(document.querySelectorAll('#tasktitle')[0]); 


console.log(document.querySelectorAll('.card-title')); //NodeList
console.log(document.querySelectorAll('.card-title')[0]); 

console.log(document.querySelectorAll("li")); //NodeList
console.log(document.querySelectorAll("li")[2]); 

console.log(document.querySelectorAll(".list-group-item")); //NodeList
console.log(document.querySelectorAll(".list-group-item")[3]); 


const listitems = document.querySelector('ul').getElementsByTagName('li');
console.log(listitems); //HTML Collection(5)
console.log(typeof listitems);
console.log(listitems[1]);


const arritems = Array.from(listitems);
//console.log(arritems);


arritems.forEach(function(arritems,idx){
	//console.log(arritems);
});

const listitms = document.querySelectorAll('ul.list-group li.list-group-item');
// console.log(listitms); //Nodelist(5)
// console.log(typeof listitms);
// console.log(listitms[1]);

// listitms.forEach(function(listitm,idx){
// 	//console.log(listitm);

// 	//listitm.innerText = `Hello World`;
// 	listitm.innerText = `${++idx} = Hello World`;
// });


const lisodds = document.querySelectorAll('li:nth-child(odd)');
//console.log(lisodds);
const lisevens = document.querySelectorAll('li:nth-child(even)');
//console.log(lisevens);

// lisodds.forEach(function(lisodd){
// 	lisodd.style.backgroundColor = "gray";
// });

// // lisevens.forEach(function(liseven){
// // 	liseven.style.backgroundColor = "orange";
// // });

// for(let i=0;i < lisevens.length;i++){
// 	//console.log(i); // 0 1
// 	lisevens[i].style.backgroundColor = "silver";
// }


// => Parent to Children

var getli = document.querySelector('ul li');
	getli = document.querySelector('li.list-group-item');
	getli = document.querySelector('li.list-group-item:first-child');
console.log(getli);


let chl;

const getul = document.querySelector('ul.list-group');
//console.log(getul);

chl = getul.children; //HTMLCollection(5)
// console.log(chl);
// console.log(chl[2]);

// chl[1].textContent = "Have to go";
// getul.children[3].innetText = "Have to cook";
// getul.children[4].innerHTML = `Have to read <a href="#" id="delete-item3" class="delete-item">
// 							<i class="fas fa-trash-alt"></i>
// 						</a>`;


// => Parent to Children to Children

	chl = getul; // ul  element
	chl = getul.children; //HTMLCollection
	chl = getul.children[0];
	chl = getul.children[0].children; //HTMLCollection


//  	//  ul    li          a
chl = getul.children[0].children[0];
chl = getul.children[0].children[0].id;
chl = getul.children[0].children[0].className;
chl = getul.children[0].children[0].classList; //DOMTokenList
chl = getul.children[0].children[0].classList[0];
chl = getul.children[0].children[0].href;
  

//   	// 	ul     li           a
 chl = getul.children[0].children[0].children; //HTMLCollection

// 		// 	ul     li           a     i
 chl = getul.children[0].children[0].children[0];

console.log(chl);


// // => Child Element Count 
chl = getul.children.length; //5
chl = getul.childElementCount; //5

chl = getul.children[0].childElementCount; //1
chl = getul.children[0].children[0].childElementCount; //1

console.log(chl);

// => Children to Parent Element 

const getfirstli = document.querySelector('li.list-group-item:first-child');
console.log(getfirstli);

					// li       ul
let getparent = getfirstli.parentElement;
					// li       ul            div.card-footer
	getparent = getfirstli.parentElement.parentElement;
	getparent = getfirstli.parentElement.parentElement.parentElement;

console.log(getparent);


// => Next Element Sibling

let getsibling = getfirstli;
					// li1      li2
	getsibling = getfirstli.nextElementSibling;
	getsibling = getfirstli.nextElementSibling.nextElementSibling;
	getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
	getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;

					// li1 			li2 				li3 			li4 					li5						
	getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

console.log(getsibling);


// => Previous Element Sibling


	getsibling = getfirstli;
					// li1 			li2 				li3 			li2	
	getsibling = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(getsibling);


// => create Element

const newli = document.createElement('li');

// => Add ID

newli.id = "new-item";

// => Add Class

newli.className = "list-group-item";
newli.className = "delete-me";
newli.className = "list-group-item delete-me";

newli.classList.add('delete-i');
newli.classList.add('delete-you');
newli.classList.add('delete-we',"delete-your","delete-us");


console.log(newli);

// => Add Attribute
// setAttribute(attrname,value)
newli.setAttribute('title','newitem');


//newli.textContent = 'hay';
//newli.innerText = 'hi';
//newli.innerHTML = `List Item 6<a href="#" id="delete-item2" class="delete-item"><i class="fas fa-trash-alt"></i></a>`


// const newtext = document.createTextNode("hello World");
// newli.appendChild(newtext);

newli.appendChild(document.createTextNode("Hello Thailand"));

const newlink = document.createElement('a');
newlink.href = "#";
newlink.id = "delete-item6";
// newlink.className = 'delete-item';
newlink.classList.add('delete-item');

const newitalic = document.createElement('i');
newitalic.classList.add('fas','fa-trash-alt');

newlink.appendChild(newitalic);
// console.log(newlink);


newli.appendChild(newlink);

console.log(newli);

document.querySelector('ul.list-group').appendChild(newli);

// => Replace Element 
// replaceChild(new,old)

const newtitleh2 = document.createElement('h2');
newtitleh2.id = "tasktitle";

console.log(newtitleh2);

const newcaption = document.createTextNode("All My List");
newtitleh2.appendChild(newcaption);

// console.log(newtitleh2);

const oldtitleh4 = document.getElementById('tasktitle');
// console.log(oldtitleh4);

const getcardfooter = document.querySelector('.card-footer');
getcardfooter.replaceChild(newtitleh2,oldtitleh4);


// => Remove Element (self)


const getlis = document.querySelectorAll('li'); //Node List

// console.log(getlis);
// console.log(getlis[0]);

// getlis[0].remove();
// getlis[1].remove();

// console.log(getlis);  //6



// => Remove Child Element

const getfirstul = document.querySelector('ul');
// console.log(getfirstul);
// getfirstul.remove();

// console.log(getfirstul.children[0]);

//getfirstul.removeChild(getfirstul.children[0]);
// getfirstul.removeChild(getfirstul.children[4]);

//getfirstul.removeChild(getfirstul.children[1]);

// => Attribute

const firstli = document.querySelector('li');
console.log(firstli);
const firstlichild = firstli.children[0];
// console.log(firstlichild);
// console.log(firstlichild.id);
// console.log(firstlichild.href);
console.log(firstlichild.getAttribute('href'));  //#
console.log(firstlichild.getAttribute('id'));  //#
console.log(firstlichild.title);  //iamtitle
console.log(firstlichild.alt); //undefined
console.log(firstlichild.getAttribute('alt'));  //iamalt

console.log(firstlichild.href); //https://google.com/
console.log(firstlichild.getAttribute('href'));  //https://google.com/


let hasatt = firstlichild.hasAttribute('href');
console.log(hasatt); //true
hasatt = firstlichild.hasAttribute('hay');
console.log(hasatt); //false


// => className vs classList
//console.log(firstlichild.className); //delete-item
// firstlichild.className = "delete-myself";
// firstlichild.className = "delete-item delete-myself";
// firstlichild.className = "delete-item delete-myself delete-ourserve";
// firstlichild.className = "delete-item delete-ourserve";
// console.log(firstlichild.className ); 

// console.log(firstlichild.classList); //DOMTokenList
// console.log(firstlichild.classList[0]); //delete-item
// console.log(firstlichild.classList[1]); //undefined

firstlichild.classList.add("delete-myself");
firstlichild.classList.add("delete-ourserve");
// firstlichild.classList.add("delete-us","delete-yourself");


// firstlichild.classList.remove("delete-us");
// firstlichild.classList.remove("delete-us","delete-ourserve");



// console.log(firstlichild.classList);

// console.log(firstlichild.className); //delete-item delete-myself delete-ourserve

if (firstlichild.className === "delete-item delete-myself delete-ourserve") {
	console.log("Yes");
}else{
	console.log("No");
}

if (firstlichild.classList.contains("delete-myself")) {
	console.log("Yes");
}else{
	console.log("No");
}

// => addEvemtListener(eventype,callbackfunction)

const clearbtn = document.querySelector('.clear-tasks');

// clearbtn.addEventListener('click',function(e){
// 	console.log("i am working");

// 	// console.log(e);
// 	console.log(e.target);
// 	// console.log(e.target.id);
// 	// console.log(e.target.className);
// 	// console.log(e.target.classList);

// 	console.log(this);

// 	e.preventDefault();
// });


// method 2

// clearbtn.addEventListener('click',myclick);

function myclick(e){

	e.preventDefault();


	// console.log('hay');
	// console.log(e.target);

	// console.log(this);
	// console.log(this.id);

	// e.target.innerText = "Finished";
	// this.innerText = "Done";


	// Coordinate Event - relative to the window

	// console.log(e);
	// const clientx = e.clientX;
	// const clienty = e.clientY;
	// console.log(clientx,clienty);



	// Coordinate Event - relative to the element
	// const offsetx = e.offsetX;
	// const offsety = e.offsetY;
	// console.log(offsetx,offsety);


}

// => Mouse Event ( Pointer Event)

const clbtn = document.querySelector('.clear-tasks');


// Single Click

// clbtn.addEventListener('click',mouseeventtype);

// Double Click

// clbtn.addEventListener('dblclick',mouseeventtype);

// mousedown

// clbtn.addEventListener('mousedown',mouseeventtype);

// mouseup same with click

// clbtn.addEventListener('mouseup',mouseeventtype);


const card = document.querySelector('.card');

// mouseenter

//card.addEventListener('mouseenter',mouseeventtype);

// mouseover

// card.addEventListener('mouseover',mouseeventtype);

// mouseleave

// card.addEventListener('mouseleave',mouseeventtype);

// mouseout

// card.addEventListener('mouseout',mouseeventtype);

// mousemove

// card.addEventListener('mousemove',mouseeventtype);

const headingh2 = document.querySelector('h2');

function mouseeventtype(e){

	// console.log('i am working');

	// console.log(`Event type = ${e.type}`);

	// headingh2.textContent = `MouseX : ${e.clientX} MouseY : ${e.clientY}`;
	//headingh2.textContent = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;
	

	// document.body.style.backgroundColor = `rgba(${e.clientX}		,${e.clientY} ,${e.clientX} ,0.5)`;
	//document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY} ,${e.offsetX})`;

	e.preventDefault();
}


//submit

// const getform = document.querySelector('form');

// getform.addEventListener('submit',function(e){
// 	console.log(`Event Type = ${e.type}`);

// 	e.preventDefault();
// });

// => Input Event ( Keyboard Event )

const getinput = document.querySelector('#task');

//keydown
// getinput.addEventListener('keydown',inputeventtype);
//keypress
// getinput.addEventListener('keypress',inputeventtype);

//keyup
// getinput.addEventListener('keyup',inputeventtype);
//input
// getinput.addEventListener('input',inputeventtype);


//focus
// getinput.addEventListener('focus',inputeventtype);

//blur
// getinput.addEventListener('blur',inputeventtype);

// cut (ctl+x)
// getinput.addEventListener('cut',inputeventtype);

// paste(ctl+v)
getinput.addEventListener('paste',inputeventtype);



function inputeventtype(e){
	// console.log(e.target);
	// console.log(this);

	// console.log(e.target.value);
	// console.log(this.value);
	//console.log(getinput.value);
}


// =>Event Bubbling
// document.querySelector('.card-title').addEventListener('click',function(){
// 	console.log("i am card-title");
// });

// document.querySelector('.card-header').addEventListener('click',function(){
// 	console.log("i am card-header");
// });

// document.querySelector('.card').addEventListener('click',function(){
// 	console.log("i am card");
// });

// => Event Delegation

const getdeleteitem = document.querySelector('.delete-item');
// console.log(getdeleteitem);

// getdeleteitem.addEventListener('click',function(e){
// 	// console.log('i am delete item');

// 	// console.log(e.target); //i tag
// 	// console.log(this);     // a tage

// 	//e.preventDefault();
// });

// document.body.addEventListener('click',eventdeleg);

// function eventdeleg(e){
	// console.log(e.target);

	// console.log(e.target.className);

	//i
	// if(e.target.className === "fas fa-trash-alt"){
	// 	console.log('i am working , i am trash');
	// }

	// console.log(e.target.parentElement);
	// console.log(e.target.parentElement.className);

		//i 		a
	// if(e.target.parentElement.className === "delete-item"){
	// 	console.log('i am working , i am tag');
	// }

		//i 		a
	// if(e.target.parentElement.classList.contains("delete-item")){
	// 		console.log('i am working , i am tag');
	// }

	//i
	//e.target.remove();

	//i
	// e.target.parentElement.remove();

	//i
// 	e.target.parentElement.parentElement.remove();
	
	

// 	e.preventDefault();
// }

document.querySelector('#form').addEventListener('submit',function(e){

	e.preventDefault();

	// console.log("hay i am working");

	const getnewtask = document.getElementById('task').value;
	// console.log(getnewtask);

	let alltasks;

	if(localStorage.getItem('mytasks') === null){
		alltasks= [];

		console.log("Not value yet");

	}else{

		console.log("Value already exists");
		alltasks = JSON.parse(localStorage.getItem('mytasks'));

		console.log(alltasks);
		console.log(typeof alltasks);
	}

	alltasks.push(getnewtask);


	localStorage.setItem('mytasks', JSON.stringify(alltasks));

	console.log(alltasks);
});

console.log(localStorage.getItem('mytasks'));
console.log(typeof localStorage.getItem('mytasks'));

console.log(JSON.parse(localStorage.getItem('mytasks')));
console.log(typeof JSON.parse(localStorage.getItem('mytasks')));

const getmytasks = JSON.parse(localStorage.getItem('mytasks'));


getmytasks.forEach(function(getmytasks){

	console.log(getmytasks);


});

// JS object
// JSON object

// [
// 	{
// 		"name":"aung aung",
// 		"age":20,
// 		"city":"yangon"
// 	}
// ]

	
