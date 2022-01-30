let btn=document.getElementById('btn');
let todoo=document.getElementById('todoo');
let input=document.getElementById('input');

btn.addEventListener('click',function(){
   
   var paragraph = document.createElement('p')
   paragraph.classList.add('paragraph-styling');
   paragraph.innerText=input.value;
   todoo.appendChild(paragraph);
   input.value="";
   
   
      

   paragraph.addEventListener('click',function(){
       paragraph.style.textDecoration="line-through";
   })
   paragraph.addEventListener('dblclick',function(){
       todoo.removeChild(paragraph);
   })
})

