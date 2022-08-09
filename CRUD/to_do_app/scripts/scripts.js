const form = document.querySelector('form');
const ul = document.querySelector('ul');
const clearAll = document.getElementById('clear-all');
const clearLast = document.getElementById('clear-last');
const input = document.getElementById('item');

let itemsArray;
if (localStorage.getItem('items')) {
    itemsArray = JSON.parse(localStorage.getItem('items'))
} else {
    itemsArray = []
}


localStorage.setItem('items', JSON.stringify(itemsArray)); // localstorage only takes in strings, need to 'stringify' the array to store it




const liMaker = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li);
}


form.addEventListener('submit', function (e) {
    e.preventDefault() // this prevents the form from sending any data to a server.

    itemsArray.push(input.value) // update the array
    localStorage.setItem('items', JSON.stringify(itemsArray)) // update local storage with updated array.
    
    liMaker(input.value) // input.value as parameter to liMaker function to add to list
    input.value = '' // reset text to blank after submit
})

itemsArray.forEach((item) => {
    liMaker(item)
})

clearAll.addEventListener('click', function() {
    localStorage.removeItem('items')
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
    location.reload();
})

clearLast.addEventListener('click', function() {
    itemsArray.pop()
    localStorage.setItem('items', JSON.stringify(itemsArray))
    ul.removeChild(ul.lastChild)
})