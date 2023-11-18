//get total ==>return the total of a product
let title =document.getElementById('title');
let price =document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let submit=document.getElementById('Submit');


function getTotal(){
    if(price.value !=''){
        let result=(+price.value+ +taxes.value+ +ads.value)-+discount.value;
        total.innerHTML=result;
        total.style.background='#040'
    }
    else{
        total.innerHTML='';
        total.style.background='rgb(170, 42, 42)'
    }
}


//create product

/*
submit.onclick = function () {
    console.log("Button clicked");

    let newProd = {
        Title: title.value,
        Price: price.value,
        Taxes: taxes.value,
        Ads: ads.value,
        Discount: discount.value,
        Total: total.innerHTML,
        Count: count.value,
        Category: category.value
    };

    if (newProd.Count > 1) {
        for (let i = 0; i < newProd.Count; i++) {
            dataProd.push(newProd);
        }
    } else {
        dataProd.push(newProd);
    }

    localStorage.setItem('Product', JSON.stringify(dataProd));
    clearData();
    showData();
    console.log("newProd:", newProd);
};*/

// ...

//second
let dataProd ;
if(localStorage.Product != null){
    dataProd=JSON.parse(localStorage.Product)
}else{
    dataProd=[];
}

submit.onclick=function(){
    let newProd={
        Title:title.value,
        Price:price.value,
        Taxes:taxes.value,
        Ads:ads.value,
        Discount:discount.value,
        Total:total.innerHTML,
        Count:count.value,
        Category:category.value,
    }
    if(newProd.Count>1){
        for(let i=0;i<newProd.Count;i++){
            dataProd.unshift(newProd);
s
            //dataProd.push(newProd);
        }
    }
        else{
            dataProd.unshift(newProd);

        }
    localStorage.setItem('Product',JSON.stringify(dataProd))
    clearData();
    showData();
    console.log(dataProd);
}
//console.log(dataProd)

//save localstorage

//clear inputs
function clearData(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='',
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';

}


//read 
function showData()
{
    let table="";
    for(let i=0;i<dataProd.length;i++){
    table+=`
        <tr>
                    <td>${i}</td>
                    <td>${dataProd[i].Title}</td>
                    <td>${dataProd[i].Price}</td>
                    <td>${dataProd[i].Taxes}</td>
                    <td>${dataProd[i].Ads}</td>
                    <td>${dataProd[i].Discount}</td>
                    <td>${dataProd[i].Total}</td>
                    <td>${dataProd[i].Category}</td>
                    <td><button onclick="updateData(${i})" id="update">update</button></td>
                    <td><button onclick='deleteData(${i})' id="delete">delete</button></td>
                </tr>
              `
    }
    document.getElementById('tbody').innerHTML=table;
    let btnDelet=document.getElementById('deleteAll');
    if(dataProd.length>0){
        btnDelet.innerHTML=`<button onclick="deleteAllData()" >DeleteAll(${dataProd.length})</button>`
        }else{
            btnDelet.innerHTML='';
        }

}
showData()



function deleteAllData(){
    dataProd.splice(0)
    localStorage.clear
    showData()
}


//count



//delete one /all product

function deleteData(i){
    dataProd.splice(i,1);
    localStorage.Product=JSON.stringify(dataProd);
    showData()

}

//update 

//function updateData(i){    console.log(i);}

//search

//clean data