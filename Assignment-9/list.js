let btnAdd= document.querySelector('#add');
let btnCal= document.querySelector('#calculate');
let table = document.querySelector('#myTab');
let quantityInput = document.querySelector('#quantity');
let nameInput = document.querySelector('#name');
let codeInput = document.querySelector('#code');
let priceInput = document.querySelector('#price');

btnAdd.addEventListener('click',()=>{
    let name= nameInput.value;
    let code = codeInput.value;
    let quantity= quantityInput.value;
    let price = priceInput.value;
    let template = `<tr>
        <td>${name}</td>
        <td>${code}</td>
        <td>${quantity}</td>
        <td>${price}</td>
        </tr>`;
          if(name!==code){ 
            table.innerHTML+=template;
          }
          else{
            document.getElementById("res").innerText="Error!!"
          }
            
});   
btnCal.addEventListener('click',()=>{
    var myTab = document.getElementById("myTab");
    let sum=0;
    res.innerHTML='';
    for(i=1;i<myTab.rows.length;i++)
    {   
        var obj = myTab.rows.item(i).cells;
        sum+=parseInt(obj.item(2).innerHTML)*parseInt(obj.item(3).innerHTML);
    }

    res.innerHTML = "Total sum is "+sum+'<br /';
});
function onkeyupfunct(){
    var h= document.getElementById("name");
    h.value=h.value.toUpperCase();
   }
function onkeyupfunct1(){
    var y= document.getElementById("code");
    y.value=y.value.toUpperCase();
   }     
