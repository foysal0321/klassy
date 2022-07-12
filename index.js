
const open=document.querySelector('#open')
const close=document.querySelector('#clos')
const navlink=document.querySelector('.menu')

open.addEventListener('click', ()=>{
  open.classList.toggle('active');
  navlink.classList.toggle('active') 
  open.style.display='none' 
  clos.style.display='block' 
})
clos.addEventListener('click', ()=>{
    open.classList.toggle('active');
    navlink.classList.toggle('active') 
    open.style.display='block' 
    clos.style.display='none' 
  })

document.querySelectorAll('.menu').forEach(n =>
    n.addEventListener('click', ()=>{
        open.classList.remove('active')
        navlink.classList.remove('active') 
       open.style.display='block' 
       clos.style.display='none'     
    }))
 