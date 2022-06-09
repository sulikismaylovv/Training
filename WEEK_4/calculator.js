var value = 0;
var first_number;
var operator_1;
var second_number;
var operator_2;
var result = 0;

const button = document.querySelectorAll('button');

function updateDisplay(){
    const display = document.getElementById("display");
    display.innerHTML = value;
}


function clickButton(){
    button.forEach(function (btn_pressed) {
        btn_pressed.addEventListener('click', () => {
            if(btn_pressed.classList.contains("operand")){
                addOperand(btn_pressed.value);
                updateDisplay();
            }
            if(btn_pressed.classList.contains("operator")){
                if(btn_pressed.value == "delete_all"){
                    console.log(btn_pressed.value);
                }
                if(btn_pressed.value == "delete"){
                    console.log(btn_pressed.value);
                }
                if(btn_pressed.value == "neg"){
                    console.log(btn_pressed.value);
                }
                if(btn_pressed.value == "decimal"){
                    console.log(btn_pressed.value);
                }
                if(btn_pressed.value == "equals"){
                    equals();
                    console.log(btn_pressed.value);
                }
                if(btn_pressed.value == "+" || btn_pressed.value == "-" || btn_pressed.value == "*" || btn_pressed.value == "÷"){
                    addOperator(btn_pressed.value)
                }
                
            }
        });
    });
}

function addOperand(operand){
    if (first_number == null){
        if (value == 0){
        value = operand;}
        else{
            value += operand;
        }
    }
    else{
        if(value == first_number){
            value = operand;
        }
        else{
        value += operand;}
    }
}

function addOperator(operator){
    if (second_number != null){
        second_number = value;
        operator_2 = operator;
        value = calculate(Number(first_number), Number(second_number), operator_1);
    }
    else{
    first_number = value;
    operator_1 = operator; }
}

function equals(){
    if (first_number!=null){
        second_number = value;
        value = calculate(Number(first_number), Number(second_number), operator_1);
        updateDisplay();
    }
}

updateDisplay();
clickButton();


function calculate(x,y,op){
    if(op === '+') {
        return x + y;
    } else if(op === '-') {
        return x - y;
    } else if(op === '*') {
        return x * y;
    } else if(op === '/') {
        if(y === 0) {
            return 'can not divide by 0';
        } else {
        return x / y;
        }
    }

}