/* 1. Write a JavaScript program that accept two integers and
 * display the larger. Go to the editor */
/******* Start Your Code *********/
  	
  

  function function1(num1,num2) 
  {
  	  if (num1>num2)
    {
      return num1
    }
      else
    {
      return num2
    }
  }

    console.log(function1(20,40));

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  	function sign(num1,num2,num3)
    {
      if (num1<0||num2<0|num3<0)
      {
      alert("-");
      }
      else
      {
      alert("+");
      }
    }

    sign(3,5,-5);

 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers.
Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  
  function sort(num1,num2,num3)
 
  {
  	if (num1 > num2&&num3)
    {
  		if (num2>num3)
    {
        console.log(num1 + ">" + num2 + ">" + num3);
    }
      else 
    {
        console.log(num1 + ">" + num3 + ">" + num2);   
    }
    }


    else if(num2 > num1&&num3)
    {
      if (num1>num3)
    {
      console.log(num2 + ">" + num1 + ">" + num3);
    }
      else
    {
      console.log(num2 + ">" + num3 + ">" + num1);
    }    
    }


    else if(num3 > num1&&num2)
    {
  	  if (num1>num2) 
    {
      console.log(num3 + ">" + num1 + ">" + num2);
    }
      else
    {
      console.log(num3 + ">" + num2 + ">" + num1);
    }    
    }

    sort(1,2,3);
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  
 
    function sort(n1,n2,n3,n4,n5)
    
    {
      if (n1>n2 && n1>n3 && n1>n4 && n1>n5)
      {
        console.log(n1);
      }
      else if (n2>n1 && n2>n3 && n2>n4 && n2>n5)
      {
        console.log(n2);
      }
      else if (n3>n1 && n3>n2 && n3>n4 && n3>n5)  
      {
        console.log(n3);
      }
      else if(n4>n1 && n4>n2 && n4>n3 && n4>n5)
      {
        console.log(n4);
      }
      else
      {
        console.log(n5);
      }
    }
      
      sort(2,10,2,0,7);


 /******* End Your Code ********* */

 /* 5.Fix the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
  
     
    function hi(x,y)
    {
      if(x>y)
      {
        console.log("Hello World");
      }
      else
      {
        alert("Goodbye");
      }
    }    

    hi(1,5);


 /******* End Your Code ********* */


/*write the if statement to display "Hello World" if x is greater than y.*/
/******* Start Your Code *********/
    
    function hi(x,y)
    
    {
      if(x>y)
      {
        console.log("Hello World");
      }
    }    

    hi(1,5);

 /******* End Your Code ********* */
