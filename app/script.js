//header-mb-box
let is_hum_menu=true;
const hum_menu =document.getElementById("hum-menu");
hum_menu.addEventListener("click",()=>{
if(is_hum_menu){
    document.getElementById("hum-menu").src ="images/icon-close.svg";
    document.getElementById("header-mb-box").style.display="flex";
    is_hum_menu=false;
}else{
    document.getElementById("header-mb-box").style.display="";
    document.getElementById("hum-menu").src ="images/icon-hamburger.svg";
    is_hum_menu=true;
}
})




 //sub-header-mb-box
 let isArrowOpen=true;
 let arr=[1,2,3];
 function arrow(n){
        arr.filter((a)=>{
            if(a==n){
                if(document.getElementById("sub-header-mb-box-"+a).style.display==""){
                    document.getElementById("arrow"+a).classList.add("rotate") ;
                    document.getElementById("sub-header-mb-box-"+a).style.display="block";
                }else{
                    document.getElementById("arrow"+a).classList.remove("rotate") ;
                    document.getElementById("sub-header-mb-box-"+a).style.display="";
                }                
            }
            else{
                document.getElementById("sub-header-mb-box-"+a).style.display="";
                document.getElementById("arrow"+a).classList.remove("rotate") ;

            }
        })
}