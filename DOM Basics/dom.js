//get element by id
/*let para = document.getElementById('para');
para.style.backgroundColor = 'yellow';*/



//getElementsByClassName
//let lis = document.getElementsByClassName('my-li');

/*for( let i=0; i < lis.length; i++){
    lis[i].style.backgroundColor = '#f4f4f4';
    
}
lis.forEach(function(li){
    li[i].style.backgroundColor = '#f4f4f4';
});*/

//getelementsbytagname
/*let lis = document.getElementsByTagName('li');
for( let i=0; i < lis.length; i++){
    lis[i].style.backgroundColor = '#f4f4f4';
}
console.log(lis);*/

//Query Selector 
/*let para = document.querySelector('.my-li:nth-child(3)').value;
console.log(para);

let tonoy = document.querySelectorAll('.my-li:nth-child(even)');
console.log(tonoy);*/



/*
//replace context
let item = document.querySelector('.my-li');

item.textContent = 'Tonoy';
//Adding to DOM
let para = document.getElementById('para');
//create a new div
let newDiv = document.createElement('div');
//add class
newDiv.className = 'babu';
//add text
newDiv.textContent = "sample";

para.appendChild(newDiv);
console.log(para);

//Delete last li
let li = document.querySelector('.my-li:nth-child(4)');
li.remove();



let para = document.getElementById('para')
para.style.paddingLeft = "10em";

//toggle to show and hide
function toggle(){    
    if(para.style.visibility === 'hidden'){
        para.style.visibility = 'visible';
    }else{
        para.style.visibility = 'hidden';
    }
}

*/
let para = document.getElementById('para');
let btn = document.getElementById('btn');

btn.addEventListener('click', function(e){
    if(para.style.visibility === 'hidden'){
        para.style.visibility = 'visible';
    }else{
        para.style.visibility = 'hidden';
    }
});









