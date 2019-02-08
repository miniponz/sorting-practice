const fruit = ['apples', 'bananas', 'grapes'];
const veggies = ['cucumber', 'tomato', 'onions'];
const numbers = [3, 2, 1];
const sortButton = document.getElementById('sort-button');
const dataDisplay = document.getElementById('data-display');

dataDisplay.addEventListener('submit', function(event){
    event.preventDefault();
    fruit.sort();
    document.getElementById('fruit').textContent = fruit.join(', ');
    veggies.sort();
    document.getElementById('veggies').textContent = veggies.join(', ');
    numbers.sort();
    document.getElementById('numbers').textContent = numbers.join(', ');

});








console.log(veggies, fruit, numbers);