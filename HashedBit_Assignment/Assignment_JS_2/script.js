function calculateResults() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const salary = Number(document.getElementById('salary').value);
    const output = document.getElementById('output');
    output.innerHTML = '';

    // 1. Write code to display from 1 to 100 but just even numbers.
    let evenNumbers = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            evenNumbers += i + ' ';
        }
    }
    output.innerHTML += `<h2>Even Numbers from 1 to 100:</h2><p>${evenNumbers}</p>`;

    // 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
    function calculator(num1, num2, operation) {
        let result;

        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 'Invalid operation';
        }

        return result;
    }

    output.innerHTML += `<h2>Calculator Result:</h2>
                         <p>${num1} ${operation} ${num2} = ${calculator(num1, num2, operation)}</p>`;

    // 3. Write a function findTax() that takes a number type variable as an argument which is the salary of a person.
    function findTax(salary) {
        let tax;

        switch (true) {
            case (salary >= 0 && salary <= 500000):
                tax = 0;
                break;
            case (salary > 500000 && salary <= 1000000):
                tax = 0.1 * salary;
                break;
            case (salary > 1000000 && salary <= 1500000):
                tax = 0.2 * salary;
                break;
            case (salary > 1500000):
                tax = 0.3 * salary;
                break;
            default:
                tax = 'Invalid salary';
        }

        return tax;
    }

    output.innerHTML += `<h2>Tax Calculation:</h2>
                         <p>Tax on salary of ${salary} is ${findTax(salary)}</p>`;

    // 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits.
    function sumOfProductOfDigits(n1, n2) {
        let sum = 0;
        const n1Digits = n1.toString().split('').map(Number);
        const n2Digits = n2.toString().split('').map(Number);

        for (let i = 0; i < Math.max(n1Digits.length, n2Digits.length); i++) {
            const digit1 = n1Digits[i] || 0;
            const digit2 = n2Digits[i] || 0;
            sum += digit1 * digit2;
        }

        return sum;
    }

    output.innerHTML += `<h2>Sum of Products of Digits:</h2>
                         <p>For ${num1} and ${num2}, the sum is ${sumOfProductOfDigits(num1, num2)}</p>`;
}