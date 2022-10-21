function focusEvent(){
    document.getElementById("num").style.background="cornflowerblue";
}
    function f1(){
   alert("CALCULATING THE FUNCTION");
}
function f2(){
    document.getElementById("p1").innerHTML="Mouse Over Event";
}
function f3(){
    document.getElementById("p2").innerHTML="Mouse Out Event";
}
function f4(){
    var i,f;   
    a=document.getElementById("num").value;
    f=1;
    for(i=1;i<=a;i++)
    {
        f = f * i ;
    }
    document.getElementById("fact").innerHTML="factorial of number is : "+f;
}
function f5(){
    b=parseInt(document.getElementById("num").value);
    if(a>0){
        document.getElementById("natural").innerHTML=b+" is a natural number";
    }
    else{
        document.getElementById("natural").innerHTML=b+" is not a natural number";
    }
}
function p() {
     
     var n, i, flag = true;
     n = parseInt(document.getElementById("num").value);
     
     for(i = 2; i <= n - 1; i++)
         if (n % i == 0) {
             flag = false;
             break;}
     if (flag == true){
        document.getElementById("prime").innerHTML="It is a prime number";}
    else{
        document.getElementById("prime").innerHTML="It is not a prime number";
    }

}
function fib(){
     
     var n1 = 0,  n2 = 1, next_num, i;  
var num = parseInt (document.getElementById("num").value); 
for ( i = 1; i <= num; i++)  
{   
    document.getElementById("fib").innerHTML="Fibonacci Series(last element): "+n1;

    next_num = n1 + n2;  
      
    n1 = n2;   
    n2 = next_num;     
} 
}
function fibs(){
     
    var n1 = 0,  n2 = 1, next_num, i;  
var num = parseInt (document.getElementById("num").value); 
document.writeln("Fibonacci Series:  "+"<br/>");
for ( i = 1; i <= num; i++)  
{   
   document.writeln(n1+"<br/>");

   next_num = n1 + n2;  
     
   n1 = n2;   
   n2 = next_num; 
   
} 
} 
        
            var myBtn=document.getElementById("factbtn");
            myBtn.addEventListener("click",f1);
            myBtn.addEventListener("click",f4);
            var myBtnn=document.getElementById("natbtn");
            myBtnn.addEventListener("click",f5);
            myBtnn.addEventListener("click",f1);
            
            var myBtnp=document.getElementById("pribtn");
            myBtnp.addEventListener("click",p);
            myBtnp.addEventListener("click",f1);

            var myBtnf=document.getElementById("fibbtn");
            myBtnf.addEventListener("click",fib);
            myBtnf.addEventListener("click",f1);

            var myBtnfs=document.getElementById("fisbtn");
            myBtnfs.addEventListener("click",fibs);
            myBtnfs.addEventListener("click",f1);

            myBtn.addEventListener("mouseover",f2);
            myBtnn.addEventListener("mouseover",f2);
            myBtnp.addEventListener("mouseover",f2);
            myBtnf.addEventListener("mouseover",f2);
            myBtnfs.addEventListener("mouseover",f2);

            myBtn.addEventListener("mouseout",f3);
            myBtnn.addEventListener("mouseout",f3);
            myBtnp.addEventListener("mouseout",f3);
            myBtnf.addEventListener("mouseout",f3);
            myBtnfs.addEventListener("mouseout",f3);