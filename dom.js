// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain)
// console.log(document.URL);
// console.log(document.title);
// document.title='HEy';
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent='Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);

// get element by id//

// var headerTitle=document.getElementById('header-title');
// var mainHeader=document.getElementById('main-header');
// headerTitle.innerText='bye';
// headerTitle.innerHTML = '<h2>jfidfjskf</h2>';
//  console.log(document.getElementById('header-title'));
// mainHeader.style.borderBottom='solid 3px #000';

// get elem by class name //
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='2nd item';
// items[1].style.fontWeight='bold';
// // items.style.backgroundColor='grey';
// for(let i=0;i<items.length;i++){
//   items[i].style.backgroundColor='grey';
// }
// // get getElementsByTagName('tagName')
//
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='2nd item';
// li[1].style.fontWeight='bold';
//
// for(let i=0;i<li.length;i++){
//   li[i].style.backgroundColor='grey';
// }

//querySelector
// var quer=document.querySelector('title');
// console.log(quer);
// var ip=document.querySelector('input');
// ip.value='hello worls';
//
// var sub=document.querySelector('input[type="submit"]');
// sub.value='SEND';
// var sec=document.querySelector('.list-group-item:nth-child(2)');
// sec.style.color='blue';

//Array.from(document.querySelectorAll('selector'))
//
// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='hello';
// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
// for(let i=0;i<odd.length;i++){
//   odd[i].style.backgroundColor='#333';
// }
// for(let i=0;i<even.length;i++){
//   even[i].style.backgroundColor='#ccc';
// }
// Traversing DOM
// var itemList=document.querySelector('#items');
// //parentnode prop
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='rgb(210, 210, 210)';
// console.log(itemList.parentNode.parentNode.parentNode);

// //parentElement
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor='rgb(210, 210, 210)';
//  console.log(itemList.parentElement.parentElement.parentElement);

//childnode
// console.log(itemList.children);
// console.log(itemList.children[2]);
// itemList.children[2].style.backgroundColor='yellow';

//first children
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
//   itemList.firstElementChild.textContent='hey';

//nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

//prevsibling
// console.log(itemList.previousSibling);
// //previouselemsibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

//createElem

// create a div
// var newDiv=document.createElement('div');
// // Add class
// newDiv.className='hell';
//
// // add ids
// newDiv.id='hello1';
//
// //add attrib
// newDiv.setAttribute('title','Hello Div');
//
// // create text parentNode
// var newDivText=document.createTextNode('Hello World');
//
// //add text to Div
// // newDiv.append(newDivText);
//
//   event OBJECT
// // var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1')
// console.log(newDiv);
// container.insertBefore(newDiv ,h1);
// newDiv.style.fontSize='30px';
// var button=document.getElementById('button').addEventListener
// ('click',buttonclick);
//
// function buttonclick(e){
//   // console.log('button clicked');
//   // document.getElementById('header-title').textContent='Changed';
//   // document.getElementById('main').style.backgroundColor='#f4f4f4';
// console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.type);
// }
//   var button=document.getElementById('button').
//   addEventListener('click',runEvent)
// var box=document.getElementById('box');
// // box.addEventListener('mouseenter',runEvent)
// // box.addEventListener('mouseleave',runEvent)
// //  box.addEventListener('mouseout',runEvent)
//  // box.addEventListener('mouseover',runEvent)
// box.addEventListener('mousemove',runEvent);
// var itemInout=document.querySelector('input')
//
//   function runEvent(e){
//   console.log('EVENT TYPE: '+e.type);
//   // var output=document.getElementById('output');
//   // output.innerHTML='<h3>MouseX: '+e.offsetX+'<h3>MouseY: '+e.offsetY+'</h3>';
//   document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
// }
