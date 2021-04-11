
document.querySelector('#clear').addEventListener('click',()=>{
  document.querySelector('.result').innerHTML="";
  total=0;
})


let button_value=[1,2,3,4,5,6,7,8,9,0];
let [btn_1,btn_2,btn_3,btn_4,btn_5,btn_6,btn_7,btn_8,btn_9,btn_0]=button_value;
document.querySelector('#btn-1').addEventListener('click',()=>document.querySelector('.result').innerHTML+=btn_1);
document.querySelector('#btn-2').addEventListener('click',()=>document.querySelector('.result').innerHTML+=btn_2);
document.querySelector('#btn-3').addEventListener('click',()=>document.querySelector('.result').innerHTML+=btn_3);
document.querySelector('#btn-4').addEventListener('click',()=>document.querySelector('.result').innerHTML+=btn_4);
document.querySelector('#btn-5').addEventListener('click',()=>document.querySelector('.result').innerHTML+=btn_5);
document.querySelector('#btn-6').addEventListener('click',()=>document.querySelector('.result').innerHTML+=btn_6);
document.querySelector('#btn-7').addEventListener('click',()=>document.querySelector('.result').innerHTML+=btn_7);
document.querySelector('#btn-8').addEventListener('click',()=>document.querySelector('.result').innerHTML+=btn_8);
document.querySelector('#btn-9').addEventListener('click',()=>document.querySelector('.result').innerHTML+=btn_9);
document.querySelector('#btn-0').addEventListener('click',()=>document.querySelector('.result').innerHTML+=btn_0);

/**add function */
document.querySelector('#btn-add').addEventListener('click',add);
let addflag=false;
let subflag=false;
let multiflag=false;
let resultflag=false;
let total=0;
function add(){
  if(subflag==true){
    total-=parseInt(document.querySelector('.result').innerHTML);
    subflag=false;
  }
  else if(multiflag==true){
    total*=parseInt(document.querySelector('.result').innerHTML);
    multiflag=false;

  }
  else if(resultflag==true){
    total=parseInt(document.querySelector('.result').innerHTML);
    resultflag=false;
  }
  else{
    total+=parseInt(document.querySelector('.result').innerHTML);
    
  }
  addflag= true;  
  document.querySelector('.result').innerHTML="";
    
}
/**minus function */
 document.querySelector('#btn-sub').addEventListener('click',minus);
function minus(){
  if(total==0){
    total=parseInt(document.querySelector('.result').innerHTML);
    subflag=true,
    document.querySelector('.result').innerHTML="";
    return;
    }
   if(addflag==true){
    total+=parseInt(document.querySelector('.result').innerHTML);
    addflag=false;
  }
  else if(multiflag==true){
    total*=parseInt(document.querySelector('.result').innerHTML);
    multiflag=false;

  }
  else if(resultflag==true){
    total=parseInt(document.querySelector('.result').innerHTML);
    multiflag=false;

  }
  else{
    total-=parseInt(document.querySelector('.result').innerHTML);
  
  }
  
    subflag=true,
    document.querySelector('.result').innerHTML="";
} 

/**multiply function */
document.querySelector('#btn-multiply').addEventListener('click',multiply);

function multiply(){
 if(total==0){
   total *= parseInt(document.querySelector('.result').innerHTML);
   multiflag=true;
   document.querySelector('.result').innerHTML="";
   return;
 }
 if(addflag==true){
      total+=parseInt(document.querySelector('.result').innerHTML);
      addflag=false;
    }
else if(subflag==true){
  total-=parseInt(document.querySelector('.result').innerHTML);
  subflag=false;
}
else if(resultflag==true){
  total=parseInt(document.querySelector('.result').innerHTML);
  resultflag=false;
}

else{
  total *=parseInt(document.querySelector('.result').innerHTML);
}

 multiflag=true;
 document.querySelector('.result').innerHTML="";

}

/**result function */
document.querySelector('#btn-result').addEventListener('click',result);
function result(){
   if(addflag==true){
       total+=parseInt(document.querySelector('.result').innerHTML);
       document.querySelector('.result').innerHTML =total;
       addflag=false;
       
   }
   if(subflag==true){
        total-= parseInt(document.querySelector('.result').innerHTML);
       document.querySelector('.result').innerHTML =total;
       subflag=false;
   }
   if(multiflag==true){
    total *= parseInt(document.querySelector('.result').innerHTML);
    document.querySelector('.result').innerHTML =total;
    multiflag=false;
    
   }
   resultflag=true;
}
