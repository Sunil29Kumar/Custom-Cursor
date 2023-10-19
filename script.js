const cursor = document.querySelector(".main");
const container = document.querySelector(".container");

container.addEventListener("mousemove",(e)=>{
    // console.log(e);
    cursor.style.left = e.x+"px";
    cursor.style.top = e.y+"px";
})