

const getCount=document.getElementById('counting');
const countBtn=document.querySelector('.countbtn');
const saveBtn=document.getElementById('save');
const saveEl=document.getElementById('saveEl');


let count=0;
function cal() {
    count+=1;
    getCount.innerHTML=count;
}

countBtn.addEventListener('click',cal);

function save() {
   let countStr=count + '-';
   saveEl.innerHTML+=countStr;
   getCount.innerHTML=0
   
}
saveBtn.addEventListener('click',save);
