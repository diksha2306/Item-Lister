var form=document.getElementById('addform');
var itemlist=document.getElementById("items");
var filter=document.getElementById("filter");

form.addEventListener("submit",additem);

itemlist.addEventListener("click",removeitem);

filter.addEventListener('keyup',filteritem);

function additem(e){
    e.preventDefault();

    var newitem=document.getElementById("item").value;

    document.getElementById("item").value="";

    var li=document.createElement("li");

    li.className="list_grp_item";

    li.appendChild(document.createTextNode(newitem));

    var deleteit=document.createElement("button");
    
    deleteit.className="btn2";
    deleteit.appendChild(document.
    createTextNode("X"));

    li.appendChild(deleteit);

    itemlist.appendChild(li);
}

function removeitem(e){
    if(e.target.className==="btn2"){
        if(confirm("Are you sure you want to delete?")){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

function filteritem(e){
    var txt=e.target.value.toLowerCase();
    var items=itemlist.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itname=item.firstChild.textContent;
        if(itname.toLowerCase().indexOf(txt)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
}