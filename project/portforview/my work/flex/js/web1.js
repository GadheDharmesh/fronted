men = document.getElementById("left");
me =document.querySelector(".right");

    function menu(){
       if(men.style.display=="none")
       {
        men.style.display="block"
        men.style.marginTop='100px'
        me.style.width="75%"
        me.style.marginLeft="20%"
       }
       else
       {
        men.style.display="none"
        me.style.width="100%"
        me.style.marginLeft="0"
       }      
      }
      window.addEventListener("scroll",active)
      
     

      function active()
      {
        men.style.marginTop='0'}

