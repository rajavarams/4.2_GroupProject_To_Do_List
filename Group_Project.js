
//Prompt box to take user input for adding To-Do-List name
let listName = prompt("Please name your list")
document.getElementById("heading").innerHTML = listName;

//Close option to remove an item from the list
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
  var div = this.parentElement;
  div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
  alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var editBtn = document.createElement('button');
editBtn.id= 'myButton';
 var buttonName = document.createTextNode('Edit');
  editBtn.onclick = function(){
      editWorking(li);
  }
  editBtn.appendChild(buttonName);
  li.appendChild(editBtn);
 
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
  }
}

function removeAll(){
  var lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}

function editWorking(e){
  var editValue = prompt('edit the select item', e.firstChild.nodeValue);
  e.firstChild.nodeValue = editValue;
}