const fruit = ['apples', 'bananas', 'grapes'];
const veggies = ['cucumber', 'tomato', 'onions'];
const numbers = [3, 2, 1];
const sortButton = document.getElementById('sort-button');
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







