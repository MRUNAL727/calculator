let x = document.querySelector('.buttons');
let equal = document.querySelector('#equal');
const userInput = document.querySelector('#user-input');
const calculator = document.querySelector('.calculator');
let stack = [];
//console.log(calculator);
var num1=0; 
var num2=0;
var op;
var operatorIsPressed=false;
var result
var posNeg=false;

//console.log(x);

x.addEventListener('click' , (event)=>{

   //console.log(event.target.dataset.number);
   let key = event.target;
   const keyValue = key.textContent;
   let inputDisplay = userInput.textContent;
   const  type  = key.hasAttribute('data-number') ? 'number' : 
                  key.hasAttribute('data-operator') ? 'operator' :
                  key.hasAttribute('data-allclear') ? 'allclear' : 
                  key.hasAttribute('data-clear') ? 'clear' : 
                  key.hasAttribute('data-decimal') ? 'decimal' :
                  key.hasAttribute('data-posOrNeg') ? '+/-' :
                  key.hasAttribute('data-bracket') ? '()' : 'equal';
                  

   const previousKey = type;
     
     
   switch(type)
   {
       case 'number':
           {
           if(num1===0 && num2===0 && operatorIsPressed=== false)
           {
               //console.log('hitoo');
               if(posNeg===true)
               {
                   userInput.textContent = '-';
                   num1 = '-';
                   posNeg=false;
               }
               else
               userInput.textContent = keyValue;
               num1 = keyValue;
              
           }

           else if(num1!=0 && operatorIsPressed===false)
           {
               console.log('hitoo');
               userInput.textContent = inputDisplay + keyValue;
               num1 += keyValue;
               
           }

           else if(num2 === 0 && operatorIsPressed=== true)
           {
               userInput.textContent = inputDisplay + keyValue;
               num2 = keyValue;
               
           }

           else if(num2!=0)
           {
               userInput.textContent = inputDisplay + keyValue;
               num2 = num2+ keyValue;
               
           }

           break;

        }
        case 'operator':

          {
              userInput.textContent = inputDisplay + keyValue;
              operatorIsPressed = true;
              op= keyValue;
              break;
          }

        case 'equal':
            {
             
                calculate();
                break;
            }  

         case 'allclear':
             {
                userInput.textContent = 0;
                num1=0;
                num2=0;
                operatorIsPressed=false;
                break;
             }   
         
          case 'decimal':
              {
                  userInput.textContent = inputDisplay + '.';

                  {
                    if(num1===0 && num2===0 && operatorIsPressed=== false)
                    {
                        
                        userInput.textContent = keyValue;
                        num1 = keyValue;
                       
                    }
         
                    else if(num1!=0 && operatorIsPressed===false )
                    {
                       
                        userInput.textContent = inputDisplay + keyValue;
                        num1 += keyValue;
                        
                    }
         
                    else if(num2 === 0 && operatorIsPressed=== true)
                    {
                        userInput.textContent = inputDisplay + keyValue;
                        num2 = keyValue;
                        
                    }
         
                    else if(num2!=0)
                    {
                        userInput.textContent = inputDisplay + keyValue;
                        num2 = num2+ keyValue;
                        
                    }

                  break;
              }
        }
        case 'clear':
            {
              
               if(operatorIsPressed===true && num2!=0)
               {
                   num2 = num2.substring(0, num2.length - 1);
                   userInput.textContent = num1 + op + num2;
               }

               else if(operatorIsPressed===false)
               {
                num1 = num1.substring(0, num1.length - 1);
                //console.log(num1);
                userInput.textContent = num1;
               }
               
               else
               {
                   op = '';
                   userInput.textContent = num1;
               }

               break;
            }

          case '+/-' :
              {
                  if(num1===0)
                  { 
                      console.log('hi');
                      //userInput.textContent = '(-';
                      posNeg = true;
                      //num1 = '-';
                  }

                  if(num2===0)
                  {
                      userInput.textContent = inputDisplay + '(-';
                      num2= '-';
                  }
                  break;
              }  
            
           case '()':
               {
                   var bracket = inputDisplay.toString();
                   
                   if(bracket.includes('('))
                   {
                       userInput.textContent = inputDisplay + ')';
                   }
                   else
                   {
                    userInput.textContent = inputDisplay + '(';
                   }
               }   
   }
    


    

   function calculate()
   {
        

        switch(op)
        {
            case '+':
                result= parseFloat(num1) + parseFloat(num2);
                userInput.textContent = result;
                break; 

            case '-':
                result= parseFloat(num1) - parseFloat(num2);
                userInput.textContent = result;
                break; 
                    
            case 'X':
                result= parseFloat(num1) * parseFloat(num2);
                userInput.textContent = result;
                break;

            case '/':
                result= parseFloat(num1)/ parseFloat(num2);
                userInput.textContent = result;
                break; 

            case '%':
                result= (parseFloat(num1)/100) * parseFloat(num2);
                userInput.textContent = result;
                break;       
                
        }
        
        
   }



   



   


});