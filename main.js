

window.sr = ScrollReveal({ reset: true });
sr.reveal('.revel', { duration: 1500 });


    var getFlag=document.querySelectorAll('ul.list-flg li');
    var getFlagTittle=document.getElementById ('flgTittle');
    var getContFleg=document.querySelectorAll('.textFlagContent');
    var innerCont=document.getElementById("flagContent");  
    var x = document.getElementsByTagName("BODY")[0].getAttribute("id");

    var actv=[];


    if(x=="esp"){
      innerCont.innerHTML="<p class=PMs>Por favor, selecciona un país para averiguar los criterios de elegibilidad</p>"

    }else{
      innerCont.innerHTML="<p class=PMs>Please, select a country from above to check eligibility</p>"


    }    // getFlag.style.opacity="0.1"
  
        for (var i = 0; i < getFlag.length; i++) {
        getFlag[i].style.opacity="0.5"
        if (window.matchMedia("(max-width: 1200px)").matches){   
          getFlag[i].addEventListener('touchmove', function(e) { 
 
            if(actv.length==0) {
                    actv.push(this)
                    actv[0].classList.add("flagOpacity")  

                }else { 
 
                    actv[0].classList.remove("flagOpacity") 
                    actv.pop();actv.push(this)
                  
                     actv[0].classList.add("flagOpacity") 

                }

          }, false);
      }
              
            getFlag[i].onclick=function(){ 

 
                if(actv.length==0) {
                    actv.push(this,this.childNodes[0].innerHTML)                    
                    actv[0].classList.add("flagOpacity")   
                    if(x=="esp"){ 
                    getFlagTittle.innerHTML+=" para "+actv[1]
                  }else{
                    getFlagTittle.innerHTML+=" for "+actv[1]

                  }
                }else { 
                    actv[0].classList.remove("flagOpacity")     
                      
                    if(x=="esp"){
                    getFlagTittle.innerHTML="Elegibilidad"

                    }else{
                    getFlagTittle.innerHTML="Eligibility"
                    }
                    actv=[];
                
                    actv.push(this,this.childNodes[0].innerHTML) 
                    actv[0].classList.add("flagOpacity")
                    if(x=="esp"){ 
                    getFlagTittle.innerHTML+=" para "+actv[1]
                    }else {
                    getFlagTittle.innerHTML+=" for "+actv[1]

                    }

                }

                var getID=this.getAttribute("id").split("#"); 
                var getContThis=document.getElementById('content-'+getID[1]).innerHTML; 
                if(getContThis!=null) innerCont.innerHTML=getContThis ; 
           
          }
        }

//Função read more

 

var getBox=document.querySelectorAll(".box.aside")

for (var i = 0; i < getBox.length; i++) {

  getBox[i].onclick=function(){
    
    var btnToggle=this.childNodes[1];
    var boxAct=[];

    boxAct.push(this)
 
    var boxThis=this

    boxThis.classList.toggle("getHeigth") ;
    boxAct.push(btnToggle.childNodes[1].innerHTML)

    console.log(boxThis.getAttribute("class")!="box aside boxChils revel")
    

     if(boxThis.getAttribute("class")!="box aside boxChils revel"){
      if(x=="esp"){
        btnToggle.childNodes[1].innerHTML="Cerca"}else{
        btnToggle.childNodes[1].innerHTML="Close"
        }

     }else{

     setTimeout(function(){ 
    btnToggle.childNodes[1].innerHTML="Read More" }, 250);

     }

      btnToggle.onclick=function(){ 
        // btnToggle.childNodes[1].innerHTML="Close"
      console.log(btnToggle.childNodes)

         
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
