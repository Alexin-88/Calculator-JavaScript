let number = "0";
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let screen = document.getElementById('screen');

//Al pulsar cada boton numérico y el . llama a la función.
function createNumber(numberEntered){
    
    
    if(number=="0"){ //Si es la primera vez que pulsa un boton

        
        if(numberEntered == '.'){ //Si en vez de pulsar un número pulsa directamente el botón se crea 0.
            number = '0.';
        }else{
            number=numberEntered;
        }
        
    }else{
        
        if(number.includes('.') && numberEntered == '.'){ //Si en el número ya hay un . y vuelve pulsarlo no hace nada sino aañade el número

        }else{

            number+=numberEntered;
        }
    }
    
      
        
        screen.innerText=number; //Vamos mostrando el número en la pantalla

        
        if(operator==""){ //Si el operador esta vacío pq aun no se asigno se ira creando el primer número

            firstNumber = parseFloat(number);
            
        }else{      

            secondNumber = parseFloat(number);  
            
        }
        
}
    

//Asignamos el operador del botón seleccionado. Reiniciamos el numero que se va crear y mostramos el operador elegido en la pantalla.
function assignOperator(value){
    number="0";
    operator=value;

    screen.innerText=operator;
    
}

//Mostrar el resultado final del calculo de los 2 números creados y del operador elegido.
function result(){
    let result = 0;

    
    //Según el operador guradado se realizará el calculo correspondiente y se muestra en la pantalla de la calculadora.

    if(operator!=''){
        result= Math.round(100000000000000*eval(firstNumber + operator + secondNumber))/100000000000000 ; // Los calculos decimales hacen cosas raras. 
                                                                                                        //Así hasta 14 decimales lo hace bien. 
                                                                                                                //PENDIENTE REVISAR

    }
    
    //Fue la primera opción pero con eval() la cosa se simplifica mucho.
    // switch(operator){
    //     case '+': result = firstNumber+secondNumber;
    //     break;

    //     case '-': result = firstNumber-secondNumber;
    //     break;

    //     case '/': result = firstNumber/secondNumber;
    //     break;

    //     case '*': result = firstNumber*secondNumber;
    //     break;
    // }

    screen.innerText = result; // Mostar resultado.

    //Por último se reinician todos los valores para poder comenzar otro calculo.
    //A fistNumber se le da el valor del resultado por si se quiere seguir realizando calculos con el resultado obtenido.
    firstNumber = result;
    secondNumber = 0;
    number = 0;
    operator = '';
    
}

//Calculo de la raíz cuadrada.
function sqrt(){
    let result = Math.sqrt(firstNumber);

    screen.innerText = result;

    number=0;
    firstNumber=result;
}

//Eliminar un caracter del número.
function remove(){
    
    //Diferenciamos si estamos en el 1º o 2º numero
    if(number == firstNumber){

        number =  number.substring(0, number.length - 1);//eliminamos último elemento

        if(number == ''){ //Si se acaban los núemero mostramos un 0
            number = '0';
        }

        screen.innerText=number;
        firstNumber=number; //Reajustamos el valor del 1º número.

    }else{

        number =  number.substring(0, number.length - 1);

        if(number == ''){
            number = '0';
        }

        screen.innerText=number;
        secondNumber=number;   
 
    }
       
}
