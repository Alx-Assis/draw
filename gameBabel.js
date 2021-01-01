document.addEventListener("DOMContentLoaded",()=>{  

    const canvas = document.querySelector("#screen");
    const ctx = canvas.getContext("2d");
    const btn_black = document.querySelector("div > button");
    var cor = "#f00";
     document.addEventListener("keydown",(e)=>{
       cor ="#00f";
    console.log(e.keyCode);
    console.log(cor);
    });

    


    canvas.width=innerWidth-100;
    canvas.height=innerHeight-100;

   let brush={
       color:cor,
       line:1,
       move:false,
       ativo:false,
       posA:{x:0,y:0},
       posP:{x:100,y:200},
   };

   canvas.onmouseup=()=>{brush.ativo=false};
   canvas.onmousedown=()=>{brush.ativo=true};
   
   canvas.onmousemove = (e)=>{      
       brush.posP.x=e.clientX;
       brush.posP.y=e.clientY;
       brush.move=true;
};

const draw = ()=>{
  document.addEventListener("keydown",(e)=>{
    cor ="#00f";
 console.log(e.keyCode);
 console.log(cor);
 });
    ctx.lineWidth=brush.line;
   ctx.strokeStyle=brush.color;
    ctx.beginPath();
    ctx.moveTo(brush.posA.x,brush.posA.y);
    ctx.lineTo(brush.posP.x,brush.posP.y);
    ctx.stroke();
};


function loop(){
  if(brush.ativo){
    draw(brush);
  };
  brush.posA={x:brush.posP.x,y:brush.posP.y};
    window.requestAnimationFrame(loop); 
};
loop();
});