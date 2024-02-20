let inp=document.querySelector('input');
let btn=document.querySelector('button');
let div=document.querySelector('#listcontainer')
let ul=document.createElement('ul');

btn.addEventListener("click",createList);
ul.addEventListener('click',function(event){
    if(event.target.nodeName=='BUTTON' ){
        event.target.parentElement.remove();
    }
});

inp.addEventListener('keypress',function(event){
    if(event.code=='Enter'){
        createList();
    }
});
function createList(){
    //creating elements

    //li
    let li=document.createElement('li');

    //create checkbox
    let checkbox=document.createElement('input');

    //p
    let p=document.createElement('p');

    //button
    let delBtn=document.createElement('button');


    //adding elements
    div.appendChild(ul);

    ul.appendChild(li);

    li.appendChild(checkbox);

    li.appendChild(p).innerText=inp.value;

    li.appendChild(delBtn).innerText='Delete';

    //attributes

    ul.setAttribute('class','ulstyle');

    li.setAttribute('class','listyle');

    p.setAttribute('class','p');

    checkbox.setAttribute('type','checkbox')
    checkbox.setAttribute('class','checkBoxStyle')

    delBtn.setAttribute('class','delstylebtn');







    inp.value="";

    
}


