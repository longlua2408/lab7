var txt1=document.querySelector('.txt1')
var txt2=document.querySelector('.txt2')
var result=document.querySelector('.txtKQ')
var btn=document.querySelector('.btnCong')
var bg=document.querySelector('.background')

cong=function(){
       var kq=parseInt(txt1.value) +parseInt(txt2.value);
       result.value=kq;

}
btn.addEventListener('click',function(){
       cong();
})


txt1.addEventListener('mouseout',function(){
       if(isNaN(txt1.value)){
              txt1.style.color="red";
       }else{
              txt1.style.color="#333";
       }
})
txt2.addEventListener('mouseout',function(){
       if(isNaN(txt2.value)){
              txt2.style.color="red";
       }else{
              txt2.style.color="#333";
       }
})
var t=function(){
       
       var nb=Math.random()*1000
      var ff= Math.ceil(nb)
      return ff
}
window.addEventListener('DOMContentLoaded',function(){
      
       this.setInterval(function(){
              bg.style.backgroundColor='#'+t();
       },1000,)
})
t();
var imgs=document.querySelector('.image')
var img1=document.querySelector('.img-1')
var img2=document.querySelector('.img-2')
var img3=document.querySelector('.img-3')
var btnNext=document.querySelector('.btn-next')

img1.addEventListener('click',function(){
       imgs.src='/img/hinh1.png';
      
})
img2.addEventListener('click',function(){
       imgs.src='/img/hinh2.jpg';
       
})
img3.addEventListener('click',function(){
       imgs.src='/img/hinh3.jpg';
       
})

const arr=['/img/hinh1.png','/img/hinh2.jpg','/img/hinh3.jpg'];

btnNext.addEventListener('click',function(){
      
      
})



