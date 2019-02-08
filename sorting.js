const fruit = ['apples', 'bananas', 'grapes'];
const veggies = ['cucumber', 'tomato', 'onions'];
const numbers = [3, 2, 1];
const sortButton = document.getElementById('sort-button');
const dataDisplay = document.getElementById('data-display');

dataDisplay.addEventListener('submit', function(event){
    event.preventDefault();
    fruit.sort();
    document.getElementById('fruit').textContent = fruit.join(', ');

});








console.log(veggies, fruit, numbers);