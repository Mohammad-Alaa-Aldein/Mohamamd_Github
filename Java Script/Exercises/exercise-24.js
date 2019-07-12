// Exercise1

function tellFortune ( jobTitle,  geographicLocation,  parentsName,numberOfChildren ){


console.log(tellFortune ("You will be a" + jobTitle + "in" + geographicLocation + ", and married to " + parentsName + numberOfChildren );
}

	tellFortune( "Software Engineer" , "Jordan" , "Alis" , 3 );

// Exercise2

	function calculateDogAge(humanAge){
		return(humanAge * 7);
	}

	calculateDogAge(7);

// Exercise3
	
	
	function calculateSupply(age,ammount){
		return(365 * ammount*(100-age));
	}

	calculateSupply(99,1);


// Exercise4


	function greet(name){
		return("Hello " + name);
	}

	greet("Mohammad");


// Exercise5

what is the error:

function double(cat) {
    return 2 * cat;
}
	double(3);


function double(num) {
    return 2 * num;
}
    double(6);


function double(x){
	return 2*x;
}
	double(3);

// Exercise6

function double1(x) {
  	return 2 * x ;
}
	double1(5);


function double2 (x){
	return 2 * x;
}
	double2(3);


function double3(x){
    return 2 * x;
}
	double3(8);	

// Exercise7


function cube (num){
	return(num ** 3);
}

 cube(5);


 // Exercise8


 function multiply(num1,num2){
 	return (num1*num2);
 }

 multiply (5,7);



 // Exercise9

 function canIGetDrivingLicense (age){

 	if (age>=20){
 		return ("Yes You Can");

 	}
	else {
		sum=(20-age);
		return("please come back after " +sum+ " years to get one");
	}
 }

 canIGetDrivingLicense(25);


 // Exercise10



 function sameLength(name1,name2){

 	if(name1.length ==name2.length){
 		return("True");
 	}
 	else{
 		return("Fulse");
 	}

 }

 sameLength("Mohammad","Ahmad");


 // Exercise11


 function largeNumber(num1,num2){
 	if(num1>num2){
 		return(num1);
 	}
 	else{
 		return(num2);
 	}
 	
 }

 largeNumber(5,8);


 // Exercise12


 function (n1,n2,n3){

 	if (n1<n2 && n1<n2) {
 		return(n1);

 	}
 	else if(n2<n1 && n2<n3);
 }



 // Exercise13


 	function shortString(n1,n2,n3,n4,n5){

 		if (n1.length<n2.length && n1.length<n3.length && n1.length< n4.length && n1.length< n5.length)
 			{return (n1 + " is Shortest");
 		}

 		else if (n2.length<n1.length && n2.length<n3.length && n2.length< n4.length && n2.length< n5.length)
 			{return (n2 + " is Shortest");
 		}

 		else if (n3.length<n1.length && n3.length<n2.length && n3.length< n4.length && n3.length< n5.length)
 			{return (n3 + " is Shortest");
 		}

 		else if (n4.length<n1.length && n4.length<n2.length && n4.length< n3.length && n4.length< n5.length)
 			{return (n4 + " is Shortest");
 		}

 		else{
 			return(n5 + " is Shortest");
 		}
 		}

 			shortString("Mohammad","Ahmad","Ali","Ayham","Alaa");
 


 // Exercise14


 	 	function longString(n1,n2,n3,n4,n5){

 		if (n1.length>n2.length && n1.length>n3.length && n1.length> n4.length && n1.length> n5.length)
 			{return (n1 + " is Longest");
 		}

 		else if (n2.length>n1.length && n2.length>n3.length && n2.length> n4.length && n2.length> n5.length)
 			{return (n2 + " is Longest");
 		}

 		else if (n3.length>n1.length && n3.length>n2.length && n3.length> n4.length && n3.length> n5.length)
 			{return (n3 + " is Longest");
 		}

 		else if (n4.length>n1.length && n4.length>n2.length && n4.length> n3.length && n4.length> n5.length)
 			{return (n4 + " is Longest");
 		}

 		else{
 			return(n5 + " is Longest");
 		}
 		}

 			longString("Mohammad","Ahmad","Ali","Ayham","Alaa");
 	


 // Exercise15


 	function isEven(num){
 		if (num % 2 == 0){return ("Yes")
 		}
 		else {return("No")
 		}
 		}	

 		isEven(5);


 // Exercise16


 	function isOdd(num){
 		if (num % 2 == 1){return ("Yes");
 		}
 		else {return("No");
 		}
 		}	

 		isOdd(5);


 // Exercise17


 	function positive(num){
 		return (Math.abs(num));
 	}

 	positive(-5);


 // Exercise18


 	function fullName(firstName,lastName){
 		return	(firstName + lastName);
 	}

 		fullName("Mohammad ","Alaa Aldein");


 // Exercise19


    function average(n1,n2,n3,n4,n5){
 	return((n1+n2+n3+n4+n5)/5);
 }
    average(5,8,3,4,5);

 

 // Exercise20


    function randomNumber(){	
    }
    console.log(Math.random());



 // Exercise21


    function randomBetweenNumbers(n1,n2){	
	return Math.floor(Math.random() * (n1 - n2))+n2;
    }

    randomBetweenNumbers(10,5);


	
 // Exercise22


	function scoreInUniversity(score){
		if (score>=95 && score<=100) {
			return "A";
		}

		else if (score>=85 && score<=94){
			return "B";
		}

		else if (score>=70 && score<=84){
			return "C";
		}

		else if (score>=50 && score<=69) {
			return "D";
		}

		else{
			return "F";
		}
		}

		scoreInUniversity(20);


 // Exercise23


 	var x=0;
	function counter()
	{
		return x=x+1;
	}
	console.log(counter());
	console.log(counter());
	console.log(counter());

// Exercise24

	function resetCounter()
	{
		var msg = x +"and the counter reset now"; 
		x = 0;
		return msg;
	}
		console.log(counter());
		console.log(counter());
		console.log(counter());
		console.log(resetCounter());
		console.log(counter());
		console.log(counter());


