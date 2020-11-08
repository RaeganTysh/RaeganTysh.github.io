var arrayProducts = [];
var strQuantity = ""; 
var shoppingCart = [];
var shoppingCartLength= 0;
var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];
//globally created to hold the products empty until line 23

function addProduct() {   
    var item = document.getElementById('prodname').value; 
    //this is the function on the button
    //id of the input text box
    //.value used ehn you recieved input from user

    var productObj = {          
        name: item,         
        price: 0            
    };
        //create properties
        //name of the item the user entered
        //also the price of the product

    document.getElementById("prodname").value = "";  
    //if user doesn't enter anything -do nothing
    //later we can enter other user items numbers, incorrect characters

    if(item != ""){                         
        arrayProducts.push(productObj);
        //as long as user has entered something..then push  
        //this is pushing the user products and the price

        var menuList = document.getElementById("select1"); 
        //creates the list for the user to see in the drop down list

        var myOption = document.createElement("option"); 
        //create the element and create an id internally to call in function 

        myOption.text = productObj.name;  
        //document.createElementById()
            //the element that was created in string format matches the object name
            //another way to do it watch video
        menuList.add(myOption);             
        //document.getElementById("select1").add(myOption);  
             //another way to do it watch video
    }
}

function getPrice() {
        //this is assoc

    var item = document.getElementById('select1').value;

    var priceOfProduct  = document.getElementById("price").value;
    //this is taking the input from the user
    
    document.getElementById("price").value = "";

    var i;                          
    if(priceOfProduct != ""){      
        for(i =0; i < arrayProducts.length; i++){              
            if (arrayProducts[i].name ==item){    
                arrayProducts[i].price = priceOfProduct;   

                    //i is the array of elements- priducts
                    //if the price of the product is not a space
                     //for every product- what is the 
                     //if the name in the user array matches the item  make the array item that price
                     //does the array have a price associated with it?
               

                var unitMenuList = document.getElementById("select2");   
                    //where your going to display- line 126 html
                var myOption = document.createElement("option");
                    //
                myOption.text = arrayProducts[i].name +"$" + priceOfProduct +"/unit";
                unitMenuList.add(myOption);
                //This is the display in my checkout  tag under the drop down menu

            }
        }
    }
}

//Calculator Buttons
 function addUntisToProduct1(){
    strQuantity += "1";             
 }
 function addUntisToProduct2(){
    strQuantity += "2";             
 }
 function addUntisToProduct3(){
    strQuantity += "3";             
 }
 function addUntisToProduct4(){
    strQuantity += "4";             
 }
 function addUntisToProduct5(){
    strQuantity += "5";             
 }
 function addUntisToProduct6(){
    strQuantity += "6";             
 }
 function addUntisToProduct7(){
    strQuantity += "7";             
 }
 function addUntisToProduct8(){
    strQuantity += "8";             
 }
 function addUntisToProduct9(){
    strQuantity += "9";             
 }
 function addUntisToProduct0(){
    strQuantity += "0";             
 }
 //can use switch function, or if statement but it will take longer to execute..but try it
 //value: is always associated with the function

 function addToCart(){

    var totalUnits =parseInt(strQuantity, 10);
    strQuantity = "";
    //if user enters nothing then it will be sent back

    var item = document.getElementById('select2').value;


    for(var i =0; i< arrayProducts.length; i++){
        if(item.search(arrayProducts[i].name) >=0){
            var productWithQuantityObj ={
                product: arrayProducts[i],
                units: totalUnits,
                totalPrice: arrayProducts[i].price *totalUnits

            };

          shoppingCart.push(productWithQuantityObj); 

          shoppingCartLength++; 
          console.log(shoppingCart);  //confirm it is working-check

        }
    }
}
// good up to this point


function amtDue(){
    
    grandPrice =0;
    var rowStart =4;  //input dat starting at row 4 of the table


    var table = document.getElementById('select4');
    for(var i =0; i<shoppingCart.length; i++){
        var cartItem = shoppingCart[i];
        var product2 =cartItem.product;
        
        console.log(cartItem);  //confirm its working-check
        console.log(product2);  //confirm its working-check
        

        var total_Price = cartItem.totalPrice;
        grandPrice += total_Price;

        var myUnits = cartItem.units;
        var pricePerUnit = product2.price;

        var myRow = table.insertRow(rowStart);
        rowStart++; 

        var dataCell1 =myRow.insertCell(0);
        var dataCell2 =myRow.insertCell(1);
        var dataCell3 =myRow.insertCell(2);
        var dataCell4 =myRow.insertCell(3);

        dataCell1.innerHTML =product2.name;
        dataCell2.innerHTML =pricePerUnit;
        dataCell3.innerHTML =myUnits;
        dataCell4.innerHTML =parseFloat(total_Price).toFixed(2);
    }

    var tax= grandPrice *5.0;
    tax=tax/100;
    

    if(shoppingCart.length >0){
        document.getElementById("Total").innerHTML =  grandPrice.toFixed(2);
        document.getElementById("Taxes").innerHTML =  tax.toFixed(2);
        var final= grandPrice + tax;
        //document.getElementById("Amount").innerHTML= grandPrice + tax;
        document.getElementById("Amount").innerHTML= final.toFixed(2);
        
        
    }
    //add appropriate id's

    shoppingCart =[];
}





 //New Transaction button- clearing the values- not working

 function reset(){
    var table = document.getElementById("select4");  //need to define this id correctly
    var rowStart = 4;   //check this value

    for(var i=0; i <shoppingCartLength; i++)
        table.deleteRow(rowStart);

    shoppingCartLength =0;
    shoppingCart= [];

    document.getElementById("Total").innerHTML = " ";
    document.getElementById("Taxes").innerHTML = " ";
    document.getElementById("Amount").innerHTML = " ";

 }


//displayDate&Time- another way
 // function myDisplayDateTime(){
 //    var dateFromTable =document.getElementById("date");
 //    var time = document.getElementById("time");
 //    var date= new Date();

 //    dateFromTable.innerHTML = "Date:" + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();

 //    var hours = date.getHours();
 //    if(hours > 12){
 //        var min =date.getMinutes();
 //        if(min < 10){
 //            time.innerHTML = "Time: " + (date.getHours()-12) + ":0" + date.getMinutes() +" PM";

 //        }
 //        else{
 //            time.innerHTML = "Time: " + (date.getHours() -12) + ":" + date.getMinutes() + " AM";
 //        }
 //    }
 // }

//why does it not work in JS external

function displayDateTime(){

var today =new Date();  //create the object
//var date =today.getFullYear()+ '-'+(today.getMonth()+1)+'-'+today.getDate();//works but not correct MM/DD format
var year= today.getFullYear();
var month= ((today.getMonth()+1)<10?'0':'')+today.getMonth(); //+1 is to change it from digital (0-11) to normal
var day= (today.getDate()<10?'0':'')+today.getDate();
//var time= today.getHours() +":"+(today.getMinutes()<10?'0':'')+ today.getMinutes(); //works but not correct 
var hours=today.getHours();  //uses 24 hr clock
var minutes= (today.getMinutes()<10?'0':'')+ today.getMinutes(); //inserts a zero when less than 10
var seconds= (today.getSeconds()<10?'0':'')+ today.getSeconds(); //inserts a zero when less than 10
//var dateTime =date+' '+time;
document.getElementById("date").innerHTML =year+ "-"+ month + "-"+ day;
document.getElementById("time").innerHTML =hours+ ":"+ minutes +":"+seconds;
}