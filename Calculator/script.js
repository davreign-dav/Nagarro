let number1 = '';
let number2 = '';
let op = '';
let ans = '';

$(document).ready(function () {
    $('button').on('click', function (e) {
        let btn = e.target.innerHTML;
        if (btn >= '0' && btn <= '9' || btn == '.') {
            handleNumber(btn);
        }
        else if (btn === 'C') {
            number1 = number2 = op = '';
            ans = 0;
            displayButton(ans);
        }
        else {
            handleOperator(btn);
        }
    });

});

function handleNumber(num) {
    if (op === "") {
        number1 += num;
        displayButton(number1);
    }
    else {
        number2 += num;
        displayButton(number2);
    }

}

function handleOperator(oper) {
    if (op === "") {
        op = oper;
    }
    else {
        handleAns();
        op = oper;
    }
}


function handleAns() {
    // +number1 ->converts number1 from string to integer
    switch (op) {
        case '+':
            ans = +number1 + +number2;
            displayButton(ans);
            break;
        case '-':
            ans = +number1 - +number2;
            displayButton(ans);
            break;
        case '/':
            ans = +number1 / +number2;
            displayButton(ans);
            break;
        case '*':
            ans = +number1 * +number2;
            displayButton(ans);
            break;
    }

    updateVariables();
}

function displayButton(btn) {
    $('.input').text(btn);
}

function updateVariables() {
    number1 = ans;
    number2 = '';
}