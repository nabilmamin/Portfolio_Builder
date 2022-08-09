const forms = document.querySelectorAll('form');
const ul = document.querySelectorAll('ul');
const ol = document.querySelectorAll('ol');
const clearAllHTML = document.getElementsByClassName('clear-all');
const clearLastHTML = document.getElementsByClassName('clear-last');
const clearAll =[...clearAllHTML];
const clearLast =[...clearLastHTML];

// create a for loop that iterates over all <li> and creates an img to the left (emoji: star, smiley face, etc.)

// INITIALIZE ALL ARRAYS (mondayArray - sundayArray, todoArray, gratefulArray, notesArray)
let mondayArray;
if (localStorage.getItem('monday')) {
    mondayArray = JSON.parse(localStorage.getItem('monday'))
} else {
    mondayArray = []
}

let tuesdayArray;
if (localStorage.getItem('tuesday')) {
    tuesdayArray = JSON.parse(localStorage.getItem('tuesday'))
} else {
    tuesdayArray = []
}

let wednesdayArray;
if (localStorage.getItem('wednesday')) {
    wednesdayArray = JSON.parse(localStorage.getItem('wednesday'))
} else {
    wednesdayArray = []
}

let thursdayArray;
if (localStorage.getItem('thursday')) {
    thursdayArray = JSON.parse(localStorage.getItem('thursday'))
} else {
    thursdayArray = []
}

let fridayArray;
if (localStorage.getItem('friday')) {
    fridayArray = JSON.parse(localStorage.getItem('friday'))
} else {
    fridayArray = []
}

let todoArray;
if (localStorage.getItem('todo')) {
    todoArray = JSON.parse(localStorage.getItem('todo'))
} else {
    todoArray = []
}

let gratefulArray;
if (localStorage.getItem('grateful')) {
    gratefulArray = JSON.parse(localStorage.getItem('grateful'))
} else {
    gratefulArray = []
}

let notesArray;
if (localStorage.getItem('notes')) {
    notesArray = JSON.parse(localStorage.getItem('notes'))
} else {
    notesArray = []
}





// UPDATE ARRAY W NEW ITEM, UPDATE LOCALSTORAGE KEY-VALUE PAIR WITH UPDATED ARRAY
const updateArray = (id, value) => {
    switch (id) {
        case 'monday':
            mondayArray.push(value)
            localStorage.setItem('monday', JSON.stringify(mondayArray));
            break;
        case 'tuesday':
            tuesdayArray.push(value)
            localStorage.setItem('tuesday', JSON.stringify(tuesdayArray));
            break;
        case 'wednesday':
            wednesdayArray.push(value)
            localStorage.setItem('wednesday', JSON.stringify(wednesdayArray));
            break;
        case 'thursday':
            thursdayArray.push(value)
            localStorage.setItem('thursday', JSON.stringify(thursdayArray));
            break;
        case 'friday':
            fridayArray.push(value)
            localStorage.setItem('friday', JSON.stringify(fridayArray));
            break;
        case 'todo':
            todoArray.push(value)
            localStorage.setItem('todo', JSON.stringify(todoArray));
            break;
        case 'grateful':
            gratefulArray.push(value)
            localStorage.setItem('grateful', JSON.stringify(gratefulArray));
            break;
        case 'notes':
            notesArray.push(value)
            localStorage.setItem('notes', JSON.stringify(notesArray));
            break;
    }
}

// ON ENTER, ADD NEW ITEM TO NEXT ELEMENT SIBLING (LIST) AND ARRAY
forms.forEach((form) => {
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        // console.log(e.target.lastElementChild.id)

        let value = e.target.lastElementChild.value
        const li = document.createElement('li')
        li.textContent =  value
        const list = this.nextElementSibling
        list.appendChild(li)

        const id = e.target.lastElementChild.id
        updateArray(id, value)

        e.target.lastElementChild.value = ''
        // console.log(value)
    })
})

// ON REFRESH, UPDATE UL TO BE IN SYNC WITH LOCALSTORAGE
ul.forEach((e) => {
    listId = e.id
    switch (listId) {
        case 'monday-list':
            mondayArray.forEach((value) => {
                const li = document.createElement('li')
                li.textContent = value
                e.appendChild(li);
            })
            break;
        case 'tuesday-list':
            tuesdayArray.forEach((value) => {
                const li = document.createElement('li')
                li.textContent = value
                e.appendChild(li);
            })
            break;
        case 'wednesday-list':
            wednesdayArray.forEach((value) => {
                const li = document.createElement('li')
                li.textContent = value
                e.appendChild(li);
            })
            break;
        case 'thursday-list':
            thursdayArray.forEach((value) => {
                const li = document.createElement('li')
                li.textContent = value
                e.appendChild(li);
            })
            break;
        case 'friday-list':
            fridayArray.forEach((value) => {
                const li = document.createElement('li')
                li.textContent = value
                e.appendChild(li);
            })
            break;
        case 'notes-list':
            notesArray.forEach((value) => {
                const li = document.createElement('li')
                li.textContent = value
                e.appendChild(li);
            })
            break;
    }
})

ol.forEach((e) => {
    listId = e.id
    switch (listId) {
        case 'todo-list':
            todoArray.forEach((value) => {
                const li = document.createElement('li')
                li.textContent = value
                e.appendChild(li)
            })
            break;
        case 'grateful-list':
            gratefulArray.forEach((value) => {
                const li = document.createElement('li')
                li.textContent = value
                e.appendChild(li)
            })
            break;
    }
})



// CLEAR ALL SWITCH
const clearAllArray = (id) => {
    switch (id) {
        case 'monday-all':
            localStorage.removeItem('monday')
            break;
        case 'tuesday-all':
            localStorage.removeItem('tuesday')
            break;
        case 'wednesday-all':
            localStorage.removeItem('wednesday')
            break;
        case 'thursday-all':
            localStorage.removeItem('thursday')
            break;
        case 'friday-all':
            localStorage.removeItem('friday')
            break;
        case 'todo-all':
            localStorage.removeItem('todo')
            break;
        case 'grateful-all':
            localStorage.removeItem('grateful')
            break;
        case 'notes-all':
            localStorage.removeItem('notes')
            break;
    }
}

// CLEAR ALL LOGIC
clearAll.forEach((button) => {
    button.addEventListener('click', function(e) {
        console.log(e.target.id)
        const id = e.target.id
        clearAllArray(id)
        location.reload();
    })
})

// CLEAR LAST SWITCH
const clearLastArray = (id) => {
    switch (id) {
        case 'monday-last':
            mondayArray.pop()
            localStorage.setItem('monday', JSON.stringify(mondayArray))
            break;
        case 'tuesday-last':
            tuesdayArray.pop()
            localStorage.setItem('tuesday', JSON.stringify(tuesdayArray))
            break;
        case 'wednesday-last':
            wednesdayArray.pop()
            localStorage.setItem('wednesday', JSON.stringify(wednesdayArray))
            break;
        case 'thursday-last':
            thursdayArray.pop()
            localStorage.setItem('thursday', JSON.stringify(thursdayArray))
            break;
        case 'friday-last':
            fridayArray.pop()
            localStorage.setItem('friday', JSON.stringify(fridayArray))
            break;
        case 'todo-last':
            todoArray.pop()
            localStorage.setItem('todo', JSON.stringify(todoArray))
            break;
        case 'grateful-last':
            gratefulArray.pop()
            localStorage.setItem('grateful', JSON.stringify(gratefulArray))
            break;
        case 'notes-last':
            notesArray.pop()
            localStorage.setItem('notes', JSON.stringify(notesArray))
            break;
    }
}

// CLEAR LAST LOGIC
clearLast.forEach((button) => {
    button.addEventListener('click', function(e) {
        console.log(e.target.id)
        const id = e.target.id
        clearLastArray(id)
        location.reload()
    })
})





// console.log(clearAll)

// clearAll.addEventListener('click', function() {
//     localStorage.removeItem('items')
//     while (ul.firstChild) {
//         ul.removeChild(ul.firstChild)
//     }
//     location.reload();
// })

// clearLast.addEventListener('click', function() {
//     itemsArray.pop()
//     localStorage.setItem('items', JSON.stringify(itemsArray))
//     ul.removeChild(ul.lastChild)
// })