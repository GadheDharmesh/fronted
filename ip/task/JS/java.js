ul = document.getElementById('menu')
bar = document.getElementById('bar')
function submenu() 
{
if(ul.style.display == "none" ||  window.innerWidth > 900)
{
ul.style.display = "block" ;
}
else
{
ul.style.display = "none" ;
}
}
window.addEventListener('resize',submenu);

