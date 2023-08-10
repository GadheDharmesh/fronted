men = document.getElementById("left");
me =document.querySelector(".right");
reveala=document.querySelectorAll(".trax")
revealb=document.querySelectorAll(".tray")
revealc=document.querySelectorAll(".rotax")
reveald=document.querySelectorAll(".rotay")
WIH=window.innerHeight;
revealpoint=150;
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
      window.addEventListener("scroll",tranx)
      window.addEventListener("scroll",trany)
      window.addEventListener("scroll",rotx)
      window.addEventListener("scroll",roty)

      function active()
      {
        men.style.marginTop='0'}


    function tranx(){
        for(i=0;i<reveala.length;i++)
        {
            reveal1=reveala[i].getBoundingClientRect().top;
           
            if(reveal1>WTH-revealpoint)
            {
                reveal1.classlist.add("transx")
            }
        }
            }

    function trany(){
        for(i=0;i<revealb.length;i++)
        {
            reveal2=revealb[i].getBoundingClientRect().top;
           
            if(reveal2>WTH-revealpoint)
            {
                reveal2.classlist.add("transy")
            }
        }
            }

    function rotx(){
        for(i=0;i<revealc.length;i++)
        {
            reveal3=revealc[i].getBoundingClientRect().top;
           
            if(reveal3>WTH-revealpoint)
            {
                reveal3.classlist.add("rotatex")
            }
        }
            }

    function roty(){
        for(i=0;i<reveala.length;i++)
        {
            reveal1=reveala[i].getBoundingClientRect().top;
           
            if(reveal1>WTH-revealpoint)
            {
                reveal1.classlist.add("transx")
            }
        }
            }
    



   

