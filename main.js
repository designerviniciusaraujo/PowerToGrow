

window.sr = ScrollReveal({ reset: true });
sr.reveal('.revel', { duration: 1500 });


    var getFlag=document.querySelectorAll('ul.list-flg li');
    var getFlagTittle=document.getElementById ('flgTittle');
    var getContFleg=document.querySelectorAll('.textFlagContent');
    var innerCont=document.getElementById("flagContent");  
    var actv=[];
    innerCont.innerHTML="<p class=PMs>Please. Select country above to  check Eligibility</p>"
        // getFlag.style.opacity="0.1"
  
        for (var i = 0; i < getFlag.length; i++) {
        getFlag[i].style.opacity="0.5"
        if (window.matchMedia("(max-width: 1200px)").matches){   
          getFlag[i].addEventListener('touchmove', function(e) { 

            console.log(">",actv.length)
            if(actv.length==0) {
                    actv.push(this)
                    actv[0].classList.add("flagOpacity")  

                }else { 
 
                    actv[0].classList.remove("flagOpacity") 
                    actv.pop();actv.push(this)
                    // console.log("2",actv.length)
                     actv[0].classList.add("flagOpacity") 

                }

          }, false);
      }
              
            getFlag[i].onclick=function(){ 

 
                if(actv.length==0) {
                    // actv.push(this)
                    actv.push(this,this.childNodes[0].innerHTML)
                    console.log(actv)
                    actv[0].classList.add("flagOpacity")  
                    console.log(getFlagTittle)
                    getFlagTittle.innerHTML+=" for "+actv[1]

                }else { 
                    actv[0].classList.remove("flagOpacity")     
                    console.log(actv)
                    getFlagTittle.innerHTML="Eligibility"
                    actv=[];
                    console.log(actv)
                    actv.push(this,this.childNodes[0].innerHTML) 
                    actv[0].classList.add("flagOpacity") 
                    getFlagTittle.innerHTML+=" for "+actv[1]


                }

                var getID=this.getAttribute("id").split("#"); 
                var getContThis=document.getElementById('content-'+getID[1]).innerHTML; 
                if(getContThis!=null) innerCont.innerHTML=getContThis ; 
           
          }
        }

//Função read more

 

var getBox=document.querySelectorAll(".box.aside")

for (var i = 0; i < getBox.length; i++) {
  console.log("getBox[i]",getBox[i])

  getBox[i].onclick=function(){
    
    var btnToggle=this.childNodes[1];
    var boxAct=[];

    boxAct.push(this)
    console.log()
    var boxThis=this

    
   


      btnToggle.onclick=function(){ 
        // btnToggle.childNodes[1].innerHTML="Close"
       boxThis.classList.toggle("getHeigth") ;
     

         
      }
  }
  
}
  



$("a.anchor").click(function(event){
   event.preventDefault();
   var dest=0;
   if($(this.hash).offset().top > $(document).height()-$(window).height()){
     dest=$(document).height()-$(window).height();
   }else{
     dest=$(this.hash).offset().top;
   }
   $('html,body').animate({scrollTop:dest}, 1000,'swing');
 });		
