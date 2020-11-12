
//Question 1- Hellow World
console.log("\"Hello World\""); //the backslashes allow the quotation marks 
//document.write(" Question 1-\"Hello World\"");
//document.getElementById("Q2").innerHTML = "Hello World"; //why does this not work, why can't I put in in a DIV using the ID?


// Q2-function myName(){
 	var comment ="Welcome to JS Basics";
 	console.log("The value of var comment is: " +comment);
 	var b = 2020;
 	console.log("the Value of var b is: " +b);
 	console.log(comment + b); //how do I add a space?
 	//document.write(comment + b);
	//document.getElementById('Q2').innerHTML = b;  //why?
// }	

//Question 3- function myName(){
  var message = "Hello my Name is Raegan Tyshkewich";
  console.log(message);
  //document.write(message);
  //document.getElementById('Q2').innerHTML = message;  //why?
  //return and call (message); //when can i use these_ function only?

//  }
//  console.log(message);

//Question 4
function smallest(){
var x= parseFloat(document.getElementById("NA").value);
var y= parseFloat(document.getElementById("NB").value);
//document.write("If x=" +x "and y=" +y "then:");  //also not working
	if( x < y){
		//document.write("Variable x is smallest=" + x );
		document.getElementById("small").innerHTML= "Variable x is smallest=" + x; 
		console.log("Variable x is smallest=" + x);
	}
	else{
		//document.write("Variable y is smallest=" + y); 
		document.getElementById("small").innerHTML= "Variable y is smallest=" + y; 
		console.log("Variable x is smallest=" + x);
	}
	};
			 //nothing shows
//}
 //console.write smallest;  //error message

//Question 5-compare 3 values
// var a= 10;
// var b= 15;
// var c= 5;
// if (a > b && a > c){
// 	console.write( "Variable a is the largest:" + a);
// }
// if else (b > c && b > a){
// 	console.write( "Variable b is the largest:" + b);
// }
// if else (c > )
// }

// }
function findSmallLarge(){
				const firstNum =parseFloat(document.getElementById("N1").value);
				const secNum =parseFloat(document.getElementById("N2").value);
				const thirdNum =parseFloat(document.getElementById("N3").value);
				//collecting user input form buttons
			

				if(firstNum < secNum && firstNum < thirdNum && secNum > thirdNum){
					document.getElementById("find").innerHTML = firstNum + " -is the smallest and-" + secNum + "- is the largest"; 
				}
				else if(firstNum < secNum && firstNum < thirdNum && thirdNum >secNum){
					document.getElementById("find").innerHTML = firstNum + " -is the smallest and-" + thirdNum + " -is the largest";
				}
				else if (secNum < firstNum && secNum < thirdNum && firstNum > thirdNum){
					document.getElementById("find").innerHTML = secNum + " -is the smallest and-" + firstNum + " -is the largest";
				}
				else if(secNum < firstNum && secNum < thirdNum && thirdNum > firstNum){
					document.getElementById("find").innerHTML = secNum + " -is the smallest and-" + thirdNum + " -is the largest";
				}
				else if(thirdNum < firstNum && thirdNum < secNum && firstNum > secNum){
					document.getElementById("find").innerHTML = thirdNum + " -is the smallest and-" + firstNum + " -is the largest";
				}
				else {
					document.getElementById("find").innerHTML = thirdNum + " -is the smallest and-"+ secNum + " -is the largest";
				}
			};


function helloWorld(){
	var msg= "\"Hello World\"";
	document.write(msg);
	//return helloWorld();
	//document.getElementById("PII-Q3").innerHTML = msg;  //this doesn't work- need to call function

}
function userGreet(){
	const userName=document.getElementById("UserName").value;
	document.getElementById("Name").innerHTML ="Welcome my website "+ userName+ "!";

};

 // let colorArray =['red', 'yellow', 'pink', 'green', 'purple', 'orange', 'blue'];

 // 		colorArray.forEach(function(element){
	// 		var li = document.createElement('div');
	// 		colorDisplay.appendChild(li);
	// 		li.innerHTML += element;
	// 	});  //doesn't work as external JS-why?


  // function removeEnd(){
 	// 		colorArray.pop();
 	// 		console.log(colorArray);  
 	// 		document.getElementById('colorPop').innerHTML = colorArray;
 	// 		 ////how do I show it on display list
 	// 		}

function findPrime(){
	const isPrime =document.getElementById("Prime").value;
	let prime= true; 	
	 if(isPrime===1){
	 	prime  =false; 	//works except for 1 this isn't working why?
	 }
	 
    for(let i=2; i<= Math.sqrt(isPrime); i++){
		if(isPrime % i === 0){
			prime = false;
			break;
		}
	}
	

	if(prime === false){
		document.getElementById("findPrime1").innerHTML = isPrime + " -is a composite number"; 

	}
	else{
		document.getElementById("findPrime1").innerHTML = isPrime + " -is a prime number"; 	
	}
 }
 //Prime- 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

// let userNum = [1, 4, 5, 6];

// 		userNum.forEach(function(element){
// 			var list = document.createElement('div');
// 			arrayDisplay.appendChild(list);
// 			list.innerHTML += element;
// 		})

function addNum(){
			var newNum = parseFloat(document.getElementById("numArray").value);
			//var newNum = document.getElementById("numArray").value;
			userNum.push(newNum);
			var list = document.createElement("p");
			arrayDisplay.insertBefore(list, arrayDisplay.childNodes[0]);
			list.innerHTML += newNum;

		}
function find2ndLow2ndHigh(){
			
			var sortedUserInput = [];
			sortedUserInput = userNum.sort(function(a,b){return a-b});
			//var valueIndex1 = sortedUserInput.getValue(1);
			//var sortedUserInput = userNum.sort(function(a,b){return b-a});
			//this function returns the values in decending order
			console.log(sortedUserInput);
			var x = sortedUserInput[1];
			console.log(sortedUserInput[1]);
			console.log (x);
			var y = sortedUserInput[sortedUserInput.length-2];
			console.log(y);
			console.log(sortedUserInput[sortedUserInput.length-2]);
			var length = sortedUserInput.length;
			var z = sortedUserInput[sortedUserInput.length-1];
			
			//lowHigh.innerHTML = sortedUserInput; 
			lowHigh.innerHTML = "Second lowest value is: " + x +" "+ "Second highest value is:" + y;
			//lowHigh.innerHTML = "Second highest value is:" + valueSecondLast;
			//lowHigh.innerHTML = length;
		}
function maxElement(){
			var sortedUserInput = [];
			sortedUserInput = userNum.sort(function(a,b){return a-b});
			var z = sortedUserInput[sortedUserInput.length-1];
			max.innerHTML = "Maximum value of inputed string is: " + z;

}
let arr = [2, 3, 4, 5, 6];
arr.innerHTML =arr;
function sumOfArray(){
			
			//arr.innerHTML =arr; how do I display array in HTML document?
			sum.innerHTML =arr.reduce(function(result, item){
				return result + item;
			}, 0);
			// console.log(sum);
			// sum.innerHTML =[2, 3, 4,5,6].reduce(function(result, item){
			// 	return result + item;
			
			// })
			// console.log(sum);  //another way to do it

			//arr.reduce((result, item) => {return result + item}, 0)
			//another way

			//arr.map(arr => arr.x)
			//arr.reduce((result, item) => {return result + item}, 0)
			//another way

			
}

function sqrOfArray(){
			//let arr = [2, 3, 4, 5, 6];
			
			// sqrt.innerHTML =arr.map(Math.sqrt);				
			// //map() create a new aray from existing one by performing cal on each item
			// sqrt =document.getElementById("sqrt")
			// console.log(sqrt);

			sq.innerHTML = arr.map(item => {
				return  item *2;
			})
			console.log(sq);
			
			
}

function findInteger(){
	let arr2= [2, 4, 5, 8, 5, 2, 1, 8, 1 ];
	var counts={};   //create an array of objects
	
	for(var i=0; i< arr2.length; i++){
		if(!counts.hasOwnProperty(arr2[i])){  //need to understand better
			counts[arr2[i]]=1;
		}
		else{
			counts[arr2[i]]++;
				}
		}

console.log(counts);   
//displays an arr of the value and the count of the value as objects
//counts = arr2.filter(function(item, pos){return arr2.indexOf(item) == pos;});
//this pulls the duplicates out of the array and displays the length of the array
//console.log(counts);
var appearsoOnce=Object.keys(counts).filter((a)=>counts[a]==1);
//display the value of the array that has a count of 1
console.log(appearsoOnce);
var myArray = Object.values(appearsoOnce);
// added Object.values() to convert the object to an array that I can display on the browser
document.getElementById("int").innerHTML = myArray;

};


 function findPower(){
 	const b =parseFloat(document.getElementById("Base").value);
	const n =parseFloat(document.getElementById("Power").value);

	var ans =Math.pow(b, n);
	document.getElementById('displayBn').innerHTML = ans;
 };


 function findString(){
 var msg =document.getElementById("strg").value;
 //let ans1=true;
 //let ans2=false;
 	
	if(msg == 'y' || msg == 'yes' ){
		//return true;
		document.getElementById('bool').innerHTML= true;
		//document.getElementById('bool').innerHTML= "true";
	}
	else if(msg== 'n' || msg== 'no'){
		//return false;
		return document.getElementById('bool').innerHTML= false;
		//document.getElementById('bool').innerHTML= "false";

	}
	else{
		document.getElementById('bool').innerHTML= "Invalid input- please try again";
}
}
 		
function orderString(){
	var stringValue=document.getElementById('order').value;
	console.log(stringValue);
	var stringArray= Array.from(stringValue);
	console.log(stringArray);
	stringArray.sort();	
	console.log(stringArray);
	document.getElementById("alpha").innerHTML= stringArray;	
			
			
}
function calcOddEven(){
	const a =parseFloat(document.getElementById("num5").value);
	 	
	 if(a % 2===0){
	 	document.getElementById("answer").innerHTML = a + " "+"-is an even number"
	 }else{
	 	document.getElementById("answer").innerHTML = a + " "+"-is an odd number"
	 }
  
 }
