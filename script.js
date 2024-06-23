console.log("this is made by kushagra gaur")

function changeColor() {
    const button = document.getElementById('colorButton');
    button.style.backgroundColor = button.style.backgroundColor === 'blue' ? 'green' : 'blue';
}

function showGreeting() {
    const currentHour = new Date().getHours();
    let greeting;
    if (currentHour < 12) {
        greeting = "Good morning!";
    } else if (currentHour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }
    alert(greeting);
}

showGreeting();

function calculateSum(event) {
    event.preventDefault();
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = num1 + num2;
    document.getElementById('result').textContent = `Result: ${sum}`;
}