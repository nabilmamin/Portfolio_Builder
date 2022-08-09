# Weekly Planner

This is my example of a functional Create, Read, Update, and Delete using local storage to store information from multiple arrays into the localStorage object. 

There are a total of 8 key-value pairs ('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'todo', 'grateful', 'notes')
There are a total of 8 arrays ('mondayArray','tuesdayArray','wednesdayArray','thursdayArray', 'fridayArray', 'todoArray', 'gratefulArray', 'notesArray')

How this CRUD app works:
1. We initialize all the arrays (array = []) and set them to a key-value pair within the localStorage object (ex: 'monday': mondayArray)
2. When we submit a new value within the form text inputs a few actions occur:
    a. We create a new list element and append that child element with the input value to the correct list using a switch function.
    b. We push the new value into the correct array. We select the correct array to update using a switch function.
    c. We update the correct key-value pair in the localStorage object. This is also done within a switch function. 
3. We iterate over all the available lists to keep the lists in sync with the localStorage values (arrays) on site refresh.
4. Functional Clear All and Clear Last buttons that update the displayed lists as well as the localStorage objects. 
 
