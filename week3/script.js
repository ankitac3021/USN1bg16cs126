document.getElementById('btn').onmouseover=changeOnMouseOver;
document.getElementById('btn').onmouseout=changeOnMouseOut;

function changeOnMouseOver(){
    var but=document.getElementById('btn');
    but.style.background="red";
}

function changeOnMouseOut(){
    var b=document.getElementById('btn');
    b.style.background="yellow";
}


/*document.getElementById('btn').onmouseclick=function(){
    var b=document.getElementById('btn');
    b.style.background="pink";
}*/

//document.querySelector('#hId').textContent="Ankita";
