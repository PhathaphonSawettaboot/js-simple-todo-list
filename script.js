const form = document.getElementById('new-item-form');
const input = document.getElementById('item-input')
const list = document.getElementById('list');

// Save the Data
// Create a function that saves the current list items to localStorage.
function saveList() {
    const listItems = document.querySelectorAll('.list-item');
    const itemsData = Array.from(listItems).map(item => item.innerText); // Map over the NodeList to get the text
    
    localStorage.setItem('listItems', JSON.stringify(itemsData));
}

// Load the Data
// Create a function that loads the list items from localStorage when the page is loaded.
function loadList() {
    const itemsData = JSON.parse(localStorage.getItem('listItems'));

    if(itemsData) {
        itemsData.forEach(text => {
            const item = document.createElement('li');
            item.innerText = text;
            item.classList.add('list-item');
            list.appendChild(item);

            item.addEventListener('click', () => {
                list.removeChild(item);
                saveList(); // Save the new state of the list to localStorage
            });
        });
    }
}

form.addEventListener('submit', e => {
    e.preventDefault()

    const item = document.createElement('li');
    item.innerText = input.value;
    item.classList.add('list-item');
    list.appendChild(item);
    input.value = '';

    item.addEventListener('click', () => {
        list.removeChild(item);
        saveList();
    })
    
    saveList();
});

// Call loadList when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadList);