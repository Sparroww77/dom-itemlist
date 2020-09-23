var elem=document.getElementById('form');
var items=document.getElementById('items');

//delete EVENT
items.addEventListener('click',remove);
//add event addEventListener
elem.addEventListener('submit',btnclick);
// filter EVENT
var filter=document.getElementById('filter');
//add EVENT
filter.addEventListener('keyup',filterlist);
//function for event listener
function btnclick(e){
  e.preventDefault();
 var inputtext=document.getElementById('txtip').value;

 var li=document.createElement('li');
 li.append(inputtext);
 var btn=document.createElement('button');
 btn.className='bt';
 btn.textContent='X';
 li.appendChild(btn);
 li.className='list-group-item';
items.appendChild(li);
}
function remove(e){
  if(e.target.classList.contains('bt')){
    if(confirm('Are you sure?')){
      var lis=e.target.parentElement;
      items.removeChild(lis);
    }
  }
}

function filterlist(e){
var text=e.target.value.toLowerCase();

//convert collection to Array
var items=document.getElementsByTagName('li');
Array.from(items).forEach(function(item){
var itemName=item.firstChild.textContent;
if(itemName.toLowerCase().indexOf(text) != -1){
  
}
else{
  item.style.display='none';
}
}
)}
