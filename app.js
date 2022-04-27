let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let g3my = document.querySelector(".g3my");

window.onscroll = function(){
      let value = scrollY;
      stars.style.left = value +"px";
      moon.style.top = value*4 +"px";
      mountains3.style.top = value*2 +"px";
      mountains4.style.top = value*1.5 +"px";
      river.style.top = value +"px";
      boat.style.top = value +"px";
      boat.style.left = value*3 +"px";
      g3my.style.fontSize = value +"px";
      if(scrollY >= 67){
        g3my.style.fontSize = 67 +"px";
        g3my.style.position = "fixed";
        if(scrollY >= 420){
            g3my.style.display = "none";
        }else{
            g3my.style.display = "block";   
        }
      if(scrollY >= 83){
            document.querySelector(".main").style.background = "linear-gradient(#376281,#10001f)";
      }else{
            document.querySelector(".main").style.background = "linear-gradient(#200016,#10001f)";


      }
      }

}