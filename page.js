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


let mood="update";
let tmp;

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

let dataProd=[] ;

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
    //if(newProd.Price >0){
    if(mood=='create' && newProd.Price >0){
        
    if(newProd.Count>1){
        for(let i=0;i<newProd.Count;i++){
            dataProd.push(newProd);
        }
    }else{
            dataProd.push(newProd);
        }
    }else if(mood="update"){//}
        dataProd[tmp]=newProd;
        mood='create';
        submit.innerHTML=("Create");
        count.style.display='block';


    }//}
        
    localStorage.setItem('Product',JSON.stringify(dataProd))
    clearData();
    showData();

    
}

//update 
function updateData(i){
    
    
   title.value=dataProd[i].Title;
    price.value=dataProd[i].Price;
    taxes.value=dataProd[i].Taxes;
    ads.value=dataProd[i].Ads;
    discount.value=dataProd[i].Discount;
    getTotal();
    count.style.display='none';
    category.value=dataProd[i].Category;
    Submit.innerHTML='update';
     mood='update';
    tmp=i;
    scroll({
        top:0,
    behavior:"smooth",
})


}

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
    getTotal();
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



//search
let searchMood = 'title';
let searchInput = document.getElementById('search');

function getSearchMood(id) {
    let btnSearch = document.getElementById("clickedButtonId");
    
    if (clickedButtonId === 'searchByCategory') {
        searchMood = 'category';
        searchInput.placeholder = 'Search by Category';
    } else {
        searchMood = 'title';
        searchInput.placeholder = 'Search by Title';
    }

    searchInput.focus();
}
/*
let searchMood='title';
let search=document.getElementById('search');

function getsearchMood(id){

    //let search=document.getElementById('search');
    if(btnSearch.id=='searchByCategory'){ 
        console.log(search.id);
        searchMood='category';
        search.placeholder='search by title';
        
    }else{
        console.log(search.id);
     searchMood='title';
     search.placeholder='search by title';
   
  }
    
    search.focus();
    
}*/
//search

function searchData(value){
    let table='';
if(searchMood=='title'){
    for(let i=0;i<dataProd;i++){
        if(dataProd[i].title.includes(value)){
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
    }

}else{

}
document.getElementById('tbody').innerHTML=table;
}
