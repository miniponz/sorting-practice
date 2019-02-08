const fruit = ['pears', 'apples', 'bananas', 'grapes'];
const veggies = ['cucumber', 'tomato', 'onions', 'broccoli'];
const numbers = [9, 1, 7, 3, 10, 2, 5, 4, 8, 6];

const dataDisplay = document.getElementById('data-display');

const fruitDisplay = document.getElementById('fruit');
const veggieDisplay = document.getElementById('veggies');
const numberDisplay = document.getElementById('numbers');

fruitDisplay.textContent = fruit.join(', ');
veggieDisplay.textContent = veggies.join(', ');
numberDisplay.textContent = numbers.join(', ');

dataDisplay.addEventListener('submit', function(event){
    event.preventDefault();
    fruit.sort();
    fruitDisplay.textContent = fruit.join(', ');
    veggies.sort();
    veggieDisplay.textContent = veggies.join(', ');
    numbers.sort();
    numberDisplay.textContent = numbers.join(', ');

});







